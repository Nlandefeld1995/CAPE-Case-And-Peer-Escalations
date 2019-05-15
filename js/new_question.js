$(function() {
    $("#new_question").click(function() {
        clear();
        top_head.style.display = "block";
        top_head.innerHTML = `<h1>Create New Question</h1>`



        var html = '';
        html += `<textarea placeholder="Case Number" id="NewQ_caseNumber"></textarea>`;
        html += `<br>`;

        html += ` <select id="bucket_drop" onchange="config_catDrop()">`;
        html += `<option value="N/A">Bucket</option>`
        for (i = 0; i < bucket.length; i++) {
            html += `<option value="${i}">${bucket[i].name}</option>`
        }
        html += `</select>`;

        html += `<select id="cat_drop" onchange="config_sub_catDrop()">`;
        html += `<option value="N/A">Category</option>`
        html += `</select>`

        html += `<select id="sub_cat_drop">`;
        html += `<option value="N/A">Sub Category</option>`
        html += `</select>`
        html += `<br>`;
        html += `<textarea placeholder="Title of Issue" id="NewQ_title"></textarea>`;
        html += `<br>`;
        html += `<textarea placeholder="Description of Issue" id="NewQ_description"></textarea>`;
        html += `<br>`;
        html += `<input class="button" type="button" value="Cancel"></input>`;
        html += `<input class="button" type="button" value="Post Question"></input>`
        html += `<input class="button" type="button" value="Add to L2 Board"></input>`

        main.innerHTML = html;
    });

});

function config_sub_catDrop() {
    var sub_cat_drop_list = document.getElementById('sub_cat_drop');
    var j = document.getElementById("cat_drop").value;
    if (j == "N/A") {
        sub_cat_drop_list.innerHTML = `<option value="N/A">Sub Category</option>`;

    } else {

        j = j.split("_");

        var sub_cat_html = ``;
        var sub = bucket[j[0]].category[j[1]].sub_cat;
        if (sub.length > 0) {
            sub_cat_html += `<option value="N/A">Sub Category</option>`;
            for (k = 0; k < sub.length; k++) {

                sub_cat_html += `<option value="${j[0]}_${j[1]}_${k}">${sub[k]}</option>`;
            }
        } else {
            sub_cat_html += `<option value="N/A">None</option>`;
        }

        sub_cat_drop_list.innerHTML = sub_cat_html;
    }

}


function config_catDrop() {
    var cat_drop_list = document.getElementById('cat_drop');
    var sub_cat_drop_list = document.getElementById('sub_cat_drop');

    var j = document.getElementById("bucket_drop").value;
    if (j == "N/A") {
        cat_drop_list.innerHTML = `<option value="N/A">Category</option>`;
        sub_cat_drop_list.innerHTML = `<option value="N/A">Sub Category</option>`
    } else {
        var cat_html = `<option value="N/A">Category</option>`;

        for (k = 0; k < bucket[j].category.length; k++) {
            var cat = bucket[j].category[k].name;
            cat_html += `<option value="${j}_${k}">${cat}</option>`;
        }
        cat_drop_list.innerHTML = cat_html;
    }
}