template['Photo'] = function() {
  return $(bino.Panel, 'Spot',
    { isClipping: true, margin: new bino.Margin(0.2, 0, 0, 0.2) },
    $(
      bino.Shape, 'Rectangle',
      {
        width: ui.measure.node.height - 0.4,
        strokeWidth: 0,
      },
      new bino.Binding('height', '', function(nodeData) {
        return nodeData.height - 0.4;
      }),
    ),
    $(
      bino.Picture,
      {
        margin: new bino.Margin(0.2, 0, 0, 0.2),
      },
      new bino.Binding('imageStretch', '', function(nodeData) {
        if (nodeData.useNonePhoto) {
          return bino.GraphObject.Fill;
        }
        return bino.GraphObject.UniformToFill;
      }),
      new bino.Binding('scale', '', function(nodeData) {
        return calculatePhotoScale(nodeData);
      }),
      new bino.Binding('source', '', function(nodeData) {
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
    return 0.3;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
    if (nodeData.hasImage) {
      return 0.0997876967625;
    }
    return 0.3955;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace != null) {
    if (nodeData.hasImage) {
      return 0.1340006180575;
    }
    return 0.5311;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace == null) {
    if (nodeData.hasImage) {
      return 0.1340006180575;
    }
    return 0.5311;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace != null) {
    if (nodeData.hasImage) {
      return 0.1482559999887;
    }
    return 0.5876;
  }
  return 1;
}
