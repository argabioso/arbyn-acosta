import { $, bino } from './chart.js';
import { TreeNode } from './tree/node.js';
import { TreeBranch } from './tree/link.js';
import { TreeModel } from './tree/model.js';

const calculateScale = () => {
  // Needs to be updated if the tree extends horizontally or vertically
  // this would include updating node widths, adding a new generation,
  // adding a detail to a node causing it to increase in height
  const tw = 3045;
  const th = 1678;
  const tree_ratio = tw / th;

  // Desired width based on Photoshop check. Includes Lolo Eusebio's gen
  const dw = 1842;
  const dh = 983;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const view_ratio = vw / vh;

  return Math.min(0.75, Math.max((vh / dh), (vw / dw), (vw / tw), (vh / th)));
}

let tree = $(
  bino.Diagram,
  "tree",
  {
    isReadOnly: true,
    padding: 40,
    scale: calculateScale(),
    layout: $(
      bino.TreeLayout, {
        angle: 0,
        layerSpacing: 36,
        nodeSpacing: 9,
      }
    ),
    hasHorizontalScrollbar: false,
    hasVerticalScrollbar: false,
    allowHorizontalScroll: true,
    allowSelect: false,
    allowVerticalScroll: true,
    allowZoom: true,
  }
);

tree.nodeTemplate = TreeNode();
tree.linkTemplate = TreeBranch();
tree.model = TreeModel();
