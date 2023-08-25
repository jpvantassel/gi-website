// Written by: Joseph Vantassel 
// Written on: 08/29/2020


function memberTemplate(member) {
    var locale = ""
    if (member.city != null)
        locale += `${member.city}, `;
    if (member.state != null)
        locale += `${member.state}, `;
    locale += `${member.country}`;
    
    if (member.link == null)
        var href_profile = ``;
    else
        var href_profile = `href=${member.link} target="_blank"`;

    return `
        <div class="col-3 col-12-medium">
            <a class="image member" ${href_profile}><img src=${member.path} alt='Not found', onerror="this.src='images/original_logo.jpeg';"></a>
            <h5><center>${member.name}, ${member.degree}</center></h5>
            <h6><center>${locale}</center></h6>
        </div>
    `
}

$.getJSON('data/members.json', function (memberdata) {
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