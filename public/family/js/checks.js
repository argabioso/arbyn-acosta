function checkPerPerson(person) {
  let sources = 0;

  for (const [attributeName, attributeValue] of Object.entries(person)) {
    for (const [url, originalSourceKey] of Object.entries(SOURCES)) {
      // Custom checks that does not work well with loop
      // use "key" to trigger since everyone has a "key"
      if (attributeName == "key") {
      }

      let sourceKey = `${person.key}:${attributeName}`;
      if (attributeName == "child") {
        sourceKey = `${attributeValue}:${person.key}:parent`;
      }

      if (originalSourceKey.includes(sourceKey)) {
        // Ignore deathDate and place if still living
        if (attributeName == "living" && person.living) sources += 2

        sources += 1;
        continue;
      }
    }
  }
  return sources;
}

function checkSources() {
  // Configuration of check
  const MINIMUM_ATTRIBUTES_TO_CHECK = 10;
  var attributesToCheckCount = MINIMUM_ATTRIBUTES_TO_CHECK;

  let keysInSource = '';
  for (const [url, originalSourceKey] of Object.entries(SOURCES)) {
    keysInSource += originalSourceKey.toString();
  }

  console.group(`Verifying family tree dataset ...`)
  for (const [i, person] of Object.entries(TREE_DATA)) {
    if (person.fullName === undefined) continue;
    if (!keysInSource.includes(person.key)) continue;

    let sourceCount = checkPerPerson(person);
    if (sourceCount >= attributesToCheckCount) {
      console.valid(`${sourceCount} / ${sourceCount} sources found for "${person.fullName}"`);
    } else {
      console.partly(`${sourceCount} / ${attributesToCheckCount} sources found for "${person.fullName}"`);
    }
  }
  console.groupEnd();
}

checkSources();
