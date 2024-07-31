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

  const birthYear = bino.formatDate(nodeData.birthDate, isPrivate && nodeData.living);
  const marriageYear = bino.formatDate(nodeData.marriageDate, isPrivate && nodeData.living);
  const deathYear = bino.formatDate(nodeData.deathDate, false);

  // If both birthYear and deathYear do not exist, return
  // "Living" or "Deceased" based on the living flag.
  if (!birthYear && !deathYear) {
    return living ? 'Living' : 'Deceased';
  }

  // If birthYear does not exist, return the
  // formatted deathYear with a separator.
  if (!birthYear) {
    let age = (nodeData.deathAge) ? ` (${nodeData.deathAge})` : '';

    if (!marriageYear) {
      return `${separator}${deathYear}${age}`;
    }
    return `${separator}${marriageYear}${separator}${deathYear}${age}`;
  }

  // If deathYear does not exist, return the formatted
  // `birthYear` with a separator and "Living" or "Deceased"
  // based on the living flag.
  if (!deathYear) {
    if (nodeData.deathAge) {
      age = nodeData.deathAge;
    }

    if (String(age).includes("NaN")) {
      if (!marriageYear) {
        return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}`;
      } else {
        return `${birthYear}${separator}${marriageYear}${separator}${living ? 'Living' : 'Deceased'}`;
      }
    }
    if (!marriageYear) {
      return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}` + (living ? ` (${age})` : '');
    } else {
      return `${birthYear}${separator}${marriageYear}${separator}${living ? 'Living' : 'Deceased'}` + (living ? ` (${age})` : '');
    }
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
    if (!marriageYear) {
      return `${birthYear}${separator}${deathYear}`;
    } else {
      return `${birthYear}${separator}${marriageYear}${separator}${deathYear}`;
    }
  }

  // If both birthYear and deathYear exist,
  // return the formatted lifespan string.
  if (!marriageYear) {
    return `${birthYear}${separator}${deathYear} (${age})`;
  } else {
    return `${birthYear}${separator}${marriageYear}${separator}${deathYear} (${age})`;
  }
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
  if (input.length < 36) {
    segments[segments.length - 1] = lookup[segments[segments.length - 1]]
  }

  // // If only one segment and it's a known country code, return the full name
  // if (segments.length === 1 && lookup[segments[0]]) {
  //   return lookup[segments[0]];
  // }

  // // If two segments and the second one is a known country code, replace it with the full name
  // if (segments.length === 2 && lookup[segments[1]]) {
  //   segments[1] = lookup[segments[1]];
  // }

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

function addQueryParam(key, value) {
  const currentUrl = new URL(window.location);
  currentUrl.searchParams.set(key, value);
  window.history.replaceState({}, '', currentUrl);
}

function removeQueryParam(key) {
  const currentUrl = new URL(window.location);
  currentUrl.searchParams.delete(key);
  window.history.replaceState({}, '', currentUrl);
}

function decodeUrlSafeBase64ToUtf8(base64Str) {
  // Convert from URL-safe Base64 to standard Base64
  let base64 = base64Str.replace(/-/g, '+').replace(/_/g, '/');
  // Add padding if necessary
  while (base64.length % 4) {
      base64 += '=';
  }
  const binaryString = atob(base64);
  const utf8Bytes = Uint8Array.from(binaryString, char => char.charCodeAt(0));
  const utf8String = new TextDecoder().decode(utf8Bytes);
  return utf8String;
}

function encodeUtf8ToUrlSafeBase64(str) {
  const utf8Bytes = new TextEncoder().encode(str);
  const binaryString = String.fromCharCode(...utf8Bytes);
  let base64String = btoa(binaryString);
  // Convert to URL-safe Base64
  base64String = base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return base64String;
}
