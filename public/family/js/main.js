function useNonePhoto(nodeData) {
  return (!nodeData.hasImage && nodeData.birthDate == null && nodeData.deathDate == null && !nodeData.living);
}

/**
 * Get lifespan information from given nodeData.
 * @param {Object} nodeData - Contains living, birthDate, and deathDate data.
 * @return {string} Formatted lifespan string.
 */
function getLifeSpan(nodeData) {
  /**
   * Format date string as 'day month year'.
   * @param {string} dateString - Date in 'YYYY-MM-DD' format.
   * @return {string|null} Formatted date or null if dateString is falsy.
   */
  const formatYear = (dateString) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    if (!dateString) {
      return null;
    }

    let [year, month, day] = dateString.split('-', 3);

    if (month) {
      day = (day === undefined) ? "" : day + " ";
      return `${day}${months[parseInt(month, 10) - 1]} ${year}`;
    }

    return year;
  };

  const separator = ' — ';
  const { living, birthDate, deathDate } = nodeData;

  const birthYear = formatYear(birthDate);
  const deathYear = formatYear(deathDate);

  // If both birthYear and deathYear do not exist, return
  // "Living" or "Deceased" based on the living flag.
  if (!birthYear && !deathYear) {
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

var color_a = '#ffffff';
var color_b = '#000000';
var color_c = '#222222';
var color_b2 = '#bdbdbd';  // color of nameless people
var color_c2 = '#b0b0b0';  // color of nameless people

var male_avatar = 'images/male.png';
var female_avatar = 'images/female.png';
var none_avatar = 'images/none.png';

if (window.isDark()) {
  document.querySelector("body").classList.add('dark');
  color_a = '#2f2f2f';
  color_b = '#fefefe';
  color_c = '#bdc1c6';
  color_b2 = '#909090';
  color_c2 = '#929292';

  male_avatar = 'images/male.dark.png';
  female_avatar = 'images/female.dark.png';
  none_avatar = 'images/none.dark.png'
}


// Some constants
const subtractor = 2;
const node = {
  margin: 10 - subtractor,
  height: 51 - subtractor,
  width: 252 - (subtractor * 2),
  background: color_a
}

// For conciseness. See the "Building Parts" intro page for more
var $ = go.GraphObject.make;

var tree = $(
  go.Diagram,
  "tree",
  {
    // "undoManager.isEnabled": true,
    padding: node.height - 10,
    // initialAutoScale: go.Diagram.Uniform,
    scale: 0.85,
    layout: $(
      go.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(node.margin * 6), 20),
        nodeSpacing: node.margin * 1.5,
      }
    )
  }
);

tree.nodeTemplate = $(
  go.Node,
  {
    selectable: false,
    // click: function (e, obj) { // Event listener for node click
    //   console.log(obj);
    //   addDot(obj.Ib.x, obj.Ib.y)
    // },
  },
    new go.Binding('height', function(nodeData) {
      if (useNonePhoto(nodeData)) {
        return node.height - 15;
      }
      return node.height;
    }),
    new go.Binding('width', 'width'),
  $(
    go.Shape,
    {
      figure: 'RoundedRectangle',
      fill: node.background,
      stroke: null,
      shadowVisible: true
    },
    new go.Binding('desiredSize', function(nodeData) {
      if (useNonePhoto(nodeData)) {
        return new go.Size(node.width, node.height - 15);
      }
      return new go.Size(node.width, node.height);
    }),
  ),
  $(
    go.Picture,
    {
      width: node.height,
      margin: new go.Margin(0.5, 0, 0, 0)
    },
    new go.Binding("height", function(nodeData) {
      if (useNonePhoto(nodeData)) {
        return node.height - 15;
      }
      return node.height;
    }),
    new go.Binding("source", function(nodeData) {
      if (nodeData.hasImage) {
        return 'images/' + nodeData.key + '.png';
      }
      if (nodeData.birthDate == null && nodeData.deathDate == null && !nodeData.living) {
        return none_avatar;
      }
      if (nodeData.gender.toUpperCase() == 'M') {
        return male_avatar;
      }
      return female_avatar;
    })
  ),
  $(
    go.Shape,
    {
      desiredSize: new go.Size(3, node.height),
      figure: "Rectangle",
      stroke: null,
      margin: new go.Margin(0, 0, 0, node.height - 1)
    },
    new go.Binding("fill", function(nodeData) {
      return nodeData.gender.toUpperCase() == 'M' ? '#2799fd' : '#ea1a68';
    })
  ),
  $(
    go.TextBlock,
    {
      font: "700 15px Google Sans, sans-serif",
      margin: new go.Margin(node.margin + 1, node.margin, 0, node.height + node.margin + 5),
      maxSize: new go.Size(node.width - node.height, 24),
    },
    new go.Binding("stroke", function(nodeData) {
      if (nodeData.name.first.includes("known")) {
        return color_b2;
      }
      return color_b;
    }),
    new go.Binding("text", function(nodeData) {
      let middleInitialsArray  = nodeData.name.middle.trim().split(' ');
      let middleInitialsString = '';

      if (middleInitialsArray[0] != '') {
        // for (let i = 0; i < middleInitialsArray.length; i++) {
        //   middleInitialsString += middleInitialsArray[i][0] + '. '
        // }
        middleInitialsString += middleInitialsArray[0][0] + '. '
      }

      return nodeData.name.first + " " + middleInitialsString + nodeData.name.last;
    })
  ),
  $(
    go.TextBlock,
    {
      font: "400 12px Roboto, sans-serif",
      margin: new go.Margin(24 + parseInt(node.margin / 2), node.margin, node.margin, node.height + node.margin + 5),
      maxSize: new go.Size(node.width - node.height, 24),
    },
    new go.Binding("stroke", function(nodeData) {
      if (nodeData.name.first.includes("nknown")) {
        return color_c2;
      }
      return color_c;
    }),
    new go.Binding("text", function(nodeData) {
      return getLifeSpan(nodeData); // + ' • ' + nodeData.key;
    })
  ),
  $(
    go.Shape,
    {
      figure: 'Circle',
      fill: "#da50f2",
      stroke: null,
      margin: new go.Margin(6, 0, 0, 236)
    },
    new go.Binding('desiredSize', function(nodeData) {
      if (nodeData.hasDNATest) {
        return new go.Size(6, 6);
      }
      return new go.Size(0, 0);
    }),
  ),
);

// define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = $(
  go.Link,
  {
    selectable: false,
    routing: go.Link.Orthogonal,
  },

  // the link path, a Shape
  $(
    go.Shape,
    {
      strokeWidth: 1,
      stroke: "#9f9f9f"
    }
  )
);


var model = $(go.TreeModel);
var treeData = [];
treeData = TREE_DATA;

model.nodeDataArray = treeData;
tree.model = model;

document.querySelector('footer').classList.remove("hidden");

