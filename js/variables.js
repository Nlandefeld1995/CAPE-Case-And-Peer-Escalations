var main = document.getElementById('main_area');
var chat_history = document.getElementById('chat_area_history');
var chat_new = document.getElementById('chat_area_new');
var top_head = document.getElementById("topBar");
var right_menu = document.getElementById('right_chat');

var bucket = [{
        "name": "Admin",
        "category": [{
                "name": "Add User",
                "sub_cat": []
            },
            {
                "name": "Company Settings",
                "sub_cat": []
            },
            {
                "name": "Getting Started",
                "sub_cat": []
            },
            {
                "name": "Licences",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "Pages",
                "sub_cat": []
            },
            {
                "name": "Password",
                "sub_cat": ["Password Reset"]
            },
            {
                "name": "PDP",
                "sub_cat": []
            },
            {
                "name": "Projects and Tasks",
                "sub_cat": []
            },
            {
                "name": "Publication Group",
                "sub_cat": ["Configuration"]
            },
            {
                "name": "Remove User",
                "sub_cat": []
            },
            {
                "name": "Security Roles",
                "sub_cat": []
            },
            {
                "name": "Single Sign-On (SSO)",
                "sub_cat": ["Configuration"]
            }
        ]
    },
    {
        "name": "Alerts",
        "category": [{
                "name": "Alert Center",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "Unsubscribe",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "App Store",
        "category": [{
                "name": "Configuration",
                "sub_cat": []
            },
            {
                "name": "Credentials",
                "sub_cat": []
            },
            {
                "name": "Data Trust & Accuracy",
                "sub_cat": []
            },
            {
                "name": "Publish",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Beast Mode",
        "category": [{
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "SQL",
                "sub_cat": []
            },
            {
                "name": "Summary Number",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Buzz",
        "category": [{
                "name": "Error",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Cards",
        "category": [{
                "name": "Analyzer",
                "sub_cat": ["Rendering"]
            },
            {
                "name": "Annotations",
                "sub_cat": ["Rendering"]
            },
            {
                "name": "Chart Properties",
                "sub_cat": ["Bar Settings", "Category Scale", "Colors", "Data Label Settings", "Filter", "Full-Size Settings", "Grid Lines", "Header Row", "Hints", "Hover Legend", "Hover Text Settings", "Last Value Projection", "Legend", "Number Format", "Other", "Outlier Filtering", "Regression Line", "Rendering", "Scale Marker", "Sorting", "Subtotal Rows", "Summary Number", "Total Row", "Value Scale"]
            },
            {
                "name": "Date Filters",
                "sub_cat": []
            },
            {
                "name": "Drill Path",
                "sub_cat": []
            },
            {
                "name": "Embed",
                "sub_cat": []
            },
            {
                "name": "Export",
                "sub_cat": ["CSV", "Excel", "Powerpoint", "Print"]
            },
            {
                "name": "Fiscal Calendar",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "Page Filters",
                "sub_cat": []
            },
            {
                "name": "Reports",
                "sub_cat": ["Scheduling", "Rendering"]
            },
            {
                "name": "Sumo Cards",
                "sub_cat": ["Column totals", "Column View", "Pivot View "]
            }
        ]
    },
    {
        "name": "Connector",
        "category": [{
                "name": "Connector - Credentials",
                "sub_cat": ["ConnectorNameList"]
            },
            {
                "name": "Connector - Data Accuracy",
                "sub_cat": ["ConnectorNameList"]
            },
            {
                "name": "Connector - Data Import",
                "sub_cat": ["ConnectorNameList"]
            }
        ]
    },
    {
        "name": "Developer",
        "category": [{
                "name": "Custom Connector",
                "sub_cat": []
            },
            {
                "name": "Dataset API",
                "sub_cat": []
            },
            {
                "name": "Design Studio",
                "sub_cat": []
            },
            {
                "name": "Dev Studio",
                "sub_cat": []
            },
            {
                "name": "Group API",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "Stream API",
                "sub_cat": []
            },
            {
                "name": "User API",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Domo Website & Production Environment",
        "category": [{
                "name": "Domo Website",
                "sub_cat": ["Rendering"]
            },
            {
                "name": "Instance performance",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Legacy Products",
        "category": [{
                "name": "Centerview",
                "sub_cat": []
            },
            {
                "name": "Corda",
                "sub_cat": []
            },
            {
                "name": "Optimap",
                "sub_cat": []
            },
            {
                "name": "Pop Chart",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Magic Transform & SQL",
        "category": [{
                "name": "Blend",
                "sub_cat": ["Query TImeout", "Index Issue", "Will Not Preview"]
            },
            {
                "name": "ETL",
                "sub_cat": ["Export", "Recursive Dataflow", "Scheduling", "Transform"]
            },
            {
                "name": "MySQL",
                "sub_cat": ["Export", "Recursive Dataflow", "Scheduling", "Transform"]
            },
            {
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "Redshift",
                "sub_cat": ["Export", "Recursive Dataflow", "Scheduling", "Transform"]
            }
        ]
    },
    {
        "name": "Mobile",
        "category": [{
                "name": "Login",
                "sub_cat": []
            },
            {
                "name": "Other",
                "sub_cat": []
            },
            {
                "name": "Rendering",
                "sub_cat": []
            }
        ]
    },
    {
        "name": "Plugins & Extensions",
        "category": [{
                "name": "Excel Plugin",
                "sub_cat": ["Export", "Installation", "Rendering"]
            },
            {
                "name": "Powerpoint Plugin",
                "sub_cat": ["Export", "Installation", "Rendering"]
            },
            {
                "name": "R Plugin",
                "sub_cat": []
            },
            {
                "name": "Word Plugin",
                "sub_cat": ["Export", "Installation", "Rendering"]
            }
        ]
    },
    {
        "name": "Workbench",
        "category": [{
                "name": "Data into Domo",
                "sub_cat": ["Domo Error", "Data Mismatch", "Indexing", "Upsert Request"]
            },
            {
                "name": "Data into workbench",
                "sub_cat": ["Bad data", "Datasource Configuration", "Permissions", "Scheduling"]
            }
        ]
    }
];