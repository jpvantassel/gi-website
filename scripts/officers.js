// Written by: Joseph Vantassel 
// Written on: 6/29/2019


function officerTemplate(person) {
    return `
        <h3>${person.position} - ${person.name}</h3>

        <div class="row">
            <div class="col-6 col-12-medium">
                <a class="image featured"><img src=${person.image} alt='Not found', onerror="this.src='images/original_logo.jpeg';"></a>
            </div>

            <div class="col-6 col-12-medium">
                <p> ${person.bio} </p>
                <p> Email: <b>${person.email}</b></p>
            </div>
        </div>
    `
}

$.getJSON('data/officers.json', function (officerdata) {
    document.getElementById("officer-div").innerHTML = `
    ${officerdata.map(officerTemplate).join('')}
    `
});