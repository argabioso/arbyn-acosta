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
          return 'images/' + nodeData.key + '.jpg';
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
    return 0.35;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace != null) {
    return 0.47;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace == null) {
    return 0.47;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace != null) {
    return 0.52;
  }
  return 1;
}
