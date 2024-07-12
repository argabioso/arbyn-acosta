template['Node'] = function() {
  return $(
    bino.Shape,
    {
      figure: 'RoundedRectangle',
      fill: ui.color.node.background,
      strokeWidth: 1,
    },
    new bino.Binding('desiredSize', '', function(nodeData) {
      return new bino.Size(ui.measure.node.widths[nodeData.generation], nodeData.height - ((nodeData.vitalsCompleteAndVerified && isChecking) ? 1 : 0));
    }),
    new bino.Binding('stroke', '', function(nodeData) {
      return (nodeData.vitalsCompleteAndVerified && isChecking) ? ui.color.node.stroke : ui.color.node.background;
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
    new bino.Binding("margin", '', function(nodeData) {
      return new bino.Margin(nodeData.height - 5.8, 0, 0, 0);
    }),
  );
}

template['CheckFill'] = function() {
  if (!isChecking) {
    return $(
      bino.Panel,
      new bino.Binding("visible", '', function(nodeData) {
        return false;
      })
    );
  }

  return $(
    bino.Panel,
    new bino.Binding("visible", '', function(nodeData) {
      return isChecking;
    }),
    $(
      bino.Shape,
      {
        figure: 'Rectangle',
        stroke: null,
        strokeWidth: 0,
        opacity: 0.7,
        margin: new bino.Margin(0.2, 0, 0, 0.2),
      },
      new bino.Binding("visible", '', function(nodeData) {
        return isChecking;
      }),
      new bino.Binding('desiredSize', '', function(nodeData) {
        return new bino.Size(
          (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4,
          nodeData.height - 0.4,
        );
      }),
      new bino.Binding('fill', '', function(nodeData) {
        return nodeData.verificationBgColor;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.name * 0.92}px Google Sans, sans-serif`,
        height: ui.font.size.name + 2,
        textAlign: 'center',
        opacity: 0.55,
      },
      new bino.Binding("visible", '', function(nodeData) {
        return isChecking;
      }),
      new bino.Binding('width', '', function(nodeData) {
        return (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4;
      }),
      new bino.Binding('stroke', '', function(nodeData) {
        return '#111111';
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          nodeData.height / 2 - 11, 0, 0, 0,
        );
      }),
      new bino.Binding('text', '', function(nodeData) {
        // let prettySourceCount = `${String(nodeData.sourceCount).padStart(2, '0')}`;
        // let prettyexpectedSourceCount = `${String(nodeData.expectedSourceCount).padStart(2, '0')}`;

        let prettySourceCount = `${nodeData.sourceCount}`;
        let prettyexpectedSourceCount = `${nodeData.expectedSourceCount}`;

        if (prettySourceCount === 'undefined') {
          return '';
        }
        // let sentimentSourceCount = (nodeData.sentimentSourceCount > 0) ? ` / ${sentimentSourceCount}` : '';
        let sentimentSourceCount = ''
        if (nodeData.sentimentSourceCount > 0) {
          sentimentSourceCount = `${nodeData.sentimentSourceCount} / `
        }
        return `${sentimentSourceCount}${prettySourceCount} / ${prettyexpectedSourceCount}`;
      })
    ),
    $(
      bino.TextBlock,
      {
        font: `700 8px "Google Sans Text", sans-serif`,
        height: ui.font.size.details + 2,
        textAlign: 'center',
        opacity: 0.6,
      },
      new bino.Binding("visible", '', function(nodeData) {
        return isChecking;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          nodeData.height / 2 + 4, 0, 0, 0,
        );
      }),
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4;
      }),
      // new bino.Binding("margin", '', function(nodeData) {
      //   return new bino.Margin(
      //     24 + parseInt(ui.measure.node.padding / 2),
      //     0,
      //     0,
      //     ui.measure.node.height + ui.font.size.details,
      //   );
      // }),
      new bino.Binding("stroke", '', function(nodeData) {
        return '#111111';
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (nodeData.sourceCount === undefined) {
          return '';
        }
        return 'CHECKS PASSED';
      }),
    )
  );
}
