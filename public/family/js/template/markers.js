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
        if (isDark) {
          return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBmaWxsPSIjYjczZGY5IiBkPSJNMTg1IDk3Ni4wNjJxMC0xMzguMTM3IDYxLjUtMjI1LjA5OVEzMDggNjY0IDQxMSA1NzZxLTEwMy04OC0xNjQuNS0xNzQuOTYzUTE4NSAzMTQuMDc1IDE4NSAxNzUuOTM4VjE1NnEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRMjExLjM2NSAxMTAgMjI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQyNzYgMTU2djIwcTAgNC4xLjc1IDcuNTV0LjI4NSA3LjQ1aDQwNi45MzdxLS45NzItNCAuMDI4LTcuNDV0MS03LjU1di0yMHEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRNzExLjM2NSAxMTAgNzI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQ3NzYgMTU2djE5LjkzOHEwIDEzOC4xMzctNjIgMjI1LjA5OVE2NTIgNDg4IDU1MCA1NzZxMTAyIDg4IDE2NCAxNzQuOTYzIDYyIDg2Ljk2MiA2MiAyMjUuMDk5Vjk5NnEwIDE4LjYyLTEzLjQ3NSAzMS44MVE3NDkuMDUgMTA0MSA3MzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTY4NSAxMDE0LjYyIDY4NSA5OTZ2LTIwcTAtNC4xLS43NS03LjU1dC0uMjg1LTcuNDVIMjc3cS41IDQtLjI1IDcuNDVUMjc2IDk3NnYyMHEwIDE4LjYyLTEzLjQ3NSAzMS44MVEyNDkuMDUgMTA0MSAyMzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTE4NSAxMDE0LjYyIDE4NSA5OTZ2LTE5LjkzOFpNMzE3IDMzOWgzMjdxOS42ODgtMTQuNjY3IDE3Ljg0NC0zMy4zMzNRNjcwIDI4NyA2NzUgMjY3SDI4NnE0LjQgMjAuMDUgMTIuNDM4IDM4LjQxMlEzMDYuNDc1IDMyMy43NzUgMzE3IDMzOVptMTYzIDE3NiA1OC00OHEyOS0yNCA1Mi01MUgzNzBxMjMgMjcgNTEuNSA1MXQ1OC41IDQ4Wk0zNzAgNzM2aDIyMHEtMjMtMjctNTItNTF0LTU4LTUwcS0yOSAyNi01OCA1MHQtNTIgNTFabS04NCAxNDhoMzg5cS00Ljc3OC0xOS4xODUtMTMuMjY0LTM3LjY2OFE2NTMuMjUgODI3Ljg1IDY0NCA4MTJIMzE3cS0xMC42ODggMTUuNjY3LTE4Ljg0NCAzNC4zMzNRMjkwIDg2NSAyODYgODg0WiIvPjwvc3ZnPg==';
        }
        return `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBmaWxsPSIjOTgzMWNmIiBkPSJNMTg1IDk3Ni4wNjJxMC0xMzguMTM3IDYxLjUtMjI1LjA5OVEzMDggNjY0IDQxMSA1NzZxLTEwMy04OC0xNjQuNS0xNzQuOTYzUTE4NSAzMTQuMDc1IDE4NSAxNzUuOTM4VjE1NnEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRMjExLjM2NSAxMTAgMjI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQyNzYgMTU2djIwcTAgNC4xLjc1IDcuNTV0LjI4NSA3LjQ1aDQwNi45MzdxLS45NzItNCAuMDI4LTcuNDV0MS03LjU1di0yMHEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRNzExLjM2NSAxMTAgNzI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQ3NzYgMTU2djE5LjkzOHEwIDEzOC4xMzctNjIgMjI1LjA5OVE2NTIgNDg4IDU1MCA1NzZxMTAyIDg4IDE2NCAxNzQuOTYzIDYyIDg2Ljk2MiA2MiAyMjUuMDk5Vjk5NnEwIDE4LjYyLTEzLjQ3NSAzMS44MVE3NDkuMDUgMTA0MSA3MzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTY4NSAxMDE0LjYyIDY4NSA5OTZ2LTIwcTAtNC4xLS43NS03LjU1dC0uMjg1LTcuNDVIMjc3cS41IDQtLjI1IDcuNDVUMjc2IDk3NnYyMHEwIDE4LjYyLTEzLjQ3NSAzMS44MVEyNDkuMDUgMTA0MSAyMzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTE4NSAxMDE0LjYyIDE4NSA5OTZ2LTE5LjkzOFpNMzE3IDMzOWgzMjdxOS42ODgtMTQuNjY3IDE3Ljg0NC0zMy4zMzNRNjcwIDI4NyA2NzUgMjY3SDI4NnE0LjQgMjAuMDUgMTIuNDM4IDM4LjQxMlEzMDYuNDc1IDMyMy43NzUgMzE3IDMzOVptMTYzIDE3NiA1OC00OHEyOS0yNCA1Mi01MUgzNzBxMjMgMjcgNTEuNSA1MXQ1OC41IDQ4Wk0zNzAgNzM2aDIyMHEtMjMtMjctNTItNTF0LTU4LTUwcS0yOSAyNi01OCA1MHQtNTIgNTFabS04NCAxNDhoMzg5cS00Ljc3OC0xOS4xODUtMTMuMjY0LTM3LjY2OFE2NTMuMjUgODI3Ljg1IDY0NCA4MTJIMzE3cS0xMC42ODggMTUuNjY3LTE4Ljg0NCAzNC4zMzNRMjkwIDg2NSAyODYgODg0WiIvPjwvc3ZnPg==`;
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
        if (isDark) {
          return `images/icons/${nodeData.marker}.dark.svg`;
        }
        return `images/icons/${nodeData.marker}.svg`;
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
        if (isDark && nodeData.marker2 !== 3) {
          return `images/icons/${nodeData.marker2}.dark.svg`;
        }
        return `images/icons/${nodeData.marker2}.svg`;
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
