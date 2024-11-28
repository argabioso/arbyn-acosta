var tree = $(
  bino.Diagram,
  "tree",
  {
    isReadOnly: true,
    padding: ui.measure.padding,
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
  }
);

tree.nodeTemplate = $(
  bino.Node, {
    selectable: false,
    cursor: "pointer",
    click: (e, node) => {
      showSidebar(node)
    },
  },
  new bino.Binding('height', 'height'),
  new bino.Binding('width', 'width'),
  template.Node(),
  template.Photo(),
  template.Name(),
  template.DetailRow1(),
  template.DetailRow2(),
  template.DetailRow3(),
  template.DetailRow4(),

  // Markers should always be at the end
  template.DNAMarker(),
  template.FirstMarker(),
  template.SecondMarker(),
  template.ThirdMarker(),
  template.FourthMarker(),
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

window.onload = function() {
  // Loop through all localStorage keys
  for (let i = 0; i < localStorage.length; i++) {
      // Get the key name
      let key = localStorage.key(i);

      // Check if the key starts with "family-tree-"
      if (key && key.startsWith('family-tree-')) {
          // Remove the key from localStorage
          localStorage.removeItem(key);
          // Since we've removed an item, adjust the index to account for the shift in the keys
          i--;
      }
  }

  // Show the copyright once everything loads up
  document.querySelector('footer').classList.remove("hidden");

  for (let fid in STORIES) {
    let person = TREE_FIDMAP[fid];
    if (isPrivate && person.living) {
      continue;
    }
    addPersonDetails({"data": person, "key": person.key});
  }

  let Id = window.location.get("id");
  if (Id) {
    let decodedId = decodeUrlSafeBase64ToUtf8(Id);

    if (TREE_KEYMAP[decodedId]) {
      let node = {'key': decodedId, 'data': TREE_KEYMAP[decodedId]}
      showSidebar(node);
    }
  }

  const closeButton = document.getElementById('personDetails');
  closeButton.addEventListener('hide.bs.offcanvas', () => {
    const encodedKey = window.location.get("id");
    const sidebarContainer = document.getElementById('personDetailsDesc');

    localStorage.setItem(`family-tree-id-${encodedKey}-scroll`, sidebarContainer.scrollTop);

    removeQueryParam('id');
  });
};

// tree.addDiagramListener("ObjectSingleClicked", (e) => {
//     var clicked = e.subject.part;  // Get the clicked part, which could be a Node, a Link, etc.
//     if (clicked instanceof bino.Node) {  // Check if the clicked part is actually a node
//         // Perform the action you want, in this case, an alert
//         alert("Clicked on node with key: " + clicked.data.key);
//     }
// });
