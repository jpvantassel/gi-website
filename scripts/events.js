// Written by: Joseph Vantassel 
// Written on: 6/29/2019

function eventTemplate(event) {
    var img_html = '';
    if (event.hover_img==null)
        img_html = `<a><img src=${event.image} alt='' style="display: block; width: 80%; border-radius: 8px; margin-left: auto; margin-right: auto;"/></a>`
    else
        img_html = `<a>
                        <img src=${event.image} 
                        style="display: block; width: 80%; border-radius: 8px; margin-left: auto; margin-right: auto;"
                        onmouseover="this.src='${event.hover_img}';"
                        onmouseout="this.src='${event.image}';">
                    </a>`

        
    return `	
        <div class='row'>
            <div class='col-12 col-12-medium'>
                <div class='content'>
                    <article class='box page-content'>
                        <section>
                            <h3 style='text-align:center'>${event.name}</h3>
                            <h4 style='text-align:center'>${event.semester}</h4>
                            <div>
                                ${img_html}
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    `
}

$.getJSON('data/events.json', function (eventdata) {
    document.getElementById("events-div").innerHTML = `
    ${eventdata.map(eventTemplate).join('')}
    `
});