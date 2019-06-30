// Written by: Joseph Vantassel 
// Written on: 6/29/2019

function officerTemplate(person) {
    return `	
        <div class='row'>
            <div class='col-6 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h3>${person.name} - <em>${person.position}</em></h3>
                            <div>
                                <a href='#' class='image featured'><img src=${person.photo} alt='' /></a>
                            </div>
                        </section>
                    </article>
                </div>
            </div>

            <div class="col-6 col-12-medium">
                <div class="sidebar">
                    <section>
                        <h3><br></h3>
                        <div>
                            <p> ${person.bio} </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `
}

$.getJSON('data/officers.json', function (officerdata) {
    console.log("Tada!")
    document.getElementById("officer-div").innerHTML = `
    ${officerdata.map(officerTemplate).join('')}
    `
});