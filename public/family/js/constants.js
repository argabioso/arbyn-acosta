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
        dna: !isDark ? '#f2e6f9' : '#403148',
        software: !isDark ? '#f0f0f0' : '#393939',
        government: !isDark ? '#f0f0f0' : '#393939',
        seaman: !isDark ? '#f0f0f0' : '#393939',
        manufacturing: !isDark ? '#f0f0f0' : '#393939',
        buysell: !isDark ? '#f0f0f0' : '#393939',
        beautician: !isDark ? '#fde8f0' : '#462c36',
        housewife: !isDark ? '#fde8f0' : '#462c36',
        retail: !isDark ? '#fde8f0' : '#462c36',
        farming: !isDark ? '#dff1e0' : '#2e4030',
        land: !isDark ? '#f2ebe6' : '#393633',
        police: !isDark ? '#e3edfd' : '#323b48',
        military: !isDark ? '#fcf3e2' : '#3e382e',
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
    none: !isDark ? 'images/none.jpg' : 'images/none.dark.jpg',
    female: !isDark ? 'images/female.jpg' : 'images/female.dark.jpg',
    male: !isDark ? 'images/male.jpg' : 'images/male.dark.jpg',
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
