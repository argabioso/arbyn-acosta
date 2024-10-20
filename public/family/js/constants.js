const isPrivate = !isDebugging && !(window.location.get("private") == "false");
var isChecking = false; // overridden by checks.js if imported

const COLORS = {
  RED: {fg: '#EA1A68', bg: !isDark ? '#FDE8F0' : '#4B303B'},
  BLUE: {fg: '#4285F4', bg: !isDark ? '#E3EDFD' : '#323A4A'},
  CYAN: {fg: '#22AAB6', bg: !isDark ? '#E8F6F7' : '#2E3C3D'},
  ORANGE: {fg: '#FE6F00', bg: !isDark ? '#FDEEE8' : '#46352C'},
  YELLOW: {fg: !isDark ? '#E99E0E' : '#FFB11B', bg: !isDark ? '#FCF3E2' : '#40392C'},
  BROWN: {fg: !isDark ? '#BD5C17' : '#B3825D', bg: !isDark ? '#F3EDE9' : '#3E3834'},
  PURPLE: {fg: !isDark ? '#9831CF' : '#B73DF9', bg: !isDark ? '#F2E6F9' : '#41324B'},
  GREEN: {fg: !isDark ? '#259F31' : '#28BC36', bg: !isDark ? '#DFF1E0' : '#31402E'},
  PLAIN: {fg: !isDark ? '#333333' : '#EAEAEA', bg: !isDark ? '#F0F0F0' : '#393939'},
  LIGHT_GRAY: {fg: !isDark ? '#333333' : '#B6BFBF', bg: !isDark ? '#F0F0F0' : '#373737'},
  MARBLE: {fg: !isDark ? '#333333' : '#EDD5BB', bg: !isDark ? '#F0F0F0' : '#3d3833'},
}

const ui = {
  scale: 0.937,
  font: {
    size: {
      name: 14.3,
      details: 12,
    },
  },
  color: {
    background: !isDark ? '#f3f4f5' : '#202124',
    node: {
      background: !isDark ? '#ffffff' : '#2f2f2f',
      stroke: !isDark ? '#429537' : '#2E8A21',
      name: !isDark ? '#000000' : '#fefefe',
      details: {
        text: !isDark ? '#222222' : '#bdc1c6',
        letter: !isDark ? '#222222' : '#dedede',
      },
      nameless: {
        name: !isDark ? '#bdbdbd' : '#909090',
        details: !isDark ? '#b0b0b0' : '#929292',
      },
    },
    marker: {
      background: {
        'female-twin': COLORS.RED.bg,
        'male-twin': COLORS.BLUE.bg,
        apparel: COLORS.ORANGE.bg,
        beautician: COLORS.RED.bg,
        beer: COLORS.BROWN.bg,
        buysell: COLORS.PLAIN.bg,
        cattle: COLORS.BROWN.bg,
        centennial: COLORS.PLAIN.bg,
        church: COLORS.PLAIN.bg,
        computer: COLORS.LIGHT_GRAY.bg,
        default: !isDark ? '#ffffff' : '#2f2f2f',
        dna: COLORS.PURPLE.bg,
        farming: COLORS.GREEN.bg,
        fishery: COLORS.PLAIN.bg,
        government: COLORS.MARBLE.bg,
        househusband: COLORS.BLUE.bg,
        housekeeper: COLORS.RED.bg,
        housewife: COLORS.RED.bg,
        intelligence: COLORS.BLUE.bg,
        investigate: COLORS.PLAIN.bg,
        justice: COLORS.BLUE.bg,
        land: !isDark ? '#f2ebe6' : '#393633',
        manager: COLORS.PLAIN.bg,
        manufacturing: COLORS.PLAIN.bg,
        military: COLORS.YELLOW.bg,
        sergeant: COLORS.YELLOW.bg,
        police: COLORS.BLUE.bg,
        prelations: COLORS.YELLOW.bg,
        retail: COLORS.ORANGE.bg,
        sales: COLORS.YELLOW.bg,
        seaman: COLORS.PLAIN.bg,
        software: COLORS.PLAIN.bg,
        skull: COLORS.PLAIN.bg,
        train: COLORS.PLAIN.bg,
        book: COLORS.CYAN.bg,
      },
      foreground: {
        'female-twin': COLORS.RED.fg,
        'male-twin': COLORS.BLUE.fg,
        apparel: COLORS.ORANGE.fg,
        beautician: COLORS.RED.fg,
        beer: COLORS.BROWN.fg,
        buysell: COLORS.PLAIN.fg,
        cattle: COLORS.BROWN.fg,
        centennial: COLORS.PLAIN.fg,
        church: COLORS.PLAIN.fg,
        computer: COLORS.LIGHT_GRAY.fg,
        default: !isDark ? '#ffffff' : '#2f2f2f',
        dna: COLORS.PURPLE.fg,
        farming: COLORS.GREEN.fg,
        fishery: COLORS.PLAIN.fg,
        government: COLORS.MARBLE.fg,
        househusband: COLORS.BLUE.fg,
        housekeeper: COLORS.RED.fg,
        housewife: COLORS.RED.fg,
        intelligence: COLORS.BLUE.fg,
        investigate: COLORS.PLAIN.fg,
        justice: COLORS.BLUE.fg,
        land: !isDark ? '#f2ebe6' : '#393633',
        manager: COLORS.PLAIN.fg,
        manufacturing: COLORS.PLAIN.fg,
        military: COLORS.YELLOW.fg,
        sergeant: COLORS.YELLOW.fg,
        police: COLORS.BLUE.fg,
        prelations: COLORS.YELLOW.fg,
        retail: COLORS.ORANGE.fg,
        sales: COLORS.YELLOW.fg,
        seaman: COLORS.PLAIN.fg,
        software: COLORS.PLAIN.fg,
        skull: COLORS.PLAIN.fg,
        train: COLORS.PLAIN.fg,
        book: COLORS.CYAN.fg,
      },
      symbol: {
        default: 'white',
      },
    },
    link: !isDark ? '#afafaf' : '#7f7f7f',
    female: '#ea1a68',
    male: '#2799fd',
  },
  photo: {
    none: (
      !isDark
      ? 'data:image/jpeg;base64,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'
      : 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCACYAZADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAMEAgEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB+FWA1slC7jsAAAAAAAAAAAAAAAAAAAAAAyAAe+Ctco1s9CgAAAAAAAAAAAAAAAAAAAMgAAAAPe5jT1k6NKVD0AAAAAAAAAAAAAAAAGQAAAAAAAHdIDWy0LOegAAAAAAAAAAAAADIAAAAAAAAAB1yLUyjWhQ7AAAAAAAAAAABkAAAAAAAAAAAAB7SQ09ZOjSnQAAAAAAAAAyAAAAAAAAAAAAAAAApTONbLUq89AAAAAAMgAAAAAAAAAAAAAAAAAHfAvTJ6akKnQAAAMgAAAAAAAAAAAAAAAAAAAAOqRGr3J2aHHYBkAAAAAAAAAAAAAAAAAAAAAAA9ClA/8QAGBABAQEBAQAAAAAAAAAAAAAAAQIAUBH/2gAIAQEAAQUCFxXUKxR0/cVh6ZTiuoVijpjit70ynFdQrCdMcV1CnFHUKw9MXFdQrFHT9xWH3plOK6hWKOn7it70ynFdQrCb/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwF6/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwF6/8QAFRABAQAAAAAAAAAAAAAAAAAAgCH/2gAIAQEABj8CBFUtBP8A/8QAHBABAAICAwEAAAAAAAAAAAAAAQAxIVBBUWER/9oACAEBAAE/IRcweYI1s1LzEebMRTO0gNOzBB5xB+1sh+VFLzEbNCmdKAadmD2C3iXshSovOYrnZqUztII07MHsR5sxSmdpBadmLmDziCNbKopeYjzZiKZ0oFHZggt4g/a2Q/Ki85iNmIpnaQDTswewW8bMUqLzFcz/2gAMAwEAAgADAAAAELGPPPPPPPPPPPPPPPPPPPPPPPPPPLMNPPPPPPPPPPPPPPPPPPPPPPPPHGNPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPPMPPPPPPPPPPPPPPPPPPPPPPPPPPONPPPPPPPPPPPPPPPPPPPPPPPPLKOPPPPPPPPPPPPPPPPPPPPPPPPPHPNPPPPPPPPPPPPPPPPPPPPPPPPIHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPxB6/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPxB6/8QAIBABAAEFAQEAAwEAAAAAAAAAAQARMVBRYSFBgZGhcf/aAAgBAQABPxCw+NMVbTpDaof8yQo1FHc0R2XRq7LnmSZ9CLu6SzldZP6NTTF2q/cAVQnMkiqkeSzAf2fRo6cndw5Pj+QlrHJ/Vo7PpFBBUROZJCqR5BWnUstDpyejNMF8pdIb4OSFGo0ZdPHZdPXYIlRqZJ30Ip5W6TZmnJ2Wo0xVr1AKoTmSFVRR5PhBPq1dyd7CfH8hLMPMn9GpplmK/kAVQnMkiqkeQVoP1Po0dOTv5TUHV0hPg5Kz5Lo0dnhekESo1MkrVJBeGvSWH1pn/9k='
    ),
    female: (
      !isDark
      ? 'data:image/jpeg;base64,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'
      : 'data:image/jpeg;base64,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'
    ),
    male: (
      !isDark
      ? 'data:image/jpeg;base64,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'
      : 'data:image/jpeg;base64,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'
    ),
  },
  measure: {
    padding: 40,
    genderBand: {
      width: 2.6,
    },
    marker: {
      // scale: 0.3,
      // width: 21,
      // margin: 6,
      scale: 0.38,
      width: 21,
      margin: 3.9,
    },
    node: {
      margin: 9,
      padding: 10,
      height: 95.5,
      width: 410,
      widths: {
        0: 410,
        1: 392, // My generation
        2: 409,
        3: 403,
        4: 408,
        5: 389,
        6: 370,
        7: 308,
        8: 410,
        9: 410,
      }
    },
  },
};
