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

    print(json.dumps(data, indent=2))


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
