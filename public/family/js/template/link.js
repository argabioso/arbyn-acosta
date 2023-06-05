template['Link'] = function() {
  return $(
    bino.Link,
    { selectable: false, routing: bino.Link.Orthogonal },
    $(bino.Shape, { strokeWidth: 1, stroke: ui.color.link }),
  );
}
