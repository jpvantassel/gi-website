"""Restructure survey results from .csv to .json format."""

import pandas as pd
import re
import json

# data = pd.read_csv("2019_08_responses_clean.csv")
data = pd.read_csv("2020_01_responses_clean.csv")


with open("classes_by_dept.json", "r") as f:
    classes_by_dept = json.load(f)

def find_dept_from_name(depths, name):
    for dept, courses in depths.items():
        if name in courses:
            return dept
    return ValueError(f"name={name}, not found")

# Courses is dictinary: courses[dept][course][rating]
courses = {}

# Initialize variables to defaults
index = 0

# Loop across coursework
for header in data:
    if header.startswith("Coursework"):
        name = re.findall(r"\[(.*)\]", header)[0]

        dept = find_dept_from_name(classes_by_dept, name)
        dept_sum = 0
        if dept not in courses.keys():
            courses.update({dept: {}})

        courses[dept].update({name: {}})

        course_sum = 0
        for rating in range(1, 6):
            rating_str = str(rating)
            courses[dept][name].update({rating_str: 0})

            for response in data[header]:
                if not pd.isna(response):
                    if response[0] == rating_str:
                        courses[dept][name][rating_str] += 1
                        course_sum += 1
                        dept_sum += 1

        if course_sum == 0:
            del courses[dept][name]
    
        if dept_sum == 0:
            del courses[dept]

# with open("2019_08_survey_results.json", "w") as f:
with open("2020_01_survey_results.json", "w") as f:
    json.dump(courses, f, indent=2)
