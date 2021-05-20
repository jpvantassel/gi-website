# GI-Website

> Joseph P. Vantassel

## Maintenance Instructions

Welcome and congratulations on being voted the next maintainer of the
UT Geo-Institute website! :tada:

### General Information

- To get started clone the GitHub repository. If you are new to git a
useful reference with the basis you need to know can be found [here](https://jpvantassel.github.io/git-course/#/).
- To test changes locally you can create local http server using Python, by
navigating to the websites main directory (i.e., the one containing `index.html`),
running `python -m http.server` from the command line, and open your favorite
browser to the specified http address (e.g., `localhost:8000`).

### Fall Semester

- Ensure educational seminars are being added to the official geo-institute
calender. Once they have been added they will appear under `Upcoming Seminars`.
- Update educational seminars with photo and description. This can be
done by updating the `seminars.json` file in the `data` directory. Place
associated photo in the directory `images/seminars`.
- Update social events with photo and description. This can be
done by updating the `events.json` file in the `data` directory. Place
associated photo in the directory `images/social`.
- Update member information and photo. This can be
done by updating the `members.json` file in the `data` directory. Place
associated photo in the directory `images/members`. _Note you may need to
crop the photos to ensure they present acceptably on the page.
- When the spring course schedule is announced update the offered course listing
by modifying `courses.json` in the `data` directory. _Note you will need to add
a new grouping of `spring`, `summer`, and `fall` for the start of a new year._
- After updating the course listing add the year and semester to the dropdown
options in `courses.html`.

### Spring Semester

- Ensure educational seminars are being added to the official geo-institute
calender. Once they have been added they will appear under `Upcoming Seminars`.
- Update educational seminars with photo and description. This can be
done by updating the `seminars.json` file in the `data` directory. Place
associated photo in the directory `images/seminars`.
- Update social events with photo and description. This can be
done by updating the `events.json` file in the `data` directory. Place
associated photo in the directory `images/social`.
- When the summer and fall course schedule is announced update the offered course listing
by modifying `courses.json` in the `data` directory.
- After updating the course listing add the year and semester to the dropdown
options in `courses.html`.
- At the end of the spring semester update and send the course survey. A copy
of the original course survey has been shared with the geo-institute email
account. The form is called `Geotech Course Work Shared`. This form contains
all of the course work as options, so before you share it remove any courses
that were not offered in the summer and fall of the previous year and spring
of the current year. Allow the survey to run for a week or so prior to the
end of classes and finishing around the end of finals. Close the survey and
download the results, place the raw results in `data/construction/course` and
name it with the appropriate year and month following the files shown. Clean the
survey results to comply with the existing `*_clean.csv` files. Run
the three Python scripts in the following order `0_process_responses_clean.py`,
`1_merge_survey_results.py`, and `2_process_courses.py`. _Note the codes should
be able to be run without modification, however please be vigilant for issues
and correct accordingly._ Once you have run the three Python scrips successfully
move the created images to `images/courses/` overwriting the outdated images.
