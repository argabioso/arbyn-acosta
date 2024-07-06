for (const [i, person] of Object.entries(TREE_DATA)) {
  // =======================================================================
  // Add "parent" from "child" value since chart.js works that way
  // =======================================================================
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
  if (person. firstName == undefined) {
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

  let  firstName = person. firstName;

  TREE_DATA[i]['fullName'] = (
    prefix +
     firstName + " " +
    middleInitialsString +
    ((!person.lastName) ? '' : person.lastName) +
    suffix
  );

  // =======================================================================
  // Improve locations and make living the death place for easier UI change
  // =======================================================================
  TREE_DATA[i]['birthPlace'] = bino.convertCountryCode(person.birthPlace);
  TREE_DATA[i]['deathPlace'] = bino.convertCountryCode(person.deathPlace);
  TREE_DATA[i]['livingPlace'] = bino.convertCountryCode(person.livingPlace);

  // Replace death place with living place for quicker size changes
  if (person.living) {
    TREE_DATA[i]['deathPlace'] = person.livingPlace;
  }

  // =======================================================================
  // Add relative dates to each person
  // =======================================================================
  if (person.living) {
    TREE_DATA[i]['relativeDates'] = bino.getRelativeDates(person, isPrivate);
  } else {
    TREE_DATA[i]['relativeDates'] = bino.getRelativeDates(person, false);
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
