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
    return true;
  }
  return false;
}

const IS_DARK = isdark();
const BACKGROUND_COLOR = IS_DARK ? "#202124" : "#f3f4f5";
const CONNECTION_COLOR = IS_DARK ? "#7f7f7f" : "#bbbcbc";

const query = window.location.get("q");
let queryIsId = false;

if (query != undefined) {
  let hasHyphen = query.match('-');
  if (hasHyphen != null) {
    let queryLeft = query.split("-", 1)[0];
    queryIsId = queryLeft.length == 4;
    queryIsId = query.length == 8 && hasHyphen.length == 1 && queryIsId;
  }
}

let treeData = rawTreeData;
let parentCombinations = {};

// Special case for siblings, also parent addition
for (let i = 0, imax = treeData.length; i < imax; i++) {
  let person = treeData[i];

  // parent addition
  if (person.parents !== undefined && person.parents.length >= 1) {
    let parentA = person.parents[0];
    let parentB = person.parents[1];

    if (parentCombinations[parentA] === undefined) {
      parentCombinations[parentA] = [];
    }

    if (parentB !== undefined) {
      if (!parentCombinations[parentA].includes(parentB)) {
        parentCombinations[parentA].push(parentB);
      }
      if (parentCombinations[parentB] === undefined) {
        parentCombinations[parentB] = [];
      } else {
        if (!parentCombinations[parentB].includes(parentA)) {
          parentCombinations[parentB].push(parentA);
        }
      }
    }
  }

  let siblings = treeData.getbys(person.parents, 'parents');

  if (siblings.length != 0) {
    person.siblings = [];
    for (let j = 0, jmax = siblings.length; j < jmax; j++) {
      let sibling = siblings[j];
      if (person.id != sibling.id) {
        person.siblings.push(sibling.id);
      }
    }
  }
}

// Add special nodes for spouses
let annotations = [];
for (let i = 0, imax = treeData.length; i < imax; i++) {
  let person = treeData[i];

  if (person.spouses !== undefined) {
    for (let j = 0, imax = person.spouses.length; j < imax; j++) {
      let spouseId = person.spouses[j];
      let spouseConnectionId = person.id + "+" + spouseId;

      treeData.push(
        {
          id: spouseConnectionId,
          gender: "male", // doesn't really matter
          hasImage: false,
          name: {
            first: "",
            middle: "",
            last: ""
          },
          birthDate: null,
          deathDate: null,
          living: false,
          parents: [
            person.id,
            spouseId,
          ],
          templateName: "CombinerTemplate",
        }
      )

      annotations = annotations.concat([
        {
            annotationType: primitives.AnnotationType.HighlightPath,
            items: [spouseConnectionId, person.id],
            color: BACKGROUND_COLOR,
            lineWidth: 6,
            opacity: 1,
            showArrows: false,
            zOrderType: primitives.ZOrderType.Foreground,
        },
        {
            annotationType: primitives.AnnotationType.HighlightPath,
            items: [spouseConnectionId, spouseId],
            color: BACKGROUND_COLOR,
            lineWidth: 6,
            opacity: 1,
            showArrows: false,
            zOrderType: primitives.ZOrderType.Foreground,
        },
        {
            annotationType: primitives.AnnotationType.HighlightPath,
            items: [person.id, spouseId],
            color: CONNECTION_COLOR,
            lineWidth: 1.5,
            opacity: 1,
            showArrows: false,
            zOrderType: primitives.ZOrderType.Foreground,
        },
      ]);
    }
  }

  else if (parentCombinations[person.id] !== undefined) {
    person.spouses = parentCombinations[person.id];
  }
}

treeData = filterPersons(query, treeData);


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

var template = new primitives.TemplateConfig();
var combiner = new primitives.TemplateConfig();

var HEIGHT = 45; // ONLY CHANGE THIS
var WIDTH = 233 / 45 * HEIGHT;

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

        var birthParts = nodeData.birthDate.split("-", 3);
        if (birthParts.length >= 3) {
            birthYear += birthParts[2] + ' ';
            birthYear += MONTH_MAPPING[birthParts[1]] + ' ';
        }
        else if (birthParts.length == 2) {
            birthYear += MONTH_MAPPING[birthParts[1]] + ' ';
        }

        birthYear += birthParts[0];
    }
    if (nodeData.deathDate != null) {
        deathYear = '';

        var deathParts = nodeData.deathDate.split("-", 3);
        if (deathParts.length >= 3) {
            deathYear += deathParts[2] + ' ';
            deathYear += MONTH_MAPPING[deathParts[1]] + ' ';
        }
        else if (deathParts.length == 2) {
            deathYear += MONTH_MAPPING[deathParts[1]] + ' ';
        }

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
            if (itemConfig.gender == "female") {
                data.element.classList.remove("male");
            } else {
                data.element.classList.remove("female");
            }

            if (itemConfig.adopted) {
                data.element.classList.add("adopted");
            } else {
                data.element.classList.remove("adopted");
            }

            break;

        case primitives.RenderingMode.Update:
            if (itemConfig.gender == "female") {
                data.element.classList.remove("male");
            } else {
                data.element.classList.remove("female");
            }

            if (itemConfig.adopted) {
                data.element.classList.add("adopted");
            } else {
                data.element.classList.remove("adopted");
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

var control = null;
document.addEventListener('DOMContentLoaded', function () {
    if (IS_DARK) {
        document.querySelector("body").classList.add('dark');
    }

    var options = new primitives.FamConfig();

    options.pageFitMode = primitives.PageFitMode.None;
    options.updateMode = primitives.UpdateMode.Refresh,

    options.items = treeData;
    options.cursorItem = 2;
    options.linesWidth = 1.5;
    options.linesColor = CONNECTION_COLOR;
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
    options.groupByType = primitives.GroupByType.Children;

    // var annotationList = [];
    // treeData.forEach(function (item, index) {
    //     console.log(item, index);
    // });

    // console.log(primitives.ZOrderType.Foreground)

    options.annotations = annotations;
    // options.annotations = [
    //     {
    //         annotationType: primitives.AnnotationType.HighlightPath,
    //         items: ["GQX8-CQP", "GQJK-G8W"], //"GQJK-L51", "GQJK-G8W"
    //         color: BACKGROUND_COLOR,
    //         lineWidth: 6,
    //         opacity: 1,
    //         showArrows: false,
    //         zOrderType: primitives.ZOrderType.Foreground,
    //     },
    //     {
    //         annotationType: primitives.AnnotationType.HighlightPath,
    //         items: ["GQX8-CQP", "GQJK-L51"], //"GQJK-L51", "GQJK-G8W"
    //         color: BACKGROUND_COLOR,
    //         lineWidth: 6,
    //         opacity: 1,
    //         showArrows: false,
    //         zOrderType: primitives.ZOrderType.Foreground,
    //     },
    //     {
    //         annotationType: primitives.AnnotationType.HighlightPath,
    //         items: ["GQJK-G8W", "GQJK-L51"],
    //         color: CONNECTION_COLOR,
    //         lineWidth: 1.5,
    //         opacity: 1,
    //         showArrows: false,
    //         zOrderType: primitives.ZOrderType.Foreground,
    //     },
    // ];

    control = primitives.FamDiagram(document.getElementById("tree"), options);
});