import { $, bino } from '../../chart.js';
import {
  IS_PRIVATE,
  TREE_NODE_BASE_HEIGHT,
  TREE_NODE_PADDING,
  TREE_NODE_WIDTHS_BY_GENERATION,
  TREE_TEXTS_DETAILS_FONT_SIZE,
  TREE_TEXTS_NAME_COLOR,
  TREE_TEXTS_NAME_FONT_SIZE,
  TREE_TEXTS_NAMELESS_NAME_COLOR,
} from '../../settings.js';

export const NameText = () => {
  return $(
    bino.TextBlock,
    {
      font: `700 ${TREE_TEXTS_NAME_FONT_SIZE}px Google Sans, sans-serif`,
      height: TREE_TEXTS_NAME_FONT_SIZE + 2,
      margin: new bino.Margin(
        TREE_NODE_PADDING,
        0,
        0,
        TREE_NODE_BASE_HEIGHT + TREE_TEXTS_DETAILS_FONT_SIZE,
      )
    },
    new bino.Binding('cursor', '', (nodeData) => {
      return (nodeData.living && IS_PRIVATE) ? "default" : "pointer"
    }),
    new bino.Binding('width', '', function(nodeData) {
      return (TREE_NODE_WIDTHS_BY_GENERATION[nodeData.generation] - 94) - 15;
    }),
    new bino.Binding('stroke', '', function(nodeData) {
      if (nodeData.firstName.includes('known')) {
        return TREE_TEXTS_NAMELESS_NAME_COLOR;
      }
      return TREE_TEXTS_NAME_COLOR;
    }),
    new bino.Binding('text', '', function(nodeData) {
      return nodeData.fullName;
    })
  );
}
