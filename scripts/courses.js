// Written by: Joseph Vantassel 
// Written on: 7/6/2019

function courseTemplate(course) {
    if (course.next_offered.announced) {
        var next_offered = course.next_offered.semester+" "+course.next_offered.year;
    } else {
        var next_offered = "Forthcoming";
    }
    return `	
        <div class='row'>
            <div class='col-7 col-12-medium'>
                <div class='content'>
                    <article class='box page-content' style='display: block'>
                        <section>
                            <h3>${course.name} - ${course.department}${course.number}</h3>
                            <h4>${course.area}</h4>
                            <p> 
                            Last Offered: ${course.last_offered.semester} ${course.last_offered.year}<br>
                            Next Offered: ${next_offered}
                            </p>
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
    var semester_number = document.getElementById("next").selectedIndex;
    var semester_text = document.getElementById("next").options[semester_number].text;
    
    var area_number = document.getElementById("area").selectedIndex;
    var area_text = document.getElementById("area").options[area_number].text;

    var topic_number = document.getElementById("topic").selectedIndex;
    var topic_text = document.getElementById("topic").options[topic_number].text;

    $.getJSON('data/courses.json', function (raw_data) {
        var sorted_data=[]
        
        for (var area_key in raw_data) {
            for (var name_key in raw_data[area_key]) {
                if (area_key==area_text | area_text=="All") {
                    if ( raw_data[area_key][name_key]["next_offered"]["announced"] | semester_text=="All") {
                        for (var topic in raw_data[area_key][name_key]["topic"]) {
                            if ( raw_data[area_key][name_key]["topic"][topic]==topic_text | topic_text=="All") {
                                sorted_data.push(raw_data[area_key][name_key])
                                break
                            }                            
                        }
                    }
                }
            }
        }

        document.getElementById("courses-div").innerHTML = `
        ${sorted_data.map(courseTemplate).join('')}
        `
    })
}

$.getJSON('data/courses.json', function (raw_data) {
    var course=[]
    for (var area_key in raw_data) {
        for (var name_key in raw_data[area_key]) {
            course.push(raw_data[area_key][name_key]);
        } 
    }
    document.getElementById("courses-div").innerHTML = `
    ${course.map(courseTemplate).join('')}
    `
});