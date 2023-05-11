template['Node'] = function() {
  return $(
    bino.Shape,
    {
      figure: 'RoundedRectangle',
      fill: ui.color.node.background,
      stroke: null,
      strokeWidth: 0,
      shadowVisible: true
    },
    new bino.Binding('desiredSize', function(nodeData) {
      return new bino.Size(ui.measure.node.width, nodeData.height);
    }),
  );
}

template['TopLeftBorderRadius'] = function() {
  return $(
    bino.Shape, 'TopLeftBorderRadius',
    {
      fill: ui.color.background,
      stroke: null,
      margin: new bino.Margin(0, 0, 0, 0),
      strokeWidth: 0,
    }
  );
}

template['BottomLeftBorderRadius'] = function() {
  return $(
    bino.Shape, 'BottomLeftBorderRadius',
    { fill: ui.color.background, stroke: null, strokeWidth: 0 },
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(nodeData.height - 5.8, 0, 0, 0);
    }),
  );
}
