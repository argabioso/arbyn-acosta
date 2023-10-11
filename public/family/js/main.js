var tree = $(
  bino.Diagram,
  "tree",
  {
    isReadOnly: true,
    scale: ui.scale,
    layout: $(
      bino.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(ui.measure.node.margin * 4), 20),
        nodeSpacing: ui.measure.node.margin,
      }
    ),
    hasHorizontalScrollbar: false,
    hasVerticalScrollbar: false,
    allowHorizontalScroll: true,
    allowSelect: false,
    allowVerticalScroll: true,
    allowZoom: true,
    padding: new bino.Margin(
      ui.measure.padding,
      ui.measure.padding,
      isAndroid ? ui.measure.bottomPadding : ui.measure.padding,
      ui.measure.padding,
    )
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
  template.DNAMarker(),
  template.FirstMarker(),
  template.SecondMarker(),
  template.GenderBand(),
  template.CheckFill(),
  template.TopLeftBorderRadius(),
  template.BottomLeftBorderRadius(),
);

// Define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = template.Link();

// Create the tree diagram
let model = $(bino.TreeModel);
model.nodeDataArray = TREE_DATA;
tree.model = model;

// Show the copyright once everything loads up
document.querySelector('footer').classList.remove("hidden");
