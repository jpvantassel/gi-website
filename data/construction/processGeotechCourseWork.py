import pandas as pd
import re
import json

# Inputs: 
#   GeotechCourseWork_Clean.csv
#
# Outputs:
#   survey.json

data = pd.read_csv("GeotechCourseWork_Clean.csv")

dept_names = ["Geotechnical Engineering",
              "Structural Engineering",
              "Transportation Engineering",
              "Petroleum and Geosystems Engineering",
              "Geological Science",
              "Statistics and Data Sciences",
              "Engineering Mechanics",
              "Electrical Engineering",
              ]

# Courses is dictinary: courses[dept][course][rating]
courses = {}

# Initialize variables to defaults
index = 0
is_in_department = False

# Loop through coursework headers
for col in data:
    # If header starts with the word Coursework
    if col[:10] == "Coursework":
        is_in_department = True
        dept=dept_names[index]
        if dept not in courses.keys():
            courses.update({dept:{}})

        name = re.findall(r"\[(.*)\]", col)[0]
        courses[dept].update({name: {}})

        for rating in range(1, 6):
            courses[dept][name].update({str(rating):0})

            for response in data[col]:
                if not pd.isna(response):
                    if response[0]==str(rating):
                        courses[dept][name][str(rating)] += 1

    # If not, must be extraneous
    elif is_in_department:
        is_in_department = False
        index += 1

with open("survey.json", "w") as f:
    json.dump(courses, f, indent=2)