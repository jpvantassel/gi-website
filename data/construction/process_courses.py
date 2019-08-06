import json
import matplotlib.pyplot as plt
import matplotlib as mpl

# Inputs:
#   survey_results.json
#   course_details.json
#
# Outputs:
#   Images for each course in images subfolder
#   courses.json


with open("survey_results.json", "r") as f:
    survey = json.load(f)

with open("course_details.json", "r") as f:
    details = json.load(f)

x = [1, 2, 3, 4, 5]
labels = ["Warn against",
          "Not recommend",
          "Neutral",
          "Recommend",
          "Strongly recommend",
          ]
width = 0.75


def autolabel(rects):
    """Attach a text label above each bar in *rects*, displaying its height."""
    for rect in rects:
        height = rect.get_height()
        ax.annotate('{}%'.format(height),
                    xy=(rect.get_x() + rect.get_width() / 2, height),
                    xytext=(0, 3),  # 3 points vertical offset
                    textcoords="offset points",
                    ha='center', va='bottom')


for area in survey:
    for course in survey[area]:

        fig, ax = plt.subplots(figsize=(4, 4))
        responses = [val for val in survey[area][course].values()]
        total_responses = sum(responses)

        if total_responses == 0:
            percent = [0 for val in responses]
        else:
            percent = [int(100*val/total_responses) for val in responses]
        ax.set_ylim(0, 100)
        rect = ax.bar(x, percent, width, color="#bf5700")

        for spine in plt.gca().spines.values():
            spine.set_visible(False)
        plt.gca().spines['bottom'].set_visible(True)

        plt.tick_params(top=False,
                        bottom=True,
                        left=False,
                        right=False,
                        labelleft=False,
                        labelbottom=True)

        ax.annotate('Total Responses: {}'.format(total_responses),
                    xy=(0.0, 0.9),
                    xycoords="axes fraction")

        ax.set_xticks(x)
        ax.set_xticklabels(labels, rotation=40, ha="right", fontsize=10)
        autolabel(rect)
        plt.tight_layout()
        fpath = "images/"+course+".png"
        plt.savefig(fpath, format="png", dpi=200)
        plt.close()

        details[area][course].update({"image": fpath})
        details[area][course].update({"area":area})
        details[area][course].update({"name":course})

with open("courses.json", "w") as f:
    json.dump(details, f, indent=2)
