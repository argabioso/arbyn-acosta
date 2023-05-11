var tree = $(
  bino.Diagram,
  "tree",
  {
    padding: ui.measure.padding,
    scale: 0.85,
    layout: $(
      bino.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(ui.measure.node.margin * 4), 20),
        nodeSpacing: ui.measure.node.margin,
      }
    ),
    allowHorizontalScroll: true,
    allowSelect: false,
    allowVerticalScroll: true,
    allowZoom: true,
    hasHorizontalScrollbar: false,
    hasVerticalScrollbar: false
  }
);

tree.nodeTemplate = $(
  bino.Node, { selectable: false },
  new bino.Binding('height', 'height'),
  new bino.Binding('width', 'width'),
  template.Node(),
  template.Photo(),
  template.Name(),
  template.Lifespan(),
  template.BirthDeathPlace1(),
  template.BirthDeathPlace2(),

  // Markers should always be at the end
  template.DNADot(),
  template.GenderBand(),
  template.TopLeftBorderRadius(),
  template.BottomLeftBorderRadius(),
);

// Define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = $(
  bino.Link,
  { selectable: false, routing: bino.Link.Orthogonal },
  $(bino.Shape, { strokeWidth: 1, stroke: ui.color.link }),
);

// Create the tree diagram
let model = $(bino.TreeModel);
model.nodeDataArray = TREE_DATA;
tree.model = model;

// Show the copyright once everything loads up
document.querySelector('footer').classList.remove("hidden");
