function attributesToCheck(person) {
  return {
    "child": person.child,
    "name.first": (person.name == undefined) ? null : person.name.first,
    "name.middle": (person.name == undefined) ? null : person.name.middle,
    "name.last": (person.name == undefined) ? null : person.name.last,
    "gender": person.gender,
    "birthDate": person.birthDate,
    "deathDate": person.deathDate,
    "living": person.living,
    "birthPlace": person.birthPlace,
  }
}

function getSourceCount(person) {
  let sources = 0;

  for (const [attributeName, attributeValue] of Object.entries(attributesToCheck(person))) {
    for (const [url, originalSourceKey] of Object.entries(SOURCES)) {
      let sourceKey = `${person.key}:${attributeName}`;
      if (attributeName == "child") {
        sourceKey = `${attributeValue}:${person.key}:parent`;
      }
      if (SOURCES[url].includes(sourceKey)) {
        // Ignore deathDate
        if (attributeName == "living" && person.living) sources += 1

        sources += 1;
        continue;
      }
    }
  }
  return sources;
}

console.partly = function (message) {
  console.log(`%c[?] ${message}`, 'background-color: #fce8b2; color: #222222; padding: 2px 5px; border-radius: 3px;');
};

console.valid = function (message) {
  console.log(`%c[✓] ${message}`, 'background-color: #b6e1cd; color: #222222; padding: 2px 5px; border-radius: 3px;');
};

console.invalid = function (message) {
  console.log(`%c[✕] ${message}`, 'background-color: #ea9999; color: #222222; padding: 2px 5px; border-radius: 3px;');
};

function checkSources() {
  const MAX_ATTRIBUTE_COUNT = Object.entries(attributesToCheck({})).length;

  for (const [i, person] of Object.entries(TREE_DATA)) {
    if (person.fullName === undefined) continue;

    let sourceCount = getSourceCount(person);

    if (sourceCount == 0) {
      // console.invalid(`No sources found for ${person.fullName}`);
    } else if (sourceCount == MAX_ATTRIBUTE_COUNT) {
      console.valid(`${sourceCount} / ${MAX_ATTRIBUTE_COUNT} sources found for ${person.fullName}`);
    } else {
      console.partly(`${sourceCount} / ${MAX_ATTRIBUTE_COUNT} sources found for ${person.fullName}`);
    }
  }
}

checkSources();
