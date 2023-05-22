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

template['CheckFill'] = function() {
  return $(
    bino.Panel,
    $(
      bino.Shape,
      {
        figure: 'Rectangle',
        stroke: null,
        strokeWidth: 0,
        shadowVisible: true,
        opacity: 0.75,
        margin: new bino.Margin(0.2, 0, 0, 0.2),
      },
      new bino.Binding("visible", function(nodeData) {
        return isChecking;
      }),
      new bino.Binding('desiredSize', function(nodeData) {
        return new bino.Size(
          (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4,
          nodeData.height - 0.4,
        );
      }),
      new bino.Binding('fill', function(nodeData) {
        return nodeData.verificationBgColor;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.name}px Google Sans, sans-serif`,
        height: ui.font.size.name + 2,
        textAlign: 'center',
      },
      new bino.Binding('width', function(nodeData) {
        return (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4;
      }),
      new bino.Binding('stroke', function(nodeData) {
        return pSBC(0.85, nodeData.verificationBgColor, '#111111');
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          nodeData.height / 2 - 7, 0, 0, 0,
        );
      }),
      new bino.Binding('text', function(nodeData) {
        let prettySourceCount = `${String(nodeData.sourceCount).padStart(2, '0')}`;
        let prettyexpectedSourceCount = `${String(nodeData.expectedSourceCount).padStart(2, '0')}`;

        if (prettySourceCount === 'undefined') {
          return '';
        }
        return `${prettySourceCount} / ${prettyexpectedSourceCount}`;
      })
    )
  );
}
