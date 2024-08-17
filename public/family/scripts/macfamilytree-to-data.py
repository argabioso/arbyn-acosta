from datetime import datetime
import json

from ged4py import GedcomReader


def main():
    path = "test/test.ged"
    data = {}

    with GedcomReader(path) as parser:
        for record in parser.records0("INDI"):
            xref_id = record.xref_id.replace("@", "")
            person = {"key": xref_id}

            # Name-related checkers
            is_prefix_found = False
            is_first_name_found = False
            is_nickname_found = False
            is_middle_name_found = False
            is_last_name_found = False
            is_suffix_found = False

            for sub_record_1 in record.sub_records:
                # if sub_record_1.tag == "_FID":
                #     person["key"] = sub_record_1.value

                if sub_record_1.tag == "NAME":
                    for sub_record_2 in sub_record_1.sub_records:
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
                            person["lastName"] = sub_record_2.value
                            is_last_name_found = True
                        if sub_record_2.tag == "NSFX" and not is_suffix_found:
                            person["suffix"] = sub_record_2.value
                            is_suffix_found = True

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

            # Useless fields for now
            person["deathAge"] = None

            data[xref_id] = person

        for record in parser.records0("FAM"):
            father_key = None
            mother_key = None
            child_key = None

            is_family_created = False

            for sub_record_1 in record.sub_records:
                if sub_record_1.value is None:
                    continue

                xref_id = sub_record_1.value.replace("@", "")

                if sub_record_1.tag == "HUSB" and father_key is None and xref_id in data:
                    father_key = xref_id

                elif sub_record_1.tag == "WIFE" and mother_key is None and xref_id in data:
                    mother_key = xref_id

                elif sub_record_1.tag == "CHIL" and child_key is None and xref_id in data:
                    child_key = xref_id

                if father_key is not None and child_key is not None:
                    data[father_key]["child"] = child_key
                    is_family_created = True

                if mother_key is not None and child_key is not None:
                    data[mother_key]["child"] = child_key
                    is_family_created = True


    # print(json.dumps(data, indent=2))

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

    file_output += json.dumps(list(data.values()), indent=2)
    file_output += ";"

    with open("test.js", "w") as file:
        file.write(file_output)


def process_date_record(sub_record_1, person, prefix):
    for sub_record_2 in sub_record_1.sub_records:
        if sub_record_2.tag == "DATE":
            datetype = sub_record_2.value.__class__.__name__
            if datetype == "DateValueSimple":
                date = sub_record_2.value.date
                person[f"{prefix}Date"] = f"{date.year}-{date.month_num:02d}-{date.day:02d}"
            elif datetype == "DateValuePhrase":
                person[f"{prefix}Date"] = convert_date_string(sub_record_2.value.phrase)
            else:
                person[f"{prefix}Date"] = f"from {sub_record_2.value.date1} to {sub_record_2.value.date2}"
        if sub_record_2.tag == "PLAC":
            person[f"{prefix}Place"] = ", ".join(
                [
                    value.strip()
                    for value in sub_record_2.value.split(",")
                    if value.strip() != ""
                ]
            )


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
    else:
        month_number = 1  # Default to January if month is missing

    # Default to the first day of the month if day is missing
    day = day if day else "01"

    # Format the date into the desired format
    formatted_date = f"{prefix} {year}-{month_number:02d}-{int(day):02d}"

    return formatted_date


if __name__ == "__main__":
    main()
