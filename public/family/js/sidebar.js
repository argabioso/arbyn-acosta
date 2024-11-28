// Function to handle the click event on a node and show the sidebar

function setScrollPos(selector, scroll) {
  var divs = document.querySelectorAll(selector);

  for (var p = 0; p < divs.length; p++) {
    // Reset the scroll position to the top-left corner
    divs[p].scrollTop = scroll;
  }
}

function showSidebar(node) {
  // Check if the <div> for this node's details already exists
  var existingDiv = document.getElementById("details-" + node.key);

  // Hide all other div children
  var sidebarContainer = document.getElementById("personDetailsDesc");
  Array.from(sidebarContainer.children).forEach(function(childDiv) {
    childDiv.style.display = "none";
  });

  updatePersonName(node);

  if (existingDiv) {
    // If it exists, show it
    existingDiv.style.display = "block";
  } else {
    addPersonDetails(node);
  }

  let encodedKey = encodeUtf8ToUrlSafeBase64(node.data.key);
  addQueryParam('id', encodedKey);

  // Reset scroll if a different person is clicked
  if (localStorage.getItem("family-tree-id") !== encodedKey) {
    setScrollPos("#personDetailsDesc", parseInt(localStorage.getItem(`family-tree-id-${encodedKey}-scroll`)));
  } else {
  }

  var offcanvasElement = document.getElementById('personDetails');
  var offcanvas = new Offcanvas(offcanvasElement);
  offcanvas.show();

  if (isDark) {
    offcanvasElement.classList.add("text-bg-dark");
  } else {
    offcanvasElement.classList.remove("text-bg-dark");
  }
}

function updatePersonName(node) {
  // Update the name in the sidebar
  const nodeTitle = document.getElementById("personName");
  nodeTitle.innerHTML = simulateSmallCaps(node.data.basicName);
}

function simulateSmallCaps(text) {
  return text.split(' ').map(word => {
    const firstLetter = word.charAt(0);
    const laterLetters = word.slice(1);
    return `<span class="first-letter">${firstLetter}</span><span class="later-letters">${laterLetters}</span>`;
  }).join(' ');
}

function addPersonDetails(node) {
  const nodeDescription = document.getElementById("personDetailsDesc");

  // If it doesn't exist, create a new div and insert it
  var newDiv = document.createElement("div");
  newDiv.id = "details-" + node.key;

  let headline = null;
  let headshotFilename = `${node.data.fid}.lossy.webp`;

  if (STORIES[node.data.fid]) {
    headline = STORIES[node.data.fid]['headline'] || null;
    if (headline) {
      headline = headline.replace(/\$\{([^}]+)\}/g, (match, attrName) => {
        return node.data[attrName] !== undefined ? node.data[attrName] : match;
      });
    }

    // Determine headshot to use
    if (STORIES[node.data.fid]['headshot']) {
      headshotFilename = STORIES[node.data.fid]['headshot'];
    }
  }

  // Update sidebar content
  let tempInnerHTML = '';
  let headlineInnerHTML = '';

  if (node.data.hasImage && node.data.fid !== undefined) {
    tempInnerHTML += `<figure class="headshot"><div><img alt="headshot" src="images/people/${headshotFilename}" /></div></figure>`;
  }
  let hasBadges = false;

  var storyMarkerLabel = {
    'farming': 'Farmer',
    'retail': 'Divisoria Vendor',
    'computer': 'Information Technology',
    'intelligence': 'Intelligence Officer',
    'government': 'Government Official',
    'software': 'Software Engineer',
    'book': 'has stories',
    'male-twin': 'had a male twin',
    'dna': 'DNA-tested',
    'military': 'Military Veteran',
    'housewife': 'Housewife',
    'fishery': 'had a fishery',
    'prelations': 'PR Skills',
    'skull': 'Death March Survivor',
    'centennial': 'Centenarian',
    'justice': 'Law Enforcement Professional',
    'beer': 'really likes alcohol',
    'police': 'Police force',
    'investigate': 'Investigator',
    'apparel': 'Apparel Manufacturer',
    'cattle': 'Cattle Vendor',
    'train': 'Railroad Worker',
    'manager': 'Work Manager',
    'sergeant': 'Military Sergeant',
  }

  if (headline) {
    tempInnerHTML += `<p class="headline">${headline}</p>`;
    tempInnerHTML += `<hr class="headshot-sep" />`;
  } else {
    let childNoun = (node.data.gender == "M") ? "Son" : "Daughter";
    let parentNoun = (node.data.gender == "M") ? "Father" : "Mother";

    if (node.data.father) {
      let fathersName = TREE_KEYMAP[node.data.father]['basicName'];
      if (!fathersName.includes('nown')) {
        headlineInnerHTML += `${childNoun} of ${fathersName}`;// and Corazon Acosta, and father of Yeusef Argabioso.`
      }
    }
    if (node.data.mother) {
      let mothersName = TREE_KEYMAP[node.data.mother]['basicName'];
      if (!mothersName.includes('nown')) {
        if (headlineInnerHTML != '') {
          headlineInnerHTML += ` and ${mothersName}`;
        } else {
          headlineInnerHTML += `${childNoun} of ${mothersName}`;
        }
      }
    }
    if (node.data.child) {
      let childsName = TREE_KEYMAP[node.data.child]['basicName'];
      if (!childsName.includes('nown')) {
        if (headlineInnerHTML != '') {
          parentNoun = parentNoun.toLowerCase();
          if (headlineInnerHTML.includes(' and ')) {
            headlineInnerHTML += '. '
          } else {
            headlineInnerHTML += ' and '
          }
        }
        headlineInnerHTML += `${parentNoun} of ${childsName}`
      }
    }

    if (headlineInnerHTML != '') {
      if (!headlineInnerHTML.endsWith('.')) {
        headlineInnerHTML += '.';
      }
      tempInnerHTML += `<p class="headline">${headlineInnerHTML}</p>`;
      tempInnerHTML += `<hr class="headshot-sep" />`;
    }
  }

  tempInnerHTML += '<div class="badges">'
  if (node.data.hasDNA) {
    tempInnerHTML += `
      <span class="badge rounded-pill story-marker" style="
        background: ${adjustBrightness(ui.color.marker.background.dna, 3 * (!isDark ? -1 : 1))};
        color: ${adjustBrightness(ui.color.marker.foreground.dna, 5 * (!isDark ? -1 : 1))};
      ">
        <img src=${MARKERS['dna']} />
        ${storyMarkerLabel['dna']}
      </span>
    `
    hasBadges = true;
  }
  for (let i = 1; i <= 4; i++) {
    let markerKey = (i == 1) ? 'marker' : `marker${i}`;
    let marker = node.data[markerKey];
    let markerLabel = (storyMarkerLabel[marker] !== undefined) ? storyMarkerLabel[marker] : marker;
    if (marker !== undefined) {
      tempInnerHTML += `
        <span class="badge rounded-pill story-marker" style="
          background: ${adjustBrightness(ui.color.marker.background[marker], 3 * (!isDark ? -1 : 1))};
          color: ${adjustBrightness(ui.color.marker.foreground[marker], 5 * (!isDark ? -1 : 1))};
        ">
          <img src=${MARKERS[marker]} />
          ${markerLabel}
        </span>
      `
      hasBadges = true;
    }
  }
  tempInnerHTML += '</div>'

  if (tempInnerHTML.endsWith('<div class="badges"></div>')) {
    tempInnerHTML = tempInnerHTML.replace('<div class="badges"></div>', '');
  }

  // if (hasBadges && !headline) {
  //   tempInnerHTML += `<hr />`;
  // }

  // if (headline) {
  //   tempInnerHTML += `<hr />`;
  // }
  let story = '';
  if (STORIES[node.data.fid] && STORIES[node.data.fid]['stories']) {
    story = STORIES[node.data.fid]['stories'].replace(/\$\{([^}]+)\}/g, (match, attrName) => {
      return node.data[attrName] !== undefined ? node.data[attrName] : match;
    });
  }
  tempInnerHTML += story;

  if (headlineInnerHTML != '' && tempInnerHTML.endsWith('<hr class="headshot-sep" />')) {
    tempInnerHTML += '<p>No stories have been written about this person yet'
    if (!node.data.hasImage) {
      tempInnerHTML += ', and no photo is available'
    }
    tempInnerHTML += '.</p>'
  }

  // Add gravemarker if photo is indicated
  if (STORIES[node.data.fid] && STORIES[node.data.fid].gravemarker !== undefined) {
    tempInnerHTML += `
      <hr />
      <h5>Grave Marker</h5>
      <figure>
        <img alt="Grave Marker photo" src="images/gravemarkers/${STORIES[node.data.fid].gravemarker}" />
        <p class="caption"><em>${node.data.basicName}'s grave marker photo.</em></p>
      </figure>
    `;
  }

  // Insert the new div into the container
  newDiv.innerHTML = tempInnerHTML;
  nodeDescription.appendChild(newDiv);
}

function adjustBrightness(hex, percent) {
  // Ensure hex is a valid 6-digit hex code
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  let rgb = "#";

  for (let i = 1; i < 7; i += 2) {
    // Convert each color component to a decimal
    const component = parseInt(hex.substr(i, 2), 16);

    // Adjust brightness by the percentage provided
    const adjusted = Math.min(255, Math.max(0, Math.floor(component * (1 + percent / 100))));

    // Convert back to hex and ensure it's always two digits
    rgb += ("0" + adjusted.toString(16)).slice(-2);
  }

  return rgb;
}