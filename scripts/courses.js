// Written by: Joseph Vantassel 
// Written on: 7/6/2019

function courseTemplate(course) {
    return `	
        <div class='row'>
            <div class='col-7 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h3>${course.name} - <em>${course.department}</em></h3>
                            <div>
                            <p> ${course.description} </p>
                            </div>
                        </section>
                    </article>
                </div>
            </div>

            <div class="col-5 col-12-medium">
                <div class="sidebar">
                    <section>
                        <div>
                        <a href='#' class='image featured'><img src="${course.image}" alt='' /></a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `
}

$.getJSON('data/courses.json', function (coursedata) {
    console.log("Tada!")
    document.getElementById("courses-div").innerHTML = `
    ${coursedata.map(courseTemplate).join('')}
    `
});