var TREE_DATA = [
  { key: 'TEMP-000',                                                                                                                                                       gender: '',  birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                height: 0, width: 0 },
    { key: 'GQX8-CQP',               child: 'TEMP-000', prefix: '',    firstName: 'Arbyn',              middleName: 'Acosta',      lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: '1995-04-19',  deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Santa Cruz, Manila, PHL',           deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'software' },
      { key: 'GQJK-L51',             child: 'GQX8-CQP', prefix: '',    firstName: 'Rolando',            middleName: 'Saplala',     lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: '1965-10-09',  deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Poblacion, Caloocan, PHL',          deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'government' },
        { key: 'GQJK-LCT',           child: 'GQJK-L51', prefix: '',    firstName: 'Marcial',            middleName: 'Mia',         lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: '1932-10-14',  deathDate: '2020-02-27',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Quezon City, PHL',                  livingPlace: null,                },
          { key: 'GHBZ-TM4',         child: 'GQJK-LCT', prefix: '',    firstName: 'Eusebio',            middleName: 'Lopecillo',   lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: 'about 1895',  deathDate: '1972-10-27',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Majayjay, Laguna, PHL',             livingPlace: null,                marker: 'farming' },
            { key: 'TEMP-002',       child: 'GHBZ-TM4', prefix: '',    firstName: 'Unknown',            middleName: '',            lastName: 'Argayoso',    suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GHB8-RCH',       child: 'GHBZ-TM4', prefix: '',    firstName: 'Estebana',           middleName: '',            lastName: 'Lopecillo',   suffix: '',    gender: 'F', birthDate: 'about 1861',  deathDate: '1951-08-30',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Majayjay, Laguna, PHL',             livingPlace: null,                },
              { key: 'G2HQ-YQS',     child: 'GHB8-RCH', prefix: '',    firstName: 'Simplicio',          middleName: '',            lastName: 'Lopecillo',   suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
              { key: 'G2H7-Q75',     child: 'GHB8-RCH', prefix: '',    firstName: 'Gregoria',           middleName: '',            lastName: 'Villarubin',  suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHBZ-P5Q',         child: 'GQJK-LCT', prefix: '',    firstName: 'Francisca',          middleName: '',            lastName: 'Mia',         suffix: '',    gender: 'F', birthDate: 'before 1919', deathDate: 'after 1936-10-14', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
        { key: 'GHBZ-YVX',           child: 'GQJK-L51', prefix: '',    firstName: 'Lydia',              middleName: 'Perez',       lastName: 'Saplala',     suffix: '',    gender: 'F', birthDate: '1944-11-24',  deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Lubao, Pampanga, PHL',              deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'retail' },
          { key: 'GHB8-7T6',         child: 'GHBZ-YVX', prefix: '',    firstName: 'Fernando',           middleName: 'Sison',       lastName: 'Saplala',     suffix: '',    gender: 'M', birthDate: '1916-05-30',  deathDate: '1993-05-03',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Lubao, Pampanga, PHL',              deathPlace: 'Caloocan, PHL',                     livingPlace: null,                marker: 'military' },
            { key: 'GNNH-JLM',       child: 'GHB8-7T6', prefix: '',    firstName: 'Estanislao',         middleName: '',            lastName: 'Saplala',     suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GJJX-1SG',       child: 'GHB8-7T6', prefix: '',    firstName: 'Adela',              middleName: '',            lastName: 'Sison',       suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHB8-GZL',         child: 'GHBZ-YVX', prefix: '',    firstName: 'Lucina',             middleName: 'Gutierrez',   lastName: 'Perez',       suffix: '',    gender: 'F', birthDate: '1919-11-16',  deathDate: '1986-10-02',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Orani, Bataan, PHL',                deathPlace: 'Dinalupihan, Bataan, PHL',          livingPlace: null,                },
            { key: 'GHB8-M8D',       child: 'GHB8-GZL', prefix: '',    firstName: 'Victor',             middleName: '',            lastName: 'Perez',       suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GHB8-M86',       child: 'GHB8-GZL', prefix: '',    firstName: 'Genoveba',           middleName: '',            lastName: 'Gutierrez',   suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
      { key: 'GQJK-G8W',             child: 'GQX8-CQP', prefix: '',    firstName: 'Corazon',            middleName: 'Maramba',     lastName: 'Acosta',      suffix: '',    gender: 'F', birthDate: '1971-03-10',  deathDate: '2018-05-25',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sampaloc, Manila, PHL',             deathPlace: 'Santa Cruz, Laguna, PHL',           livingPlace: null,                marker: 'housewife' },
        { key: 'GHBD-7M4',           child: 'GQJK-G8W', prefix: '',    firstName: 'Manuel',             middleName: 'San Agustin', lastName: 'Acosta',      suffix: 'Jr.', gender: 'M', birthDate: '1948-07-06',  deathDate: '1979-06-07',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Manila, PHL',                       deathPlace: 'Pasadena, Los Angeles, CA, USA',    livingPlace: null,                marker: 'seaman' },
          { key: 'GHBD-9L6',         child: 'GHBD-7M4', prefix: '',    firstName: 'Manuel',             middleName: 'Bongco',      lastName: 'Acosta',      suffix: 'Sr.', gender: 'M', birthDate: '1913-11-10',  deathDate: '1994-11-20',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Orani, Bataan, PHL',                deathPlace: 'San Dimas, Los Angeles, CA, USA',   livingPlace: null,                marker: 'police', marker2: 'investigate' },
            { key: 'GHB8-SQN',       child: 'GHBD-9L6', prefix: '',    firstName: 'Ligorio',            middleName: '',            lastName: 'Acosta',      suffix: '',    gender: 'M', birthDate: 'about 1871',  deathDate: '1948-07-07',       living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Manila, PHL',                       livingPlace: null,                },
            { key: 'GHB8-5K8',       child: 'GHBD-9L6', prefix: '',    firstName: 'Maximiana',          middleName: '',            lastName: 'Bongco',      suffix: '',    gender: 'F', birthDate: 'before 1900', deathDate: 'after 1913-11-10', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHB8-DXY',         child: 'GHBD-7M4', prefix: '',    firstName: 'Natividad',          middleName: 'Villacorta',  lastName: 'San Agustin', suffix: '',    gender: 'F', birthDate: '1925-12-21',  deathDate: '2008-10-09',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Ermita, Manila, PHL',               deathPlace: 'San Dimas, Los Angeles, CA, USA',   livingPlace: null,                marker: 'housewife' },
            { key: 'GHB8-LCC',       child: 'GHB8-DXY', prefix: '',    firstName: 'Vicente',            middleName: '',            lastName: 'San Agustin', suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GHB8-H7K',       child: 'GHB8-DXY', prefix: '',    firstName: 'Nena',               middleName: '',            lastName: 'Villacorta',  suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
        { key: 'GHB8-J1B',           child: 'GQJK-G8W', prefix: '',    firstName: 'Catalina',           middleName: 'Dumantay',    lastName: 'Maramba',     suffix: '',    gender: 'F', birthDate: '1943-01-28',  deathDate: '1974-08-10',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sangandaan, Caloocan, PHL',         livingPlace: null,                },
          { key: 'GHB8-GB6',         child: 'GHB8-J1B', prefix: '',    firstName: 'Sotero',             middleName: 'Reyes',       lastName: 'Maramba',     suffix: 'Sr.', gender: 'M', birthDate: '1903-04-22',  deathDate: '1969-12-12',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sangandaan, Caloocan, PHL',         livingPlace: null,                marker: 'police', marker2: 'train' },
            { key: 'LLQS-641',       child: 'GHB8-GB6', prefix: 'Don', firstName: 'Miguel',             middleName: 'Bautista',    lastName: 'Maramba',     suffix: '',    gender: 'M', birthDate: '1858',        deathDate: 'after 1902-06-22', living: false, hasDNA: false, hasImage: false,  birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                marker: 'government' },
              { key: 'LLQS-6YC',     child: 'LLQS-641', prefix: '',    firstName: 'Guillermo',          middleName: '',            lastName: 'Maramba',     suffix: '',    gender: 'M', birthDate: 'before 1845', deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                marker: 'sales', marker2: 'cattle' },
              { key: 'L281-614',     child: 'LLQS-641', prefix: '',    firstName: 'Maria',              middleName: 'Garcia',      lastName: 'Bautista',    suffix: '',    gender: 'F', birthDate: 'before 1845', deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                },
                { key: 'GC7T-H59',   child: 'L281-614', prefix: 'Don', firstName: 'Agustin',            middleName: '',            lastName: 'Bautista',    suffix: '',    gender: 'M', birthDate: '1812-05-29',  deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                marker: 'government' },
                { key: 'GC7T-1PK',   child: 'L281-614', prefix: '',    firstName: 'Felipa',             middleName: '',            lastName: 'Garcia',      suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'LLQS-6F1',       child: 'GHB8-GB6', prefix: '',    firstName: 'Mercedes',           middleName: 'Novilla',     lastName: 'Reyes',       suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
              { key: 'G7C3-B6P',     child: 'LLQS-6F1', prefix: '',    firstName: 'Gregorio',           middleName: '',            lastName: 'Reyes',       suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
              { key: 'G7C3-J9S',     child: 'LLQS-6F1', prefix: '',    firstName: 'Leocadia',           middleName: '',            lastName: 'Novilla',     suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHBD-9LY',         child: 'GHB8-J1B', prefix: '',    firstName: 'Cresencia',          middleName: '',            lastName: 'Dumantay',    suffix: '',    gender: 'F', birthDate: '1918-04-19',  deathDate: '1990-04-16',       living: false, hasDNA: false, hasImage: true,   birthPlace: null,                                deathPlace: 'Sangandaan, Caloocan, PHL',         livingPlace: null,                },
            { key: 'TEMP-001',       child: 'GHBD-9LY', prefix: '',    firstName: 'Unknown',            middleName: '',            lastName: 'name',        suffix: '',    gender: 'F', birthDate: 'before 1905', deathDate: 'after 1918-04-19', living: false, hasDNA: false, hasImage: true,   birthPlace: null,                                deathPlace: 'PHL',                               livingPlace: null,                },
    { key: 'GHB5-TWN',               child: 'TEMP-000', prefix: '',    firstName: 'Mitchie',            middleName: 'Ajesta',      lastName: 'Adanza',      suffix: '',    gender: 'F', birthDate: '1994-12-16',  deathDate: null,               living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Santa Cruz, Manila, PHL',           deathPlace: null,                                livingPlace: 'Metro Manila, PHL', },
      { key: 'GHB5-XTZ',             child: 'GHB5-TWN', prefix: '',    firstName: 'Darne',              middleName: 'Elican',      lastName: 'Adanza',      suffix: '',    gender: 'M', birthDate: '1964-06-22',  deathDate: null,               living: true,  hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'manufacturing' },
        { key: 'GH12-SVQ',           child: 'GHB5-XTZ', prefix: '',    firstName: 'Nestor',             middleName: 'Ladera',      lastName: 'Adanza',      suffix: '',    gender: 'M', birthDate: '1938-02-26',  deathDate: '2018-09-28',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: 'Balingasag, Misamis Oriental, PHL', livingPlace: null,                marker: 'farming' },
          { key: 'GH12-DRN',         child: 'GH12-SVQ', prefix: '',    firstName: 'Felomino',           middleName: 'R',           lastName: 'Adanza',      suffix: '',    gender: 'M', birthDate: 'about 1901',  deathDate: '1990-11-03',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Dumaguete, Negros Oriental, PHL',   deathPlace: 'Balingasag, Misamis Oriental, PHL', livingPlace: null,                marker: 'farming' },
          { key: 'GH12-3GN',         child: 'GH12-SVQ', prefix: '',    firstName: 'Consuelo',           middleName: '',            lastName: 'Ladera',      suffix: '',    gender: 'F', birthDate: 'before 1925', deathDate: 'after 1990-11-03', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
        { key: 'GH12-9F6',           child: 'GHB5-XTZ', prefix: '',    firstName: 'Rufa',               middleName: 'Acerto',      lastName: 'Elican',      suffix: '',    gender: 'F', birthDate: '1939-11-28',  deathDate: '2015-04-02',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: 'Balingasag, Misamis Oriental, PHL', livingPlace: null,                marker: 'farming' },
          { key: 'GH12-9JZ',         child: 'GH12-9F6', prefix: '',    firstName: 'Cecilio',            middleName: '',            lastName: 'Elican',      suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                marker: 'military' },
          { key: 'GH12-35H',         child: 'GH12-9F6', prefix: '',    firstName: 'Jovita',             middleName: '',            lastName: 'Acerto',      suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
      { key: 'GHBR-FK3',             child: 'GHB5-TWN', prefix: '',    firstName: 'Mylen',              middleName: 'Vergara',     lastName: 'Ajesta',      suffix: '',    gender: 'F', birthDate: '1974-04-13',  deathDate: null,               living: true,  hasDNA: false, hasImage: true,   birthPlace: 'Sinamongan, Pilar, Capiz, PHL',     deathPlace: null,                                livingPlace: 'Manama, BHR',       marker: 'beautician' },
        { key: 'GH12-Z3C',           child: 'GHBR-FK3', prefix: '',    firstName: 'Napoleon Crispolon', middleName: 'Badoles',     lastName: 'Ajesta',      suffix: '',    gender: 'M', birthDate: 'before 1961', deathDate: 'after 1980-02-26', living: false, hasDNA: false, hasImage: false,  birthPlace: 'Binaobawan, Pilar, Capiz, PHL',     deathPlace: null,                                livingPlace: null,                },
          { key: 'GH12-XX4',         child: 'GH12-Z3C', prefix: '',    firstName: 'Manuel',             middleName: 'Bermúdez',    lastName: 'Ajesta',      suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: 'Pilar, Capiz, PHL',                 deathPlace: null,                                livingPlace: null,                },
            { key: 'GKBR-M9Y',       child: 'GH12-XX4', prefix: '',    firstName: 'Eustaquio',          middleName: '',            lastName: 'Ajesta',      suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GKBR-7P7',       child: 'GH12-XX4', prefix: '',    firstName: 'Florencia',          middleName: '',            lastName: 'Bermúdez',    suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GH12-HQN',         child: 'GH12-Z3C', prefix: '',    firstName: 'Ursula',             middleName: 'Villanes',    lastName: 'Badoles',     suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GKBT-9GD',       child: 'GH12-HQN', prefix: '',    firstName: 'Pedro Benjamin',     middleName: '',            lastName: 'Badoles',     suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'K2GJ-YY3',       child: 'GH12-HQN', prefix: '',    firstName: 'Leoncia',            middleName: '',            lastName: 'Villanes',    suffix: '',    gender: 'F', birthDate: 'about 1852',  deathDate: '1922-01-08',       living: false, hasDNA: false, hasImage: false,  birthPlace: 'Panay, Capiz, PHL',                 deathPlace: 'Panay, Capiz, PHL',                 livingPlace: null,                },
        { key: 'GH12-W17',           child: 'GHBR-FK3', prefix: '',    firstName: 'Celma',              middleName: 'Borja',       lastName: 'Vergara',     suffix: '',    gender: 'F', birthDate: '1941-07-08',  deathDate: '2020-02-16',       living: false, hasDNA: false, hasImage: true,   birthPlace: 'Dulangan, Pilar, Capiz, PHL',       deathPlace: 'Santa Maria, Bulacan, PHL',         livingPlace: null,                marker: 'farming' },
          { key: 'GH12-6YL',         child: 'GH12-W17', prefix: '',    firstName: 'Benigno',            middleName: '',            lastName: 'Vergara',     suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GH12-DD8',         child: 'GH12-W17', prefix: '',    firstName: 'Enoria',             middleName: '',            lastName: 'Borja',       suffix: '',    gender: 'F', birthDate: 'before 1928', deathDate: 'after 1997-12-16', living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
];

// Add "parent" from "child" value since GoJS works that way
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  TREE_DATA[i]["parent"] = TREE_DATA[i]["child"];
}

function convertCountryCode(input) {
  if (input === null || input === undefined) {
    return input;
  }

  const lookup = {
    'USA': 'United States of America',
    'PHL': 'Philippines',
    'BHR': 'Bahrain',
    // ... add other country codes and names as needed
  };

  const segments = input.split(',').map(segment => segment.trim());

  if (segments.length === 1 && lookup[segments[0]]) {
    return lookup[segments[0]];
  }

  if (segments.length === 2 && lookup[segments[1]]) {
    segments[1] = lookup[segments[1]];
  }

  return segments.join(', ');
}

for (const [i, person] of Object.entries(TREE_DATA)) {
  if (person.firstName == undefined) {
    continue;
  }
  let middleInitialsArray  = person.middleName.trim().split(' ');
  let middleInitialsString = '';

  if (middleInitialsArray[0] != '') {
    for (let i = 0; i < middleInitialsArray.length; i++) {
      middleInitialsString += middleInitialsArray[i][0] + '. '
    }
  }

  let prefix = '';
  let suffix = '';

  if (person.prefix !== undefined && person.prefix != '') prefix = `${person.prefix} `;
  if (person.suffix !== undefined && person.suffix != '') suffix = ` ${person.suffix}`;

  let firstName = person.firstName;
  if (firstName.includes('Crispolon')) {
    firstName = firstName.replace("Crispolon", "C.");
  }

  // Add "fullName" to each person
  TREE_DATA[i]['fullName'] = (
    prefix +
    firstName + " " +
    middleInitialsString +
    person.lastName +
    suffix
  );

  TREE_DATA[i]['birthPlace'] = convertCountryCode(person.birthPlace);
  TREE_DATA[i]['deathPlace'] = convertCountryCode(person.deathPlace);
  TREE_DATA[i]['livingPlace'] = convertCountryCode(person.livingPlace);

  // Replace death place with living place for quicker size changes
  if (person.living) {
    TREE_DATA[i]['deathPlace'] = person.livingPlace;
  }
}

// Create a map of child to parents.
let childToParents = {};
TREE_DATA.forEach(node => {
  if (node.child) {
    if (childToParents[node.child]) {
      childToParents[node.child].push(node.key);
    } else {
      childToParents[node.child] = [node.key];
    }
  }
});

// Add partner to each node.
TREE_DATA.forEach(node => {
  node.partner = null; // Default value
  if (node.child && childToParents[node.child].length > 1) {
    node.partner = childToParents[node.child].find(parentKey => parentKey !== node.key);
  }
});


// const TREE_DATA = TREE_DATA;
/*
  Grumaduate si Nanay ng May 30, 1994 ng BS Accounting sa UE Caloocan
  Grumaduate si Nanay ng March 22, 1990 ng Highschool
*/