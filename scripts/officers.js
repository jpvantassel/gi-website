// Written by: Joseph Vantassel 
// Written on: 6/29/2019

function officerTemplate(person) {
    return `	
        <div class='row'>
            <div class='col-6 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h4>${person.position}</h4>
                            <h3>${person.name}</h3>
                            <div>
                                <a href='#' class='image featured'><img src=${person.image} alt='' /></a>
                            </div>
                        </section>
                    </article>
                </div>
            </div>

            <div class="col-6 col-12-medium">
                <div class="sidebar">
                    <section>
                        <h3><br></h3>
                        <h4><br></h4>
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
    document.getElementById("officer-div").innerHTML = `
    ${officerdata.map(officerTemplate).join('')}
    `
});