// Written by: Joseph Vantassel 
// Written on: 08/29/2020


function memberTemplate(member) {
    if (member.state == null)
        var locale = `${member.city}, ${member.country}`;
    else
        var locale = `${member.city}, ${member.state}, ${member.country}`;

    return `
        <div class="col-3 col-12-medium">
            <a class="image member"><img src=${member.path} alt=''></a>
            <h5>${member.name}, ${member.degree}</h5>
            <h6>${locale}</h6>
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