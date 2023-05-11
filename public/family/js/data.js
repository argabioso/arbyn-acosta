var TREE_DATA = [
  { key: "XXXX-000",                                    name: {                                                                 }, icon: null, gender: "",  birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, height: 0, width: 0 },
    { key: "GQX8-CQP",               child: "XXXX-000", name: { first: "Arbyn",      middle: "Acosta",      last: "Argabioso"   }, icon: null, gender: "M", birthDate: "1995-04-19", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Santa Cruz, Manila, PHL",           deathPlace: null,                                hasDNATest: true,  },
      { key: "GQJK-L51",             child: "GQX8-CQP", name: { first: "Rolando",    middle: "Saplala",     last: "Argabioso"   }, icon: null, gender: "M", birthDate: "1965-10-09", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Poblacion, Caloocan, PHL",          deathPlace: null,                                hasDNATest: true,  },
        { key: "GQJK-LCT",           child: "GQJK-L51", name: { first: "Marcial",    middle: "Mia",         last: "Argabioso"   }, icon: null, gender: "M", birthDate: "1932-10-14", deathDate: "2020-02-27", living: false, hasImage: true,   birthPlace: "Majayjay, Laguna, PHL",             deathPlace: "Quezon City, PHL",                  hasDNATest: false, },
          { key: "GHBZ-TM4",         child: "GQJK-LCT", name: { first: "Eusebio",    middle: "Lopecillo",   last: "Argabioso"   }, icon: null, gender: "M", birthDate: "1894-09-18", deathDate: "1972-10-27", living: false, hasImage: false,  birthPlace: "Majayjay, Laguna, PHL",             deathPlace: "Majayjay, Laguna, PHL",             hasDNATest: false, },
            { key: "GHB8-RCH",       child: "GHBZ-TM4", name: { first: "Estebana",   middle: "",            last: "Lopecillo"   }, icon: null, gender: "F", birthDate: "about 1861", deathDate: "1951-08-30", living: false, hasImage: false,  birthPlace: "Majayjay, Laguna, PHL",             deathPlace: "Majayjay, Laguna, PHL",             hasDNATest: false, },
          { key: "GHBZ-P5Q",         child: "GQJK-LCT", name: { first: "Francisca",  middle: "",            last: "Mia"         }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
        { key: "GHBZ-YVX",           child: "GQJK-L51", name: { first: "Lydia",      middle: "Perez",       last: "Saplala"     }, icon: null, gender: "F", birthDate: "1944-11-24", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Lubao, Pampanga, PHL",              deathPlace: null,                                hasDNATest: true,  },
          { key: "GHB8-7T6",         child: "GHBZ-YVX", name: { first: "Fernando",   middle: "Sison",       last: "Saplala"     }, icon: null, gender: "M", birthDate: "1916-05-30", deathDate: "1993-05-03", living: false, hasImage: true,   birthPlace: null,                                deathPlace: "Caloocan, PHL",                     hasDNATest: false, },
            { key: "GNNH-JLM",       child: "GHB8-7T6", name: { first: "Estanislao", middle: "",            last: "Saplala"     }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
            { key: "GJJX-1SG",       child: "GHB8-7T6", name: { first: "Adela",      middle: "",            last: "Sison"       }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
          { key: "GHB8-GZL",         child: "GHBZ-YVX", name: { first: "Lucina",     middle: "Gutierrez",   last: "Perez"       }, icon: null, gender: "F", birthDate: "1919-11-16", deathDate: "1986-10-02", living: false, hasImage: true,   birthPlace: null,                                deathPlace: "Dinalupihan, Bataan, PHL",          hasDNATest: false, },
            { key: "GHB8-M8D",       child: "GHB8-GZL", name: { first: "Victor",     middle: "",            last: "Perez"       }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
            { key: "GHB8-M86",       child: "GHB8-GZL", name: { first: "Genoveba",   middle: "",            last: "Gutierrez"   }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
      { key: "GQJK-G8W",             child: "GQX8-CQP", name: { first: "Corazon",    middle: "Maramba",     last: "Acosta"      }, icon: null, gender: "F", birthDate: "1971-03-10", deathDate: "2018-05-25", living: false, hasImage: true,   birthPlace: "Sampaloc, Manila, PHL",             deathPlace: "Santa Cruz, Laguna, PHL",           hasDNATest: false, },
        { key: "GHBD-7M4",           child: "GQJK-G8W", name: { first: "Manuel",     middle: "San Agustin", last: "Acosta Jr."  }, icon: null, gender: "M", birthDate: "1948-07-06", deathDate: "1979-06-07", living: false, hasImage: true,   birthPlace: "Manila, PHL",                       deathPlace: "Los Angeles, California, USA",      hasDNATest: false, },
          { key: "GHBD-9L6",         child: "GHBD-7M4", name: { first: "Manuel",     middle: "Bongco",      last: "Acosta Sr."  }, icon: null, gender: "M", birthDate: "1913-11-10", deathDate: "1994-11-20", living: false, hasImage: true,   birthPlace: "Orani, Bataan, PHL",                deathPlace: "San Dimas, Los Angeles, CA, USA",   hasDNATest: false, },
            { key: "GHB8-SQN",       child: "GHBD-9L6", name: { first: "Ligorio",    middle: "",            last: "Acosta"      }, icon: null, gender: "M", birthDate: "about 1871", deathDate: "1948-07-07", living: false, hasImage: false,  birthPlace: null,                                deathPlace: "Manila, PHL",                       hasDNATest: false, },
            { key: "GHB8-5K8",       child: "GHBD-9L6", name: { first: "Maximiana",  middle: "Cahanding",   last: "Bongco"      }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: "Orani, Bataan, PHL",                deathPlace: null,                                hasDNATest: false, },
              { key: "G4MF-WD8",     child: "GHB8-5K8", name: { first: "Fabian",     middle: "",            last: "Bongco"      }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: "Orani, Bataan, PHL",                deathPlace: null,                                hasDNATest: false, },
              { key: "GHB8-5K8",     child: "GHB8-5K8", name: { first: "Lucina",     middle: "",            last: "Cahanding"   }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: "Orani, Bataan, PHL",                deathPlace: null,                                hasDNATest: false, },
          { key: "GHB8-DXY",         child: "GHBD-7M4", name: { first: "Natividad",  middle: "Villacorta",  last: "San Agustin" }, icon: null, gender: "F", birthDate: "1925-12-21", deathDate: "2008-10-09", living: false, hasImage: true,   birthPlace: "Ermita, Manila, PHL",               deathPlace: "San Dimas, Los Angeles, CA, USA",   hasDNATest: false, },
            { key: "GHB8-LCC",       child: "GHB8-DXY", name: { first: "Vicente",    middle: "",            last: "San Agustin" }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
            { key: "GHB8-H7K",       child: "GHB8-DXY", name: { first: "Nena",       middle: "",            last: "Villacorta"  }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
        { key: "GHB8-J1B",           child: "GQJK-G8W", name: { first: "Catalina",   middle: "Dumantay",    last: "Maramba"     }, icon: null, gender: "F", birthDate: "1943-01-28", deathDate: "1974-08-10", living: false, hasImage: true,   birthPlace: "Santa Barbara, Pangasinan, PHL",    deathPlace: "Sangandaan, Caloocan, PHL",         hasDNATest: false, },
          { key: "GHB8-GB6",         child: "GHB8-J1B", name: { first: "Sotero",     middle: "Reyes",       last: "Maramba Sr." }, icon: null, gender: "M", birthDate: "1910-04-22", deathDate: "1969-12-12", living: false, hasImage: true,   birthPlace: "Santa Barbara, Pangasinan, PHL",    deathPlace: "Sangandaan, Caloocan, PHL",         hasDNATest: false, },
            { key: "LLQS-641",       child: "GHB8-GB6", name: { first: "Miguel",     middle: "Bautista",    last: "Maramba"     }, icon: null, gender: "M", birthDate: "1858",       deathDate: null,         living: false, hasImage: false,  birthPlace: "Santa Barbara, Pangasinan, PHL",    deathPlace: "Santa Barbara, Pangasinan, PHL",    hasDNATest: false, },
              { key: "LLQS-6YC",     child: "LLQS-641", name: { first: "Guillermo",  middle: "Bautista",    last: "Maramba"     }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
              { key: "L281-614",     child: "LLQS-641", name: { first: "Maria",      middle: "Garcia",      last: "Bautista"    }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
                { key: "GC7T-H59",   child: "L281-614", name: { first: "Agustin",    middle: "",            last: "Bautista"    }, icon: null, gender: "M", birthDate: "1812-05-29", deathDate: null,         living: false, hasImage: false,  birthPlace: "Santa Barbara, Pangasinan, PHL",    deathPlace: "Santa Barbara, Pangasinan, PHL",    hasDNATest: false, },
                  { key: "L66T-WY8", child: "GC7T-H59", name: { first: "Juan",       middle: "",            last: "Bautista"    }, icon: null, gender: "M", birthDate: "about 1783", deathDate: null,         living: false, hasImage: false,  birthPlace: "Santa Barbara, Pangasinan, PHL",    deathPlace: null,                                hasDNATest: false, },
                  { key: "L6HC-MMX", child: "GC7T-H59", name: { first: "Maria",      middle: "",            last: "Quinto"      }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
                { key: "GC7T-1PK",   child: "L281-614", name: { first: "Felipe",     middle: "",            last: "Garcia"      }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
            { key: "LLQS-6F1",       child: "GHB8-GB6", name: { first: "Mercedes",   middle: "Novilla",     last: "Reyes"       }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
              { key: "G7C3-B6P",     child: "LLQS-6F1", name: { first: "Gregorio",   middle: "",            last: "Reyes"       }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
              { key: "G7C3-J9S",     child: "LLQS-6F1", name: { first: "Leocadia",   middle: "",            last: "Novilla"     }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
          { key: "GHBD-9LY",         child: "GHB8-J1B", name: { first: "Crescencia", middle: "",            last: "Dumantay"    }, icon: null, gender: "F", birthDate: "1918-04-19", deathDate: "1990-04-16", living: false, hasImage: true,   birthPlace: null,                                deathPlace: "Sangandaan, Caloocan, PHL",         hasDNATest: false, },
            { key: "TEMP-111",       child: "GHBD-9LY", name: { first: "Unknown",    middle: "",            last: "name"        }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: true,   birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
    { key: "GHB5-TWN",               child: "XXXX-000", name: { first: "Mitchie",    middle: "Ajesta",      last: "Adanza"      }, icon: null, gender: "F", birthDate: "1994-12-16", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Santa Cruz, Manila, PHL",           deathPlace: null,                                hasDNATest: true,  },
      { key: "GHB5-XTZ",             child: "GHB5-TWN", name: { first: "Darne",      middle: "Elican",      last: "Adanza"      }, icon: null, gender: "M", birthDate: "1964-06-22", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Balingasag, Misamis Oriental, PHL", deathPlace: null,                                hasDNATest: false, },
        { key: "GH12-SVQ",           child: "GHB5-XTZ", name: { first: "Nestor",     middle: "Ladera",      last: "Adanza"      }, icon: null, gender: "M", birthDate: "1938-02-26", deathDate: "2018-09-29", living: false, hasImage: true,   birthPlace: "Balingasag, Misamis Oriental, PHL", deathPlace: "Balingasag, Misamis Oriental, PHL", hasDNATest: false, },
          { key: "GH12-DRN",         child: "GH12-SVQ", name: { first: "Felomino",   middle: "",            last: "Adanza"      }, icon: null, gender: "M", birthDate: "about 1901", deathDate: "1990-11-03", living: false, hasImage: false,  birthPlace: "Dumaguete, Negros Oriental, PHL",   deathPlace: null,                                hasDNATest: false, },
          { key: "GH12-3GN",         child: "GH12-SVQ", name: { first: "Consuelo",   middle: "",            last: "Ladera"      }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
        { key: "GH12-9F6",           child: "GHB5-XTZ", name: { first: "Rufa",       middle: "Acerto",      last: "Elican"      }, icon: null, gender: "F", birthDate: "1939-11-28", deathDate: "2015-04-02", living: false, hasImage: true,   birthPlace: "Balingasag, Misamis Oriental, PHL", deathPlace: "Balingasag, Misamis Oriental, PHL", hasDNATest: false, },
          { key: "GH12-9JZ",         child: "GH12-9F6", name: { first: "Cecilio",    middle: "",            last: "Elican"      }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
          { key: "GH12-35H",         child: "GH12-9F6", name: { first: "Jovita",     middle: "",            last: "Acerto"      }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
      { key: "GHBR-FK3",             child: "GHB5-TWN", name: { first: "Mylen",      middle: "Vergara",     last: "Ajesta"      }, icon: null, gender: "F", birthDate: "1974-04-13", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Sinamongan, Pilar, Capiz, PHL",     deathPlace: null,                                hasDNATest: false, },
        { key: "GH12-Z3C",           child: "GHBR-FK3", name: { first: "Napoleon",   middle: "Crispolon",   last: "Ajesta"      }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: "Binaobawan, Pilar, Capiz, PHL",     deathPlace: null,                                hasDNATest: false, },
          { key: "GH12-XX4",         child: "GH12-Z3C", name: { first: "Emmanuel",   middle: "",            last: "Ajesta"      }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
          { key: "GH12-HQN",         child: "GH12-Z3C", name: { first: "Ursula",     middle: "",            last: "Crispolon"   }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
        { key: "GH12-W17",           child: "GHBR-FK3", name: { first: "Celma",      middle: "Borja",       last: "Vergara"     }, icon: null, gender: "F", birthDate: "1941-07-08", deathDate: "2020-02-16", living: false, hasImage: true,   birthPlace: "Dulangan, Pilar, Capiz, PHL",       deathPlace: "Santa Maria, Bulacan, PHL",         hasDNATest: false, },
          { key: "GH12-6YL",         child: "GH12-W17", name: { first: "Benigno",    middle: "",            last: "Vergara"     }, icon: null, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
          { key: "GH12-DD8",         child: "GH12-W17", name: { first: "Enoria",     middle: "",            last: "Borja"       }, icon: null, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                hasDNATest: false, },
];

const SOURCES = {
  "My knowledge, stories, and present observation": [
    "GQJK-L51:living",
    "GQX8-CQP:birthDate",
    "GQX8-CQP:birthPlace",
    "GQX8-CQP:gender",
    "GQX8-CQP:living",
    "GQX8-CQP:name.first",
    "GQX8-CQP:name.last",
    "GQX8-CQP:name.middle",
    "XXXX-000:GQX8-CQP:parent", // aesthetic data consideration
  ],
  "https://drive.google.com/file/d/1B1umw_xm5i-AmNp9YzshX2DebSAhj3cz/view?usp=sharing": [
    "GQX8-CQP:GQJK-G8W:parent",
    "GQX8-CQP:GQJK-L51:parent",
  ],
  "https://drive.google.com/file/d/1degLEAa8cBBxJrRsWwz0t6wHh9vs29cH/view?usp=sharing": [
    "GQJK-L51:birthDate",
    "GQJK-L51:birthPlace",
    "GQJK-L51:gender",
    "GQJK-L51:name.first",
    "GQJK-L51:name.last",
    "GQJK-L51:name.middle",
  ],
  "https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view?usp=sharing": [
    "GQJK-G8W:birthDate",
    "GQJK-G8W:birthPlace",
    "GQJK-G8W:gender",
    "GQJK-G8W:name.first",
    "GQJK-G8W:name.last",
    "GQJK-G8W:name.middle",
  ],
  "https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view?usp=sharing": [
    "GQJK-G8W:deathDate",
    "GQJK-G8W:living",
  ],
  "https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH": [
    "GHB8-SQN:birthDate",
    "GHB8-SQN:deathDate",
  ],
  "https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ": [
    "LLQS-641:LLQS-6F1:spouse",
  ],
  "https://www.geni.com/people/Miguel-Maramba/4012194445110022663": [
    "LLQS-641:birthYear",
    "LLQS-641:L281-614:parent",
    "LLQS-641:LLQS-6YC:parent",
    "LLQS-6F1:G7C3-B6P:parent",
    "LLQS-6F1:LLQS-6F1:parent",
  ],
  "https://www.familysearch.org/ark:/61903/1:1:HYTD-R5ZM": [
    "GH12-DRN:birthDate",
    "GH12-DRN:deathDate",
  ],
  "https://www.familysearch.org/tree/pedigree/landscape/G4MF-WD8": [
    "GHB8-5K8:G4MF-WD8:parent",
    "GHB8-5K8:GHB8-5K8:parent",
  ],
};

// Add "parent" from "child" value since GoJS works that way
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
}

// Add "fullName" to each person
for (const [i, person] of Object.entries(TREE_DATA)) {
  if (person.name.first == undefined) {
    continue;
  }
  let middleInitialsArray  = person.name.middle.trim().split(' ');
  let middleInitialsString = '';

  if (middleInitialsArray[0] != '') {
    for (let i = 0; i < middleInitialsArray.length; i++) {
      middleInitialsString += middleInitialsArray[i][0] + '. '
    }
  }

  TREE_DATA[i]['fullName'] = person.name.first + " " + middleInitialsString + person.name.last;

  // Add any icon distinction
  if (person.icon != null) {
    TREE_DATA[i]['fullName'] += ` ${person.icon}`;
  }
}

// const TREE_DATA = TREE_DATA;
/*
  Grumaduate si Nanay ng May 30, 1994 ng BS Accounting sa UE Caloocan
  Grumaduate si Nanay ng March 22, 1990 ng Highschool
*/