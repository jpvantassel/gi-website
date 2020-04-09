// Written by: Joseph Vantassel 
// Written on: 7/6/2019

function courseTemplate(course) {
    // if (course.next_offered.announced) {
    //     var next_offered = course.next_offered.semester + " " + course.next_offered.year;
    // } else {
    //     var next_offered = "Forthcoming";
    // }
    return `	
        <div class='row'>
            <div class='col-7 col-12-medium'>
                <div class='content'>
                    <article class='box page-content' style='display: block'>
                        <section>
                            <h3>${course.name} - ${course.department}${course.number}</h3>
                            <h4>${course.area}</h4>
                            <p> ${course.description} </p>
                        </section>
                    </article>
                </div>
            </div>
            <div class="col-5 col-12-medium">
                <div class="content">
                    <section>
                        <div>
                        <a href="#filter" class='image featured'><img src="${course.image}" alt='' /></a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `
}

function sortcourses() {
    var semseter_index = document.getElementById("next").selectedIndex;
    var semester_text = document.getElementById("next").options[semseter_index].text;

    if (semester_text == "All") {
        var semester = "Summer";
        var year = "2017";
    } else {
        var semester_space_year = semester_text.split(" ");
        var semester = semester_space_year[0];
        var year = semester_space_year[1];
    }

    var area_index = document.getElementById("area").selectedIndex;
    var area_text = document.getElementById("area").options[area_index].text;

    var topic_index = document.getElementById("topic").selectedIndex;
    var topic_text = document.getElementById("topic").options[topic_index].text;

    console.log(`semester_text = ${semester_text}`)
    console.log(`semester = ${semester}`)
    console.log(`year = ${year}`)
    console.log(`area_text = ${area_text}`)
    console.log(`topic_text = ${topic_text}`)

    $.getJSON('data/courses.json', function (raw_data) {
        var sorted_data = [];

        // console.log(raw_data)
        // console.log(`Looking for area_text=${area_text}`)

        // Across departments/subject areas (e.g., Structural Engineering)
        for (var area_key in raw_data) {
            console.log(`area_key = ${area_key}`)

            // Continue if "All" or area_key matches the specified sbuject area
            if (area_text == "All" | area_text == area_key) {

                // Across course name (e.g., The Finite Element Method)
                for (var name_key in raw_data[area_key]) {
                    console.log(`\tname_key = ${name_key}`)

                    // "All" or matching year and semester
                    if (semester_text == "All" | raw_data[area_key][name_key][year][semester]) {

                        // Across topic area (e.g., Modeling)

                        // for (var topic in raw_data[area_key][name_key]["topic"]) {
                        for (const topic of raw_data[area_key][name_key]["topic"]) {
                            console.log(`\t\ttopic = ${topic}`)

                            // "All" or matching topic
                            if (topic_text == "All" | topic_text == topic ) {

                                console.log(`\t\t\tpushing name -> ${name_key}`)

                                sorted_data.push(raw_data[area_key][name_key]);
                                break;
                            }
                        }
                    }
                }
            }
        }

        console.log(`Pass criteria = ${sorted_data.length}`);

        document.getElementById("courses-div").innerHTML = `${sorted_data.map(courseTemplate).join('')}`
    })
}

$.getJSON('data/courses.json', function (raw_data) {
    var course = []
    for (var area_key in raw_data) {
        for (var name_key in raw_data[area_key]) {
            course.push(raw_data[area_key][name_key]);
        }
    }
    document.getElementById("courses-div").innerHTML = `
    ${course.map(courseTemplate).join('')}
    `
});