$(function() {
    $("#open_questions").click(function() {
        clear()
        top_head.style.display = "block";
        top_head.innerHTML = `<h1>Open Peer Questions</h1>`
        var html = ``;


        html += ` <select class="open_filters" id="bucket_drop_open" onchange="config_catDrop_open()">`;
        html += `<option value="N/A">Bucket</option>`
        for (i = 0; i < bucket.length; i++) {
            html += `<option value="${i}">${bucket[i].name}</option>`
        }
        html += `</select>`;

        html += `<select class="open_filters" id="cat_drop_open" onchange="">`;
        html += `<option value="N/A">Category</option>`
        html += `</select>`
        html += `<input style="width:1em" class="open_filters" type="checkbox"></input><a>My Questions</>`

        $(main).append(html);
        $(main).append("<table><thead><th>Subject</th><th>Bucket</th><th>Category</th><th>Time Open</th></thead></table>");
        $(main).append(`<table><tbody><tr onclick="case_details_peer(1)" id="1"><td>Cards broke</td><td>Cards</td><td>Analyzer</td><td>2h 34min</td></tbody></table>`);

    });
});




function config_catDrop_open() {
    var cat_drop_list = document.getElementById('cat_drop_open');
    var sub_cat_drop_list = document.getElementById('sub_cat_drop_open');

    var j = document.getElementById("bucket_drop_open").value;
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