const MY_TREE_DATA = [
  // Side ni Lola Lina
  { id: "L66T-WY8", gender: "male",   hasImage: false, name: { first: "Juan",          middle: "",            last: "Bautista"    }, birthDate: "1783",       deathDate: null,         living: false, parents: [] },
  { id: "L6HC-MMX", gender: "female", hasImage: false, name: { first: "Maria",         middle: "",            last: "Quinto"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GC7T-H59", gender: "male",   hasImage: false, name: { first: "Agustin",       middle: "Quinto",      last: "Bautista"    }, birthDate: "1812",       deathDate: null,         living: false, parents: ["L66T-WY8", "L6HC-MMX"] },
  { id: "GC7T-1PK", gender: "female", hasImage: false, name: { first: "Felipa",        middle: "",            last: "Garcia"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "L281-614", gender: "female", hasImage: false, name: { first: "Maria",         middle: "Garcia",      last: "Bautista"    }, birthDate: null,         deathDate: null,         living: false, parents: ["GC7T-1PK", "GC7T-H59"] },
  { id: "LLQS-6YC", gender: "male",   hasImage: false, name: { first: "Guillermo",     middle: "Bautista",    last: "Maramba"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "LLQS-641", gender: "male",   hasImage: true,  name: { first: "Miguel",        middle: "Bautista",    last: "Maramba"     }, birthDate: "1858",       deathDate: null,         living: false, parents: ["LLQS-6YC", "L281-614"] },
  { id: "G7C3-B6P", gender: "male",   hasImage: false, name: { first: "Gregorio",      middle: "",            last: "Reyes"       }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "G7C3-J9S", gender: "female", hasImage: false, name: { first: "Leocadia",      middle: "",            last: "Novilla"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "LLQS-6F1", gender: "female", hasImage: true,  name: { first: "Mercedes",      middle: "Novilla",     last: "Reyes"       }, birthDate: null,         deathDate: null,         living: false, parents: ["G7C3-B6P", "G7C3-J9S"] },
  { id: "GHB8-GB6", gender: "male",   hasImage: true,  name: { first: "Sotero",        middle: "Reyes",       last: "Maramba Sr." }, birthDate: "1900-12-22", deathDate: null,         living: false, parents: ["LLQS-6F1", "LLQS-641"] },
  { id: "GJJR-ZM1", gender: "male",   hasImage: false, name: { first: "Pavio",         middle: "",            last: "Ramos"       }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GJJ5-528", gender: "female", hasImage: false, name: { first: "Juana",         middle: "Vicente",     last: "Alvarida"    }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GJJK-R47", gender: "female", hasImage: false, name: { first: "Camila",        middle: "Alvarida",    last: "Ramos"       }, birthDate: null,         deathDate: null,         living: false, parents: ["GJJR-ZM1", "GJJ5-528"] },
  { id: "GJJ5-PMT", gender: "male",   hasImage: false, name: { first: "Hilario",       middle: "",            last: "Dumantay"    }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GJJR-4Y9", gender: "female", hasImage: false, name: { first: "Marcela",       middle: "",            last: "Dela Cruz"   }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "LLMC-RWF", gender: "male",   hasImage: false, name: { first: "Saturnino",     middle: "Dela Cruz",   last: "Dumantay"    }, birthDate: null,         deathDate: null,         living: false, parents: ["GJJ5-PMT", "GJJR-4Y9"] },
  { id: "GHBD-9LY", gender: "female", hasImage: true,  name: { first: "Cresencia",     middle: "Ramos",       last: "Dumantay"    }, birthDate: "1911-04-20", deathDate: null,         living: false, parents: ["LLMC-RWF", "GJJK-R47"] },
  { id: "GHB8-J1B", gender: "female", hasImage: true,  name: { first: "Catalina",      middle: "Dumantay",    last: "Maramba"     }, birthDate: "1943-01-28", deathDate: "1974-08-10", living: false, parents: ["GHBD-9LY", "GHB8-GB6"] },

  // Side ni Lolo Boy
  { id: "GHB8-SQN", gender: "male",   hasImage: false, name: { first: "Ligorio",       middle: "",            last: "Acosta"      }, birthDate: "1871",       deathDate: "1948-07-07", living: false, parents: [] },
  { id: "GHB8-5K8", gender: "female", hasImage: false, name: { first: "Maximiana",     middle: "",            last: "Bongco"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHBD-9L6", gender: "male",   hasImage: true,  name: { first: "Manuel",        middle: "Bongco",      last: "Acosta Sr."  }, birthDate: "1913-11-10", deathDate: "1994-11-15", living: false, parents: ["GHB8-SQN", "GHB8-5K8"] },
  { id: "GHB8-LCC", gender: "male",   hasImage: false, name: { first: "Vicente",       middle: "",            last: "San Agustin" }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHB8-H7K", gender: "female", hasImage: false, name: { first: "Nena",          middle: "",            last: "Villacorta"  }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHB8-DXY", gender: "female", hasImage: true,  name: { first: "Natividad",     middle: "Villacorta",  last: "San Agustin" }, birthDate: "1925-12-21", deathDate: "2008-10-09", living: false, parents: ["GHB8-LCC", "GHB8-H7K"] },
  { id: "GHBD-7M4", gender: "male",   hasImage: true,  name: { first: "Manuel",        middle: "San Agustin", last: "Acosta Jr."  }, birthDate: "1948-07-06", deathDate: "1979-06-07", living: false, parents: ["GHBD-9L6", "GHB8-DXY"] },

  // Side ni Lolo Marcial
  { id: "GQJK-LCT", gender: "male",   hasImage: true,  name: { first: "Marcial",       middle: "Mia",         last: "Argabioso"   }, birthDate: "1932-10-14", deathDate: "2020-02-27", living: false, parents: ["GHBZ-TM4", "GHBZ-P5Q"] },
  { id: "GHBZ-TM4", gender: "male",   hasImage: false, name: { first: "Eusebio",       middle: "Lopecillo",   last: "Argabioso"   }, birthDate: "1895",       deathDate: "1972-10-27", living: false, parents: ["GHB8-RCH"] },
  { id: "GHB8-RCH", gender: "female", hasImage: false, name: { first: "Estebana",      middle: "",            last: "Lopecillo"   }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHBZ-P5Q", gender: "female", hasImage: false, name: { first: "Francisca",     middle: "Arco",        last: "Mia"         }, birthDate: null,         deathDate: null,         living: false, parents: ["GJJ8-MK1", "GJJZ-65G"] },
  { id: "GJJ8-MK1", gender: "male",   hasImage: false, name: { first: "Francisco",     middle: "Trobela",     last: "Mía"         }, birthDate: null,         deathDate: null,         living: false, parents: ["GJJ8-HDC", "GJJZ-54Z"] },
  { id: "GJJ8-HDC", gender: "male",   hasImage: false, name: { first: "Santiago",      middle: "",            last: "Mía"         }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GJJZ-54Z", gender: "female", hasImage: false, name: { first: "Aniceta",       middle: "",            last: "Trovela"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GJJZ-65G", gender: "female", hasImage: false, name: { first: "Gabina",        middle: "Villarante",  last: "Arco"        }, birthDate: null,         deathDate: null,         living: false, parents: ["GJJ8-XXM", "GJJZ-1K6"] },
  { id: "GJJ8-XXM", gender: "male",   hasImage: false, name: { first: "Eleuterio",     middle: "",            last: "Arco"        }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GJJZ-1K6", gender: "female", hasImage: false, name: { first: "Sabina",        middle: "",            last: "Villarante"  }, birthDate: null,         deathDate: null,         living: false, parents: [] },

  // Side ni Lola Lydia
  { id: "GHBZ-YVX", gender: "female", hasImage: true,  name: { first: "Lydia",         middle: "Perez",       last: "Saplala"     }, birthDate: "1944-11-24", deathDate: null,         living: true,  parents: ["GHB8-7T6", "GHB8-GZL"] },
  { id: "TEMP-999", gender: "male",   hasImage: false, name: { first: "Estanislao",    middle: "",            last: "Saplala"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHB8-7T6", gender: "male",   hasImage: true,  name: { first: "Fernando",      middle: "",            last: "Saplala"     }, birthDate: null,         deathDate: null,         living: false, parents: ["TEMP-999"] },
  { id: "GHB8-M8D", gender: "male",   hasImage: false, name: { first: "Victor",        middle: "",            last: "Perez"       }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHB8-M86", gender: "female", hasImage: false, name: { first: "Genoveba",      middle: "",            last: "Gutierrez"   }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GHB8-GZL", gender: "female", hasImage: true,  name: { first: "Lucina",        middle: "Gutierrez",   last: "Perez"       }, birthDate: null,         deathDate: null,         living: false, parents: ["GHB8-M8D", "GHB8-M86"] },

  // Nanay, Tatay, and me
  { id: "GQX8-CQP", gender: "male",   hasImage: true,  name: { first: "Arbyn",         middle: "Acosta",      last: "Argabioso"   }, birthDate: "1995-04-19", deathDate: null,         living: true,  parents: ["GQJK-L51", "GQJK-G8W"], spouses: ["GHB5-TWN"] },
  { id: "GQJK-L51", gender: "male",   hasImage: true,  name: { first: "Rolando",       middle: "Saplala",     last: "Argabioso"   }, birthDate: "1965-10-09", deathDate: null,         living: true,  parents: ["GQJK-LCT", "GHBZ-YVX"] },
  { id: "GQJK-G8W", gender: "female", hasImage: true,  name: { first: "Corazon",       middle: "Maramba",     last: "Acosta"      }, birthDate: "1971-03-10", deathDate: "2018-05-25", living: false, parents: ["GHBD-7M4", "GHB8-J1B"] },

  { id: "GHB5-TWN", gender: "female", hasImage: true,  name: { first: "Mitchie",       middle: "Ajesta",      last: "Adanza"      }, birthDate: "1994-12-16", deathDate: null,         living: true,  parents: ["GHB5-XTZ", "GHBR-FK3"] },

];

const ADANZA_TREE_DATA = [
  // Side ni Tito Darne
  { id: "GH12-DRN", gender: "male",   hasImage: false, name: { first: "Felomino",      middle: "B",           last: "Adanza"      }, birthDate: "1901",       deathDate: "1990",       living: false, parents: [] },
  { id: "GH12-3GN", gender: "female", hasImage: false, name: { first: "Consuelo",      middle: "",            last: "Ladera"      }, birthDate: "1911",       deathDate: null,         living: false, parents: [] },
  { id: "GH12-9JZ", gender: "male",   hasImage: false, name: { first: "Cecilio",       middle: "",            last: "Elican"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GH12-35H", gender: "female", hasImage: false, name: { first: "Jovita",        middle: "",            last: "Acerto"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },

  { id: "GH12-SVQ", gender: "male",   hasImage: true,  name: { first: "Nestor",        middle: "Ladera",      last: "Adanza"      }, birthDate: null,         deathDate: "2018-09-29", living: false, parents: ["GH12-DRN", "GH12-3GN"] },
  { id: "GH12-9F6", gender: "female", hasImage: true,  name: { first: "Rufa",          middle: "Acerto",      last: "Elican"      }, birthDate: null,         deathDate: "2015-04-02", living: false, parents: ["GH12-9JZ", "GH12-35H"] },

  { id: "GHB5-XTZ", gender: "male",   hasImage: true,  name: { first: "Darne",         middle: "Elican",      last: "Adanza"      }, birthDate: "1964-06-22", deathDate: null,         living: true,  parents: ["GH12-SVQ", "GH12-9F6"] },

  // Side ni Tita Mylen
  { id: "GH12-6YL", gender: "male",   hasImage: false, name: { first: "Benigno",       middle: "Aquino",      last: "Vergara"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GH12-DD8", gender: "female", hasImage: false, name: { first: "Enoria",        middle: "",            last: "Borja"       }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GH12-XX4", gender: "male",   hasImage: false, name: { first: "Emmanuel",      middle: "",            last: "Ajesta"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "GH12-HQN", gender: "female", hasImage: false, name: { first: "Ursula",        middle: "",            last: "Crispolon"   }, birthDate: null,         deathDate: null,         living: false, parents: [] },

  { id: "GH12-Z3C", gender: "male",   hasImage: false, name: { first: "Napoleon",      middle: "Crispolon",   last: "Ajesta"      }, birthDate: null,         deathDate: null,         living: false, parents: ["GH12-XX4", "GH12-HQN"] },
  { id: "GH12-W17", gender: "female", hasImage: true,  name: { first: "Celma",         middle: "Borja",       last: "Vergara"     }, birthDate: "1941-07-08", deathDate: "2020-02-16", living: false, parents: ["GH12-6YL", "GH12-DD8"] },

  { id: "GHBR-FK3", gender: "female", hasImage: true,  name: { first: "Mylen",         middle: "Vergara",     last: "Ajesta"      }, birthDate: "1974-04-14", deathDate: null,         living: true,  parents: ["GH12-Z3C", "GH12-W17"] },
];

var rawTreeData = [];

rawTreeData = rawTreeData.concat(MY_TREE_DATA);
rawTreeData = rawTreeData.concat(ADANZA_TREE_DATA);
rawTreeData = rawTreeData.concat([
  // Mga kapatid ni Lola Lydia
  { id: "TEMP-046", gender: "female", hasImage: true,  name: { first: "Celia",         middle: "Perez",       last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["GHB8-7T6", "GHB8-GZL"] },
  { id: "TEMP-047", gender: "male",   hasImage: true,  name: { first: "Bonifacio",     middle: "Perez",       last: "Saplala"     }, birthDate: "1939",       deathDate: null,         living: true,  parents: ["GHB8-7T6", "GHB8-GZL"] },
  { id: "TEMP-048", gender: "male",   hasImage: false, name: { first: "Claro",         middle: "Perez",       last: "Saplala Sr." }, birthDate: null,         deathDate: null,         living: false, parents: ["GHB8-7T6", "GHB8-GZL"] },

  // Mga kapatid ni Lolo Manuel Sr.
  { id: "TEMP-101", gender: "female", hasImage: false, name: { first: "Isabel",        middle: "Bongco",      last: "Acosta"      }, birthDate: "1911-05-17", deathDate: "1984-10-03", living: false, parents: ["GHB8-SQN", "GHB8-5K8"] },

  // Ex ni Lolo Manuel Jr. / Step mother ni Nanay
  { id: "TEMP-033", gender: "female", hasImage: false, name: { first: "Loren",         middle: "",            last: "Lobitaña"    }, birthDate: null,         deathDate: null,         living: true,  parents: [], spouses: ["GHBD-7M4"] },

  { id: "TEMP-015", gender: "male",   hasImage: false, name: { first: "Benjamin",      middle: "San Agustin", last: "Acosta Sr."  }, birthDate: "1949-10-23", deathDate: null,         living: false, parents: ["GHBD-9L6", "GHB8-DXY"] },
  { id: "TEMP-031", gender: "female", hasImage: false, name: { first: "Amelia",        middle: "San Agustin", last: "Acosta"      }, birthDate: "1947-06-12", deathDate: "2021-05-02", living: false, parents: ["GHBD-9L6", "GHB8-DXY"] },
  { id: "TEMP-032", gender: "female", hasImage: false, name: { first: "Victoria",      middle: "San Agustin", last: "Acosta"      }, birthDate: "1945-06-17", deathDate: "2018-02-18", living: false, parents: ["GHBD-9L6", "GHB8-DXY"] },

  // Lolo Boy - Generation Partners
  { id: "TEMP-016", gender: "female", hasImage: false, name: { first: "Aida",          middle: "",            last: "Villacorta"  }, birthDate: null,         deathDate: "2020-08",    living: false, parents: [] },

  // Batch nila Nanay
  { id: "TEMP-001", gender: "male",   hasImage: true,  name: { first: "Manuel",        middle: "Maramba",     last: "Acosta III"  }, birthDate: "1966-11-07", deathDate: null,         living: true,  parents: ["GHBD-7M4", "GHB8-J1B"] },
  { id: "TEMP-002", gender: "female", hasImage: true,  name: { first: "Susan",         middle: "Maramba",     last: "Acosta"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["GHBD-7M4", "GHB8-J1B"] },

  { id: "TEMP-017", gender: "male",   hasImage: false, name: { first: "Benjamin",      middle: "Villacorta",  last: "Acosta Jr."  }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-015", "TEMP-016"] },
  { id: "TEMP-018", gender: "male",   hasImage: false, name: { first: "Darwin",        middle: "Villacorta",  last: "Acosta Sr."  }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-015", "TEMP-016"] },

  { id: "GHBF-XBT", gender: "male",   hasImage: true,  name: { first: "Antonio",       middle: "Saplala",     last: "Argabioso"   }, birthDate: "1963-12-14", deathDate: null,         living: true,  parents: ["GQJK-LCT", "GHBZ-YVX"] },
  { id: "GHBN-R99", gender: "male",   hasImage: true,  name: { first: "Danilo",        middle: "Saplala",     last: "Argabioso"   }, birthDate: "1969-03-31", deathDate: null,         living: true,  parents: ["GQJK-LCT", "GHBZ-YVX"] },

  { id: "TEMP-056", gender: "male",   hasImage: false, name: { first: "Claro",         middle: "",            last: "Saplala Jr." }, birthDate: "1974-04-01", deathDate: null,         living: true,  parents: ["TEMP-048"] },
  { id: "TEMP-083", gender: "female", hasImage: false, name: { first: "Cynthia",       middle: "",            last: "Saplala"     }, birthDate: "1966-10-12", deathDate: null,         living: true,  parents: ["TEMP-048"] },
  { id: "TEMP-084", gender: "female", hasImage: true,  name: { first: "Barbara",       middle: "",            last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-048"] },

  { id: "TEMP-097", gender: "male",   hasImage: false, name: { first: "Danilo",        middle: "",            last: "Franco"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-098", gender: "male",   hasImage: true,  name: { first: "Ferdie",        middle: "Saplala",     last: "Franco"      }, birthDate: "1977-04-03", deathDate: null,         living: true,  parents: ["TEMP-097", "TEMP-046"] },

  { id: "TEMP-102", gender: "male",   hasImage: false, name: { first: "",              middle: "Acosta",      last: "Dizon"       }, birthDate: null,         deathDate: null,         living: false,  parents: ["TEMP-101"] },
  { id: "TEMP-103", gender: "male",   hasImage: false, name: { first: "Arnold",        middle: "Llamas",      last: "Dizon"       }, birthDate: null,         deathDate: null,         living: false,  parents: ["TEMP-102"] },
  { id: "TEMP-104", gender: "female", hasImage: false, name: { first: "Ruth",          middle: "",            last: "Dizon"       }, birthDate: "1964-11-19", deathDate: "2020-07-19", living: false,  parents: ["TEMP-102"] },

  // My siblings
  { id: "TEMP-008", gender: "female", hasImage: true,  name: { first: "Riand Nikole",  middle: "Martin",      last: "Argabioso"   }, birthDate: "2003-11-07", deathDate: null,         living: true,  parents: ["GQJK-L51", "TEMP-006"] },
  { id: "TEMP-009", gender: "female", hasImage: true,  name: { first: "Ira Mae",       middle: "Acosta",      last: "Ignacio"     }, birthDate: "2004-08-05", deathDate: null,         living: true,  parents: ["GQJK-G8W", "TEMP-003"] },
  { id: "TEMP-010", gender: "male",   hasImage: true,  name: { first: "Joshua Caleb",  middle: "Acosta",      last: "Ignacio"     }, birthDate: "2008-08-01", deathDate: null,         living: true,  parents: ["GQJK-G8W", "TEMP-003"] },

  // My other parents
  { id: "TEMP-004", gender: "male",   hasImage: false, name: { first: "Lorenzo",       middle: "Ventura",     last: "Ignacio"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-005", gender: "female", hasImage: false, name: { first: "Teresita",      middle: "Go",          last: "Calilong"    }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-063", "TEMP-064"] },
  { id: "TEMP-063", gender: "male",   hasImage: false, name: { first: "Juanito",       middle: "",            last: "Calilong"    }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-064", gender: "female", hasImage: false, name: { first: "Nenita",        middle: "Ramoz",       last: "Go"          }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-003", gender: "male",   hasImage: true,  name: { first: "Larry",         middle: "Calilong",    last: "Ignacio"     }, birthDate: "1971-05-10", deathDate: null,         living: true,  parents: ["TEMP-004", "TEMP-005"] },
  { id: "TEMP-006", gender: "female", hasImage: true,  name: { first: "Nierene",       middle: "Nieves",      last: "Martin"      }, birthDate: "1975-08-29", deathDate: null,         living: true,  parents: [] },

  // Cousins and their parents
  { id: "TEMP-011", gender: "male",   hasImage: true,  name: { first: "Neri",          middle: "",            last: "Hanopol"     }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-012", gender: "male",   hasImage: true,  name: { first: "Franz Nersus",  middle: "Acosta",      last: "Hanopol"     }, birthDate: "1989-07-28", deathDate: null,         living: true,  parents: ["TEMP-011", "TEMP-002"] },
  { id: "TEMP-049", gender: "female", hasImage: false, name: { first: "Tezz",          middle: "",            last: "Filomeno"    }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-030", gender: "female", hasImage: true,  name: { first: "Karen",         middle: "Filomeno",    last: "Guillermo"   }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-049"] },
  { id: "TEMP-027", gender: "male",   hasImage: true,  name: { first: "Franzis Karl",  middle: "Guillermo",   last: "Hanopol"     }, birthDate: "2007-11-24", deathDate: null,         living: true,  parents: ["TEMP-012", "TEMP-030"] },
  { id: "TEMP-028", gender: "male",   hasImage: true,  name: { first: "Lanz",          middle: "Guillermo",   last: "Hanopol"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-012", "TEMP-030"] },
  { id: "TEMP-029", gender: "male",   hasImage: true,  name: { first: "Ezekiel Kyrie", middle: "Guillermo",   last: "Hanopol"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-012", "TEMP-030"] },

  { id: "TEMP-065", gender: "female", hasImage: false, name: { first: "Teodorica",     middle: "Lequesta",    last: "Urgel"       }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-066", gender: "male",   hasImage: false, name: { first: "Edgardo",       middle: "Aguilar",     last: "Cruz"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-068"] },
  { id: "GHBN-Y4G", gender: "female", hasImage: true,  name: { first: "Dulce",         middle: "Urgel",       last: "Cruz"        }, birthDate: "1964-09-07", deathDate: null,         living: true,  parents: ["TEMP-065", "TEMP-066"] },
  { id: "GHBN-ZCN", gender: "female", hasImage: true,  name: { first: "Lotus",         middle: "Cruz",        last: "Argabioso"   }, birthDate: "1987",       deathDate: null,         living: true,  parents: ["GHBN-Y4G", "GHBF-XBT"] },
  { id: "GHBF-LJX", gender: "male",   hasImage: true,  name: { first: "Mark",          middle: "Cruz",        last: "Argabioso"   }, birthDate: "1989",       deathDate: null,         living: true,  parents: ["GHBN-Y4G", "GHBF-XBT"] },
  { id: "GHBJ-MVC", gender: "male",   hasImage: true,  name: { first: "Michael",       middle: "Cruz",        last: "Argabioso"   }, birthDate: "1995",       deathDate: null,         living: true,  parents: ["GHBN-Y4G", "GHBF-XBT"] },

  { id: "TEMP-024", gender: "female", hasImage: true,  name: { first: "Melosina",      middle: "Cablao",      last: "Gallardo"    }, birthDate: "1967-03-08", deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-025", gender: "female", hasImage: true,  name: { first: "Danae",         middle: "Gallardo",    last: "Argabioso"   }, birthDate: null,         deathDate: null,         living: true,  parents: ["GHBN-R99", "TEMP-024"] },
  { id: "TEMP-026", gender: "female", hasImage: true,  name: { first: "Danielle",      middle: "Gallardo",    last: "Argabioso"   }, birthDate: null,         deathDate: null,         living: true,  parents: ["GHBN-R99", "TEMP-024"] },

  { id: "TEMP-137", gender: "female", hasImage: false, name: { first: "Liliosa",       middle: "",            last: "Rowayan"     }, birthDate: "1943-10-07", deathDate: "2019-07-07", living: false, parents: [] },
  { id: "TEMP-138", gender: "male",   hasImage: false, name: { first: "Baudelio",      middle: "",            last: "Costuya"     }, birthDate: "1945-05-25", deathDate: "2019-12-11", living: false, parents: [] },
  { id: "TEMP-021", gender: "female", hasImage: false, name: { first: "Analyn",        middle: "Rowayan",     last: "Costuya"     }, birthDate: null,         deathDate: null,         living: false, parents: ["TEMP-137", "TEMP-138"] },
  { id: "TEMP-019", gender: "female", hasImage: false, name: { first: "Kristine",      middle: "Costuya",     last: "Acosta Jr."  }, birthDate: "1994-07-28", deathDate: null,         living: true,  parents: ["TEMP-018", "TEMP-021"] },
  { id: "TEMP-022", gender: "female", hasImage: false, name: { first: "Rowena",        middle: "Costuya",     last: "Acosta"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-018", "TEMP-021"] },
  { id: "TEMP-023", gender: "female", hasImage: false, name: { first: "Kim",           middle: "Costuya",     last: "Acosta"      }, birthDate: "1997-09-09", deathDate: null,         living: true,  parents: ["TEMP-018", "TEMP-021"] },
  { id: "TEMP-020", gender: "male",   hasImage: false, name: { first: "Darwin",        middle: "Costuya",     last: "Acosta"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-018", "TEMP-021"] },

  { id: "TEMP-034", gender: "female", hasImage: true,  name: { first: "Rodelia",       middle: "Constantino", last: "Diamse"      }, birthDate: null,         deathDate: "1995-04-20", living: false, parents: [] },
  { id: "TEMP-035", gender: "female", hasImage: false, name: { first: "Jheng Jheng",   middle: "Diamse",      last: "Acosta"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-034", "TEMP-017"], adopted: true },
  { id: "TEMP-036", gender: "male",   hasImage: false, name: { first: "Benjamin",      middle: "Diamse",      last: "Acosta III"  }, birthDate: "1991-10-16", deathDate: null,         living: true,  parents: ["TEMP-034", "TEMP-017"] },
  { id: "TEMP-037", gender: "female", hasImage: false, name: { first: "Judel",         middle: "Diamse",      last: "Acosta"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-034", "TEMP-017"] },

  { id: "TEMP-038", gender: "female", hasImage: false, name: { first: "Raquel",        middle: "D",           last: "Rosete"      }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-039", gender: "male",   hasImage: false, name: { first: "Mark",          middle: "Rosete",      last: "Acosta"      }, birthDate: "2001-11-29", deathDate: null,         living: true,  parents: ["TEMP-038", "TEMP-017"] },
  { id: "TEMP-040", gender: "female", hasImage: false, name: { first: "Katrina",       middle: "",            last: "Rosete"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-038"] },
  { id: "TEMP-041", gender: "female", hasImage: false, name: { first: "Kristine Ella", middle: "",            last: "Rosete"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-038"] },

  { id: "TEMP-057", gender: "female", hasImage: false, name: { first: "Jennylyn",      middle: "",            last: "Tiozon"      }, birthDate: "1974-03-17", deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-058", gender: "male",   hasImage: false, name: { first: "Claro",         middle: "Tiozon",      last: "Saplala III" }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-056", "TEMP-057"] },
  { id: "TEMP-059", gender: "female", hasImage: false, name: { first: "Cyrill Aouie",  middle: "Tiozon",      last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-056", "TEMP-057"] },
  { id: "TEMP-060", gender: "male",   hasImage: false, name: { first: "Fernando",      middle: "Tiozon",      last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-056", "TEMP-057"] },
  { id: "TEMP-061", gender: "male",   hasImage: false, name: { first: "Ceejay",        middle: "Tiozon",      last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-056", "TEMP-057"] },
  { id: "TEMP-062", gender: "male",   hasImage: false, name: { first: "Tyron",         middle: "Tiozon",      last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-056", "TEMP-057"] },

  { id: "TEMP-085", gender: "male",   hasImage: true,  name: { first: "Ian",           middle: "O",           last: "Manalo"      }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-086", gender: "male",   hasImage: false, name: { first: "Jwayne",        middle: "Saplala",     last: "Manalo"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-085", "TEMP-084"] },
  { id: "TEMP-087", gender: "male",   hasImage: false, name: { first: "Irvin Jeo",     middle: "Saplala",     last: "Manalo"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-085", "TEMP-084"] },
  { id: "TEMP-088", gender: "female", hasImage: false, name: { first: "Ian Jyke",      middle: "Saplala",     last: "Manalo"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-085", "TEMP-084"] },

  { id: "TEMP-089", gender: "male",   hasImage: false, name: { first: "Danny",         middle: "",            last: "Maravilla"   }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-090", gender: "female", hasImage: false, name: { first: "Danica",        middle: "Saplala",     last: "Maravilla"   }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-083", "TEMP-089"] },

  { id: "TEMP-091", gender: "female", hasImage: true,  name: { first: "Maura",         middle: "Fabriz",      last: "Dalagan"     }, birthDate: "1940-11-30", deathDate: "2021-07-25", living: false, parents: [] },
  { id: "TEMP-092", gender: "male",   hasImage: true,  name: { first: "Ronaldo",       middle: "Dalagan",     last: "Saplala"     }, birthDate: "1977-01-13", deathDate: null,         living: true,  parents: ["TEMP-091", "TEMP-047"] },
  { id: "TEMP-093", gender: "female", hasImage: true,  name: { first: "Maria Khanela", middle: "",            last: "De Jesus"    }, birthDate: "1977-06-09", deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-094", gender: "female", hasImage: true,  name: { first: "Alma",          middle: "De Jesus",    last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-092", "TEMP-093"] },
  { id: "TEMP-095", gender: "female", hasImage: true,  name: { first: "Maria",         middle: "De Jesus",    last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-092", "TEMP-093"] },

  { id: "TEMP-105", gender: "female", hasImage: false, name: { first: "Maria Yzabel",  middle: "Dizon",       last: "Narciso"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-104"] },
  { id: "TEMP-106", gender: "male",   hasImage: false, name: { first: "Cholo",         middle: "Dizon",       last: "Narciso"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-104"] },

  // Nephews and Nieces and their not-my-cousin parents
  { id: "TEMP-042", gender: "male",   hasImage: false, name: { first: "RJ Cedrick",    middle: "",            last: "Delrosario"  }, birthDate: "1995-01-20", deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-043", gender: "male",   hasImage: false, name: { first: "Kaycee Clark",  middle: "Acosta",      last: "Delrosario"  }, birthDate: "2018-03-19", deathDate: null,         living: true,  parents: ["TEMP-042", "TEMP-023"] },

  { id: "TEMP-044", gender: "female", hasImage: false, name: { first: "Missy",         middle: "",            last: "Oroña"       }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-045", gender: "male",   hasImage: false, name: { first: "Kiel Aeko",     middle: "Oroña",       last: "Acosta"      }, birthDate: "2021-11-08", deathDate: null,         living: true,  parents: ["TEMP-044", "TEMP-039"] },

  { id: "TEMP-050", gender: "male",   hasImage: false, name: { first: "Raiver Kyle",   middle: "",            last: "Acosta"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-054", "TEMP-035"] },
  { id: "TEMP-051", gender: "female", hasImage: false, name: { first: "Rhianna Keith", middle: "Acosta",      last: "Fernandez"   }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-054", "TEMP-035"] },
  { id: "TEMP-052", gender: "female", hasImage: false, name: { first: "Krishna",       middle: "Acosta",      last: "Fernandez"   }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-054", "TEMP-035"] },
  { id: "TEMP-054", gender: "male",   hasImage: false, name: { first: "Mhack Mac",     middle: "",            last: "Fernandez"   }, birthDate: null,         deathDate: null,         living: true,  parents: [] },

  { id: "TEMP-099", gender: "female", hasImage: true,  name: { first: "Caseymars",     middle: "",            last: "Carriedo"    }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-100", gender: "male",   hasImage: false, name: { first: "Cayden",        middle: "Carriedo",    last: "Saplala"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-099", "TEMP-060"] },

  // John-Tita Dulce connection
  { id: "TEMP-072", gender: "female", hasImage: false, name: { first: "Yohana",        middle: "Pelagio",     last: "Cruz"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-071", "TEMP-070"] },
  { id: "TEMP-071", gender: "female", hasImage: false, name: { first: "Carol",         middle: "Alviza",      last: "Pelagio"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-073"] },
  { id: "TEMP-074", gender: "male",   hasImage: false, name: { first: "Aldrin",        middle: "Alviza",      last: "Pelagio"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-073"] },
  { id: "TEMP-075", gender: "female", hasImage: false, name: { first: "Meldrin",       middle: "Alviza",      last: "Pelagio"     }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-073"] },
  { id: "TEMP-073", gender: "female", hasImage: false, name: { first: "Lucita",        middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: false, parents: ["TEMP-078"] },
  { id: "TEMP-070", gender: "male",   hasImage: false, name: { first: "John",          middle: "",            last: "Cruz"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-067"] },
  { id: "TEMP-067", gender: "male",   hasImage: false, name: { first: "Herminio",      middle: "Aguilar",     last: "Cruz"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-068"] },
  { id: "TEMP-068", gender: "male",   hasImage: false, name: { first: "Remigio",       middle: "Ramos",       last: "Cruz Jr."    }, birthDate: null,         deathDate: null,         living: false, parents: ["TEMP-069"] },
  { id: "TEMP-069", gender: "male",   hasImage: false, name: { first: "Remigio",       middle: "",            last: "Cruz Sr."    }, birthDate: null,         deathDate: null,         living: false, parents: [] },

  // Side nila Obet
  { id: "TEMP-078", gender: "male",   hasImage: false, name: { first: "",              middle: "",            last: "Alviza"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-076", gender: "male",   hasImage: false, name: { first: "Roberto",       middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-078"] },
  { id: "TEMP-118", gender: "female", hasImage: false, name: { first: "Virgie",        middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-078"] },
  { id: "TEMP-119", gender: "female", hasImage: false, name: { first: "Lydia",         middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-078"] },
  { id: "TEMP-120", gender: "male",   hasImage: false, name: { first: "Gerry",         middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-078"] },
  { id: "TEMP-121", gender: "male",   hasImage: false, name: { first: "Eddie",         middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: false, parents: ["TEMP-078"] },
  { id: "TEMP-123", gender: "male",   hasImage: false, name: { first: "Jimmy",         middle: "Santos",      last: "Alviza"      }, birthDate: "1959-05-14", deathDate: null,         living: true,  parents: ["TEMP-078"] },
  { id: "TEMP-122", gender: "female", hasImage: false, name: { first: "Judith",        middle: "Santos",      last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-078"] },
  { id: "TEMP-114", gender: "male",   hasImage: false, name: { first: "Angelito",      middle: "",            last: "Santos"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-115", gender: "female", hasImage: false, name: { first: "Susana",        middle: "",            last: "Misamis"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-112", gender: "female", hasImage: false, name: { first: "Natividad",     middle: "Misamis",     last: "Santos"      }, birthDate: "1934",       deathDate: null,         living: false, parents: ["TEMP-114", "TEMP-115"] },
  { id: "TEMP-116", gender: "male",   hasImage: false, name: { first: "Juan",          middle: "",            last: "Aguilar"     }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-117", gender: "female", hasImage: false, name: { first: "Donata",        middle: "",            last: "Zapata"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-113", gender: "male",   hasImage: false, name: { first: "Fundador",      middle: "Zapata",      last: "Aguilar"     }, birthDate: "1930",       deathDate: null,         living: false, parents: ["TEMP-116", "TEMP-117"] },
  { id: "TEMP-077", gender: "female", hasImage: false, name: { first: "Mirabel",       middle: "Santos",      last: "Aguilar"     }, birthDate: "1960",       deathDate: null,         living: true,  parents: ["TEMP-112", "TEMP-113"] },
  { id: "TEMP-079", gender: "male",   hasImage: false, name: { first: "Paul Robert",   middle: "Aguilar",     last: "Alviza"      }, birthDate: "1995-01-18", deathDate: null,         living: true,  parents: ["TEMP-076", "TEMP-077"] },
  { id: "TEMP-080", gender: "male",   hasImage: false, name: { first: "Robbie May",    middle: "Aguilar",     last: "Alviza"      }, birthDate: "1998",       deathDate: null,         living: true,  parents: ["TEMP-076", "TEMP-077"] },
  { id: "TEMP-081", gender: "male",   hasImage: false, name: { first: "Albert",        middle: "Aguilar",     last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-076", "TEMP-077"] },
  { id: "TEMP-082", gender: "female", hasImage: false, name: { first: "Marybeth",      middle: "Aguilar",     last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-076", "TEMP-077"] },

  // Side nila Gilbert
  { id: "TEMP-133", gender: "female", hasImage: false, name: { first: "Lilibeth",      middle: "",            last: "Marmita"     }, birthDate: null,         deathDate: null,         living: true,  parents: [], spouses: ["TEMP-120"] },
  { id: "TEMP-124", gender: "male",   hasImage: false, name: { first: "Gilbert",       middle: "Malabrigo",   last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-123"] },
  { id: "TEMP-125", gender: "male",   hasImage: false, name: { first: "Gerwin",        middle: "Malabrigo",   last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-123"] },
  { id: "TEMP-139", gender: "male",   hasImage: false, name: { first: "Anthony",       middle: "",            last: "Alviza"      }, birthDate: "1984",       deathDate: null,         living: true,  parents: ["TEMP-119"] },
  { id: "TEMP-140", gender: "female", hasImage: false, name: { first: "Argie",         middle: "",            last: "Chuatoco"    }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-119"] },
  { id: "TEMP-141", gender: "female", hasImage: false, name: { first: "Hurley",        middle: "",            last: "Alviza"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-139", "TEMP-140"] },
  { id: "TEMP-142", gender: "male",   hasImage: false, name: { first: "Bodhi",         middle: "",            last: "Alviza"      }, birthDate: "2019-03-08", deathDate: null,         living: true,  parents: ["TEMP-139", "TEMP-140"] },

  // Side nila Arvin Chris
  { id: "TEMP-126", gender: "male",   hasImage: false, name: { first: "Boy",           middle: "",            last: "Martin"      }, birthDate: null,         deathDate: null,         living: false, parents: [] },
  { id: "TEMP-127", gender: "male",   hasImage: false, name: { first: "Alex",          middle: "Alviza",      last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-126", "TEMP-118"] },
  { id: "TEMP-131", gender: "female", hasImage: false, name: { first: "Ayie",          middle: "Alviza",      last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-126", "TEMP-118"] },
  { id: "TEMP-130", gender: "male",   hasImage: false, name: { first: "Alvin",         middle: "Alviza",      last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-126", "TEMP-118"] },
  { id: "TEMP-128", gender: "female", hasImage: false, name: { first: "Anna Marie",    middle: "",            last: "Mapua"       }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-129", gender: "male",   hasImage: false, name: { first: "Arvin Chris",   middle: "Mapua",       last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-127", "TEMP-128"] },
  { id: "TEMP-132", gender: "female", hasImage: false, name: { first: "Alexa Marie",   middle: "Mapua",       last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-127", "TEMP-128"] },
  { id: "TEMP-134", gender: "female", hasImage: false, name: { first: "Victoria",      middle: "B",           last: "Eustaquio"   }, birthDate: null,         deathDate: null,         living: true,  parents: [] },
  { id: "TEMP-135", gender: "female", hasImage: false, name: { first: "Ashley Nicole", middle: "Eustaquio",   last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-134", "TEMP-130"] },
  { id: "TEMP-136", gender: "male",   hasImage: false, name: { first: "Andrei Chris",  middle: "Eustaquio",   last: "Martin"      }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-134", "TEMP-130"] },

  // Si ni Lola Nene
  { id: "TEMP-108", gender: "male",   hasImage: false, name: { first: "Macky",         middle: "",            last: "Asis"        }, birthDate: null,         deathDate: null,         living: true,  parents: [], },
  { id: "TEMP-109", gender: "female", hasImage: false, name: { first: "Joanna Marie",  middle: "Lobitaña",    last: "Asis"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-108", "TEMP-033"], },
  { id: "TEMP-110", gender: "male",   hasImage: false, name: { first: "Kenneth",       middle: "Lobitaña",    last: "Asis"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-108", "TEMP-033"], },
  { id: "TEMP-111", gender: "female", hasImage: false, name: { first: "Loremae",       middle: "Lobitaña",    last: "Asis"        }, birthDate: null,         deathDate: null,         living: true,  parents: ["TEMP-108", "TEMP-033"], },
]);

// /*
//     Grumaduate si Nanay ng May 30, 1994 ng BS Accounting sa UE Caloocan
//     Grumaduate si Nanay ng March 22, 1990 ng Highschool
//     Kasal ni Tito Dada and Tita Melo: December 26, 1995

//     pavelia - manila
//     jose reyes - manila

//     mylen - sinamungan (bahay), pillar, capiz
//     mamang - dolangan, pillar
//     tatay ni tita - bilawbawan, pillar

//     darne - water falls,
//     balingasag, misamis oriental
// */
