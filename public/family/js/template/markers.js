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
      {
        scale: ui.measure.marker.scale,
        source: 'images/dna.svg',
        sourceCrossOrigin: function(pict) { return '*'; },
      },
    ),
  );
}

template["SecondMarker"] = function() {
  return $(
    bino.Panel, "Auto",
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin + (ui.measure.marker.width + ui.measure.marker.margin) - 2;
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
      { figure: 'Circle', fill: ui.color.marker.default, stroke: null },
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale, sourceCrossOrigin: function(pict) { return '*'; } },
      new bino.Binding("source", function(nodeData) {
        return `images/${nodeData.marker}.svg`;
      }),
    ),
  );
}
