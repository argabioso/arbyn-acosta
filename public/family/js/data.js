var TREE_DATA = [
  { key: "XXXX-000",                                    name: {                                                                 }, gender: "",  birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, height: 0, width: 0 },
    { key: "GQX8-CQP",               child: "XXXX-000", name: { first: "Arbyn",      middle: "Acosta",      last: "Argabioso"   }, gender: "M", birthDate: "1995-04-19", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Chinese Gen. Hospital, Manila",    hasDNATest: true,  },
      { key: "GQJK-L51",             child: "GQX8-CQP", name: { first: "Rolando",    middle: "Saplala",     last: "Argabioso"   }, gender: "M", birthDate: "1965-10-09", deathDate: null,         living: true,  hasImage: true,   birthPlace: "South Caloocan, Metro Manila",     hasDNATest: true,  },
        { key: "GQJK-LCT",           child: "GQJK-L51", name: { first: "Marcial",    middle: "Mia",         last: "Argabioso"   }, gender: "M", birthDate: "1932-10-14", deathDate: "2020-02-27", living: false, hasImage: true,   birthPlace: "Majayjay, Laguna",                 hasDNATest: false, },
          { key: "GHBZ-TM4",         child: "GQJK-LCT", name: { first: "Eusebio",    middle: "Lopecillo",   last: "Argabioso"   }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
            { key: "GHB8-RCH",       child: "GHBZ-TM4", name: { first: "Estebana",   middle: "",            last: "Lopecillo"   }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GHBZ-P5Q",         child: "GQJK-LCT", name: { first: "Francisca",  middle: "",            last: "Mia"         }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
        { key: "GHBZ-YVX",           child: "GQJK-L51", name: { first: "Lydia",      middle: "Perez",       last: "Saplala"     }, gender: "F", birthDate: "1944-11-24", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Lubao, Pampanga",                  hasDNATest: true,  },
          { key: "GHB8-7T6",         child: "GHBZ-YVX", name: { first: "Fernando",   middle: "Sison",       last: "Saplala"     }, gender: "M", birthDate: "1916-05-30", deathDate: "1993-05-03", living: false, hasImage: true,   birthPlace: null,                               hasDNATest: false, },
            { key: "GNNH-JLM",       child: "GHB8-7T6", name: { first: "Estanislao", middle: "",            last: "Saplala"     }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
            { key: "GJJX-1SG",       child: "GHB8-7T6", name: { first: "Adela",      middle: "",            last: "Sison"       }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GHB8-GZL",         child: "GHBZ-YVX", name: { first: "Lucina",     middle: "Gutierrez",   last: "Perez"       }, gender: "F", birthDate: "1919-11-16", deathDate: "1986-10-02", living: false, hasImage: true,   birthPlace: null,                               hasDNATest: false, },
            { key: "GHB8-M8D",       child: "GHB8-GZL", name: { first: "Victor",     middle: "",            last: "Perez"       }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
            { key: "GHB8-M86",       child: "GHB8-GZL", name: { first: "Genoveba",   middle: "",            last: "Gutierrez"   }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
      { key: "GQJK-G8W",             child: "GQX8-CQP", name: { first: "Corazon",    middle: "Maramba",     last: "Acosta"      }, gender: "F", birthDate: "1971-03-10", deathDate: "2018-05-25", living: false, hasImage: true,   birthPlace: "South Caloocan, Metro Manila",     hasDNATest: false, },
        { key: "GHBD-7M4",           child: "GQJK-G8W", name: { first: "Manuel",     middle: "San Agustin", last: "Acosta Jr."  }, gender: "M", birthDate: "1948-07-06", deathDate: "1979-06-07", living: false, hasImage: true,   birthPlace: "Manila, Metro Manila",             hasDNATest: false, },
          { key: "GHBD-9L6",         child: "GHBD-7M4", name: { first: "Manuel",     middle: "Bongco",      last: "Acosta Sr."  }, gender: "M", birthDate: "1913-11-10", deathDate: "1994-11-20", living: false, hasImage: true,   birthPlace: "Manila, Metro Manila",             hasDNATest: false, },
            { key: "GHB8-SQN",       child: "GHBD-9L6", name: { first: "Ligorio",    middle: "",            last: "Acosta"      }, gender: "M", birthDate: "about 1871", deathDate: "1948-07-07", living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
            { key: "GHB8-5K8",       child: "GHBD-9L6", name: { first: "Maximiana",  middle: "",            last: "Bongco"      }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GHB8-DXY",         child: "GHBD-7M4", name: { first: "Natividad",  middle: "Villacorta",  last: "San Agustin" }, gender: "F", birthDate: "1925-12-21", deathDate: "2008-10-09", living: false, hasImage: true,   birthPlace: null,                               hasDNATest: false, },
            { key: "GHB8-LCC",       child: "GHB8-DXY", name: { first: "Vicente",    middle: "",            last: "San Agustin" }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
            { key: "GHB8-H7K",       child: "GHB8-DXY", name: { first: "Nena",       middle: "",            last: "Villacorta"  }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
        { key: "GHB8-J1B",           child: "GQJK-G8W", name: { first: "Catalina",   middle: "Dumantay",    last: "Maramba"     }, gender: "F", birthDate: "1943-01-28", deathDate: "1974-08-10", living: false, hasImage: true,   birthPlace: "South Caloocan, Metro Manila",     hasDNATest: false, },
          { key: "GHB8-GB6",         child: "GHB8-J1B", name: { first: "Sotero",     middle: "Reyes",       last: "Maramba Sr." }, gender: "M", birthDate: "1910-04-22", deathDate: "1969-12-12", living: false, hasImage: true,   birthPlace: null,                               hasDNATest: false, },
            { key: "LLQS-641",       child: "GHB8-GB6", name: { first: "Miguel",     middle: "Bautista",    last: "Maramba"     }, gender: "M", birthDate: "1858",       deathDate: null,         living: false, hasImage: false,  birthPlace: "Santa Barbara, Pangasinan",        hasDNATest: false, },
              { key: "LLQS-6YC",     child: "LLQS-641", name: { first: "Guillermo",  middle: "Bautista",    last: "Maramba"     }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
              { key: "L281-614",     child: "LLQS-641", name: { first: "Maria",      middle: "Garcia",      last: "Bautista"    }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: "Santa Barbara, Pangasinan",        hasDNATest: false, },
                { key: "GC7T-H59",   child: "L281-614", name: { first: "Agustin",    middle: "",            last: "Bautista"    }, gender: "M", birthDate: "1812-05-29", deathDate: null,         living: false, hasImage: false,  birthPlace: "Santa Barbara, Pangasinan",        hasDNATest: false, },
                  { key: "L66T-WY8", child: "GC7T-H59", name: { first: "Juan",       middle: "",            last: "Bautista"    }, gender: "M", birthDate: "about 1783", deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
                  { key: "L6HC-MMX", child: "GC7T-H59", name: { first: "Maria",      middle: "",            last: "Quinto"      }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
                { key: "GC7T-1PK",   child: "L281-614", name: { first: "Felipe",     middle: "",            last: "Garcia"      }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
            { key: "LLQS-6F1",       child: "GHB8-GB6", name: { first: "Mercedes",   middle: "Novilla",     last: "Reyes"       }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
              { key: "G7C3-B6P",     child: "LLQS-6F1", name: { first: "Gregorio",   middle: "",            last: "Reyes"       }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
              { key: "G7C3-J9S",     child: "LLQS-6F1", name: { first: "Leocadia",   middle: "",            last: "Novilla"     }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GHBD-9LY",         child: "GHB8-J1B", name: { first: "Crescencia", middle: "",            last: "Dumantay"    }, gender: "F", birthDate: "1918-04-19", deathDate: "1990-04-16", living: false, hasImage: true,   birthPlace: null,                               hasDNATest: false, },
            { key: "TEMP-111",       child: "GHBD-9LY", name: { first: "Unknown",    middle: "",            last: "name"        }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: true,   birthPlace: null,                               hasDNATest: false, },
    { key: "GHB5-TWN",               child: "XXXX-000", name: { first: "Mitchie",    middle: "Ajesta",      last: "Adanza"      }, gender: "F", birthDate: "1994-12-16", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Jose Fabella Hospital, Manila",    hasDNATest: true,  },
      { key: "GHB5-XTZ",             child: "GHB5-TWN", name: { first: "Darne",      middle: "Elican",      last: "Adanza"      }, gender: "M", birthDate: "1964-06-22", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Balingasag, Misamis Oriental",     hasDNATest: false, },
        { key: "GH12-SVQ",           child: "GHB5-XTZ", name: { first: "Nestor",     middle: "Ladera",      last: "Adanza"      }, gender: "M", birthDate: "1938-02-26", deathDate: "2018-09-29", living: false, hasImage: true,   birthPlace: "Balingasag, Misamis Oriental",     hasDNATest: false, },
          { key: "GH12-DRN",         child: "GH12-SVQ", name: { first: "Felomino",   middle: "",            last: "Adanza"      }, gender: "M", birthDate: "about 1901", deathDate: "1990-11-03", living: false, hasImage: false,  birthPlace: "Dumaguete, Negros",                hasDNATest: false, },
          { key: "GH12-3GN",         child: "GH12-SVQ", name: { first: "Consuelo",   middle: "",            last: "Ladera"      }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
        { key: "GH12-9F6",           child: "GHB5-XTZ", name: { first: "Rufa",       middle: "Acerto",      last: "Elican"      }, gender: "F", birthDate: "1939-11-28", deathDate: "2015-04-02", living: false, hasImage: true,   birthPlace: "Balingasag, Misamis Oriental",     hasDNATest: false, },
          { key: "GH12-9JZ",         child: "GH12-9F6", name: { first: "Cecilio",    middle: "",            last: "Elican"      }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GH12-35H",         child: "GH12-9F6", name: { first: "Jovita",     middle: "",            last: "Acerto"      }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
      { key: "GHBR-FK3",             child: "GHB5-TWN", name: { first: "Mylen",      middle: "Vergara",     last: "Ajesta"      }, gender: "F", birthDate: "1974-04-14", deathDate: null,         living: true,  hasImage: true,   birthPlace: "Sinamungan, Pilar, Capiz",         hasDNATest: false, },
        { key: "GH12-Z3C",           child: "GHBR-FK3", name: { first: "Napoleon",   middle: "Crispolon",   last: "Ajesta"      }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: "Binaobawan, Pilar, Capiz",         hasDNATest: false, },
          { key: "GH12-XX4",         child: "GH12-Z3C", name: { first: "Emmanuel",   middle: "",            last: "Ajesta"      }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GH12-HQN",         child: "GH12-Z3C", name: { first: "Ursula",     middle: "",            last: "Crispolon"   }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
        { key: "GH12-W17",           child: "GHBR-FK3", name: { first: "Celma",      middle: "Borja",       last: "Vergara"     }, gender: "F", birthDate: "1941-07-08", deathDate: "2020-02-16", living: false, hasImage: true,   birthPlace: "Dulangan, Pilar, Capiz",           hasDNATest: false, },
          { key: "GH12-6YL",         child: "GH12-W17", name: { first: "Benigno",    middle: "",            last: "Vergara"     }, gender: "M", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
          { key: "GH12-DD8",         child: "GH12-W17", name: { first: "Enoria",     middle: "",            last: "Borja"       }, gender: "F", birthDate: null,         deathDate: null,         living: false, hasImage: false,  birthPlace: null,                               hasDNATest: false, },
];

// Add "parent" from "child" value since GoJS works that way
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
}

const SOURCES = {
  "https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH": [
    "GHB8-SQN:birthDate",
    "GHB8-SQN:deathDate",
  ],
  "https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ": [
    "LLQS-641:LLQS-6F1:spouse",
  ],
  "https://www.geni.com/people/Miguel-Maramba/4012194445110022663": [
    "LLQS-641:birthYear",
    "LLQS-641:LLQS-6YC:parent",
    "LLQS-641:L281-614:parent",
    "LLQS-6F1:G7C3-B6P:parent",
    "LLQS-6F1:LLQS-6F1:parent",
  ],
  "https://www.familysearch.org/ark:/61903/1:1:HYTD-R5ZM": [
    "GH12-DRN:birthDate",
    "GH12-DRN:deathDate",
  ],
};

/*
  Grumaduate si Nanay ng May 30, 1994 ng BS Accounting sa UE Caloocan
  Grumaduate si Nanay ng March 22, 1990 ng Highschool
*/