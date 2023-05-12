const isPrivate = !(window.location.get("private") == "false");
const isDark = window.isDark();

const ui = {
  scale: 0.85,
  font: {
    size: {
      name: 15,
      details: 12,
    },
  },
  color: {
    background: !isDark ? '#f3f4f5' : '#202124',
    node: {
      background: !isDark ? '#ffffff' : '#2f2f2f',
      name: !isDark ? '#000000' : '#fefefe',
      details: !isDark ? '#222222' : '#bdc1c6',
      nameless: {
        name: !isDark ? '#bdbdbd' : '#909090',
        details: !isDark ? '#b0b0b0' : '#929292',
      },
    },
    marker: {
      default: !isDark ? '#909090' : '#696969',
      dna: !isDark ? '#e173f1' : '#da4ff2',
      beautician: '#ca7566',
      farming: '#0f9d58',
      manufacturing: '#edc100',
      military: '#586e2c',
      police: '#4285F4',
      retail: !isDark ? '#0a4abf' : '#1a55c1',
      software: 'black',
      seaman: !isDark ? '#a0c2f9' : '#33548c',
    },
    link: '#9f9f9f',
    female: '#ea1a68',
    male: '#2799fd',
  },
  photo: {
    none: !isDark ? 'images/none.png' : 'images/none.dark.png',
    female: !isDark ? 'images/female.png' : 'images/female.dark.png',
    male: !isDark ? 'images/male.png' : 'images/male.dark.png',
  },
  measure: {
    padding: 40,
    genderBand: {
      width: 3,
    },
    marker: {
      // scale: 0.3,
      // width: 21,
      // margin: 6,
      scale: 0.35,
      width: 24.5,
      margin: 6,
    },
    node: {
      margin: 11,
      padding: 10,
      height: 80,
      width: 299,
    },
  },
};
