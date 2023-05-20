var KEYS_IN_SOURCE = '';
for (const [url, originalSourceKeys] of Object.entries(SOURCES)) {
  KEYS_IN_SOURCE += originalSourceKeys.toString();
}

function checkPerPerson(person) {
  let sourceCount = 0;
  let expectedSourceCount = 0;
  let unverifiedAttributes = [];

  let attributesToIgnore = [
    'key', // custom attribute, not verifiable
    'hasDNA', // aesthetic attribute
    'hasImage', // aesthetic attribute
    'marker', // aesthetic attribute
    'parent', // derived attribute
    'fullName', // composite attribute
  ];

  if (person.living) {
    attributesToIgnore.push('deathDate');
    attributesToIgnore.push('deathPlace');

    sourceCount += 2;
    expectedSourceCount += 2;
  }

  for (const [attributeName, attributeValue] of Object.entries(person)) {
    if (attributesToIgnore.includes(attributeName)) {
      continue;
    }

    expectedSourceCount += 1;

    let verified = false;
    let sourceKey = `${person.key}:${attributeName}`;
    let sourceKeyAlternative = null;

    if (attributeName == "child") {
      sourceKey = `${attributeValue}:${person.key}:parentChild`;
      sourceKeyAlternative = `${person.key}:${attributeValue}:parentChild`;
    }
    if (attributeName == "partner") {
      sourceKey = `${attributeValue}:${person.key}:partner`;
      sourceKeyAlternative = `${person.key}:${attributeValue}:partner`;
    }

    let currentSourceCount = 0;
    currentSourceCount += KEYS_IN_SOURCE.occurrences(sourceKey);
    currentSourceCount += KEYS_IN_SOURCE.occurrences(sourceKeyAlternative);
    sourceCount += currentSourceCount;

    // An attribute is unverified if there are no current
    // sources found for that specific attribute
    if (currentSourceCount <= 0) {
      unverifiedAttributes.push(attributeName);
    }
  }
  return [sourceCount, expectedSourceCount, unverifiedAttributes];
}

function isUniqueObjectArray(arr, key) {
    let values = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(values.has(arr[i][key])) return false;
        values.add(arr[i][key]);
    }

    return true;
}

function isUniqueStringArray(arr) {
    let values = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(values.has(arr[i])) return false;
        values.add(arr[i]);
    }

    return true;
}

function checkSources() {
  console.group(`Verifying family tree dataset ...`)
  if (isUniqueObjectArray(TREE_DATA, 'key')) {
    console.valid('All the people in the dataset are unique');
  } else {
    console.invalid('Dataset contains duplicate people');
  }

  let hasDuplicateSource = false;
  for (const [url, sourceKeys] of Object.entries(SOURCES)) {
    hasDuplicateSource = hasDuplicateSource || !isUniqueStringArray(sourceKeys);
  }
  if (hasDuplicateSource) {
    console.invalid('Dataset contains duplicate sources');
  } else {
    console.valid('All the source in the dataset are unique');
  }

  for (const [i, person] of Object.entries(TREE_DATA)) {
    // Ignore people with no name
    if (person.fullName === undefined) continue;

    let [sourceCount, expectedSourceCount, unverifiedAttributes] = checkPerPerson(person);
    if (sourceCount <= 0) continue

    let prettySourceCount = `${String(sourceCount).padStart(2, '0')}`;
    if (sourceCount >= expectedSourceCount) {
      console.valid(`${prettySourceCount} / ${expectedSourceCount} sources found for ${person.fullName}`);
    } else if (sourceCount > 0) {
      console.dynamicGroup(`${prettySourceCount} / ${expectedSourceCount} sources found for ${person.fullName}`, sourceCount, expectedSourceCount);
      for (const [j, unverifiedAttribute] of Object.entries(unverifiedAttributes)) {
        console.log(`%c${unverifiedAttribute} %chas no source`, 'font-weight: 700;', 'font-weight: 400;');
      }
      console.groupEnd();
    }
  }

  console.groupEnd();
}

checkSources();
