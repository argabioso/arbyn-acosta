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

template["DNADot"] = function() {
  return $(
    bino.Shape,
    {
      figure: 'Circle',
      fill: ui.color.dna,
      stroke: null,
      margin: new bino.Margin(
        ui.measure.dna.radius,
        0,
        0,
        ui.measure.node.width - (ui.measure.dna.radius * 2)
      ),
    },
    new bino.Binding('desiredSize', function(nodeData) {
      if (nodeData.hasDNATest) {
        return new bino.Size(ui.measure.dna.radius, ui.measure.dna.radius);
      }
      return new bino.Size(0, 0);
    }),
  );
}
