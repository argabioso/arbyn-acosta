from collections import OrderedDict
from datetime import datetime
from typing import Optional
import json as json_lib
import re

from pydantic import BaseModel
from ged4py import GedcomReader


CURRENT_DATE = datetime.now().strftime('%Y-%m-%d')


class Name(BaseModel):
    first: str
    last: Optional[str] = None
    middle: Optional[str] = None
    suffix: Optional[str] = None
    nickname: Optional[str] = None


class Person(BaseModel):
    name: Name


def main():
    path = "tree.ged"

    print(f"Processing GEDCOM file: {path}")

    data = OrderedDict()
    has_photo = OrderedDict()
    markers = OrderedDict()
    all_children = OrderedDict()

    with GedcomReader(path) as parser:
        for record in parser.records0("NOTE"):
            note_id = record.xref_id.replace("@", "")
            record_value = record.value.strip()

            if record_value.startswith("markers:"):
                markers[note_id] = record_value.lower().replace("markers:", "").split(",")

        for record in parser.records0("INDI"):
            xref_id = record.xref_id.replace("@", "")

            person = {
                "baptismDate": None,
                "birthDate": None,
                "birthPlace": None,
                "deathAge": None,
                "deathDate": None,
                "deathPlace": None,
                "gender": "M",
                "hasDNA": False,
                "hasImage": False,
                "key": xref_id,
                "lastName": None,
                "living": True,
                "livingPlace": None,
                "marriageDate": None,
                "marriagePlace": None,
                "middleName": None,
                "nickname": None,
                "prefix": None,
                "suffix": None,
                "vitalsCompleteAndVerified": False,
            }

            # Person-related checkers
            is_prefix_found = False
            is_first_name_found = False
            is_nickname_found = False
            is_middle_name_found = False
            is_last_name_found = False
            is_suffix_found = False
            is_residence_found = False

            for sub_record_1 in record.sub_records:
                if sub_record_1.tag == "_FID":
                    person["fid"] = sub_record_1.value

                sub_record_1_type = None

                if sub_record_1.tag == "NAME":
                    # is_married_name = "/" in sub_record_1.value
                    # print(is_married_name)
                    for sub_record_2 in sub_record_1.sub_records:
                        if sub_record_2.tag == "TYPE" and not sub_record_1_type:
                            sub_record_1_type = sub_record_2.value
                        if sub_record_2.tag == "NPFX" and not is_prefix_found:
                            person["prefix"] = sub_record_2.value
                            is_prefix_found = True
                        if sub_record_2.tag == "GIVN" and is_first_name_found and not is_nickname_found:
                            person["nickname"] = sub_record_2.value
                            is_nickname_found = True
                        if sub_record_2.tag == "GIVN" and not is_first_name_found:
                            person["firstName"] = sub_record_2.value
                            is_first_name_found = True
                        if sub_record_2.tag == "SECG" and not is_middle_name_found:
                            person["middleName"] = sub_record_2.value
                            is_middle_name_found = True
                        if sub_record_2.tag == "SURN" and not is_last_name_found:
                            if sub_record_1_type != "married":
                                person["lastName"] = sub_record_2.value
                                is_last_name_found = True
                        if sub_record_2.tag == "NSFX" and not is_suffix_found:
                            person["suffix"] = sub_record_2.value
                            is_suffix_found = True

                elif sub_record_1.tag == "RESI":
                    for sub_record_2 in sub_record_1.sub_records:
                        if sub_record_2.tag == "PLAC" and not is_residence_found:
                            person["livingPlace"] = process_place(str(sub_record_2.value))
                            is_residence_found = True

                elif sub_record_1.tag == "SEX":
                    person["gender"] = sub_record_1.value

                elif sub_record_1.tag == "BIRT":
                    process_date_record(sub_record_1, person, prefix="birth")

                elif sub_record_1.tag == "BAPM":
                    process_date_record(sub_record_1, person, prefix="baptism")

                elif sub_record_1.tag == "DEAT":
                    person["living"] = False
                    process_date_record(sub_record_1, person, prefix="death")

                elif sub_record_1.tag == "BURI":
                    process_date_record(sub_record_1, person, prefix="burial")

                elif sub_record_1.tag == "OBJE":
                    obj_key = sub_record_1.value.replace("@", "")
                    has_photo[obj_key] = xref_id

                elif sub_record_1.tag == "NOTE":
                    note_id = sub_record_1.value.replace("@", "")
                    if note_id in markers:
                        for i, marker in enumerate(markers[note_id]):
                            if marker == "dna":
                                person["hasDNA"] = True
                                continue

                            if marker == "signature":
                                person["hasSignature"] = True

                            if i + 1 == 2 and person["hasDNA"]:
                                suffix = ""
                            else:
                                suffix = i + 1 if i != 0 else ""

                            person[f"marker{suffix}"] = marker

            if "fid" in person and person["fid"] == "GY85-YPS":
                person["deathAge"] = "50+"

            if "firstName" in person:
                if person["birthDate"] is not None and person["birthDate"] > CURRENT_DATE and len(person["birthDate"]) == 10 and len(person["birthDate"].split("-")) == 3:
                    person["height"] = 0
                    person["width"] = 0

                if "burialPlace" in person:
                    person["deathPlace"] = person["burialPlace"]
                    del person["burialPlace"]

                if "burialDate" in person:
                    del person["burialDate"]

                data[xref_id] = person
            elif person["birthDate"] is not None and person["deathDate"] is not None:
                person["firstName"] = "Unknown name"
                data[xref_id] = person

        for record in parser.records0("OBJE"):
            obj_key = record.xref_id.replace("@", "")
            for sub_record_1 in record.sub_records:
                if sub_record_1.tag == "FILE" and sub_record_1.value == f"{obj_key}.jpg" and obj_key in has_photo:
                    data[has_photo[obj_key]]["hasImage"] = True

        for record in parser.records0("FAM"):
            father_key = None
            mother_key = None
            child_key = None

            is_marriage_found = False
            is_family_created = False

            temp_person = OrderedDict()

            for sub_record_1 in record.sub_records:
                if sub_record_1.tag == "MARR" and not is_marriage_found:
                    process_date_record(sub_record_1, temp_person, prefix="marriage")
                    is_marriage_found = True

                if sub_record_1.value is None:
                    continue

                xref_id = sub_record_1.value.replace("@", "")

                if sub_record_1.tag == "HUSB" and father_key is None and xref_id in data:
                    father_key = xref_id

                elif sub_record_1.tag == "WIFE" and mother_key is None and xref_id in data:
                    mother_key = xref_id

                elif sub_record_1.tag == "CHIL" and xref_id in data:
                    child_key = xref_id

                if father_key is not None and child_key is not None:
                    if father_key not in all_children:
                        all_children[father_key] = {"main": None, "others": []}

                    if data[child_key].get("fid") is not None:
                        data[father_key]["child"] = child_key
                        all_children[father_key]["main"] = child_key

                    elif child_key not in all_children[father_key]["others"]:
                        all_children[father_key]["others"].append(child_key)

                    is_family_created = True

                if mother_key is not None and child_key is not None:
                    if mother_key not in all_children:
                        all_children[mother_key] = {"main": None, "others": []}

                    if data[child_key].get("fid") is not None:
                        data[mother_key]["child"] = child_key
                        all_children[mother_key]["main"] = child_key

                    elif child_key not in all_children[mother_key]["others"]:
                        all_children[mother_key]["others"].append(child_key)

                    is_family_created = True

            if father_key and is_marriage_found:
                if "marriageDate" in temp_person:
                    data[father_key]["marriageDate"] = temp_person["marriageDate"]
                if "marriagePlace" in temp_person:
                    data[father_key]["marriagePlace"] = temp_person["marriagePlace"]

            if mother_key and is_marriage_found:
                if "marriageDate" in temp_person:
                    data[mother_key]["marriageDate"] = temp_person["marriageDate"]
                if "marriagePlace" in temp_person:
                    data[mother_key]["marriagePlace"] = temp_person["marriagePlace"]

    siblings_data = build_siblings_data(data, all_children)

    file_output = "var SIBLINGS_DATA = "
    file_output += json_lib.dumps(siblings_data, indent=2)
    file_output += ";"

    with open("../js/siblings.js", "w") as file:
        file.write(file_output)

    for key, children in all_children.items():
        main = children["main"]
        others = children["others"]

        for child_key in others:
            if child_key in data:
                del data[child_key]

    data = build_family_tree(data)
    # print(json_lib.dumps(data, indent=2))


    file_output = '''
        // Age for Mothers (youngest ever was 9) so let's use 10
        // Age for Fathers (youngest ever was 5) so let's use 6

        // Youngest man ever married was 9

        // Lola Fransisca Mia is estimated to be born before 1910 because her youngest known daughter is born around 1920. Subtract 10, you get 1910.
        // Lola Fransisca Mia is estimated to die after October 13, 1936 because it is said that Lolo Marcial was around 4 years old when Lola Francisca died.
        // Lola Maximiana is estimated to be born before November 10, 1913 because her son is born on November 10, 1913. Subtract 10, you get 1903.
        // Lola Maximiana is estimated to die after March 5, 1951 because she was a signatory in Lola Nati's wedding on said date.
        // Lola Consuelo is estimated to die after November 3, 1990 because she died after Lolo Felomino (who died on November 3, 1990).
        // Lola Cresing's mother is estimated to be born before 1908 because her youngest known daughter is born around 1918. Subtract 10, you get 1908.
        // Lola Cresing's mother is estimated to die after April 18, 1918 because Lola Cresing was around born on April 19, 1918.
        // Lolo Napoleon was married on 1962, the youngest married man is 9. Subtract 9 to 1962, you get 1953.
        // Lolo Napoleon is estimated to die when Tita Cecil was 2 months old. Add two months to December 26, 1979, you get February 26, 1980.
        // Lola Lydia told me that she was alive when Lolo Victor was old. Around the time she's in Elementary (around 8 years old + 1944 = 1952)
        // Lolo Victor Perez is estimated to be born before 1919 because her daughter Lucing is born on 1919. Subtract 6, you get 1913.

        var TREE_DATA =
    '''

    file_output += json_lib.dumps(data, indent=2)
    file_output += ";"

    with open("../js/data.js", "w") as file:
        file.write(file_output)


def get_people_with_standard_birthdate_format(tree_data):
    # Regular expression to match birthDate in the format YYYY-MM-DD
    date_format_regex = re.compile(r"^\d{4}-\d{2}-\d{2}$")

    # Filter and return people with birthDate matching the pattern
    return {
        key: person
        for key, person in tree_data.items()
        if date_format_regex.match(person.get('birthDate', "") or "")
    }


def process_date_record(sub_record_1, person, prefix):
    for sub_record_2 in sub_record_1.sub_records:
        if sub_record_2.tag == "DATE":
            datetype = sub_record_2.value.__class__.__name__
            if datetype == "DateValueSimple":
                date = sub_record_2.value.date

                month = f"-{date.month_num:02d}" if date.month_num else ""
                day = f"-{date.day:02d}" if date.day else ""

                person[f"{prefix}Date"] = f"{date.year}{month}{day}"
            elif datetype == "DateValuePhrase":
                person[f"{prefix}Date"] = convert_date_string(sub_record_2.value.phrase)
            else:
                person[f"{prefix}Date"] = f"from {sub_record_2.value.date1} to {sub_record_2.value.date2}"
        if sub_record_2.tag == "PLAC":
            person[f"{prefix}Place"] = process_place(str(sub_record_2.value))


def process_place(raw_value):
    place_shorthands = {
        "Philippines": "PHL",
        "United States": "USA",
        "Bahrain": "BHR",
    }

    temp_place_parts = [
        value.strip()
        for value in raw_value.split(",")
        if value.strip() != ""
    ]

    same_found = False
    for i in range(len(temp_place_parts) - 1):
        a = temp_place_parts[i]
        b = temp_place_parts[i + 1]
        if a == b:
            same_found = True
            break

    if same_found:
        del temp_place_parts[i]

    if raw_value.endswith("Philippines") and len(temp_place_parts) > 2:
        temp_place = ", ".join(temp_place_parts[:-2] + [temp_place_parts[-1]])
    else:
        temp_place = ", ".join(temp_place_parts)

    for original, shorthand in place_shorthands.items():
        if temp_place.endswith(original):
            temp_place = temp_place.replace(original, shorthand)

    return temp_place


def build_siblings_data(tree_data, all_children):
    sibling_keys = []
    output = OrderedDict()

    for key, children in all_children.items():
        main = children["main"]
        others = children["others"]

        if main is None:
            continue

        if tree_data[key]["gender"] == "M":
            tree_data[main]["paternal_siblings"] = others[:]
            tree_data[main]["father"] = key

        elif tree_data[key]["gender"] == "F":
            tree_data[main]["maternal_siblings"] = others[:]
            tree_data[main]["mother"] = key

        sibling_keys += others

    for key in set(sibling_keys):
        output[key] = tree_data[key]

    for key, person in tree_data.items():
        paternal_siblings = set(person.get("paternal_siblings", []))
        maternal_siblings = set(person.get("maternal_siblings", []))
        regular_siblings = paternal_siblings.intersection(maternal_siblings)

        person["paternal_siblings"] = sorted(list(paternal_siblings - regular_siblings))
        person["maternal_siblings"] = sorted(list(maternal_siblings - regular_siblings))
        person["regular_siblings"] = sorted(list(regular_siblings))

    return output


def build_family_tree(tree_data):
    def build_branch(node_key):
        node = tree_data[node_key]
        father = next((k for k, n in tree_data.items() if n.get("child") == node_key and n.get("gender") == "M"), None)
        mother = next((k for k, n in tree_data.items() if n.get("child") == node_key and n.get("gender") == "F"), None)

        branch = [node]
        if father:
            branch.extend(build_branch(father))
        if mother:
            branch.extend(build_branch(mother))

        return branch

    potential_root_keys = get_people_with_standard_birthdate_format(tree_data)
    root_child_key = max(potential_root_keys, key=lambda k: tree_data[k].get('birthDate', "1900-01-01"))

    return build_branch(root_child_key)


def convert_date_string(date_string):
    # Split the string into its components
    parts = date_string.split()

    # Assume the minimum structure is "after YEAR"
    prefix = parts[0]
    year = parts[-1]  # The year is always the last part
    day = None
    month = None

    # Check for the presence of the day and month
    if len(parts) == 4:
        day = parts[1]
        month = parts[2]
    elif len(parts) == 3:
        # Determine if the part is a day or a month
        if parts[1].isdigit():
            day = parts[1]
        else:
            month = parts[1]

    # Convert the month to a number if it exists
    if month:
        month_number = datetime.strptime(month, "%b").month
        month_str = f"-{month_number:02d}"
    else:
        month_str = ""

    # Default to the first day of the month if day is missing
    day = f"-{int(day):02d}" if day else ""

    # Format the date into the desired format
    formatted_date = f"{prefix} {year}{month_str}{day}"

    return formatted_date


if __name__ == "__main__":
    main()
