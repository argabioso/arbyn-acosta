function useNonePhoto(nodeData) {
  return (!nodeData.hasImage && nodeData.birthDate == null && nodeData.deathDate == null && !nodeData.living);
}

function removeLeadingZero(str) {
  if (str.startsWith("0")) {
    return str.slice(1);
  }
  return str;
}

/**
 * Get lifespan information from given nodeData.
 * @param {Object} nodeData - Contains living, birthDate, and deathDate data.
 * @return {string} Formatted lifespan string.
 */
function getLifeSpan(nodeData, isPrivate) {
  /**
   * Format date string as 'day month year'.
   * @param {string} dateString - Date in 'YYYY-MM-DD' format.
   * @return {string|null} Formatted date or null if dateString is falsy.
   */
  const formatYear = (dateString, isPrivate) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    if (!dateString) {
      return null;
    }

    let [year, month, day] = dateString.split('-', 3);

    if (month) {
      day = (day === undefined || isPrivate) ? "" : day + " ";
      day = removeLeadingZero(day);
      return `${day}${months[parseInt(month, 10) - 1]} ${year}`;
    }

    return year;
  };

  const separator = ' — ';
  const { living, birthDate, deathDate } = nodeData;

  const birthYear = formatYear(birthDate, isPrivate);
  const deathYear = formatYear(deathDate);

  // If both birthYear and deathYear do not exist, return
  // "Living" or "Deceased" based on the living flag.
  if (!birthYear && !deathYear) {
    if (nodeData.birthPlace == null && !nodeData.hasImage) {
      return "";
    }
    return living ? 'Living' : 'Deceased';
  }

  // If birthYear does not exist, return the
  // formatted deathYear with a separator.
  if (!birthYear) {
    return `${separator}${deathYear}`;
  }

  // If deathYear does not exist, return the formatted
  // `birthYear` with a separator and "Living" or "Deceased"
  // based on the living flag.
  if (!deathYear) {
    return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}`;
  }

  // If both birthYear and deathYear exist,
  // return the formatted lifespan string.
  return `${birthYear}${separator}${deathYear}`;
}

var backgroundColor = "#f3f4f5";
var color_a = '#ffffff';
var color_b = '#000000';
var color_c = '#222222';
var color_b2 = '#bdbdbd';  // color of nameless people
var color_c2 = '#b0b0b0';  // color of nameless people

var dnaMarkerColor = "#da4ff2";

var male_avatar = 'images/male.png';
var female_avatar = 'images/female.png';
var maleWideAvatar = 'images/male.wide.png';
var femaleWideAvatar = 'images/female.wide.png';
var none_avatar = 'images/none.png';

var isPrivate = !(window.location.get("private") == "false");
if (window.isDark()) {
  document.querySelector("body").classList.add('dark');
  backgroundColor = "#202124";
  color_a = '#2f2f2f';
  color_b = '#fefefe';
  color_c = '#bdc1c6';
  color_b2 = '#909090';
  color_c2 = '#929292';

  dnaMarkerColor = "#da4ff2";

  male_avatar = 'images/male.dark.png';
  female_avatar = 'images/female.dark.png';
  maleWideAvatar = 'images/male.dark.wide.png';
  femaleWideAvatar = 'images/female.dark.wide.png';
  none_avatar = 'images/none.dark.png'
}

// Some constants
const node = {
  margin: 11,
  padding: 10,
  height: 50,
  width: 268,
  background: color_a
}

// For conciseness. See the "Building Parts" intro page for more
var $ = bino.GraphObject.make;

var tree = $(
  bino.Diagram,
  "tree",
  {
    // "undoManager.isEnabled": true,
    padding: node.height - 10,
    // initialAutoScale: bino.Diagram.Uniform,
    scale: 0.85,
    layout: $(
      bino.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(node.margin * 4), 20),
        nodeSpacing: node.margin,
      }
    ),
    // Your diagram configuration
    allowSelect: false,
    allowHorizontalScroll: true,
    allowVerticalScroll: true,
    allowZoom: true,
    hasHorizontalScrollbar: false,
    hasVerticalScrollbar: false
  }
);

class TopLeftBorderRadius extends bino.Shape {
  constructor() {
    super();
    this._figure = 'TopLeftBorderRadius';
  }

  makeGeometry() {
    const geo = new bino.Geometry();
    const path = new bino.PathFigure(0, 0, true);

    path.add(new bino.PathSegment(bino.PathSegment.Line, 0, 6));
    path.add(new bino.PathSegment(bino.PathSegment.Arc, 180, 90, 6, 6, 6, 6));

    geo.add(path);
    return geo;
  }
}

bino.Shape.defineFigureGenerator('TopLeftBorderRadius', (shape) => {
  const invertedRoundSquareCorner = new TopLeftBorderRadius();
  return invertedRoundSquareCorner.makeGeometry();
});

class BottomLeftBorderRadius extends bino.Shape {
  constructor() {
    super();
    this._figure = 'BottomLeftBorderRadius';
  }

  makeGeometry() {
    const geo = new bino.Geometry();
    const path = new bino.PathFigure(0, 0, true);

    path.add(new bino.PathSegment(bino.PathSegment.Arc, 180, -90, 6, 0, 6, 6));
    path.add(new bino.PathSegment(bino.PathSegment.Line, 0, 6));

    geo.add(path);
    return geo;
  }
}

bino.Shape.defineFigureGenerator('BottomLeftBorderRadius', (shape) => {
  const invertedRoundSquareCorner = new BottomLeftBorderRadius();
  return invertedRoundSquareCorner.makeGeometry();
});

function calculateHeight(nodeData) {
  let height = node.height;
  if (nodeData.birthPlace) height += 15
  else if (useNonePhoto(nodeData)) height -= 15
  return height;
}

tree.nodeTemplate = $(
  bino.Node, { selectable: false },
  new bino.Binding('height', function(nodeData) {
    if (nodeData.birthPlace) return node.height + 15;
    if (useNonePhoto(nodeData)) return node.height - 15;
    return node.height;
  }),
  new bino.Binding('width', 'width'),
  $(
    bino.Shape,
    {
      figure: 'RoundedRectangle',
      fill: node.background,
      stroke: null,
      strokeWidth: 0,
      shadowVisible: true
    },
    new bino.Binding('desiredSize', function(nodeData) {
      return new bino.Size(node.width, calculateHeight(nodeData));
    }),
  ),
  $(
    bino.Picture,
    {
      width: node.height + (15 - 0.4),
      margin: new bino.Margin(0.2, 0, 0, 0.2),
    },
    new bino.Binding("height", function(nodeData) {
      return calculateHeight(nodeData) - 0.4;
    }),
    new bino.Binding("source", function(nodeData) {
      if (nodeData.hasImage) {
        if (nodeData.birthPlace == null) {
          return 'images/' + nodeData.key + '.wide.png';
        }
        return 'images/' + nodeData.key + '.png';
      }
      if (nodeData.birthDate == null && nodeData.deathDate == null && !nodeData.living && nodeData.birthPlace == null) {
        return none_avatar;
      }
      if (nodeData.gender.toUpperCase() == 'M') {
        if (nodeData.birthPlace == null) {
          return maleWideAvatar;
        }
        return male_avatar;
      }
      return female_avatar;
    })
  ),
  $(
    bino.Shape,
    {
      desiredSize: new bino.Size(3, node.height),
      figure: "Rectangle",
      stroke: null,
      strokeWidth: 0,
    },
    new bino.Binding("desiredSize", function(nodeData) {
      if (nodeData.birthPlace) {
      return new bino.Size(3, node.height + 15);
      }
      return new bino.Size(3, node.height);
    }),
    new bino.Binding("margin", function(nodeData) {
      // if (nodeData.birthPlace) {
      //   return new bino.Margin(0, 0, 0, node.height + 14);
      // }
      // return new bino.Margin(0, 0, 0, node.height - 1);
        return new bino.Margin(0, 0, 0, node.height + 14);
    }),
    new bino.Binding("fill", function(nodeData) {
      return nodeData.gender.toUpperCase() == 'M' ? '#2799fd' : '#ea1a68';
    })
  ),
  $(
    bino.TextBlock,
    {
      font: "700 15px Google Sans, sans-serif",
      height: 15 + 2 /* font size + 2 */,
    },
    new bino.Binding("width", function(nodeData) {
      return node.width - 90;
    }),
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(node.padding, node.margin, 0, node.height + 15 + 3 /* for gender band */ + node.padding);
    }),
    new bino.Binding("stroke", function(nodeData) {
      if (nodeData.name.first.includes("known")) {
        return color_b2;
      }
      return color_b;
    }),
    new bino.Binding("text", function(nodeData) {
      return nodeData.fullName;
    })
  ),
  $(
    bino.TextBlock,
    {
      font: "400 12px Roboto, sans-serif",
      height: 12 + 2 /* font size + 2 */,
    },
    new bino.Binding("width", function(nodeData) {
      return node.width - 88;
    }),
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(24 + parseInt(node.padding / 2), node.padding, node.padding, node.height + 15 + 3 /* for gender band */ + node.padding);
    }),
    new bino.Binding("stroke", function(nodeData) {
      if (nodeData.name.first.includes("nknown")) {
        return color_c2;
      }
      return color_c;
    }),
    new bino.Binding("text", function(nodeData) {
      if (isPrivate) {
        return getLifeSpan(nodeData, nodeData.living); // + ' • ' + nodeData.key;
      }
      return getLifeSpan(nodeData, false); // + ' • ' + nodeData.key;
    })
  ),
  $(
    bino.TextBlock,
    {
      font: "400 12px Roboto, sans-serif",
      height: 12 + 2 /* font size + 2 */,
    },
    new bino.Binding("width", function(nodeData) {
      return node.width - 88;
    }),
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(39 + parseInt(node.padding / 2), node.padding, node.padding, node.height + 15 + 3 /* for gender band */ + node.padding);
    }),
    new bino.Binding("stroke", function(nodeData) {
      if (nodeData.name.first.includes("nknown")) {
        return color_c2;
      }
      return color_c;
    }),
    new bino.Binding("text", function(nodeData) {
      return nodeData.birthPlace;
    })
  ),
  $(
    bino.Shape,
    {
      figure: 'Circle',
      fill: dnaMarkerColor,
      stroke: null,
      margin: new bino.Margin(6, 0, 0, 256)
    },
    new bino.Binding('desiredSize', function(nodeData) {
      if (nodeData.hasDNATest) {
        return new bino.Size(6, 6);
      }
      return new bino.Size(0, 0);
    }),
  ),
  $(
    bino.Shape, 'TopLeftBorderRadius',
    { fill: backgroundColor, stroke: null, margin: new bino.Margin(0, 0, 0, 0), strokeWidth: 0 }
  ),
  $(
    bino.Shape, 'BottomLeftBorderRadius',
    { fill: backgroundColor, stroke: null, strokeWidth: 0 },
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(calculateHeight(nodeData) - 5.8, 0, 0, 0);
    })
  ),
);

// define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = $(
  bino.Link,
  {
    selectable: false,
    routing: bino.Link.Orthogonal,
  },

  // the link path, a Shape
  $(
    bino.Shape,
    {
      strokeWidth: 1,
      stroke: "#9f9f9f"
    }
  )
);


var model = $(bino.TreeModel);
var treeData = [];
treeData = TREE_DATA;

model.nodeDataArray = treeData;
tree.model = model;

document.querySelector('footer').classList.remove("hidden");

