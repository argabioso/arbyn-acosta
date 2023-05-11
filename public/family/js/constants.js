const isPrivate = !(window.location.get("private") == "false");
const isDark = window.isDark();

const ui = {
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
    dna: '#da4ff2',
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
    dna: {
      radius: 6,
    },
    node: {
      margin: 11,
      padding: 10,
      height: 80,
      width: 299,
    },
  },
};
