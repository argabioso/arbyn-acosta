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
window.location.get = function(name, defaultValue = null)
{
  // Use regex on location.href if URLSearchParams is not supported
  let paramValue = new RegExp('[\?&]' + name + '=([^&#]*)').exec(this.href);
  if (paramValue == null || (paramValue && !paramValue[1])) {
    if (defaultValue != null) {
      return defaultValue;
    }
    return null;
  }
  else {
    return decodeURI(paramValue[1]).ltrim().rtrim().replace(/\s\s+/g, ' ');
  }
};

/**
 * Determines if the local operating system has a preferred color scheme.
 * If none then we use the current time and checks if we consider it
 * 'dark' based on specific time ranges or not.
 * @return {boolean} Returns true if the current time falls within the
 *   'dark' time range, otherwise false.
 */
window.isDark = function() {
  const dark = '(prefers-color-scheme: dark)';
  const light = '(prefers-color-scheme: light)';
  const matchMedia = window.matchMedia;

  if (matchMedia && matchMedia(dark).matches) {
    return true;
  }

  if (matchMedia && matchMedia(light).matches) {
    return true;
  }

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  let ampm = hours >= 12 ? 'pm' : 'am';

  // the hour '0' should be '12'
  let adjustedHours = hours % 12;
  adjustedHours = adjustedHours ? adjustedHours : 12;

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = `${adjustedHours}:${formattedMinutes} ${ampm}`;

  if (
    (adjustedHours >= 6 && adjustedHours <= 11 && ampm === 'pm') ||
    (adjustedHours >= 1 && adjustedHours <= 6 && ampm === 'am') ||
    (adjustedHours === 12 && ampm === 'am')
  ) {
    return true;
  }
  return true;
}

// Add dark mode class to any page using extend.js
function applyDarkMode() {
  if (isDark()) {
     document.querySelector("body").classList.add('dark');
   }
}
const interval = setInterval(applyDarkMode, 1800000);

applyDarkMode();
clearInterval(interval);
