// Function to handle the click event on a node and show the sidebar

function showSidebar(node) {
  // Don't do anything if the person doesn't have any story
  if (!STORIES[node['key']] || (isPrivate && node['living'])) {
    return;
  }

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
  const nodeTitle = document.getElementById("personName");
  const nodeDescription = document.getElementById("personDetailsDesc");

  // Update sidebar content
  nodeTitle.textContent = node.data.fullName;
  // nodeDescription.textContent = node.data.detailsRow1.text;
  nodeDescription.innerHTML = `<img class="headshot" alt="headshot" src="images/people/${node.key}.lossy.webp" />`
  nodeDescription.innerHTML += `<p class="centered"><em>Family Tree Portrait</em></p>`

  for (const [i, story] of Object.entries(STORIES[node.key])) {
    nodeDescription.innerHTML += story;
  }
}
