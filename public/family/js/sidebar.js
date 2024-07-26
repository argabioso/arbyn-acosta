// Function to handle the click event on a node and show the sidebar

function showSidebar(node) {
  modifyPersonDetails(node);

  var offcanvasElement = document.getElementById('personDetails');
  var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
  offcanvas.show();

  if (isDark) {
    offcanvasElement.classList.add("text-bg-dark");
  } else {
    offcanvasElement.classList.remove("text-bg-dark");
  }
}

function modifyPersonDetails(node) {
  const nodeTitle = document.getElementById("personDetailsLabel");
  const nodeDescription = document.getElementById("personDetailsDesc");

  // Update sidebar content
  nodeTitle.textContent = node.data.fullName;
  nodeDescription.src = node.data.detailsRow1.text;
}
