// Written by: Joseph Vantassel 
// Written on: 6/29/2019


{/* <div class='row>

</div>	 */}

function officerTemplate(person) {
    return `
        <div class="row">
            <h4>${person.position}</h4>
        </div>
        <div class="row">
            <h3>${person.name}</h3>
        </div>


        <div class="row">
            <div class="col-6 col-12-medium">
                <a class="image featured"><img src=${person.image} alt='' /></a>
            </div>

            <div class="col-6 col-12-medium">
                <p> ${person.bio} </p>
            </div>
        </div>
    `
}

$.getJSON('data/officers.json', function (officerdata) {
    document.getElementById("officer-div").innerHTML = `
    ${officerdata.map(officerTemplate).join('')}
    `
});