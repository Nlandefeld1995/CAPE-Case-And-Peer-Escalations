var menu_sidebar = document.getElementById('side-menu');



var menu = [{
        "name": "Open Questions",
        "id": "open_questions",
        "type": "menu_item",
        "children": ""
    },
    {
        "name": "L2 Board",
        "id": "l2_board",
        "type": "menu_item",
        "children": ""
    },
    {
        "name": "My L2 Complete",
        "id": "my_l2_complete",
        "type": "menu_item",
        "children": ""
    },
    {
        "name": "Archived (coming soon)",
        "id": "archived",
        "type": "menu_item",
        "children": ""
    }
];
$(function() {



    var li = "";
    li += `<input class="button" type="button" value="Create New+" id="new_question"></input><br>`;
    li += `<li class="divider"></li>`
    li += `<ul class="nav nav-list accordion">`;
    for (i = 0; i < menu.length; i++) {

        if (menu[i].type == 'dropdown-menu') {

            li += `<li class="nav-header">
                    <div class="link"><i  class="fa fa-lg fa-users"></i>${menu[i].name}<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">`

            for (j = 0; j < menu[i].children.length; j++) {
                var child = menu[i].children[j].name;
                li += `<li><a href="#">${child}</a></li>`;
            }
            li += `</ul></li>`;

        } else {
            li += `<li class="nav-header"><div id="${menu[i].id}" class="link"><i class="fa fa-lg fa-globe"></i>${menu[i].name}</div></li>`;

        }

    }

    li += `</ul>`;
    menu_sidebar.innerHTML = li;
    load_side_bar();
})