template['GenderBand'] = function() {
  return $(
    bino.Shape,
    {
      margin: new bino.Margin(0, 0, 0, ui.measure.node.height - 1),
      figure: "Rectangle",
      stroke: null,
      strokeWidth: 0,
    },
    new bino.Binding("desiredSize", function(nodeData) {
      return new bino.Size(ui.measure.genderBand.width, nodeData.height);
    }),
    new bino.Binding("fill", function(nodeData) {
      return nodeData.gender.toUpperCase() == 'M' ? ui.color.male : ui.color.female;
    })
  );
}

template["DNAMarker"] = function() {
  return $(
    bino.Panel, "Auto",
    {
      margin: new bino.Margin(
        ui.measure.marker.margin,
        0,
        0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      ),
    },
    new bino.Binding("visible", function(nodeData) {
      return nodeData.hasDNA;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', fill: ui.color.marker.dna, stroke: null },
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale, source: 'images/dna.svg' },
    ),
  );
}

template["SecondMarker"] = function() {
  return $(
    bino.Panel, "Auto",
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin + (ui.measure.marker.width + ui.measure.marker.margin) - 3;
      if (!nodeData.hasDNA) {
        topMargin = ui.measure.marker.margin;
      }
      return new bino.Margin(
        topMargin, 0, 0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      )
    }),
    new bino.Binding("visible", function(nodeData) {
      return nodeData.marker !== undefined;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null },
      new bino.Binding("fill", function(nodeData) {
        if (ui.color.marker[nodeData.marker] !== undefined) {
          return ui.color.marker[nodeData.marker];
        }
        return ui.color.marker.default;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.marker === undefined) {
          return '';
        }
        return `images/${nodeData.marker}.svg`;
      }),
    ),
  );
}
