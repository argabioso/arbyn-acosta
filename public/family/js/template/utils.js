
/**
 * Returns an adjusted height value for the node based on its biographical information.
 *
 * @param {object} nodeData - An object representing a node in a family tree.
 * @returns {number} - The adjusted height value for the node.
 */
function calculateAdjustedHeight(nodeData) {
  if (nodeData.useNonePhoto) {
    return ui.measure.node.height - 60;
  }

  let adjustedHeight = ui.measure.node.height;
  if (nodeData.birthPlace == null) {
    adjustedHeight -= 15;
  }
  if (nodeData.marriagePlace == null) {
    adjustedHeight -= 15;
  }
  if (nodeData.deathPlace == null) {
    adjustedHeight -= 15;
  }
  return adjustedHeight;
}

// Add height calculations to actual data for less function calls
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  let nodeData = TREE_DATA[i];
  TREE_DATA[i]['height'] = calculateAdjustedHeight(nodeData);
}

let template = {};
