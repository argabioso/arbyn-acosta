/**
 * Returns a boolean value indicating whether the node should have a "none" photo displayed.
 *
 * @param {object} nodeData - An object representing a node in a family tree.
 * @returns {boolean} - `true` if the node should have a "none" photo displayed, otherwise `false`.
 */
bino.useNonePhoto = function(nodeData) {
  return (
    !nodeData.hasImage
    && !nodeData.living
    && nodeData.birthDate == null
    && nodeData.deathDate == null
    && nodeData.birthPlace == null
    && nodeData.deathPlace == null
  );
}

/**
 * Get lifespan information from given nodeData.
 * @param {Object} nodeData - Contains living, birthDate, and deathDate data.
 * @return {string} Formatted lifespan string.
 */
bino.getRelativeDates = function(nodeData, isPrivate) {
  if (nodeData.useNonePhoto) {
    return "";
  }

  const separator = ' — ';
  const { living, birthDate, marriageDate, deathDate } = nodeData;

  let rawAge = bino.calculateAge(birthDate, deathDate)
  let age = rawAge;

  const birthYear = bino.formatDate(birthDate, isPrivate);
  const marriageYear = bino.formatDate(marriageDate, true);
  const deathYear = bino.formatDate(deathDate);

  // If both birthYear and deathYear do not exist, return
  // "Living" or "Deceased" based on the living flag.
  if (!birthYear && !deathYear) {
    return living ? 'Living' : 'Deceased';
  }

  // If birthYear does not exist, return the
  // formatted deathYear with a separator.
  if (!birthYear) {
    return `${separator}${deathYear}`;
  }

  // If deathYear does not exist, return the formatted
  // `birthYear` with a separator and "Living" or "Deceased"
  // based on the living flag.
  if (!deathYear) {
    if (nodeData.deathAge) {
      age = nodeData.deathAge;
    }

    if (String(age).includes("NaN")) {
      return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}`;
    }
    return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}` + (living ? ` (${age})` : '');
  }

  if (deathDate.includes('after')) {
    if (birthDate.includes('after')) {
      age = `~${rawAge}`;
    } else if (birthDate.includes('before')) {
      age = `${rawAge}+`;
    } else if (birthDate.includes('about')) {
      age = `${rawAge}+`;
    } else {
      age = `${rawAge}+`;
    }
  } else if (deathDate.includes('before')) {
    if (birthDate.includes('after')) {
      age = `${rawAge}-`;
    } else if (birthDate.includes('before')) {
      age = `~${rawAge}`;
    } else if (birthDate.includes('about')) {
      age = `${rawAge}-`;
    } else {
      age = `${rawAge}-`;
    }
  } else if (deathDate.includes('about')) {
    age = `~${rawAge}`;
  } else {
    if (birthDate.includes('after')) {
      age = `${rawAge}-`;
    } else if (birthDate.includes('before')) {
      age = `${rawAge}+`;
    } else if (birthDate.includes('about')) {
      age = `~${rawAge}`;
    }
  }

  if (nodeData.deathAge) {
    age = nodeData.deathAge;
  }

  if (String(age).includes("NaN")) {
    return `${birthYear}${separator}${deathYear}`;
  }

  // If both birthYear and deathYear exist,
  // return the formatted lifespan string.
  return `${birthYear}${separator}${deathYear} (${age})`;
}

/**
 * Converts country codes in the input string to their full country names.
 *
 * @param {string|null|undefined} input - The input string potentially containing a country code.
 * @returns {string|null|undefined} - The input with country codes replaced by full country names.
 */
bino.convertCountryCode = function(input) {
  if (!input) {
    return input;
  }

  const lookup = {
    'USA': 'United States of America',
    'PHL': 'Philippines',
    'BHR': 'Bahrain',
    // ... add other country codes and names as needed
  };

  const segments = input.split(',').map(segment => segment.trim());

  // If only one segment and it's a known country code, return the full name
  if (segments.length === 1 && lookup[segments[0]]) {
    return lookup[segments[0]];
  }

  // If two segments and the second one is a known country code, replace it with the full name
  if (segments.length === 2 && lookup[segments[1]]) {
    segments[1] = lookup[segments[1]];
  }

  return segments.join(', ');
}

/**
 * Calculates the age based on the birth date and optionally the death date.
 * If the death date is not provided, the current date is used.
 *
 * @param {string} birthDateString - The birth date in a string format.
 * @param {string} [deathDateString] - The optional death date in a string format.
 * @returns {number} - The calculated age.
 */
bino.calculateAge = function(birthDateString, deathDateString) {
    const birthDate = new Date(birthDateString);
    const deathDate = deathDateString ? new Date(deathDateString) : new Date();

    let age = deathDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = deathDate.getMonth() - birthDate.getMonth();

    // Adjust age if birth month hasn't occurred in the death year
    if (monthDifference < 0 || (monthDifference === 0 && deathDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

/**
 * Format date string as 'day month year'.
 * @param {string} dateString - Date in 'YYYY-MM-DD' format.
 * @return {string|null} Formatted date or null if dateString is falsy.
 */
bino.formatDate = function(raw, isPrivate, noDay) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const longMonths = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];

  if (!raw) {
    return null;
  }

  if (raw.includes("from ") && raw.includes(" to ")) {
    return raw;
  }

  // Check for prefix words
  let [prefix, dateString] = raw.includes(' ') ? raw.split(' ') : ["", raw];
  let [year, month, day] = dateString.split('-', 3);

  // Add a separating space for prefix if its populated
  if (prefix != '') {
    prefix += ' ';
  }

  if (month && !isPrivate) {
    day = (day === undefined) ? "" : day + " ";

    // Remove leading zero from days
    if (day.startsWith('0')) {
      day = day.slice(1);
    }

    if (!noDay) {
      return `${prefix}${day}${months[parseInt(month, 10) - 1]} ${year}`;
    }
    return `${prefix}${months[parseInt(month, 10) - 1]} ${year}`;
  }

  // if (month) {
  //   return `${prefix}${longMonths[parseInt(month, 10) - 1]} ${year}`;
  // }

  return `${prefix}${year}`;
};
