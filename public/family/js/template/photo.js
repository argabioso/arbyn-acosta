template['Photo'] = function() {
  return $(bino.Panel, 'Spot',
    { isClipping: true, margin: new bino.Margin(0.2, 0, 0, 0.2) },
    $(
      bino.Shape, 'Rectangle',
      new bino.Binding('width', '', function(nodeData) {
        return ui.measure.node.height - 0.4 - ((nodeData.vitalsCompleteAndVerified && isChecking) ? 1 : 0);
      }),
      new bino.Binding('height', '', function(nodeData) {
        return nodeData.height - 0.4 - ((nodeData.vitalsCompleteAndVerified && isChecking) ? 1 : 0);
      }),
      new bino.Binding('stroke', '', function(nodeData) {
        return (nodeData.vitalsCompleteAndVerified && isChecking) ? ui.color.node.stroke : null;
      }),
      new bino.Binding('strokeWidth', '', function(nodeData) {
        return (nodeData.vitalsCompleteAndVerified && isChecking) ? 1 : 0;
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
        if (nodeData.hasImage && nodeData.fid !== undefined) {
          return 'images/people/' + nodeData.fid + '.lossy.webp';
        }
        if (nodeData.gender.toUpperCase() == 'M') {
          return ui.photo.male;
        }
        return ui.photo.female;
      })
    ),
  );
}

const isNull = (value) => value === null;

function calculatePhotoScale(nodeData) {
  if (nodeData.useNonePhoto) {
    return 0.3;
  }

  const { birthPlace, deathPlace, marriagePlace } = nodeData;
  let emptyCount = [birthPlace, deathPlace, marriagePlace].filter(isNull).length;

  if (!nodeData.hasImage || nodeData.fid === undefined) emptyCount = (emptyCount + 1) * 4;

  switch (emptyCount) {
    case 0: // all places are available, has image
      return 0.14825600;
    case 1: // only two places are available, has image
      return 0.13400100;
    case 2: // only one place is available, has image
      return 0.10978800;
    case 3: // no place is available (maybe have dates), has image
      return 0.09175700;

    case 4:  // all places are available, NO image
      return 0.63904221;
    case 8:  // only two places are available, NO image
      return 0.57759585;
    case 12: // only one place is available, NO image
      return 0.47322855;
    case 16: // no place is available (maybe have dates), NO image
      return 0.39550800;

    default:
      return 1.00000000;
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
