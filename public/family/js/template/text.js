template['Name'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `700 ${ui.font.size.name}px Google Sans, sans-serif`,
      height: ui.font.size.name + 2,
    },
    new bino.Binding('width', function(nodeData) {
      return ui.measure.node.width - 93;
    }),
    new bino.Binding('margin', function(nodeData) {
      return new bino.Margin(
        ui.measure.node.padding,
        0, //ui.measure.node.margin,
        0,
        ui.measure.node.height + ui.font.size.details,
      );
    }),
    new bino.Binding('stroke', function(nodeData) {
      if (nodeData.name.first.includes('known')) {
        return ui.color.node.nameless.name;
      }
      return ui.color.node.name;
    }),
    new bino.Binding('text', function(nodeData) {
      return nodeData.fullName;
    })
  );
}

template['Lifespan'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `400 ${ui.font.size.details}px Roboto, sans-serif`,
      height: ui.font.size.details + 2,
    },
    new bino.Binding("width", function(nodeData) {
      return ui.measure.node.width - 94;
    }),
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(
        24 + parseInt(ui.measure.node.padding / 2),
        0,
        0,
        ui.measure.node.height + ui.font.size.details,
      );
    }),
    new bino.Binding("stroke", function(nodeData) {
      if (nodeData.name.first.includes("nknown")) {
        return ui.color.node.nameless.details;
      }
      return ui.color.node.details;
    }),
    new bino.Binding("text", function(nodeData) {
      if (nodeData.living) {
        return getLifeSpan(nodeData, isPrivate);
      }
      return getLifeSpan(nodeData);
    }),
  );
}

template['BirthDeathPlace1'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return ui.measure.node.width - 94;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.name.first.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
          return "";
        }
        if (nodeData.birthPlace != null) {
          return `B: ${nodeData.birthPlace}`;
        }
        if (nodeData.deathPlace != null) {
          return `D: ${nodeData.deathPlace}`;
        }
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return ui.measure.node.width - 94;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.name.first.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
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
        font: `400 ${ui.font.size.details}px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return ui.measure.node.width - 94;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.name.first.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.deathPlace == null || nodeData.birthPlace == null) {
          return "";
        }
        return `D: ${nodeData.deathPlace}`;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return ui.measure.node.width - 94;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.name.first.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.deathPlace == null || nodeData.birthPlace == null) {
          return "";
        }
        return 'D:';
      }),
    ),
  );
}

/**
 * Get lifespan information from given nodeData.
 * @param {Object} nodeData - Contains living, birthDate, and deathDate data.
 * @return {string} Formatted lifespan string.
 */
function getLifeSpan(nodeData, isPrivate) {
  if (nodeData.useNonePhoto) {
    return "";
  }

  const separator = ' — ';
  const { living, birthDate, deathDate } = nodeData;

  const birthYear = formatDate(birthDate, isPrivate);
  const deathYear = formatDate(deathDate);

  // If both birthYear and deathYear do not exist, return
  // "Living" or "Deceased" based on the living flag.
  if (!birthYear && !deathYear) {
    return living ? 'Living' : 'Deceased';
  }

  // If birthYear does not exist, return the
  // formatted deathYear with a separator.
  if (!birthYear) {
    return `${separator}${deathYear}`;
  }

  // If deathYear does not exist, return the formatted
  // `birthYear` with a separator and "Living" or "Deceased"
  // based on the living flag.
  if (!deathYear) {
    return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}`;
  }

  // If both birthYear and deathYear exist,
  // return the formatted lifespan string.
  return `${birthYear}${separator}${deathYear}`;
}

/**
 * Format date string as 'day month year'.
 * @param {string} dateString - Date in 'YYYY-MM-DD' format.
 * @return {string|null} Formatted date or null if dateString is falsy.
 */
function formatDate(dateString, isPrivate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  if (!dateString) {
    return null;
  }

  let [year, month, day] = dateString.split('-', 3);

  if (month) {
    day = (day === undefined || isPrivate) ? "" : day + " ";

    // Remove leading zero from days
    if (day.startsWith('0')) {
      day = day.slice(1);
    }

    return `${day}${months[parseInt(month, 10) - 1]} ${year}`;
  }

  return year;
};