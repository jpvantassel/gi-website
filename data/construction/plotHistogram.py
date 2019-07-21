import json
import matplotlib.pyplot as plt
import matplotlib as mpl

plt.style.use('seaborn-colorblind')
# print(plt.style.available)

with open("survey.json", "r") as f:
    survey = json.load(f)

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

# dept = "Geotechnical Engineering"
# course = "Consolidation Shearing Properties of Soils"

courses = []
for dept in survey.keys():
    for course in survey[dept].keys():

        fig, ax = plt.subplots(figsize=(4, 4))
        responses = [val for val in survey[dept][course].values()]
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
        # plt.show()

        fpath = "images/"+course+".png"
        print(fpath)
        plt.savefig(fpath, format="png", dpi=200)
        plt.close()

        courses += [{"name": course,
                        "department": dept,
                        "image": fpath,
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla imperdiet est in lobortis.Vivamus eu egestas mauris, et dictum nibh. Sed ut condimentum turpis, venenatis lacinia sapien. Etiam vehicula faucibus quam non bibendum. Quisque finibus auctor volutpat. Integer nisi nibh, ultrices sed enim sit amet, ullamcorper laoreet lacus. Donec suscipit in eros nec rhoncus. Vestibulum ultricies rutrum lorem, et bibendum elit mollis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc quis consectetur massa. Aenean euismod ut eros sit amet eleifend. Aenean1 massa mi, lacinia vitae volutpat eget, porttitor sed urna. Aliquam erat volutpat."}]

with open("courses.json", "w") as f:
    json.dump(courses, f, indent=2)
