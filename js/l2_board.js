$(function() {
    $("#l2_board").click(function() {
        clear();
        top_head.style.display = "block";
        top_head.innerHTML = `<h1>L2 Board</h1>`
        var html = ``;


        $(main).append("<table><thead><th>Subject</th><th>Bucket</th><th>Category</th><th>Time Open</th></thead></table>");


    });
});