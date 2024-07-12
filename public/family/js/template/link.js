template['Link'] = function() {
  return $(
    bino.Link,
    { selectable: false, routing: bino.Link.Orthogonal },
    $(
      bino.Shape,
      {
        strokeWidth: 1,
      },
      new bino.Binding('stroke', '', function(nodeData) {
        return (nodeData.vitalsCompleteAndVerified && isChecking) ? ui.color.node.stroke : ui.color.link;
      }),
    ),
  );
}
