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
                    <article class='box page-content'>
                        <section>
                            <h3>${course.name} - ${course.department}${course.number}</h3>
                            <h4>${course.area}</h4>
                            <div>
                            <p>
                                Last Offered: ${course.last_offered.semester} ${course.last_offered.year}<br>
                                Next Offered: ${next_offered}
                            </p>
                            <p> ${course.description} </p>
                            </div>
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

function sortcourses(area='All') {
    // var area = document.getElementById("area").selectedIndex;
    // var area_text = document.getElementById("area").options;
    
    $.getJSON('data/courses.json', function (raw_data) {
        var sorted_data=[]
        
        // for (var i=0; i<raw_data.length; i++) {
        //     if (raw_data[i].department==dept | dept) {
        //         sorted_data.push(raw_data[i])
        //     }
        // }

        for (var area_key in raw_data) {
            for (var name_key in raw_data[area_key]) {
                if (area_key==area | area=='All') {
                    sorted_data.push(raw_data[area_key][name_key])
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