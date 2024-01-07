isChecking = isDebugging || (window.location.get("check") == "true");

var KEYS_IN_SOURCE = '';
for (const [url, originalSourceKeys] of Object.entries(SOURCES)) {
  KEYS_IN_SOURCE += originalSourceKeys.toString();
}

var KEYS_IN_SENTIMENT_SOURCE = '';
for (const [i, originalSourceKeys] of Object.entries(SOURCES['SENTIMENTS OF LIVING RELATIVES'])) {
  KEYS_IN_SENTIMENT_SOURCE += originalSourceKeys.toString();
}

function isEmpty(value) {
  return value === undefined || value === null || value.trim() === '';
}

function checkPerPerson(person) {
  let weirdCount = 0;
  let sourceCount = 0;
  let expectedSourceCount = 0;
  let unverifiedAttributes = [];

  let attributesToIgnore = [
    'key', // custom-information attribute, not verifiable
    'hasDNA', // aesthetic attribute
    'parent', // derived attribute
    'fullName', // composite attribute
  ];

  if (person.living) {
    attributesToIgnore.push('deathDate');
    attributesToIgnore.push('deathPlace');
    attributesToIgnore.push('deathAge');
    attributesToIgnore.push('livingPlace');

    sourceCount += 4;
    expectedSourceCount += 4;
  }

  if (!person.living) {
    attributesToIgnore.push('livingPlace');

    sourceCount += 1;
    expectedSourceCount += 1;
  }

  if (person.deathAge === null) {
    attributesToIgnore.push('deathAge');

    sourceCount += 1;
    expectedSourceCount += 1;
  }

  if (isEmpty(person.marriageDate)) {
    attributesToIgnore.push('marriageDate');
  }

  if (isEmpty(person.marriagePlace)) {
    attributesToIgnore.push('marriagePlace');
  }

  if (isEmpty(person.twin)) {
    attributesToIgnore.push('twin');
  }

  if (isEmpty(person.middleName)) {
    attributesToIgnore.push('middleName');
  }

  if (isEmpty(person.marker)) {
    attributesToIgnore.push('marker');
  }

  if (isEmpty(person.prefix)) {
    attributesToIgnore.push('prefix');
  }

  if (isEmpty(person.suffix)) {
    attributesToIgnore.push('suffix');
  }

  if (isEmpty(person.partner)) {
    attributesToIgnore.push('partner');
  }

  if (person.living) {
    attributesToIgnore.push('living');
  }

  if (!person.hasImage) {
    attributesToIgnore.push('hasImage');
  }

  for (const [attributeName, attributeValue] of Object.entries(person)) {
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

    // This attribute is already a statement of "having an image"
    // since we don't put a random image at all cost, having this
    // attribute already serves as a source
    if (attributeName == "hasImage") {
      currentSourceCount += 1;
    }

    currentSourceCount += KEYS_IN_SOURCE.occurrences(sourceKey);
    currentSourceCount += KEYS_IN_SOURCE.occurrences(sourceKeyAlternative);

    let stringAttributeValue = String(attributeValue);
    if (isEmpty(stringAttributeValue) && currentSourceCount != 0) {
      weirdCount += 1;
      console.invalid(`Found source for empty field: ${sourceKey || sourceKeyAlternative}`);
    }

    let isEstimated = (
      stringAttributeValue.includes("before") ||
      stringAttributeValue.includes("after") ||
      stringAttributeValue.includes("about")
    );

    if (isEstimated && currentSourceCount != 0) {
      weirdCount += 1;
      console.warning(`Found source for estimated field: ${sourceKey || sourceKeyAlternative}. Value: ${stringAttributeValue}`);
    }

    if (attributesToIgnore.includes(attributeName)) {
      continue;
    }

    sourceCount += currentSourceCount;
    expectedSourceCount += 1;

    // An attribute is unverified if there are no current
    // sources found for that specific attribute
    if (currentSourceCount <= 0) {
      unverifiedAttributes.push(attributeName);
    } else if (currentSourceCount > 1) {
      expectedSourceCount += (currentSourceCount - 1);
    }
  }

  return [
    sourceCount,
    weirdCount,
    expectedSourceCount,
    unverifiedAttributes,
    KEYS_IN_SENTIMENT_SOURCE.occurrences(person.key),
  ];
}

function isUniqueObjectArray(arr, key) {
    let values = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(values.has(arr[i][key])) {
          console.invalid(`Found duplicate source: ${arr[i][key]}`);
          return false;
        }
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
    oldDuplicateSource = hasDuplicateSource;
    hasDuplicateSource = hasDuplicateSource || !isUniqueStringArray(sourceKeys);

    if (!oldDuplicateSource && hasDuplicateSource) {
      console.invalid(`Found duplicate source: ${url}`);
    }
  }
  if (hasDuplicateSource) {
    console.invalid('Dataset contains duplicate sources');
  } else {
    console.valid('All the source in the dataset are unique');
  }

  areUniqueSources(SOURCES)

  let totalWeirdCount = 0;
  let sortedPeople = [];
  let peopleWithSources = [];
  let peopleWithNoSources = [];
  let fullyVerifiedPeople = [];

  for (const [i, person] of Object.entries(TREE_DATA)) {
    // Ignore people with no name
    if (person.fullName === undefined) {
      person['verificationBgColor'] = `#${BG_COLORS[0]}`;
      person['verificationFgColor'] = `#${FG_COLORS[0]}`;
      continue;
    }

    let [sourceCount, weirdCount, expectedSourceCount, unverifiedAttributes, sentimentSourceCount] = checkPerPerson(person);
    totalWeirdCount += weirdCount;

    if (sourceCount >= expectedSourceCount) {
      fullyVerifiedPeople.push(person.fullName);
    }
    if (sourceCount <= 0) {
      person['verificationBgColor'] = `#${BG_COLORS[0]}`;
      person['verificationFgColor'] = `#${FG_COLORS[0]}`;
      peopleWithNoSources.push(person.fullName);
      continue;
    }

    person['sourceCount'] = sourceCount;
    person['expectedSourceCount'] = expectedSourceCount;
    person['unverifiedAttributes'] = unverifiedAttributes;
    person['sourcePercentage'] = sourceCount / expectedSourceCount;
    person['sentimentSourceCount'] = sentimentSourceCount;

    // Not really used but we already prepared it
    // by adding it to the actual tree dataset
    person['verificationBgColor'] = `#${BG_COLORS[colorScaler(sourceCount / expectedSourceCount * 100)]}`;
    person['verificationFgColor'] = `#${FG_COLORS[colorScaler(sourceCount / expectedSourceCount * 100)]}`;

    sortedPeople.push(person);
  }
  console.valid(`${String(fullyVerifiedPeople.length).padStart(2, '0')} / ${TREE_DATA.length} people have complete sources`)

  sortedPeople.sort((a, b) => b.sourcePercentage - a.sourcePercentage);
  for (const [i, person] of Object.entries(sortedPeople)) {
    let sourceCount = person['sourceCount'];
    let expectedSourceCount = person['expectedSourceCount'];
    let unverifiedAttributes = person['unverifiedAttributes'];

    let prettySourceCount = `${String(sourceCount).padStart(2, '0')}`;
    let prettyexpectedSourceCount = `${String(expectedSourceCount).padStart(2, '0')}`;

    if (sourceCount >= expectedSourceCount) {
      peopleWithSources.push(person.fullName);
      console.valid(`${prettySourceCount} / ${prettyexpectedSourceCount} checks passed for ${person.fullName}`);
    } else if (sourceCount > 0) {
      peopleWithSources.push(person.fullName);
      console.dynamicGroup(`${prettySourceCount} / ${prettyexpectedSourceCount} checks passed for ${person.fullName}`, sourceCount, expectedSourceCount);
      for (const [j, unverifiedAttribute] of Object.entries(unverifiedAttributes)) {
        console.log(`No source given for %c${unverifiedAttribute}`, 'font-weight: 700;');
      }
      console.groupEnd();
    }
  }

  if (peopleWithNoSources.length > 0) {
    console.invalidGroup(`${peopleWithNoSources.length} / ${TREE_DATA.length} people have no documented sources`);
  }
  for (const [i, personFullName] of Object.entries(peopleWithNoSources)) {
    console.log(`%c${personFullName}`, 'font-weight: 700;');
  }

  if (totalWeirdCount != 0) {
    console.warning('Dataset contains sources for empty/estimated data fields');
  }

  console.groupEnd();
  console.groupEnd();
}

function areUniqueSources(obj) {
  let sideCounts = {}
  for (let key in obj) {
    if (!key.includes("side=")) {
      continue;
    }

    let idx = key.indexOf("side=") + 5;
    let baseUrl = key.substring(0, idx);
    let sideValue = key.substring(idx);

    if (baseUrl in sideCounts) {
      sideCounts[baseUrl].push(sideValue);
    } else {
      sideCounts[baseUrl] = [sideValue];
    }
  }

  for (let baseUrl in sideCounts) {
    let sides = new Set(obj[baseUrl]);
    if (sides.size == 1) {
      console.invalid(`Source might contain duplicate sides: ${baseUrl}`);
    }
  }
}

if (isChecking) {
  checkSources();
}
