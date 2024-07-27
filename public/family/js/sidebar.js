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

  let headline = STORIES[node.key]['headline'];
  headline = headline.replace(/\$\{([^}]+)\}/g, (match, attrName) => {
    return node.data[attrName] !== undefined ? node.data[attrName] : match;
  });

  // Update sidebar content
  nodeTitle.textContent = node.data.basicName;
  nodeDescription.innerHTML = `<img class="headshot" alt="headshot" src="images/people/${node.key}.lossy.webp" />`
  nodeDescription.innerHTML += `<p class="centered"><em>${headline}</em></p>`

  for (const [i, story] of Object.entries(STORIES[node.key]['stories'])) {
    nodeDescription.innerHTML += '<hr />';
    nodeDescription.innerHTML += story;
  }
}
