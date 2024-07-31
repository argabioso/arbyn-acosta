// Function to handle the click event on a node and show the sidebar

function showSidebar(node) {
  // Don't do anything if the person doesn't have any story
  if (!STORIES[node.data['key']] || (isPrivate && node.data['living'])) {
    return;
  }

  addQueryParam('id', encodeUtf8ToUrlSafeBase64(node.data.key));
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

function simulateSmallCaps(text) {
  return text.split(' ').map(word => {
    const firstLetter = word.charAt(0);
    const laterLetters = word.slice(1);
    return `<span class="first-letter">${firstLetter}</span><span class="later-letters">${laterLetters}</span>`;
  }).join(' ');
}

function modifyPersonDetails(node) {
  const nodeTitle = document.getElementById("personName");
  const nodeDescription = document.getElementById("personDetailsDesc");

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
  nodeDescription.innerHTML = `<img class="headshot" alt="headshot" src="images/people/${headshotFilename}" />`;
  if (headline) {
    nodeDescription.innerHTML += `<p class="headline">${headline}</p>`;
  }
  nodeDescription.innerHTML += `<hr class="headshot-sep" />`;
  nodeDescription.innerHTML += STORIES[node.data.key]['stories'];
}
