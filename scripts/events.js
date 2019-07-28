// Written by: Joseph Vantassel 
// Written on: 6/29/2019

function eventTemplate(event) {
    return `	
        <div class='row'>
            <div class='col-12 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h3 style='text-align:center'>${event.name}</h3>
                            <h4 style='text-align:center'>${event.semester}</h4>
                            <div>
                                <a class="image featured"><img src=${event.image} alt='' /></a>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
    `
}

$.getJSON('data/events.json', function (eventdata) {
    document.getElementById("events-div").innerHTML = `
    ${eventdata.map(eventTemplate).join('')}
    `
});