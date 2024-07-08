template['Name'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `700 ${ui.font.size.name}px Google Sans, sans-serif`,
      height: ui.font.size.name + 2,
    },
    new bino.Binding('width', '', function(nodeData) {
      return (ui.measure.node.width - 94) - 15;
    }),
    new bino.Binding('margin', '', function(nodeData) {
      return new bino.Margin(
        ui.measure.node.padding,
        0, //ui.measure.node.margin,
        0,
        ui.measure.node.height + ui.font.size.details,
      );
    }),
    new bino.Binding('stroke', '', function(nodeData) {
      if (nodeData.firstName.includes('known')) {
        return ui.color.node.nameless.name;
      }
      return ui.color.node.name;
    }),
    new bino.Binding('text', '', function(nodeData) {
      return nodeData.fullName;
    })
  );
}

template['DetailRow1'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px "Google Sans Text", sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 15;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          24 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.text;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow1.text) return '';
        return nodeData.detailsRow1.text;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 15;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          24 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.letter;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow1.letter) return '';
        return `${nodeData.detailsRow1.letter}:`;
      }),
    ),
  );
}

template['DetailRow2'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px "Google Sans Text", sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 33;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 17,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.text;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow2.text) return '';
        return nodeData.detailsRow2.text;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 15;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.letter;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow2.letter) return '';
        return `${nodeData.detailsRow2.letter}:`;
      }),
    ),
  );
}

template['DetailRow3'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px "Google Sans Text", sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 33;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 17,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.text;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow3.text) return '';
        return nodeData.detailsRow3.text;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 15;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.letter;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow3.letter) return '';
        return `${nodeData.detailsRow3.letter}:`;
      }),
    ),
  );
}

template['DetailRow4'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px "Google Sans Text", sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 33;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          70 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 17,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.text;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow4.text) return '';
        return nodeData.detailsRow4.text;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return (ui.measure.node.width - 94) - 15;
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(
          70 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details.letter;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow4.letter) return '';
        return `${nodeData.detailsRow4.letter}:`;
      }),
    ),
  );
}
