import { $, bino } from '../chart.js';
import { MARKER_SYMBOLS } from '../marker_symbols.js';
import {
  MARKER_BACKGROUND_COLORS,
  MARKER_FOREGROUND_COLORS,
  TREE_NODE_MARKER_MARGIN,
  TREE_NODE_MARKER_SCALE,
  TREE_NODE_MARKER_WIDTH,
  TREE_NODE_WIDTHS_BY_GENERATION,
} from '../settings.js';


const marginConditions = (marker) => {
  const defaultMargins = new bino.Margin(2, 0, 0, 2);
  const margins = {
    'signature': new bino.Margin(2, 0, 0, -0.025),
    'fishery': new bino.Margin(2, 0, 0, 2.7),
    'prelations': new bino.Margin(3, 0, 0, 2),
    'intelligence': new bino.Margin(1.95, 0, 0, 1.85),
    'military': new bino.Margin(0.9, 0, 0, 1.1),
    'sergeant': new bino.Margin(0, 0, 0, 0.35),
    'housewife': new bino.Margin(1.8, 0, 0, 1.5),
    'househusband': new bino.Margin(1.8, 0, 0, 1.5),
    'farming': new bino.Margin(2.25, 0, 0, 1.95),
    'male-twin': new bino.Margin(0, 0, 0, 2),
    'female-twin': new bino.Margin(0, 0, 0, 2),
    'train': new bino.Margin(3, 0, 0, 2),
    'cattle': new bino.Margin(-0.25, 0, 0, 0.75),
    'sales': new bino.Margin(3, 0, 0, 2.5),
  }

  return (margins[marker] || new bino.Margin(2, 0, 0, 2));
};

export const DNAMarker = () => {
  return $(
    bino.Panel,
    new bino.Binding("margin", '', function(nodeData) {
      return new bino.Margin(
        TREE_NODE_MARKER_MARGIN, 0, 0,
        TREE_NODE_WIDTHS_BY_GENERATION[nodeData.generation] - (TREE_NODE_MARKER_WIDTH + TREE_NODE_MARKER_MARGIN),
      )
    }),
    new bino.Binding("visible", '', function(nodeData) {
      return nodeData.hasDNA !== undefined && nodeData.hasDNA;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: TREE_NODE_MARKER_WIDTH - 2 },
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(1.2, 0, 0, 1.2);
      }),
      new bino.Binding("fill", '', function(nodeData) {
        return MARKER_BACKGROUND_COLORS.dna;
      }),
    ),
    $(
      bino.Picture,
      { scale: TREE_NODE_MARKER_SCALE },
      new bino.Binding("source", '', function(nodeData) {
        if (nodeData.hasDNA === undefined) {
          return '';
        }
        return MARKER_SYMBOLS["dna"];
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(2, 0, 0, 2);
      }),
    ),
  );
};

export const CustomMarker = (index) => {
  if (index < 1 || index > 4) {
    throw new Error('Index should only be from 1 to 4!');
  }

  let markerKey = null;
  let multiplier = 1;

  if (index == 1) {
    markerKey = 'marker';
  } else {
    multiplier = index - 1;
    markerKey = `marker${index}`;
  }

  return $(
    bino.Panel,
    new bino.Binding("margin", '', function(nodeData) {
      let topMargin = TREE_NODE_MARKER_MARGIN + ((TREE_NODE_MARKER_WIDTH + TREE_NODE_MARKER_MARGIN) - 3) * multiplier;
      if (index == 1 && !nodeData.hasDNA) {
        topMargin = TREE_NODE_MARKER_MARGIN;
      }
      return new bino.Margin(
        topMargin, 0, 0,
        TREE_NODE_WIDTHS_BY_GENERATION[nodeData.generation] - (TREE_NODE_MARKER_WIDTH + TREE_NODE_MARKER_MARGIN),
      )
    }),
    new bino.Binding("visible", '', function(nodeData) {
      if (index == 2) {
        return nodeData[markerKey] !== undefined && !nodeData.hasDNA;
      }
      return nodeData[markerKey] !== undefined;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: TREE_NODE_MARKER_WIDTH - 2 },
      new bino.Binding("margin", '', function(nodeData) {
        return new bino.Margin(1.2, 0, 0, 1.2);
      }),
      new bino.Binding("fill", '', function(nodeData) {
        if (MARKER_BACKGROUND_COLORS[nodeData[markerKey]] !== undefined) {
          return MARKER_BACKGROUND_COLORS[nodeData[markerKey]];
        }
        return MARKER_BACKGROUND_COLORS.default;
      }),
    ),
    $(
      bino.Picture,
      { scale: TREE_NODE_MARKER_SCALE },
      new bino.Binding("source", '', function(nodeData) {
        if (nodeData[markerKey] === undefined) {
          return '';
        }
        return MARKER_SYMBOLS[nodeData[markerKey]];
      }),
      new bino.Binding("margin", '', function(nodeData) {
        return marginConditions(nodeData[markerKey]);
      }),
    ),
  );
};

export const FirstMarker = () => { return CustomMarker(1); }
export const SecondMarker = () => { return CustomMarker(2); }
export const ThirdMarker = () => { return CustomMarker(3); }
export const FourthMarker = () => { return CustomMarker(4); }
