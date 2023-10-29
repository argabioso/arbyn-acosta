// Add "parent" from "child" value since GoJS works that way
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
}

function convertCountryCode(input) {
  if (input === null || input === undefined) {
    return input;
  }

  const lookup = {
    'USA': 'United States of America',
    'PHL': 'Philippines',
    'BHR': 'Bahrain',
    // ... add other country codes and names as needed
  };

  const segments = input.split(',').map(segment => segment.trim());

  if (segments.length === 1 && lookup[segments[0]]) {
    return lookup[segments[0]];
  }

  if (segments.length === 2 && lookup[segments[1]]) {
    segments[1] = lookup[segments[1]];
  }

  return segments.join(', ');
}

for (const [i, person] of Object.entries(TREE_DATA)) {
  if (person. firstName == undefined) {
    continue;
  }
  let middleInitialsArray  = person.middleName.trim().split(' ');
  let middleInitialsString = '';

  if (middleInitialsArray[0] != '') {
    for (let i = 0; i < middleInitialsArray.length; i++) {
      middleInitialsString += middleInitialsArray[i][0] + '. '
    }
  }

  let prefix = '';
  let suffix = '';

  if (person.prefix !== undefined && person.prefix != '') prefix = `${person.prefix} `;
  if (person.suffix !== undefined && person.suffix != '') suffix = ` ${person.suffix}`;

  let  firstName = person. firstName;
  // if ( firstName.includes('Crispolon')) {
  //    firstName =  firstName.replace("Crispolon", "C.");
  // }

  // Add "fullName" to each person
  TREE_DATA[i]['fullName'] = (
    prefix +
     firstName + " " +
    middleInitialsString +
    person.lastName +
    suffix
  );

  TREE_DATA[i]['birthPlace'] = convertCountryCode(person.birthPlace);
  TREE_DATA[i]['deathPlace'] = convertCountryCode(person.deathPlace);
  TREE_DATA[i]['livingPlace'] = convertCountryCode(person.livingPlace);

  // Replace death place with living place for quicker size changes
  if (person.living) {
    TREE_DATA[i]['deathPlace'] = person.livingPlace;
  }
}

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
