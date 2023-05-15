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
      background: {
        default: !isDark ? '#ffffff' : '#2f2f2f',
        dna: !isDark ? '#f2e6f9' : '#543366',
        software: !isDark ? '#f0f0f0' : '#484848',
        government: !isDark ? '#f0f0f0' : '#484848',
        seaman: !isDark ? '#f0f0f0' : '#484848',
        manufacturing: !isDark ? '#f0f0f0' : '#484848',
        beautician: !isDark ? '#fde8f0' : '#62293e',
        retail: !isDark ? '#fde8f0' : '#62293e',
        farming: !isDark ? '#dff1e0' : '#2d4e31',
        police: !isDark ? '#e3edfd' : '#35445d',
        military: !isDark ? '#fcf3e2' : '#52452c',
      },
      symbol: {
        default: 'white',
      },
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
      width: 2.6,
    },
    marker: {
      // scale: 0.3,
      // width: 21,
      // margin: 6,
      scale: 0.44,
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
