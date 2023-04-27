/* ========================================================================
 *
 * utils.js
 * Arbyn Acosta (C) 2020
 *
 * Defines a handful of helper functions for better modularization.
 *
 * ===================================================================== */

const print = console.log

/*
 * Returns the width of the rendered document
 *
 * @return {Number} The biggest width value of the screen or browser
 */
document.body.width = function()
{
  'use strict';

  return Math.max(
    document.body.offsetWidth,
    document.body.scrollWidth,
    document.documentElement.clientWidth,
    document.documentElement.offsetWidth,
    document.documentElement.scrollWidth,
  );
}();

/*
 * Left/Start trim for strings
 */
String.prototype.ltrim = function()
{
  return this.replace(/^\s+/g, '');
}

/*
 * Right/End trim for strings
 */
String.prototype.rtrim = function()
{
  return this.replace(/\s+$/g, '');
}

/*
 * Returns the value of the indicated URL parameter name
 *
 * @param {Text} name The URL parameter name to get the value of
 * @return {Text} The value of the URL parameter specified
 */
window.location.get = function(name)
{
  'use strict';

  // Use regex on location.href if URLSearchParams is not supported
  let paramValue = new RegExp('[\?&]' + name + '=([^&#]*)').exec(this.href);
  if (paramValue == null || (paramValue && !paramValue[1])) {
    return null;
  }
  else {
    return decodeURI(paramValue[1]).ltrim().rtrim().replace(/\s\s+/g, ' ');
  }
};

/*
 * Finds all the intersecting elements of two arrays.
 *
 * @param {Array} array1 The first array to check for intersection
 * @param {Array} array2 The second array to check for intersection
 * @return {Array} An array containing the intersecting elements
 */
Array.prototype.intersect = function(other)
{
  return this.filter(value => other.includes(value))
};

/*
 * Get how dissimilar two strings are. "Dissimilarity" is
 * measured by the number of operations or character changes
 * it would take to make the two string the same.
 *
 * @param {Text} other The string to compare to
 * @return {Number} count of character changes to make the
 *                  two strings similar.
 */
function getEditDistance(s1, s2)
{
  'use strict';

  // Convert both strings to lowercase to remove
  // unneccesary case handling
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = [];
  for (let i = 0, imax = s1.length; i <= imax; i++) {
    let lastValue = i;
    for (let j = 0, jmax = s2.length; j <= jmax; j++) {
      if (i == 0) {
        costs[j] = j;
      }
      else {
        if (j > 0) {
          let newValue = costs[j - 1];

          if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }

          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }

    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }

  return costs[s2.length];
};

/*
 * Returns a percentage of how "similar" two strings are.
 * Uses edit distance as one of its components.
 *
 * @param {Text} other The string to compare to
 * @return {Number} A number from 0 to 1 to signify "similarity"
 */
String.prototype.compare = function(other)
{
  'use strict';

  let longer = this;
  let shorter = other;
  if (this.length < other.length) {
    longer = other;
    shorter = this;
  }

  if (longer.length == 0) {
    return 1.0;
  }

  return (longer.length - getEditDistance(longer, shorter)) / parseFloat(longer.length);
};

/*
 * Returns the element given a id property value.
 *
 * @param {Text} value The id value of the element were trying to get.
 * @return {Object} The element object that matched the id
 */
Array.prototype.getby = function(value, property)
{
  'use strict';

  // Default to id property search
  if (!property) {
    property = 'id';
  }

  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i][property] == value) {
      return this[i];
    }
  }

  return null;
}

/*
 * Returns the element given a parent property value.
 *
 * @param {Array} value The parents value of the element were trying to get.
 * @return {Array} An array of the element object that matched the parents
 */
Array.prototype.getbys = function(value, property)
{
  'use strict';

  // Default to id property search
  if (!property) {
    property = 'id';
  }

  let result = [];
  for (let i = this.length - 1; i >= 0; i--) {
    let propertyValue = this[i][property];

    // Use intersect when it comes to parents
    if (Array.isArray(value) && Array.isArray(propertyValue) &&
        propertyValue.intersect(value).length != 0) {
      result.push(this[i]);
    }
  }

  return result;
}

/*
 * Adds a special highlight to the connectors of the ancestors of
 * of the selected `id`.
 *
 * @param {Text} id: The id of the main person
 * @param {Array} persons: the family tree, persons array
 * @param {Array} output: Original output to append to
 * @return {Array} The new, updated output
 */
function getPedegreePeople(id, persons, output)
{
  'use strict';

  // Put a default empty array if first call
  if (!output) {
    output = [];
  }

  // Default to first person if can't find by ID
  let person = persons.getby(id);
  if (!person) {
    return output;
  }

  // The main person has no parents, stop the method
  if (person && !person.parents) {
    return output;
  }

  output = output.concat(person.id);

  // Recursively get the ancestors of the main person
  for (let i = 0, imax = (person.parents || []).length; i < imax; i++) {
    output = getPedegreePeople(person.parents[i], persons, output);
  }

  return output
}

/*
 * Returns the likeness of the query matching a person info.
 */
function searchPerson(query, person)
{
  'use strict';

  // Just return, there's no query anyway
  if (!query) {
    return false;
  }

  // Search actual id if query is a number
  let hasHyphen = query.match('-');
  if (query.length == 8 && hasHyphen != null && hasHyphen.length == 1) {
    return person.id == query ? 1 : 0;
  }

  // Split query and name by space so we can compare per word
  let queryParts = query.split(' ');
  let nameParts = person.name.first.split(' ');
  nameParts = nameParts.concat(person.name.middle.split(' '));
  nameParts = nameParts.concat(person.name.last.split(' '));

  // Get overall, word-per-word likeness
  let overallLikeness = 0;
  for (let i = 0, imax = queryParts.length; i < imax; i++) {
    let queryLikeness = 0;
    for (let j = 0, jmax = nameParts.length; j < jmax; j++) {
      let nameLikeness = queryParts[i].compare(nameParts[j]);
      if (nameLikeness > queryLikeness) {
        queryLikeness = nameLikeness;
      }
    }
    overallLikeness += queryLikeness;
  }
  overallLikeness /= queryParts.length

  // print(query, person.id, overallLikeness)
  return overallLikeness;
}

function filterPersons(query, persons)
{
  'use strict';

  // Don't bother, there's no query
  if (!query) {
    return persons;
  }

  // Get direct matches, the spouse of that direct match, and its parents
  let likenessMapping = {};
  let highestLikeness = 0;
  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];
    let likeness = searchPerson(query, person);

    if (likenessMapping[likeness] == undefined) {
      likenessMapping[likeness] = [person.id];
    } else {
      likenessMapping[likeness].push(person.id);
    }

    highestLikeness = Math.max(highestLikeness, likeness);
  }

  // Don't even bother if the highest likeness is less than 73%
  if (highestLikeness < 0.73) {
    return persons;
  }

  // All the match containers
  let directMatchIds = likenessMapping[highestLikeness];
  let parentMatchIds = [];
  let siblingMatchIds = [];
  let spouseMatchIds = [];
  let childrenMatchIds = [];

  // Get direct matches, the spouse of that direct match, and its parents
  for (let i = 0, imax = directMatchIds.length; i < imax; i++) {
    let id = directMatchIds[i];
    let person = persons.getby(id);

    parentMatchIds = parentMatchIds.concat(person.parents);
    siblingMatchIds = siblingMatchIds.concat(person.siblings);
    spouseMatchIds = spouseMatchIds.concat(person.spouses);
  }

  // print(directMatchIds);
  // print(parentMatchIds);
  // print(siblingMatchIds);
  // print(spouseMatchIds);

  // Default to first person in direct matches, otherwise... ARBYN IS THE MAIN!!
  let singleSearch = (directMatchIds.length == 1);
  let mainPerson = null;
  if (singleSearch) {
    mainPerson = persons.getby(directMatchIds[0]);
    parentMatchIds = getPedegreePeople(mainPerson.id, persons, parentMatchIds);
  }

  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];

    // If a parent is in the direct matches, include its kids as well
    for (let j = 0, jmax = (person.parents || []).length; j < jmax; j++) {
      if (directMatchIds.includes(person.parents[j])) {
        childrenMatchIds.push(person.id);
      }
    }

    // If a spouse is in the direct matches, include its partner as well
    for (let j = 0, jmax = (person.spouses || []).length; j < jmax; j++) {
      if (directMatchIds.includes(person.spouses[j])) {
        spouseMatchIds.push(person.id);
      }
    }
  }

  // Add all parents too
  let matchIds = directMatchIds.concat(childrenMatchIds);
  matchIds = matchIds.concat(parentMatchIds);
  matchIds = matchIds.concat(siblingMatchIds);
  // print(childrenMatchIds.includes('GQJK-L51'))
  if (singleSearch) {
    for (let i = 0, imax = matchIds.length; i < imax; i++) {
      for (let j = 0, jmax = persons.length; j < jmax; j++) {
        let person = persons[j];

        if (matchIds[i] == person.id) {
          if (person.parents.includes("GHBZ-YVX")) {
            // print(person)
          }
          matchIds = matchIds.concat(person.parents);
        }
      }
    }
  }
  matchIds = matchIds.concat(spouseMatchIds);

  // print(matchIds)

  let filteredPersons = [];
  for (let i = 0, imax = persons.length; i < imax; i++) {
    let person = persons[i];

    if (!matchIds.includes(person.id)) {
      continue;
    }

    let newParents = [];
    for (let j = 0, jmax = (person.parents || []).length; j < jmax; j++) {
      if (matchIds.includes(person.parents[j])) {
        newParents.push(person.parents[j]);
      }
    }

    let newSpouses = [];
    for (let j = 0, jmax = (person.spouses || []).length; j < jmax; j++) {
      if (matchIds.includes(person.spouses[j])) {
        newSpouses.push(person.spouses[j]);
      }
    }

    person.parents = newParents;
    person.spouses = newSpouses;

    // if (singleSearch && mainPerson.id == "GQX8-CQP" && person.id == "GHB5-TWN") {
    //   person.parents = ["GHB5-XTZ", "GHBR-FK3"];
    // }

    filteredPersons.push(person);
  }

  // if (singleSearch && mainPerson.id == "GQX8-CQP") {
  //   filteredPersons = filteredPersons.concat(ADANZA_TREE_DATA);
  // }

  return filteredPersons;
}
