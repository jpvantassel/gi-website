// Written by: Joseph Vantassel 
// Written on: 08/29/2020


function donorTemplate(donor) {    
    if (donor.link == null)
        var href_profile = ``;
    else
        var href_profile = `href=${donor.link} target="_blank"`;
    if (donor.company != null)
        var second_line = `${donor.company} ${donor.year}`;
    else
        var second_line = `${donor.year}`

    return `
        <div class="col-3 col-12-medium" style="margin:auto;">
            <h2><a ${href_profile}><strong><center>${donor.name}</center></strong></a></h2>
            <h6><center>${second_line}</center></h6>
        </div>
    `
}

$.getJSON('data/donors.json', function (donordata) {
    var ncols = 4;
    var master = ``;
    var div_open = false;
    for (var i = 0; i<donordata.length; i++ ){
        if (i % ncols == 0){
            if (div_open);{
                master += `</div>`;
                div_open = false;
            }
            master += `<div class="row">`;
            div_open = true;
        }
        master += donorTemplate(donordata[i]);    
   
        }
    if (div_open){
        master += `</div>`;
        div_open = false;
    }

    document.getElementById("donor-div").innerHTML = `${master}`
});

