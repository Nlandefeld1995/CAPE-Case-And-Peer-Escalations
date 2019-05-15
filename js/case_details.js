function case_details_peer(c_id) {
    top_head.style.display = "block";
    top_head.innerHTML = `<h3>Case Number i.e(05343) *clickable for SF link</h3>`;
    clear();

    var main_html = '';
    main_html += `<textbox>Bucket</textbox>`
    main_html += `<textbox>Category</textbox>`
    main_html += `<textbox>Sub Category</textbox>`
    main_html += `<br><br>`
    main_html += `<textbox>Question Subject</textbox>`
    main_html += `<br><br>`
    main_html += `<textbox>Question description</textbox>`
    main_html += `<br><br><br>`
    main_html += `<input class="button" type="button" value="Cancel"></input>`;
    main_html += `<input class="button" type="button" value="Add to L2 Board"></input>`
    main_html += `<input class="button" type="button" value="Mark Question As Complete"></input>`
    main.innerHTML = main_html;


    var chat_history_html = ``;

    chat_history_html += `<table><tr><td>Nolan Landefeld 2018-01-01 10:22 am</td><tr><td>Did you try x... Oh this is a bug: Jira</td>`
    chat_history.innerHTML = chat_history_html;


    right_menu.style.display = "block"

    var chat_new_html = ``;
    chat_new_html += `<textarea placeholder="enter comment.."></textarea><input type="button" value="Comment"></input>`
    chat_new.innerHTML = chat_new_html;
}