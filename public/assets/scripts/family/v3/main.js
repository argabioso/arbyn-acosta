function isdark() {
  const now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;

  if (
    (hours > 7 && hours <= 11 && ampm == "pm") ||
    (hours >= 1 && hours < 7 && ampm == "am") ||
    (hours == 12 && ampm == "am")
  ) {
    return false;
  }
  return false;
}

var MONTH_MAPPING = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
}

var IS_DARK = isdark();
var template = new primitives.TemplateConfig();
var combiner = new primitives.TemplateConfig();

var HEIGHT = 40; // ONLY CHANGE THIS
var WIDTH = 226 / 45 * HEIGHT;

template.name = 'TreeItemTemplate';
template.itemSize = new primitives.Size(WIDTH, HEIGHT);

combiner.name = 'CombinerTemplate';
combiner.itemSize = new primitives.Size(0, 0);

var shorterSide = Math.min(template.itemSize.width, template.itemSize.height);
var longerSide = Math.max(template.itemSize.width, template.itemSize.height);

combiner.itemTemplate = ["div", { "class": ["node", "combiner"] }]
template.itemTemplate = ["div",
    {
        "style": {
            "height": shorterSide + "px",
            "width": longerSide + "px",
        },
        "class": ["node", "person"]
    },
    ["div",
        {
            "class": ["person__image-wrapper"],
            "style": {
                "height": shorterSide + "px",
                "width": shorterSide + "px",
            }
        },
        ["img",
            {
                "name": "photo",
                "class": ["person__image"],
                "style": {
                    "height": shorterSide + "px",
                    "width": shorterSide + "px",
                }
            }
        ]
    ],
    ["div",
        {
            "class": ["person__details"],
            "style": {
                "height": shorterSide + "px",
                "width": (longerSide - shorterSide) + "px",
                "left": shorterSide + "px",
            }
        },
        ["div",
            {
                "name": "name",
                "class": ["person__details-container"],
                "style": {
                    "font-size": (shorterSide / 45 * 11.25) + "px",
                    "height": shorterSide + "px",
                    "width": (longerSide - shorterSide) + "px",
                    "padding-top": (shorterSide / 36 * 7) + "px",
                    "padding-right": (shorterSide / 36 * 7) + "px",
                    "padding-bottom": (shorterSide / 36 * 7) + "px",
                    "padding-left": (shorterSide / 36 * 11) + "px",
                }
            },
            ["div",
                {
                    "name": "name",
                    "class": ["person__display-name"],
                    "style": {
                        "font-size": (shorterSide / 45 * 13.125) + "px",
                    }
                }
            ],
            ["div",
                {
                    "name": "lifespan",
                    "class": ["person__lifespan"],
                }
            ]
        ]
    ]
];

function getDisplayName(data) {
    let middleInitialsArray  = data.name.middle.trim().split(' ');
    let middleInitialsString = '';

    if (middleInitialsArray[0] != '') {
        // for (let i = 0; i < middleInitialsArray.length; i++) {
        //     middleInitialsString += middleInitialsArray[i][0] + '. '
        // }

        middleInitialsString += middleInitialsArray[0][0] + ". ";
    }

    return data.name.first + " " + middleInitialsString + data.name.last;
}

function getLifeSpan(nodeData) {
    var SEPARATOR = " — "

    var lifespan = ""
    var isLiving = nodeData.living;

    var birthYear = null;
    var deathYear = null;

    if (nodeData.birthDate != null) {
        birthYear = '';

        var birthParts = nodeData.birthDate.split("-", 2);
        if (birthParts.length > 1) birthYear += MONTH_MAPPING[birthParts[1]] + ' ';

        birthYear += birthParts[0];
    }
    if (nodeData.deathDate != null) {
        deathYear = '';

        var deathParts = nodeData.deathDate.split("-", 2);
        if (deathParts.length > 1) deathYear += MONTH_MAPPING[deathParts[1]] + ' ';

        deathYear += deathParts[0];
    }

    if (birthYear == null && deathYear == null && isLiving == null) {
        return "Living";
    }

    if (birthYear == null && deathYear == null) {
        if (isLiving) {
            return "Living";
        } else {
            return "Deceased";
        }
    }

    if (birthYear == null && deathYear != null) {
        return " — " + deathYear;
    }

    if (birthYear != null && deathYear == null) {
        if (isLiving) {
            return birthYear + SEPARATOR + "Living";
        } else {
            return birthYear + SEPARATOR + "Deceased";
        }
    }

    if (birthYear != null && deathYear != null) {
        return birthYear + SEPARATOR + deathYear;
    }

    return "Living"
}

function onTemplateRender(event, data) {
    if (data.templateName != "TreeItemTemplate") {
        return;
    }

    var itemConfig = data.context;

    switch (data.renderingMode) {
        case primitives.RenderingMode.Create:
            break;

        case primitives.RenderingMode.Update:
            if (itemConfig.gender == "female") {
                data.element.classList.remove("male");
            } else {
                data.element.classList.remove("female");
            }

            break;
    }

    var photoElement = data.element.firstChild.firstChild;
    var displayNameElement = data.element.children[1].firstChild.firstChild;
    var lifeSpanElement = data.element.children[1].firstChild.children[1];

    var displayName = getDisplayName(itemConfig);
    var lifeSpan = getLifeSpan(itemConfig);

    displayNameElement.textContent = displayName;
    lifeSpanElement.textContent = lifeSpan;

    photoElement.alt = displayName;
    data.element.classList.add(itemConfig.gender);

    if (itemConfig.hasImage) {
        photoElement.src = "../../assets/images/family/" + itemConfig.id + ".png";
    } else {
        if (IS_DARK) {
            photoElement.src = "../../assets/images/family/" + itemConfig.gender + ".dark.png";
        } else {
            photoElement.src = "../../assets/images/family/" + itemConfig.gender + ".png";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (IS_DARK) {
        document.querySelector("body").classList.add('dark');
    }

    var options = new primitives.FamConfig();

    options.pageFitMode = primitives.PageFitMode.None;
    options.updateMode = primitives.UpdateMode.Recreate,

    options.items = TREE_DATA;
    options.cursorItem = 2;
    options.linesWidth = 1.5;
    options.linesColor = IS_DARK ? "#7f7f7f" : "#bbbcbc";
    options.hasSelectorCheckbox = primitives.Enabled.False;
    options.normalLevelShift = 20;
    options.dotLevelShift = 20;
    options.lineLevelShift = 20;
    options.normalItemsInterval = 10;
    options.dotItemsInterval = 10;
    options.lineItemsInterval = 10;
    options.arrowsDirection = false;
    options.showExtraArrows = false;
    options.orientationType = primitives.OrientationType.Right;
    options.bevelSize = 8;

    options.templates = [template, combiner];
    options.onItemRender = onTemplateRender;
    options.defaultTemplateName = "TreeItemTemplate";
    options.connectorType = primitives.ConnectorType.Curved;
    options.elbowDotSize = 3;
    // options.alignBylevels = false;
    // options.enableMatrixLayout = true;
    // options.groupByType = primitives.GroupByType.Children;

    // var annotationList = [];
    // TREE_DATA.forEach(function (item, index) {
    //     console.log(item, index);
    // });

    // console.log(primitives.ZOrderType.Foreground)

    // options.annotations = annotationList;
    // options.annotations = [
    //     {
    //         annotationType: primitives.AnnotationType.HighlightPath,
    //         items: ["TEMP-012", "TEMP-011", "TEMP-002"],
    //         color: "#9acaca",
    //         lineWidth: 1,
    //         opacity: 1,
    //         showArrows: false,
    //         zOrderType: 2,
    //     },
    //     {
    //         annotationType: primitives.AnnotationType.HighlightPath,
    //         items: ["TEMP-012", "TEMP-011", "TEMP-002"],
    //         color: "#fff9fa",
    //         lineWidth: 4,
    //         opacity: 1,
    //         showArrows: false,
    //         zOrderType: 2,
    //         lineType: 0,
    //     },
    // ];

    var control = primitives.FamDiagram(document.getElementById("tree"), options);
});