// Written by: Joseph Vantassel 
// Written on: 6/29/2019

function seminarTemplate(seminar) {
    return `	
        <div class='row'>
            <div class='col-12 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h3 style='text-align:center'>${seminar.name}</h3>
                            <h4 style='text-align:center'>${seminar.date}</h4>
                            <div>
                                <a href='#' class='image sixty'><img src=${seminar.image} alt='' /></a>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
    `
}

$.getJSON('data/seminars.json', function (seminardata) {
    document.getElementById("seminars-div").innerHTML = `
    ${seminardata.map(seminarTemplate).join('')}
    `
});