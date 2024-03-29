/**
 * Returns a boolean value indicating whether the node should have a "none" photo displayed.
 *
 * @param {object} nodeData - An object representing a node in a family tree.
 * @returns {boolean} - `true` if the node should have a "none" photo displayed, otherwise `false`.
 */
function useNonePhoto(nodeData) {
  return (
    !nodeData.hasImage
    && !nodeData.living
    && nodeData.birthDate == null
    && nodeData.deathDate == null
    && nodeData.birthPlace == null
    && nodeData.deathPlace == null
  );
}

/**
 * Returns an adjusted height value for the node based on its biographical information.
 *
 * @param {object} nodeData - An object representing a node in a family tree.
 * @returns {number} - The adjusted height value for the node.
 */
function calculateAdjustedHeight(nodeData) {
  if (nodeData.useNonePhoto) {
    return ui.measure.node.height - 45;
  }

  let adjustedHeight = ui.measure.node.height;
  if (nodeData.birthPlace == null) {
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
  TREE_DATA[i]['useNonePhoto'] = useNonePhoto(nodeData);
  TREE_DATA[i]['height'] = calculateAdjustedHeight(nodeData);
}

let template = {};
