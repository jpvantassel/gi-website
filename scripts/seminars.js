// Written by: Joseph Vantassel 
// Written on: 6/29/2019

function seminarTemplate(seminar) {
    var img_html = '';
    if (seminar.hover_img==null)
        img_html = `<a><img src=${seminar.image} alt='' style="display: block; width: 80%; border-radius: 8px; margin-left: auto; margin-right: auto;"/></a>`
    else
        img_html = `<a>
                        <img src=${seminar.image} 
                        style="display: block; width: 80%; border-radius: 8px; margin-left: auto; margin-right: auto;"
                        onmouseover="this.src='${seminar.hover_img}';"
                        onmouseout="this.src='${seminar.image}';">
                    </a>`
    return `	
        <div class='row'>
            <div class='col-12 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h3 style='text-align:center'>${seminar.caption}</h3>
                            <h4 style='text-align:center'>${seminar.date}</h4>
                            <div>
                                ${img_html}
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