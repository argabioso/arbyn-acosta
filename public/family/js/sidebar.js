// Function to handle the click event on a node and show the sidebar

function showSidebar(node) {
  // Don't do anything if the person doesn't have any story
  if (!STORIES[node.key] || (isPrivate && node.data.living)) {
    return;
  }

  // Check if the <div> for this node's details already exists
  var existingDiv = document.getElementById("details-" + node.key);

  // Hide all other div children
  var sidebarContainer = document.getElementById("personDetailsDesc");
  Array.from(sidebarContainer.children).forEach(function(childDiv) {
    childDiv.style.display = "none";
  });

  if (existingDiv) {
    // If it exists, show it
    existingDiv.style.display = "block";
  } else {
    addPersonDetails(node);
  }

  addQueryParam('id', encodeUtf8ToUrlSafeBase64(node.data.key));

  var offcanvasElement = document.getElementById('personDetails');
  var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
  offcanvas.show();

  if (isDark) {
    offcanvasElement.classList.add("text-bg-dark");
  } else {
    offcanvasElement.classList.remove("text-bg-dark");
  }
}

function simulateSmallCaps(text) {
  return text.split(' ').map(word => {
    const firstLetter = word.charAt(0);
    const laterLetters = word.slice(1);
    return `<span class="first-letter">${firstLetter}</span><span class="later-letters">${laterLetters}</span>`;
  }).join(' ');
}

function addPersonDetails(node) {
  const nodeTitle = document.getElementById("personName");
  const nodeDescription = document.getElementById("personDetailsDesc");

  // If it doesn't exist, create a new div and insert it
  var newDiv = document.createElement("div");
  newDiv.id = "details-" + node.key;

  let headline = STORIES[node.data.key]['headline'];
  if (headline) {
    headline = headline.replace(/\$\{([^}]+)\}/g, (match, attrName) => {
      return node.data[attrName] !== undefined ? node.data[attrName] : match;
    });
  }

  // Determine headshot to use
  let headshotFilename;
  if (!STORIES[node.data.key]['headshot']) {
    headshotFilename = `${node.data.key}.lossy.webp`;
  } else {
    headshotFilename = STORIES[node.data.key]['headshot'];
  }

  // Update sidebar content
  nodeTitle.innerHTML = simulateSmallCaps(node.data.basicName);
  newDiv.innerHTML = `<img class="headshot" alt="headshot" src="images/people/${headshotFilename}" />`;
  if (headline) {
    newDiv.innerHTML += `<p class="headline">${headline}</p>`;
    newDiv.innerHTML += `<hr class="headshot-sep" />`;
  }
  newDiv.innerHTML += STORIES[node.data.key]['stories'];

  // Insert the new div into the container
  nodeDescription.appendChild(newDiv);
}
