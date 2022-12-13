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

var color_a = '#ffffff';
var color_b = '#000000';
var color_c = '#000000';

var male_avatar = '../assets/images/family/male.png'
var female_avatar = '../assets/images/family/female.png'

if (isdark()) {
  document.querySelector("body").classList.add('dark');
  color_a = '#2f2f2f';
  color_b = '#fefefe';
  color_c = '#bdc1c6';

  male_avatar = '../assets/images/family/male.dark.png';
  female_avatar = '../assets/images/family/female.dark.png';
}


// Some constants
const subtractor = 2;
const node = {
  margin: 10 - subtractor,
  height: 51 - subtractor,
  width: 250 - (subtractor * 2),
  background: color_a
}

// For conciseness. See the "Building Parts" intro page for more
var $ = go.GraphObject.make;

var tree = $(
  go.Diagram,
  "tree",
  {
    "undoManager.isEnabled": true,
    padding: node.height - 10,
    initialAutoScale: go.Diagram.Uniform,
    layout: $(
      go.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(node.margin * 6), 20),
        nodeSpacing: node.margin * 1.5,
      }
    )
  }
);

tree.addDiagramListener("ObjectSingleClicked", function(e) {
  var part = e.subject.part;
  if (!(part instanceof go.Link)) console.log("Clicked on " + part.data.key);
});

tree.nodeTemplate = $(
  go.Node,
  {
    selectable: false,
  },
    new go.Binding('height', 'height'),
    new go.Binding('width', 'width'),
  $(
    go.Shape,
    {
      desiredSize: new go.Size(node.width, node.height),
      figure: 'RoundedRectangle',
      fill: node.background,
      stroke: null,
      shadowVisible: true
    }
  ),
  $(
    go.Picture,
    {
      width: node.height,
      height: node.height,
      margin: new go.Margin(0.5, 0, 0, 0)
    },
    new go.Binding("source", function(nodeData) {
      if (nodeData.hasImage) {
        return '../assets/images/family/' + nodeData.key + '.png';
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
      desiredSize: new go.Size(4, node.height),
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
      font: "700 14px Google Sans, sans-serif",
      margin: new go.Margin(node.margin + 1, node.margin, 0, node.height + node.margin + 5),
      maxSize: new go.Size(node.width - node.height, 24),
      stroke: color_b
    },
    new go.Binding("text", function(nodeData) {
      let middleInitialsArray  = nodeData.name.middle.trim().split(' ');
      let middleInitialsString = '';

      if (middleInitialsArray[0] != '') {
        for (let i = 0; i < middleInitialsArray.length; i++) {
          middleInitialsString += middleInitialsArray[i][0] + '. '
        }
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
      stroke: color_c
    },
    new go.Binding("text", function(nodeData) {
      return nodeData.lifespan + ' • ' + nodeData.key;
    })
  ),
);

// define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = $(
  go.Link,
  {
    selectable: false,
    routing: go.Link.Orthogonal,
    corner: 0
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
model.nodeDataArray = TREE_DATA;
tree.model = model;

document.querySelector('footer').classList.remove("hidden");

