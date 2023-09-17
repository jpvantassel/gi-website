// Written by: Joseph Vantassel 
// Written on: 08/29/2020
// Editted by: Cheng-Hsi Hsiao
// Editted on: 09/04/2023


function memberTemplate(member) { 
    if (member.link == null)
        var href_profile = ``;
    else
        var href_profile = `href=${member.link} target="_blank"`;
    if (member.class != null)
        var classyear = `Class ${member.class}`;
    else
        var classyear = ``;
    return `
        <div class="col-3 col-12-medium">
            <a class="image member" ${href_profile}><img src=${member.path} alt='Not found', onerror="this.src='images/original_logo.jpeg';"></a>
            <h5><center>${member.name}</center></h5>
            <h6><center>${classyear}</center></h6>
        </div>
    `
}

$.getJSON('data/alumnus.json', function (memberdata) {
    var ncols = 4;
    var master = ``;
    var div_open = false;
    for (var i = 0; i<memberdata.length; i++ ){
        if (i % ncols == 0){
            if (div_open);{
                master += `</div>`;
                div_open = false;
            }
            master += `<div class="row">`;
            div_open = true;
        }
        master += memberTemplate(memberdata[i]);    
   
        }
    if (div_open){
        master += `</div>`;
        div_open = false;
    }

    document.getElementById("members-div").innerHTML = `${master}`
});