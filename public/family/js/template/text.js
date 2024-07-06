template['Name'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `700 ${ui.font.size.name}px Google Sans, sans-serif`,
      height: ui.font.size.name + 2,
    },
    new bino.Binding('width', '', function(nodeData) {
      return ui.measure.node.width - 93;
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

template['Lifespan'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `400 ${ui.font.size.details}px "Google Sans Text", sans-serif`,
      height: ui.font.size.details + 2,
    },
    new bino.Binding("width", '', function(nodeData) {
      return ui.measure.node.width - 94;
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
      return ui.color.node.details;
    }),
    new bino.Binding("text", '', function(nodeData) {
      return nodeData.relativeDates;
    }),
  );
}

template['BirthDeathPlace1'] = function() {
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
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 15,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
          return "";
        }
        if (nodeData.birthPlace != null) {
          return `    ${nodeData.birthPlace}`;
        }
        if (nodeData.deathPlace != null) {
          return `    ${nodeData.deathPlace}`;
        }
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return ui.measure.node.width - 94;
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
        return ui.color.node.details;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
          return "";
        }
        if (nodeData.birthPlace != null) {
          return 'B:';
        }
        if (nodeData.deathPlace != null) {
          return 'D:';
        }
      }),
    ),
  );
}

template['BirthDeathPlace2'] = function() {
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
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 15,
        );
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (nodeData.deathPlace == null || nodeData.birthPlace == null) {
          return "";
        }
        let prefixLetter = nodeData.living ? 'L' : 'D';
        return `    ${nodeData.deathPlace}`;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", '', function(nodeData) {
        return ui.measure.node.width - 94;
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
        return ui.color.node.details;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (nodeData.deathPlace == null || nodeData.birthPlace == null) {
          return "";
        }
        if (nodeData.living) {
          return 'L:';
        }
        return 'D:';
      }),
    ),
  );
}
