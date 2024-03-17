const IDS = [
  "GH12-W17",
  "GH12-SVQ",
  "GH12-9F6",
  "GHBR-FK3",
  "GHB5-TWN",
  "GHB5-XTZ",
  "GH12-3GN",
  "GH12-DRN",
  "TEMP-001",
  "GHBD-9LY",
  "GHB8-GB6",
  "GHB8-GZL",
  "GHB8-7T6",
  "GQJK-LCT",
  "GHBZ-YVX",
  "GQJK-L51",
  "GQX8-CQP",
  "GHB8-J1B",
  "GHBD-7M4",
  "GHBD-9L6",
  "GHB8-DXY",
  "GQJK-G8W",
]

template['Photo'] = function() {
  return $(bino.Panel, 'Spot',
    { isClipping: true, margin: new bino.Margin(0.2, 0, 0, 0.2) },
    $(
      bino.Shape, 'Rectangle',
      {
        width: ui.measure.node.height - 0.4,
        strokeWidth: 0,
      },
      new bino.Binding('height', function(nodeData) {
        return nodeData.height - 0.4;
      }),
    ),
    $(
      bino.Picture,
      {
        margin: new bino.Margin(0.2, 0, 0, 0.2),
      },
      new bino.Binding('imageStretch', function(nodeData) {
        if (nodeData.useNonePhoto) {
          return bino.GraphObject.Fill;
        }
        return bino.GraphObject.UniformToFill;
      }),
      new bino.Binding('scale', function(nodeData) {
        return calculatePhotoScale(nodeData);
      }),
      new bino.Binding('source', function(nodeData) {
        if (nodeData.useNonePhoto) {
          return ui.photo.none;
        }
        if (nodeData.hasImage) {
          return 'images/people/' + nodeData.key + '.lossy.webp';
        }
        if (nodeData.gender.toUpperCase() == 'M') {
          return ui.photo.male;
        }
        return ui.photo.female;
      })
    ),
  );
}

function calculatePhotoScale(nodeData) {
  if (nodeData.useNonePhoto) {
    return 1;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
    if (IDS.includes(nodeData.key)) {
      return 0.08615385
    }
    return 0.35;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace != null) {
    if (IDS.includes(nodeData.key)) {
      return 0.11569231;
    }
    return 0.47;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace == null) {
    if (IDS.includes(nodeData.key)) {
      return 0.11569231;
    }
    return 0.47;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace != null) {
    if (IDS.includes(nodeData.key)) {
      return 0.128;
    }
    return 0.52;
  }
  return 1;
}
