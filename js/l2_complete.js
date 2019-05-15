$(function() {
    $("#my_l2_complete").click(function() {
        clear()
        top_head.style.display = "block";
        top_head.innerHTML = `<h1>My L2 Complete</h1>`
        var html = ``;


        $(main).append("<table><thead><th>Subject</th><th>Bucket</th><th>Category</th><th>Time Open</th></thead></table>");


    });
});