var TREE_KEYMAP = {};

for (const [i, person] of Object.entries(TREE_DATA)) {
  // =======================================================================
  // Add "parent" from "child" value since chart.js works that way
  // =======================================================================
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
  if (person.firstName == undefined) {
    continue;
  }

  // =======================================================================
  // Add do we use none photo flag
  // =======================================================================
  let nodeData = TREE_DATA[i];
  TREE_DATA[i]['useNonePhoto'] = bino.useNonePhoto(nodeData);

  // =======================================================================
  // Add "fullName" to each person
  // =======================================================================
  let middleInitialsArray  = ((!person.middleName) ? '' : person.middleName).trim().split(' ');
  let middleInitialsString = '';

  if (middleInitialsArray[0] != '') {
    for (let i = 0; i < middleInitialsArray.length; i++) {
      middleInitialsString += middleInitialsArray[i][0] + '. '
    }
  }

  let prefix = '';
  let suffix = '';

  if (!!person.prefix) prefix = `${person.prefix} `;
  if (!!person.suffix) suffix = ` ${person.suffix}`;

  let firstName = person.firstName;
  let nickname = (!person.nickname) ? '' : `"${person.nickname}" `;

  TREE_DATA[i]['basicName'] = (
    firstName +
    ((!person.lastName) ? '' : ` ${person.lastName}`) +
    suffix
  );

  TREE_DATA[i]['fullName'] = (
    prefix +
    firstName + ' ' +
    nickname +
    middleInitialsString +
    ((!person.lastName) ? '' : person.lastName) +
    suffix
  );

  // =======================================================================
  // Auto-fill story marker
  // =======================================================================
  if (STORIES[person.key] && !(isPrivate && person.living)) {
    let counter = 0;
    if (person.marker4) {
      counter = 4;
    } else if (person.marker3) {
      counter = 4;
    } else if (person.marker2) {
      counter = 3;
    } else if (person.marker && person.hasDNA) {
      counter = 3;
    } else if (person.marker && !person.hasDNA) {
      counter = 2;
    } else if (!person.marker && person.hasDNA) {
      counter = 2;
    } else {
      counter = 1;
    }

    if (counter == 1) {
      counter = '';
    }
    TREE_DATA[i][`marker${counter}`] = 'book';
  }

  // =======================================================================
  // Improve locations and make living the death place for easier UI change
  // =======================================================================
  TREE_DATA[i]['birthPlace'] = bino.convertCountryCode(person.birthPlace);
  TREE_DATA[i]['marriagePlace'] = bino.convertCountryCode(person.marriagePlace);
  TREE_DATA[i]['deathPlace'] = bino.convertCountryCode(person.deathPlace);
  TREE_DATA[i]['livingPlace'] = bino.convertCountryCode(person.livingPlace);

  // Replace death place with living place for quicker size changes
  if (person.living) {
    TREE_DATA[i]['deathPlace'] = person.livingPlace;
  }

  // =======================================================================
  // Add details to each person
  // =======================================================================
  let birthUsed = false;
  let deathUsed = false;
  let marriageUsed = false;

  const separator = ' — ';

  TREE_DATA[i]['detailsRow1'] = {
    'text': bino.getRelativeDates(person, isPrivate),
    'letter': null,
  }
  TREE_DATA[i]['detailsRow2'] = {}
  TREE_DATA[i]['detailsRow3'] = {}
  TREE_DATA[i]['detailsRow4'] = {}

  if (person.birthPlace != null && !birthUsed) {
    birthUsed = true;
    TREE_DATA[i]['detailsRow2']['text'] = `${person.birthPlace}`;
    TREE_DATA[i]['detailsRow2']['letter'] = 'B';
  } else {
    TREE_DATA[i]['detailsRow2']['text'] = '';
    TREE_DATA[i]['detailsRow2']['letter'] = '';
  }

  if (person.marriagePlace != null && !marriageUsed) {
    marriageUsed = true;

    if (!birthUsed) {
      TREE_DATA[i]['detailsRow2']['text'] = `${person.marriagePlace}`;
      TREE_DATA[i]['detailsRow2']['letter'] = 'M';
    } else {
      TREE_DATA[i]['detailsRow3']['text'] = `${person.marriagePlace}`;
      TREE_DATA[i]['detailsRow3']['letter'] = 'M';
    }
  } else {
    TREE_DATA[i]['detailsRow3']['text'] = '';
    TREE_DATA[i]['detailsRow3']['letter'] = '';
  }

  if (((person.deathPlace != null || person.living)) && !deathUsed) {
    deathUsed = true;

    if (!birthUsed) {
      TREE_DATA[i]['detailsRow2']['text'] = `${person.deathPlace}`;
      TREE_DATA[i]['detailsRow2']['letter'] = (person.living) ? 'L' : 'D';
    } else if (!marriageUsed) {
      TREE_DATA[i]['detailsRow3']['text'] = `${person.deathPlace}`;
      TREE_DATA[i]['detailsRow3']['letter'] = (person.living) ? 'L' : 'D';
    } else {
      TREE_DATA[i]['detailsRow4']['text'] = `${person.deathPlace}`;
      TREE_DATA[i]['detailsRow4']['letter'] = (person.living) ? 'L' : 'D';
    }
  } else {
    TREE_DATA[i]['detailsRow4']['text'] = '';
    TREE_DATA[i]['detailsRow4']['letter'] = '';
  }
}

function addGeneration(data) {
    // Create a map to easily find each person by their key
    data.forEach(person => {
        TREE_KEYMAP[person.key] = person;
        person.generation = 0; // Default generation, will be adjusted later
    });

    // Function to update the generation for a person and their ancestors
    function updateGeneration(key, generation) {
        if (TREE_KEYMAP[key]) {
            TREE_KEYMAP[key].generation = generation;
            data.filter(person => person.child === key).forEach(child => {
                updateGeneration(child.key, generation + 1);
            });
        }
    }

    // Start from the root nodes and update their generations
    data.filter(person => !person.child).forEach(root => {
        updateGeneration(root.key, 0);
    });
}

addGeneration(TREE_DATA);

// Create a map of child to parents.
var childToParents = {};
TREE_DATA.forEach(node => {
  if (node.child) {
    if (childToParents[node.child]) {
      childToParents[node.child].push(node.key);
    } else {
      childToParents[node.child] = [node.key];
    }
  }
});

// Add partner to each node.
TREE_DATA.forEach(node => {
  node.partner = null; // Default value
  if (node.child && childToParents[node.child].length > 1) {
    node.partner = childToParents[node.child].find(parentKey => parentKey !== node.key);
  }
});
