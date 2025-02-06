import { $, bino } from '../../chart.js';
import {
  TREE_NODE_BASE_HEIGHT,
  TREE_NODE_PADDING,
  TREE_NODE_WIDTHS_BY_GENERATION,
  TREE_TEXTS_DETAILS_FONT_SIZE,
  TREE_TEXTS_DETAILS_TEXT_COLOR,
  TREE_TEXTS_NAMELESS_DETAILS_COLOR,
} from '../../settings.js';

export const DatesText = () => {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${TREE_TEXTS_DETAILS_FONT_SIZE}px "Google Sans Text", sans-serif`,
        height: TREE_TEXTS_DETAILS_FONT_SIZE + 2,
        cursor: "pointer",
        margin: new bino.Margin(
          24 + parseInt(TREE_NODE_PADDING / 2),
          0,
          0,
          TREE_NODE_BASE_HEIGHT + TREE_TEXTS_DETAILS_FONT_SIZE,
        ),
      },
      new bino.Binding("width", '', function(nodeData) {
        return (TREE_NODE_WIDTHS_BY_GENERATION[nodeData.generation] - 94) - 15;
      }),
      new bino.Binding("stroke", '', function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return TREE_TEXTS_NAMELESS_DETAILS_COLOR;
        }
        return TREE_TEXTS_DETAILS_TEXT_COLOR;
      }),
      new bino.Binding("text", '', function(nodeData) {
        if (!nodeData.detailsRow1.text) return '';
        return nodeData.detailsRow1.text;
      }),
    ),
  );
}
