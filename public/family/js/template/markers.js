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
    bino.Panel,
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin;
      return new bino.Margin(
        topMargin, 0, 0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      )
    }),
    new bino.Binding("visible", function(nodeData) {
      return nodeData.hasDNA;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: ui.measure.marker.width },
      new bino.Binding("fill", function(nodeData) {
        return ui.color.marker.background.dna;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.hasDNA === undefined) {
          return '';
        }
        if (isDark) {
          return 'images/dna.dark.svg';
        }
        return `images/dna.svg`;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(2, 0, 0, 2);
      }),
    ),
  );
}

template["SecondMarker"] = function() {
  return $(
    bino.Panel,
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
      { figure: 'Circle', stroke: null, width: ui.measure.marker.width },
      new bino.Binding("fill", function(nodeData) {
        if (ui.color.marker.background[nodeData.marker] !== undefined) {
          return ui.color.marker.background[nodeData.marker];
        }
        return ui.color.marker.background.default;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.marker === undefined) {
          return '';
        }
        if (isDark) {
          return `images/${nodeData.marker}.dark.svg`;
        }
        return `images/${nodeData.marker}.svg`;
      }),
      new bino.Binding("margin", function(nodeData) {
        if (nodeData.marker === 'farming') {
          return new bino.Margin(2, 0, 0, 1);
        }
        return new bino.Margin(2, 0, 0, 2);
      }),
    ),
  );
}
