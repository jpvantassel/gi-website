"""Merge all processed survey results into a single file."""

import json

results = [
    "2019_08_survey_results.json",
    "2020_01_survey_results.json",
    "2023_08_survey_results.json",
]

summary = {}
for result in results:

    with open(result, "r") as f:
        survey = json.load(f)

    for department in survey:

        if department not in summary:
            summary.update({department: {}})

        for course in survey[department]:

            if course not in summary[department]:
                summary[department].update({course: {"1": 0,
                                                     "2": 0,
                                                     "3": 0,
                                                     "4": 0,
                                                     "5": 0}})

            for key, rating in survey[department][course].items():
                summary[department][course][key] += rating

with open("survey_results.json", "w") as f:
    json.dump(summary, f, indent=2)
