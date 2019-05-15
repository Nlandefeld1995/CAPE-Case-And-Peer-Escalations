$(function() {
    $("#archived").click(function() {
        clear();
        top_head.style.display = "block";
        top_head.innerHTML = `<h1>Archived Questions</h1>`

        //$(main).append(`<input type="textbox" placeholder="Search"></input>`
        $(main).append(`<p>I want to add a search option into this one. Allow people to search for questions that were asked previously. We will have data for it in datasets. But I want to include an option here as well. Maybe search and then the results of the search display.`)


        $(main).append("<table><thead><th>Subject</th><th>Bucket</th><th>Category</th><th>Date Complete</th></thead></table>");


    });
});