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
      return nodeData.hasDNA !== undefined && nodeData.hasDNA;
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
        return MARKERS["dna"];
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(2, 0, 0, 2);
      }),
    ),
  );
}

template["FirstMarker"] = function() {
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
        if (MARKERS[nodeData.marker] === undefined) {
          if (isDark) {
            return `images/icons/${nodeData.marker}.dark.svg`;
          }
          return `images/icons/${nodeData.marker}.svg`;
        }
        return MARKERS[nodeData.marker];
      }),
      new bino.Binding("margin", function(nodeData) {
        return marginConditions(nodeData.marker);
      }),
    ),
  );
}

template["SecondMarker"] = function() {
  return $(
    bino.Panel,
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin + (ui.measure.marker.width + ui.measure.marker.margin) - 3;
      return new bino.Margin(
        topMargin, 0, 0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      )
    }),
    new bino.Binding("visible", function(nodeData) {
      return nodeData.marker2 !== undefined && !nodeData.hasDNA;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: ui.measure.marker.width },
      new bino.Binding("fill", function(nodeData) {
        if (ui.color.marker.background[nodeData.marker2] !== undefined) {
          return ui.color.marker.background[nodeData.marker2];
        }
        return ui.color.marker.background.default;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.marker2 === undefined) {
          return '';
        }
        if (MARKERS[nodeData.marker2] === undefined) {
          if (isDark && nodeData.marker2 !== 3) {
            return `images/icons/${nodeData.marker2}.dark.svg`;
          }
          return `images/icons/${nodeData.marker2}.svg`;
        }
        return MARKERS[nodeData.marker2];
      }),
      new bino.Binding("margin", function(nodeData) {
        return marginConditions(nodeData.marker2);
      }),
    ),
  );
}

function marginConditions(marker) {
  if (marker === 'military') {
    return new bino.Margin(1.5, 0, 0, 2);
  }
  if (marker === 'housewife') {
    return new bino.Margin(0.5, 0, 0, 0.5);
  }
  if (marker === 'farming') {
    return new bino.Margin(2, 0, 0, 1);
  }
  if (marker === 'train') {
    return new bino.Margin(3, 0, 0, 2);
  }
  if (marker === 'cattle') {
    return new bino.Margin(-0.25, 0, 0, 0.75);
  }
  if (marker === 'sales') {
    return new bino.Margin(3, 0, 0, 3);
  }
  return new bino.Margin(2, 0, 0, 2);
}
