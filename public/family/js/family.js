
const isPrivate = !(window.location.get("private") == "false");
var isChecking = false; // overridden by checks.js if imported

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
        cattle: !isDark ? '#f3ede9' : '#393939',
        investigate: !isDark ? '#f0f0f0' : '#393939',
        train: !isDark ? '#f0f0f0' : '#393939',
        church: !isDark ? '#f0f0f0' : '#393939',
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
        sales: !isDark ? '#fcf3e2' : '#3e382e',
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
    none: (
      !isDark
      ? 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAB9APoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAH3mFQgWYGQAAAAAAAAAAAAALwAcT1iBZgZAAAAAAAAAAAAvAAABxhUIFk5mAAAAAAAAAC8AAAAAHGFQgWYGQAAAAAAALwAAAAAAAcT1iBZOZgAAAAAvAAAAAAAAABxhUIFmBkAAAC8AAAAAAAAAAAHE9YgWTmYALwAAAAAAAAAAAAAcT1iBZgf/8QAGBABAQEBAQAAAAAAAAAAAAAAAQIAUBL/2gAIAQEAAQUCZHMJwWRzCcFkcwnBZHMJwWRzCcFkcwnBZHMJwWRzCcFkcynBZHMpwWRzKcFkcynBZHMpwWRzKcFkcynBZHed/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEA/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEA/8QAFhAAAwAAAAAAAAAAAAAAAAAAADGA/9oACAEBAAY/Ar/Z/8QAHRAAAQUBAAMAAAAAAAAAAAAAAQAhMVBhURFx8P/aAAgBAQABPyGYD9CiHGUMwH6FEOMoZgP0KIcZQzAfoUQ4yhmA/QohxlDMB+hbAyhmA/QtgZQzAfoWwMoZgP0LcGUMxPQtwZQzLHoW4Mocg9C3BlDkHoW4Mocg9C3BlDkHoW4MofcYvrwv/9oADAMBAAIAAwAAABCzjzzzzzzzzzzzzzzzzzjzzzzzzzzzzzzzzzwzTzzzzzzzzzzzzzzzwzDzzzzzzzzzzzzzzzxzTzzzzzzzzzzzzzzzwzDzzzzzzzzzzzzzzzxzTzzzzzzzzzzzzzzzxjD/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/EAD/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/EAD/xAAgEAABAwUAAwEAAAAAAAAAAAABABEhMVBhcYFRocHw/9oACAEBAAE/EJVjQKmdqrthlWNApxIZqu2GVY0CnE7VVhlWNApxIZqu2GVY0CnEhmq7YZVjQKcSBmqFhlWNAqQAzVdsMqxoFOJAzVWGVY0CnUgZqu2GVBtAp1IGarthlA4BTuQM1VhlSOAU7kDNVYZcjgHqdSBmq7YZcjgHqdSBm+hYZcjgFO5AzfQsDsn8kN5QRNz+Pa//2Q=='
      : 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAB9APoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQDAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHwtpxWm2OwAAAAAAAAAAAAASAA71nFafU7AAAAAAAAAAABIAAADvWcVp9TsAAAAAAAAAEgAAAAAO9ZxWn1OwAAAAAAASAAAAAAAA71nFafU7AAAAABIAAAAAAAAADvWcVp9TsAAAEgAAAAAAAAAAAO9ZxWm2OwASAAAAAAAAAAAAAA62nFafU//8QAGBABAQEBAQAAAAAAAAAAAAAAAQIAUBH/2gAIAQEAAQUCFMUcEUxRwRTFHBFMUcEUxRwRTFHBFMUcEUxRwRTFHBFMUcEUxRwSvMUPBK8xQ8EpMUPBKTFDwRTe7//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8BAP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8BAP/EABQQAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQEABj8CAD//xAAZEAACAwEAAAAAAAAAAAAAAAAAAVBhcTH/2gAIAQEAAT8h4nBinA8TgxTgcQYpwOIMU4HEGKcDiDFOBxBinA4gxTgcQYpwOIMU4HEGKcCzBQOBZgoHA2CKBwNgigcDiGT/2gAMAwEAAgADAAAAEDMPPPPPPPPPPPPPPPPDMPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPHNPPPPPPPPPPPPPPPPHPPPPPPPPPPPPPPPPPPNP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8QAP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8QAP/EAB8QAQABAwUBAQAAAAAAAAAAAAEhABExUFFxkdFhQf/aAAgBAQABPxDOL7HFRrxOO9BjFfY4qNeJx3oMYN9jio14nHegxg32OKjXicd6DGDfY4qNeJx3oMYN9jio14nHegxg32OKjXicd6DGDfY4qNeJx3oMYN9jio14n3QYwb7HFRrxPugxg32NRq/B90GKG+xqMX4PugxQ32NRi/J90GIH4NRi/B90GIH4NRl/g+6DbAbr8ZoCe6//2Q=='
    ),
    female: (
      !isDark
      ? 'data:image/jpeg;base64,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'
      : 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCACgAPoDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEGAwUHAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABaIqnnpv1nKMnTtKUt9Hz0AAAAAAAAAAAN/Fl2cwShAHjm3TdDVFRNAAAAAAAAAALXVLFF1TAAA+P7NSc79+fVAAAAAAAAAATYq10ONskQABqtrByicmOgAAAAAAAAGTH5OgbqvWGETAAJIEfJRL1zisYoAAAAAAAACN/ofMdL++hXI+oCYgwVuKyefJQAAAAAAAABF7NXa80wiYAEwEwK9Uun4jljJjoAAAAAAAD31ahXyIJiCSCagBKImBR9Bd6RQUAAB//xAAoEAACAgEDBAIABwAAAAAAAAADBAECBQARQBIgITATMgYQFCIxNHD/2gAIAQEAAQUC/wAOm0RrrrrrrzI3my+GmYGkqOPjFqyy99Hw4L6ZAVQnI8749OqQ+0lKFG4tZJnj4IUEd782PrQ/mON+HvQ9/Rr9eNgJ2b78vO2Nj68bARu135aN8bX68W09OsUtKqffNYvUwbLH4g6/IZLGCUv6WlhNifU/Q34cxvGLfg9J8eltkaYykuc3EmN9KZYoYXcWYjtMwAMMZnVpsQnGid5BhzG0quNUX52iLVYwlNGEVeeL5my+HtaABEvXvn90M4gJNMgKrfhTO0YhSFw+soqMCIOwTcEdPlPPj250fQ7wcKPqc9ubH1qen//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8BIP/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8BIP/EAC8QAAECAwYEBQQDAAAAAAAAAAECAwARMQQSMEBBURMhUmEgIzJioSIzQnFDcIH/2gAIAQEABj8C/o6sViucCEAqWaARetjkvYmJJZH+x9pEfUwiJ2dRaVF20JlOihQ5kJQJrPICN3lepXiLbybyDHCVzQeaDmFuK/jHLAv/AJNnMWjAentAy7o3GA7Ay7ytAJYDstIGW76DeJL+4vmcBSFUUJQph2o9J3GVQ3ORXynF9XmvdR0wrj4/RGkIRxL96nbKSpsYDL5uvpp7o54N931fijUwp571q+Mr+tRF20DjI31jy3QDsfFN11IiVjRP3qguOqK1nU5e6kFathAVaDwUdqxw2Zy3V4ClVDWL1kWQrpVF19oo7xyyoSlJUs0SICrW5dHQmJMNhPfAkoBQ2MXrOeCv4i7aE1ooUOTntAeWJvua7DELTwmg/ELZXVByTTXUqABQCWKhzrGSKzRA5Y17VBwv/8QAJhABAAIABQQCAgMAAAAAAAAAAQARITFAQVEwYXGBILEQkXDB8P/aAAgBAQABPyH+DlqY/wBB/AMSzHVbwPF4i+KRPL1vAZRV4lxavtLng/aFKjUkY7AfKg2qNb7diffxMhgqdowahZ3ONQAFmZ5i425vy25IffIe0Gh5L0xP2YfXQrxp33Gm3jbPb0O6FqYQ4NN2lZct66D1FuKZjtpqXKaDNQwIej46G8TvaB1TWmUn60lYhlFtLNuxk+MxW3Ho48od9KqV4xv5aTGyrMNoaQVJyMCqwJ0PMvqKkLBxHHib6MgV2cRmEC1zI5CAP3DJ7Hw/GnO4uZ196TxPXCY8fj+tL4dRlW3FEUi3pi/AULKoUvOPgztdQMIIloTSlnnreS0E+b3PRpMWLeLn86K87ETUtsZofqGjYJ0cpXUF2/UTe+n3xl3ckxVKA8m2iUjYvxAbEh1akKMfRKf+y61eSyp4vGGXR//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888842y2888888888888mUO+0c8888888884+088s8888888888sC088sc088888888sAU84+K8888888884eY8o2Uc88888888AIU8ssE088888888O6648yua8888/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPxAg/8QAGhEAAgMBAQAAAAAAAAAAAAAAATAAESAQUP/aAAgBAgEBPxDxiZctph5UDDgMOAw4MC6wGW85vgz/AP/EACgQAQACAgIBBAICAgMAAAAAAAEAESExQVFhIEBxgZGhEMEwsXDR8P/aAAgBAQABPxD/AINC/jviURj0W/1E3b/14g1Vt2J/UpYA8PutBsHi9fMoN4FavbFgOiaq6YHF4Sv3mVL+lYN5WEMslI1hn58QBaKMvxvcbvxxWvb81ErxYC7WmPALBWpLg5W/tzNax2dy3oj1xFxkutPMDM1gFfCMc6p99J7NS/qse2rnzT8QMLZsBljEXnts68+qtFswkXLI6+crS5V7YH6X7bk/qVaDsqgzfmvXxbNvusTns0z49q6ji3xiCt3h01GqpxT60INCtCh8J+vaupa4Gyrjit5wVgcZ2+tfuBU6DMQ7Vn80e04e+IoPniGbScJfAAi7Dp5PCZ9eL5qPbmN9YxyFbHslhRKdiDeTTr2Tw9RjvOLG6VhEPKAPxIqmst27ZfHrS8Qtt0WbwwAhHgw4YXL/ALNPsrLM64hsGujXwjAVwbqjw94lAn8D6lItqLq6r0kLya8x1Wl5efiPQxhRXgqN9VrYcP4RER8Y69laOApMzSlm+rrJG4RibcLwtTxFhLt6TqIDjrpJ+b9AW04OVwEA6aBZ/UOrUsfo2Nxcms8B1Ma45eZ0bOTt9mwtMAnbgIgrWmLfhqXsTmRnnNRmObQU+bmlAo48/wA3GOLVnJGrptU+IzMUReWZykBOvJt+vaKVXK7gqMYrX38Tfjn+pAwKFUD5FYllVZuHouVKlGpEj9zLdp3XxCeMxl8d9zH3+vZWrKYd+IVxinfR8hLb2tdrzMnXip5c+trqbyhZqBhFg34EjANoduqn69laqtQeebg5wIPgD+v8lpT1kgWogjSmCO/Y7QJXk1/3/GJ03hn76qU1bqVeRK8zHdzHcucnMpt6nzOJkwbG7in7iULhS0/w/wD/2Q=='
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
      scale: 0.44,
      width: 24.5,
      margin: 6,
    },
    node: {
      margin: 9,
      padding: 10,
      height: 80,
      width: 311,
    },
  },
};
var TREE_DATA = [
  { key: 'TEMP-000',                                                                                                                                                       gender: '',  birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                height: 0, width: 0 },
    { key: 'GQX8-CQP',               child: 'TEMP-000', prefix: '',    firstName: 'Arbyn',              middleName: 'Acosta',      lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: '1995-04-19',  deathDate: null,               deathAge: null,  living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Santa Cruz, Manila, PHL',           deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'software' },
      { key: 'GQJK-L51',             child: 'GQX8-CQP', prefix: '',    firstName: 'Rolando',            middleName: 'Saplala',     lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: '1965-10-09',  deathDate: null,               deathAge: null,  living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Poblacion, Caloocan, PHL',          deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'government' },
        { key: 'GQJK-LCT',           child: 'GQJK-L51', prefix: '',    firstName: 'Marcial',            middleName: 'Mia',         lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: '1932-10-13',  deathDate: '2020-02-27',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Quezon City, PHL',                  livingPlace: null,                },
          { key: 'GHBZ-TM4',         child: 'GQJK-LCT', prefix: '',    firstName: 'Eusebio',            middleName: 'Lopecillo',   lastName: 'Argabioso',   suffix: '',    gender: 'M', birthDate: 'about 1895',  deathDate: '1972-10-27',       deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Majayjay, Laguna, PHL',             livingPlace: null,                marker: 'farming' },
            { key: 'TEMP-002',       child: 'GHBZ-TM4', prefix: '',    firstName: 'Unknown',            middleName: '',            lastName: 'Argayoso',    suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GHB8-RCH',       child: 'GHBZ-TM4', prefix: '',    firstName: 'Estebana',           middleName: '',            lastName: 'Lopecillo',   suffix: '',    gender: 'F', birthDate: 'about 1861',  deathDate: '1951-08-30',       deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Majayjay, Laguna, PHL',             deathPlace: 'Majayjay, Laguna, PHL',             livingPlace: null,                },
              { key: 'G2HQ-YQS',     child: 'GHB8-RCH', prefix: '',    firstName: 'Simplicio',          middleName: '',            lastName: 'Lopecillo',   suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
              { key: 'G2H7-Q75',     child: 'GHB8-RCH', prefix: '',    firstName: 'Gregoria',           middleName: '',            lastName: 'Villarubin',  suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHBZ-P5Q',         child: 'GQJK-LCT', prefix: '',    firstName: 'Francisca',          middleName: '',            lastName: 'Mia',         suffix: '',    gender: 'F', birthDate: 'before 1919', deathDate: 'after 1936-10-13', deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
        { key: 'GHBZ-YVX',           child: 'GQJK-L51', prefix: '',    firstName: 'Lydia',              middleName: 'Perez',       lastName: 'Saplala',     suffix: '',    gender: 'F', birthDate: '1944-11-24',  deathDate: null,               deathAge: null,  living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Lubao, Pampanga, PHL',              deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'retail' },
          { key: 'GHB8-7T6',         child: 'GHBZ-YVX', prefix: '',    firstName: 'Fernando',           middleName: 'Sison',       lastName: 'Saplala',     suffix: '',    gender: 'M', birthDate: '1916-05-30',  deathDate: '1993-05-03',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Lubao, Pampanga, PHL',              deathPlace: 'Caloocan, PHL',                     livingPlace: null,                marker: 'military' },
            { key: 'GNNH-JLM',       child: 'GHB8-7T6', prefix: '',    firstName: 'Estanislao',         middleName: '',            lastName: 'Saplala',     suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GJJX-1SG',       child: 'GHB8-7T6', prefix: '',    firstName: 'Adela',              middleName: '',            lastName: 'Sison',       suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHB8-GZL',         child: 'GHBZ-YVX', prefix: '',    firstName: 'Lucina',             middleName: 'Gutierrez',   lastName: 'Perez',       suffix: '',    gender: 'F', birthDate: '1919-11-16',  deathDate: '1986-10-02',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Orani, Bataan, PHL',                deathPlace: 'Dinalupihan, Bataan, PHL',          livingPlace: null,                },
            { key: 'GHB8-M8D',       child: 'GHB8-GZL', prefix: '',    firstName: 'Victor',             middleName: '',            lastName: 'Perez',       suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GHB8-M86',       child: 'GHB8-GZL', prefix: '',    firstName: 'Genoveba',           middleName: '',            lastName: 'Gutierrez',   suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
      { key: 'GQJK-G8W',             child: 'GQX8-CQP', prefix: '',    firstName: 'Corazon',            middleName: 'Maramba',     lastName: 'Acosta',      suffix: '',    gender: 'F', birthDate: '1971-03-10',  deathDate: '2018-05-25',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sampaloc, Manila, PHL',             deathPlace: 'Santa Cruz, Laguna, PHL',           livingPlace: null,                marker: 'housewife' },
        { key: 'GHBD-7M4',           child: 'GQJK-G8W', prefix: '',    firstName: 'Manuel',             middleName: 'San Agustin', lastName: 'Acosta',      suffix: 'Jr.', gender: 'M', birthDate: '1948-07-06',  deathDate: '1979-06-07',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Manila, PHL',                       deathPlace: 'Pasadena, Los Angeles, CA, USA',    livingPlace: null,                marker: 'seaman' },
          { key: 'GHBD-9L6',         child: 'GHBD-7M4', prefix: '',    firstName: 'Manuel',             middleName: 'Bongco',      lastName: 'Acosta',      suffix: 'Sr.', gender: 'M', birthDate: '1913-11-10',  deathDate: '1994-11-20',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Orani, Bataan, PHL',                deathPlace: 'San Dimas, Los Angeles, CA, USA',   livingPlace: null,                marker: 'police', marker2: 'investigate' },
            { key: 'GHB8-SQN',       child: 'GHBD-9L6', prefix: '',    firstName: 'Ligorio',            middleName: '',            lastName: 'Acosta',      suffix: '',    gender: 'M', birthDate: 'about 1871',  deathDate: '1948-07-07',       deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Manila, PHL',                       livingPlace: null,                },
            { key: 'GHB8-5K8',       child: 'GHBD-9L6', prefix: '',    firstName: 'Maximiana',          middleName: '',            lastName: 'Bongco',      suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHB8-DXY',         child: 'GHBD-7M4', prefix: '',    firstName: 'Natividad',          middleName: 'Villacorta',  lastName: 'San Agustin', suffix: '',    gender: 'F', birthDate: '1925-12-21',  deathDate: '2008-10-09',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Ermita, Manila, PHL',               deathPlace: 'San Dimas, Los Angeles, CA, USA',   livingPlace: null,                marker: 'housewife' },
            { key: 'GHB8-LCC',       child: 'GHB8-DXY', prefix: '',    firstName: 'Vicente',            middleName: '',            lastName: 'San Agustin', suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GHB8-H7K',       child: 'GHB8-DXY', prefix: '',    firstName: 'Nena',               middleName: '',            lastName: 'Villacorta',  suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
        { key: 'GHB8-J1B',           child: 'GQJK-G8W', prefix: '',    firstName: 'Catalina',           middleName: 'Dumantay',    lastName: 'Maramba',     suffix: '',    gender: 'F', birthDate: '1943-01-28',  deathDate: '1974-08-10',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sangandaan, Caloocan, PHL',         livingPlace: null,                },
          { key: 'GHB8-GB6',         child: 'GHB8-J1B', prefix: '',    firstName: 'Sotero',             middleName: 'Reyes',       lastName: 'Maramba',     suffix: 'Sr.', gender: 'M', birthDate: '1903-04-22',  deathDate: '1969-12-12',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sangandaan, Caloocan, PHL',         livingPlace: null,                marker: 'police', marker2: 'train' },
            { key: 'LLQS-641',       child: 'GHB8-GB6', prefix: 'Don', firstName: 'Miguel',             middleName: 'Bautista',    lastName: 'Maramba',     suffix: '',    gender: 'M', birthDate: '1858',        deathDate: 'after 1902-06-22', deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                marker: 'government' },
              { key: 'LLQS-6YC',     child: 'LLQS-641', prefix: '',    firstName: 'Guillermo',          middleName: '',            lastName: 'Maramba',     suffix: '',    gender: 'M', birthDate: 'before 1845', deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                marker: 'sales', marker2: 'cattle' },
              { key: 'L281-614',     child: 'LLQS-641', prefix: '',    firstName: 'Maria',              middleName: 'Garcia',      lastName: 'Bautista',    suffix: '',    gender: 'F', birthDate: 'before 1845', deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                },
                { key: 'GC7T-H59',   child: 'L281-614', prefix: 'Don', firstName: 'Agustin',            middleName: '',            lastName: 'Bautista',    suffix: '',    gender: 'M', birthDate: '1812-05-29',  deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Sta. Barbara, Pangasinan, PHL',     deathPlace: 'Sta. Barbara, Pangasinan, PHL',     livingPlace: null,                marker: 'government' },
                { key: 'GC7T-1PK',   child: 'L281-614', prefix: '',    firstName: 'Felipa',             middleName: '',            lastName: 'Garcia',      suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'LLQS-6F1',       child: 'GHB8-GB6', prefix: '',    firstName: 'Mercedes',           middleName: 'Novilla',     lastName: 'Reyes',       suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
              { key: 'G7C3-B6P',     child: 'LLQS-6F1', prefix: '',    firstName: 'Gregorio',           middleName: '',            lastName: 'Reyes',       suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
              { key: 'G7C3-J9S',     child: 'LLQS-6F1', prefix: '',    firstName: 'Leocadia',           middleName: '',            lastName: 'Novilla',     suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GHBD-9LY',         child: 'GHB8-J1B', prefix: '',    firstName: 'Cresencia',          middleName: '',            lastName: 'Dumantay',    suffix: '',    gender: 'F', birthDate: '1918-04-19',  deathDate: '1990-04-16',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'PHL',                               deathPlace: 'Sangandaan, Caloocan, PHL',         livingPlace: null,                },
            { key: 'TEMP-001',       child: 'GHBD-9LY', prefix: '',    firstName: 'Unknown',            middleName: '',            lastName: 'name',        suffix: '',    gender: 'F', birthDate: 'before 1905', deathDate: 'after 1918-04-19', deathAge: "50+", living: false, hasDNA: false, hasImage: true,   birthPlace: 'PHL',                               deathPlace: 'PHL',                               livingPlace: null,                },
    { key: 'GHB5-TWN',               child: 'TEMP-000', prefix: '',    firstName: 'Mitchie',            middleName: 'Ajesta',      lastName: 'Adanza',      suffix: '',    gender: 'F', birthDate: '1994-12-16',  deathDate: null,               deathAge: null,  living: true,  hasDNA: true,  hasImage: true,   birthPlace: 'Santa Cruz, Manila, PHL',           deathPlace: null,                                livingPlace: 'Metro Manila, PHL', },
      { key: 'GHB5-XTZ',             child: 'GHB5-TWN', prefix: '',    firstName: 'Darne',              middleName: 'Elican',      lastName: 'Adanza',      suffix: '',    gender: 'M', birthDate: '1964-06-22',  deathDate: null,               deathAge: null,  living: true,  hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: null,                                livingPlace: 'Metro Manila, PHL', marker: 'manufacturing' },
        { key: 'GH12-SVQ',           child: 'GHB5-XTZ', prefix: '',    firstName: 'Nestor',             middleName: 'Ladera',      lastName: 'Adanza',      suffix: '',    gender: 'M', birthDate: '1938-02-26',  deathDate: '2018-09-28',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: 'Balingasag, Misamis Oriental, PHL', livingPlace: null,                marker: 'farming' },
          { key: 'GH12-DRN',         child: 'GH12-SVQ', prefix: '',    firstName: 'Felomino',           middleName: 'R',           lastName: 'Adanza',      suffix: '',    gender: 'M', birthDate: 'about 1901',  deathDate: '1990-11-03',       deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Dumaguete, Negros Oriental, PHL',   deathPlace: 'Balingasag, Misamis Oriental, PHL', livingPlace: null,                marker: 'farming' },
          { key: 'GH12-3GN',         child: 'GH12-SVQ', prefix: '',    firstName: 'Consuelo',           middleName: '',            lastName: 'Ladera',      suffix: '',    gender: 'F', birthDate: 'before 1925', deathDate: 'after 1990-11-03', deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
        { key: 'GH12-9F6',           child: 'GHB5-XTZ', prefix: '',    firstName: 'Rufa',               middleName: 'Acerto',      lastName: 'Elican',      suffix: '',    gender: 'F', birthDate: '1939-11-28',  deathDate: '2015-04-02',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Balingasag, Misamis Oriental, PHL', deathPlace: 'Balingasag, Misamis Oriental, PHL', livingPlace: null,                marker: 'farming' },
          { key: 'GH12-9JZ',         child: 'GH12-9F6', prefix: '',    firstName: 'Cecilio',            middleName: '',            lastName: 'Elican',      suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                marker: 'military' },
          { key: 'GH12-35H',         child: 'GH12-9F6', prefix: '',    firstName: 'Jovita',             middleName: '',            lastName: 'Acerto',      suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
      { key: 'GHBR-FK3',             child: 'GHB5-TWN', prefix: '',    firstName: 'Mylen',              middleName: 'Vergara',     lastName: 'Ajesta',      suffix: '',    gender: 'F', birthDate: '1974-04-13',  deathDate: null,               deathAge: null,  living: true,  hasDNA: false, hasImage: true,   birthPlace: 'Sinamongan, Pilar, Capiz, PHL',     deathPlace: null,                                livingPlace: 'Manama, BHR',       marker: 'beautician' },
        { key: 'GH12-Z3C',           child: 'GHBR-FK3', prefix: '',    firstName: 'Napoleon Crispolon', middleName: 'Badoles',     lastName: 'Ajesta',      suffix: '',    gender: 'M', birthDate: 'before 1961', deathDate: 'after 1980-02-26', deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Binaobawan, Pilar, Capiz, PHL',     deathPlace: "PHL",                               livingPlace: null,                },
          { key: 'GH12-XX4',         child: 'GH12-Z3C', prefix: '',    firstName: 'Manuel',             middleName: 'Bermúdez',    lastName: 'Ajesta',      suffix: '',    gender: 'M', birthDate: 'before 1909', deathDate: 'after 1922-03-25', deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Pilar, Capiz, PHL',                 deathPlace: null,                                livingPlace: null,                },
            { key: 'GKBR-M9Y',       child: 'GH12-XX4', prefix: '',    firstName: 'Eustaquio',          middleName: '',            lastName: 'Ajesta',      suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GKBR-7P7',       child: 'GH12-XX4', prefix: '',    firstName: 'Florencia',          middleName: '',            lastName: 'Bermúdez',    suffix: '',    gender: 'F', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GH12-HQN',         child: 'GH12-Z3C', prefix: '',    firstName: 'Ursula',             middleName: 'Villanes',    lastName: 'Badoles',     suffix: '',    gender: 'F', birthDate: 'before 1909', deathDate: 'after 1922-03-25', deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'GKBT-9GD',       child: 'GH12-HQN', prefix: '',    firstName: 'Pedro Benjamin',     middleName: '',            lastName: 'Badoles',     suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
            { key: 'K2GJ-YY3',       child: 'GH12-HQN', prefix: '',    firstName: 'Leoncia',            middleName: '',            lastName: 'Villanes',    suffix: '',    gender: 'F', birthDate: 'about 1852',  deathDate: '1922-01-08',       deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: 'Panay, Capiz, PHL',                 deathPlace: 'Panay, Capiz, PHL',                 livingPlace: null,                },
        { key: 'GH12-W17',           child: 'GHBR-FK3', prefix: '',    firstName: 'Celma',              middleName: 'Borja',       lastName: 'Vergara',     suffix: '',    gender: 'F', birthDate: '1941-07-08',  deathDate: '2020-02-16',       deathAge: null,  living: false, hasDNA: false, hasImage: true,   birthPlace: 'Dulangan, Pilar, Capiz, PHL',       deathPlace: 'Santa Maria, Bulacan, PHL',         livingPlace: null,                marker: 'farming' },
          { key: 'GH12-6YL',         child: 'GH12-W17', prefix: '',    firstName: 'Benigno',            middleName: '',            lastName: 'Vergara',     suffix: '',    gender: 'M', birthDate: null,          deathDate: null,               deathAge: null,  living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
          { key: 'GH12-DD8',         child: 'GH12-W17', prefix: '',    firstName: 'Enoria',             middleName: '',            lastName: 'Borja',       suffix: '',    gender: 'F', birthDate: 'before 1928', deathDate: 'after 1997-12-16', deathAge: "90+", living: false, hasDNA: false, hasImage: false,  birthPlace: null,                                deathPlace: null,                                livingPlace: null,                },
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
  // if (firstName.includes('Crispolon')) {
  //   firstName = firstName.replace("Crispolon", "C.");
  // }

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
*/const SOURCES = {
  'Present and Direct Interactions': [
    'GHB5-TWN:birthDate',
    'GHB5-TWN:firstName',
    'GHB5-TWN:gender',
    'GHB5-TWN:lastName',
    'GHB5-TWN:middleName',
    'GQX8-CQP:birthDate',
    'GQX8-CQP:firstName',
    'GQX8-CQP:gender',
    'GQX8-CQP:lastName',
    'GQX8-CQP:middleName',
    'TEMP-000:GHB5-TWN:parentChild', // aesthetic data consideration
    'TEMP-000:GQX8-CQP:parentChild', // aesthetic data consideration
    'GQJK-LCT:birthPlace',
    'GQX8-CQP:marker',
    'GQJK-G8W:marker',
    'GQJK-L51:marker',
    'GHBZ-YVX:marker',
    'GHB5-XTZ:marker',
    'GHBR-FK3:marker',
  ],
  // Should only be used on ancestors with living children
  // since this type of source would have a bigger "mistake chance"
  // as the generation gets older (Family Tree started on March 2020)
  // DO NOT CHANGE THIS SOURCE, IT IS USED DIRECTLY IN checks.js
  'SENTIMENTS OF LIVING RELATIVES': [
    // Everyone in the chat group of Lolo Bio's descendants say that
    // he was born in Majayjay Laguna. Same goes for Lola Estebana
    'GHBZ-TM4:birthPlace',
    'GHB8-RCH:birthPlace',

    // From Tita Susan (child of Lola Catalina)
    'GHBD-7M4:marker',

    // Directly from Nanay (child of Lola Catalina)
    'GHB8-J1B:birthDate',
    'GHB8-J1B:deathDate',
    'GHB8-J1B:birthPlace',

    // Directly from Tito Darne (child of Lolo Nestor)
    'GH12-SVQ:birthPlace',

    // Directly from Tito Dak (grandson of Lola Nati)
    'GHB8-DXY:marker',

    // Directly from Lolo Marcial (son of Lola Francisca)
    'GHBZ-P5Q:living',

    // Directly from Lola Lydia and Lolo Boning (children of Lolo Andong)
    'GHB8-7T6:birthDate',
    'GHB8-7T6:birthPlace',
    'GHB8-7T6:deathDate',
    'GHB8-7T6:deathPlace',
    'GHB8-7T6:living',
    'GHB8-7T6:marker',
    'GHB8-7T6:middleName',

    // Directly from Lola Lydia and Lolo Boning (children of Lolo Andong)
    'GHB8-GZL:birthDate',
    'GHB8-GZL:birthPlace',
    'GHB8-GZL:deathDate',
    'GHB8-GZL:deathPlace',
    'GHB8-GZL:lastName',
    'GHB8-GZL:living',
    'GHB8-GZL:middleName',

    // Directly from Lola Lydia (granddaughter of Lolo Estanislao and Lola Adela)
    'GNNH-JLM:firstName',
    'GNNH-JLM:lastName',
    'GNNH-JLM:gender',
    'GNNH-JLM:GHB8-7T6:parentChild',
    'GJJX-1SG:firstName',
    'GJJX-1SG:lastName',
    'GJJX-1SG:gender',
    'GJJX-1SG:GHB8-7T6:parentChild',
    'GNNH-JLM:GJJX-1SG:partner',

    // Directly from Lola Lydia (granddaughter of Lolo Victor and Lola Genoveba)
    'GHB8-M8D:firstName',
    'GHB8-M8D:lastName',
    'GHB8-M8D:gender',
    'GHB8-M8D:GHB8-GZL:parentChild',
    'GHB8-M86:firstName',
    'GHB8-M86:lastName',
    'GHB8-M86:gender',
    'GHB8-M86:GHB8-GZL:parentChild',
    'GHB8-M8D:GHB8-M86:partner',

    // Directly from Tito Darne (grandson)
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',
    'GH12-9JZ:firstName',
    'GH12-9JZ:lastName',
    'GH12-35H:firstName',
    'GH12-35H:lastName',

    // Directly from Tito Darne (grandson)
    'GH12-XX4:firstName',
    'GH12-XX4:lastName',
    'GH12-HQN:firstName',
    'GH12-HQN:lastName',
    'GH12-6YL:firstName',
    'GH12-6YL:lastName',
    'GH12-DD8:firstName',
    'GH12-DD8:lastName',

    // Directly from Tita Mylen (daughter)
    'GH12-Z3C:living',
  ],
  // Usual suffix verification
  "Son's existance": [
    'GHBD-9L6:suffix',
  ],
  "Father's existance": [
    'GHBD-7M4:suffix',
  ],
  // Doesn't make sense for them to be alive
  // Everyone in Lola Estebana's generation is probably dead
  'PROBABLY NOT LIVING ANYMORE': [
    'GHB8-RCH:living',
    'G2HQ-YQS:living',
    'G2H7-Q75:living',
    'GNNH-JLM:living',
    'GJJX-1SG:living',
    'GHB8-M8D:living',
    'GHB8-M86:living',
    'GHB8-SQN:living',
    'GHB8-5K8:living',
    'GHB8-LCC:living',
    'GHB8-H7K:living',
    'LLQS-641:living',
    'LLQS-6YC:living',
    'L281-614:living',
    'GC7T-H59:living',
    'GC7T-1PK:living',
    'LLQS-6F1:living',
    'G7C3-B6P:living',
    'G7C3-J9S:living',
    'TEMP-001:living',
    'GKBR-M9Y:living',
    'GKBR-7P7:living',
    'GKBT-9GD:living',
    'K2GJ-YY3:living',
  ],
  // Arbyn Argabioso birth certificate
  'https://drive.google.com/file/d/1B1umw_xm5i-AmNp9YzshX2DebSAhj3cz/view?usp=sharing': [
    'GQX8-CQP:birthDate',
    'GQX8-CQP:birthPlace',
    'GQX8-CQP:firstName',
    'GQX8-CQP:gender',
    'GQX8-CQP:middleName',
    'GQX8-CQP:GQJK-G8W:parentChild',
    'GQX8-CQP:GQJK-L51:parentChild',
    'GQJK-L51:GQJK-G8W:partner',
  ],
  'https://web.facebook.com/arbyn.argabioso/posts/pfbid02U3X7BU11Lb41vrbLQKrAyGe8oCEvd8SSqbY8rcCZ2MEQzcb3BUQJWL8UPhF1ZttYl': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],
  // Mitch's birth certificate
  'https://drive.google.com/file/d/19s_gdN98AQ1sZ5lhqSf8GrpJJIpFhsdf/view?usp=sharing': [
    'GHB5-TWN:firstName',
    'GHB5-TWN:middleName',
    'GHB5-TWN:lastName',
    'GHB5-TWN:gender',
    'GHB5-TWN:birthDate',
    'GHB5-TWN:birthPlace',

    'GHB5-TWN:GHB5-XTZ:parentChild',
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',

    'GHB5-TWN:GHBR-FK3:parentChild',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',

    'GHB5-XTZ:GHBR-FK3:partner',
  ],
  // Tatay Roland's birth certificate
  'https://drive.google.com/file/d/1degLEAa8cBBxJrRsWwz0t6wHh9vs29cH/view?usp=sharing': [
    'GQJK-L51:birthDate',
    'GQJK-L51:birthPlace',
    'GQJK-L51:firstName',
    'GQJK-L51:gender',
    'GQJK-L51:lastName',
    'GQJK-L51:middleName',
    'GQJK-L51:GQJK-LCT:parentChild',
    'GQJK-L51:GHBZ-YVX:parentChild',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
  ],
  // Inquirer.net's article about Tatay Roland's NBI work
  'https://drive.google.com/file/d/1Zw8fzrh9ELRvIx1W7ncqT010edcT6hpK/view?usp=sharing': [
    'GQJK-L51:marker',
  ],
  // Nanay's birth certificate
  'https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view?usp=sharing': [
    'GQJK-G8W:birthDate',
    'GQJK-G8W:birthPlace',
    'GQJK-G8W:firstName',
    'GQJK-G8W:gender',
    'GQJK-G8W:lastName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:GHBD-7M4:parentChild',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GQJK-G8W:GHB8-J1B:parentChild',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',
  ],
  // Nanay's death certificate
  'https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view?usp=sharing': [
    'GQJK-G8W:deathDate',
    'GQJK-G8W:deathPlace',
    'GQJK-G8W:living',
  ],
  'https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH': [
    'GHB8-SQN:deathDate',
    'GHB8-SQN:deathPlace',
    'GHB8-SQN:gender',
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:GHB8-5K8:partner',
    'GHB8-5K8:gender',
  ],
  'https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ': [
    'LLQS-641:LLQS-6F1:partner',
  ],
  // Geni Record for Lolo Miguel Maramba
  'https://www.geni.com/people/Miguel-Maramba/4012194445110022663': [
    'LLQS-641:firstName',
    'LLQS-641:middleName',
    'LLQS-641:lastName',
    'LLQS-641:birthDate',
    'LLQS-641:gender',
    'GHB8-GB6:LLQS-641:parentChild',
    'LLQS-641:L281-614:parentChild',
    'LLQS-641:LLQS-6YC:parentChild',
  ],
  // Official Gazette ni Lolo Miguel
  'https://drive.google.com/file/d/1Ik8lFHm_F4-FaKOs4qL4CNiq-Il2WfLR/view?usp=drive_link': [
    'LLQS-641:marker',
  ],
  // Another Official Gazette entry for Lolo Miguel
  'https://drive.google.com/file/d/1CNF4lEbL4vfjbhMnTOEk02KFDhaO-Xwa/view?usp=drive_link': [
    'LLQS-641:prefix',
  ],
  // FamilySearch: Lolo Felomino death record
  'https://www.familysearch.org/ark:/61903/1:1:HYTD-R5ZM': [
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',
    'GH12-DRN:deathPlace',
    'GH12-DRN:deathDate',
  ],
  // Manuel Ajesta and Ursula badoles in son's catholic record
  'https://www.familysearch.org/ark:/61903/1:1:6JG6-3YRH': [
    'GH12-XX4:firstName',
    'GH12-XX4:gender',
    'GH12-HQN:firstName',
    'GH12-HQN:lastName',
    'GH12-HQN:gender',

    'GKBR-M9Y:firstName',
    'GKBR-M9Y:lastName',
    'GKBR-7P7:firstName',
    'GKBR-7P7:lastName',
    'GKBR-7P7:gender',
    'GKBT-9GD:firstName',
    'GKBT-9GD:lastName',
    'K2GJ-YY3:firstName',
    'K2GJ-YY3:lastName',
    'K2GJ-YY3:gender',

    'GH12-XX4:GH12-HQN:partner',
    'GH12-HQN:GKBT-9GD:parentChild',
    'GH12-XX4:GKBR-M9Y:parentChild',
  ],
  // Lola Estebana Death Certificate
  'https://drive.google.com/file/d/1yf_M5CJgnXsHGFvFmF5Uzfp4YrsAnfUY/view?usp=sharing': [
    'GHB8-RCH:birthPlace',
    'GHB8-RCH:deathDate',
    'GHB8-RCH:deathPlace',
    'GHB8-RCH:firstName',
    'GHB8-RCH:gender',
    'GHB8-RCH:lastName',
    'GHB8-RCH:living',
  ],
  // Lola Lydia Birth Certificate
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view?usp=sharing': [
    'GHBZ-YVX:birthDate',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:living',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHBZ-YVX:GHB8-GZL:parentChild',
  ],
  // Lola Lydia marriage certificate with Lolo Marcial
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing': [
    'GHBZ-YVX:GQJK-LCT:partner',
  ],
  // FamilySearch: Lola Marcial marriage record
  'https://www.familysearch.org/ark:/61903/1:1:HBBK-QDMM': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',
    'GHB8-GZL:firstName',
    'GHB8-GZL:lastname',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',
    'GHBZ-YVX:gender',
    'GHBZ-P5Q:gender',
    'GHBZ-TM4:gender',
    'GHB8-7T6:gender',
    'GHB8-GZL:gender',
    'GHB8-7T6:GHB8-GZL:partner',
    'GHBZ-TM4:GHBZ-P5Q:partner',
    'GHBZ-YVX:GQJK-LCT:partner',
    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHBZ-YVX:GHB8-GZL:parentChild',
    'GQJK-LCT:GHBZ-P5Q:parentChild',
    'GQJK-LCT:GHBZ-TM4:parentChild',
  ],
  // Lolo Marcial's grave headstone photo
  'https://drive.google.com/file/d/1x1M6Z1asZU99nMTdtKYdfDxY_w_s2Gnc/view?usp=share_link': [
    'GQJK-LCT:birthDate',
    'GQJK-LCT:deathDate',
    'GQJK-LCT:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:living',
  ],
  // Lolo Sotero's grave headstone photo, together with
  // Lola Cresing and Lola Catalina
  'https://drive.google.com/file/d/1AeoNewX7fEeAaihfBI3Tz6kNA9ia0m-D/view?usp=share_link': [
    'GHB8-GB6:suffix',
    'GHB8-GB6:birthDate',
    'GHB8-GB6:deathDate',
    'GHB8-GB6:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-GB6:living',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
    'GHBD-9LY:firstName',
    'GHBD-9LY:birthDate',
    'GHBD-9LY:deathDate',
    'GHBD-9LY:living',
    'GHBD-9LY:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-J1B:firstName',
    'GHB8-J1B:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-J1B:living',
  ],
  // Lolo Manuel and Lola Catalina's marriage certificate
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?usp=share_link': [
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:gender',
    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHBD-7M4:GHBD-9L6:parentChild',
    'GHB8-J1B:GHBD-7M4:partner',
    'GHB8-DXY:GHBD-9L6:partner',
    'GHB8-GB6:GHBD-9LY:partner',
    'GHB8-J1B:GHB8-GB6:parentChild',
    'GHB8-J1B:GHBD-9LY:parentChild',
    'GHB8-DXY:gender',
    'GHBD-9L6:gender',
    'GHB8-GB6:gender',
    'GHBD-9LY:gender',
  ],
  // Lolo Manuel Jr. California deaths and burials record
  'https://www.familysearch.org/ark:/61903/1:1:HGZ8-33ZM': [
    'GHBD-7M4:living',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:deathDate',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:deathPlace',
    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHBD-7M4:GHBD-9L6:parentChild',
  ],
  // Death Certificate ni Lolo Manuel Sr.
  'https://drive.google.com/file/d/1JuyRHuSaar2p3RM0nUjWX-KPMAGjk2FK/view?usp=sharing': [
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:birthDate',
    'GHBD-9L6:deathDate',
    'GHBD-9L6:deathPlace',
    'GHBD-9L6:living',
    'GHBD-9L6:marker',
    'GHBD-9L6:marker2',
  ],
  // Birth certificate ni Lolo Ben
  'https://drive.google.com/file/d/1u-7tnWjKdZ5-GrdLKuKi-NOAVvty25Qo/view?usp=sharing': [
    'GHBD-9L6:birthPlace',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-DXY:birthPlace',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9L6:GHB8-DXY:partner',
  ],
  // Social Security index ni Lola Nati
  'https://www.myheritage.com/research/record-10002-81189365-/natividad-san-agustin-acosta-in-us-social-security-death-index-ssdi': [
    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
    'GHB8-DXY:living',
  ],
  // Marriage certificate ni Lolo Manuel Sr. and Lola Nati
  'https://drive.google.com/file/d/1L4zy5f_l9gYFBQQ68WdVFLDunwFoKgru/view?usp=sharing': [
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',

    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',

    'GHB8-SQN:GHB8-5K8:partner',

    'GHB8-LCC:firstName',
    'GHB8-LCC:lastName',
    'GHB8-LCC:gender',

    'GHB8-H7K:firstName',
    'GHB8-H7K:lastName',
    'GHB8-H7K:gender',

    'GHB8-LCC:GHB8-H7K:partner',

    'GHBD-9L6:birthPlace',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-DXY:birthPlace',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9L6:GHB8-DXY:partner',
    'GHBD-9L6:GHB8-SQN:parentChild',
    'GHBD-9L6:GHB8-5K8:parentChild',
    'GHB8-DXY:GHB8-LCC:parentChild',
    'GHB8-DXY:GHB8-H7K:parentChild',
  ],
  // FamilySearch: Death record ni Lolo Bio
  'https://www.familysearch.org/ark:/61903/1:1:HR2D-1GN2': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
  ],
  // Death certificate ni Lolo Bio
  'https://drive.google.com/file/d/1SQy34nGR1Z5-AqNSZDInfkewArzP_xqp/view?usp=share_link': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:middleName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
    'GHBZ-TM4:GHB8-RCH:parentChild',
    'GHBZ-TM4:marker',
    'GHBZ-TM4:gender',
  ],
  // Death certificate ni Lolo Felomino
  'https://drive.google.com/file/d/1BK3uw-U_2ONst68_V7wUXFQWzzlu0pFc/view?usp=share_link': [
    'GH12-DRN:firstName',
    'GH12-DRN:middleName',
    'GH12-DRN:lastName',
    'GH12-DRN:deathDate',
    'GH12-DRN:deathPlace',
    'GH12-DRN:living',
    'GH12-DRN:gender',
    'GH12-DRN:marker',
    'GH12-DRN:GH12-3GN:partner',
    'GH12-SVQ:GH12-DRN:parentChild',
  ],
  // Tito Darne's birth certificate
  'https://drive.google.com/file/d/1jYZqUHatNlvgDuyFw7jxSwgZsE6jy_9V/view?usp=sharing': [
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:birthDate',
    'GHB5-XTZ:birthPlace',

    'GHB5-XTZ:GH12-9F6:parentChild',
    'GH12-9F6:firstName',
    'GH12-9F6:lastName',
    'GH12-9F6:gender',

    'GHB5-XTZ:GH12-SVQ:parentChild',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:gender',

    'GH12-9F6:GH12-SVQ:partner',
  ],
  // Tita Mylen's birth certificate
  'https://drive.google.com/file/d/1J6wUo6AwrS5aO9LJWbh8CUReaRTkUEFF/view?usp=sharing': [
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:firstName',
    'GH12-Z3C:lastName',
    'GH12-Z3C:gender',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',
    'GH12-W17:gender',

    'GH12-Z3C:GH12-W17:partner',
  ],
  // Tita Mylen's PSA Birth Certificate
  'https://drive.google.com/file/d/18MFv7G6xKBJj9M4ewH8a3GgcpFW4VSht/view?usp=sharing': [
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:firstName',
    'GH12-Z3C:middleName',
    'GH12-Z3C:lastName',
    'GH12-Z3C:gender',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',
    'GH12-W17:gender',

    'GH12-Z3C:GH12-W17:partner',
  ],
  // FamilySearch: record of Corazon Maramba including her parents
  'https://www.familysearch.org/ark:/61903/1:1:HBNK-LY2M': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',
    'GHBD-9LY:lastName',
  ],
  // News article regarding Lolo Sotero being the chief in the police force
  // caputuring some trouble makers near a train station
  'https://drive.google.com/file/d/15o0fdYYMYTzXQ3ikiMCOqy-YlfAND76C/view?usp=sharing': [
    'GHB8-GB6:marker',
    'GHB8-GB6:marker2',
  ],
  // Geni: Guillermo Maramba
  'https://www.geni.com/people/Guillermo-Maramba/6000000010495044375': [
    'LLQS-6YC:firstName',
    'LLQS-6YC:lastName',
    'LLQS-6YC:gender',
    'LLQS-6YC:LLQS-641:parentChild',
    'LLQS-6YC:L281-614:partner',
  ],
  // Geni: Maria Garcia Bautista
  'https://www.geni.com/people/Maria-Maramba/6000000017013425750': [
    'L281-614:firstName',
    'L281-614:middleName',
    'L281-614:lastName',
    'L281-614:gender',
    'L281-614:LLQS-641:parentChild',
    'LLQS-6YC:L281-614:partner',

    'GC7T-H59:L281-614:parentChild',
    'GC7T-1PK:L281-614:parentChild',
  ],
  // Geni: Don Agustin Bautista
  'https://www.geni.com/people/Agustin-Bautista/6000000017013722083': [
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:gender',
  ],
  // Geni: Felipa Garcia
  'https://www.geni.com/people/Felipa-Bautista/6000000010494358163': [
    'GC7T-1PK:firstName',
    'GC7T-1PK:lastName',
    'GC7T-1PK:gender',
  ],
  // Lolo Sotero's death certificate
  'https://drive.google.com/file/d/1Pn6Xvn7ucwnzTgNTcFBsQq9hzAnARp51/view?usp=sharing': [
    'GHB8-GB6:birthDate',
    'GHB8-GB6:birthPlace',
    'GHB8-GB6:deathDate',
    'GHB8-GB6:deathPlace',
    'GHB8-GB6:firstName',
    'GHB8-GB6:gender',
    'GHB8-GB6:lastName',
    'GHB8-GB6:living',
  ],
  // Lolo Nestor death certificate
  'https://drive.google.com/file/d/1peIClAbyWzZV_kWcxPKAVBPDnVqFXG2Q/view?usp=drive_link': [
    'GH12-SVQ:firstName',
    'GH12-SVQ:middleName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:gender',
    'GH12-SVQ:birthDate',
    'GH12-SVQ:deathDate',
    'GH12-SVQ:deathPlace',
    'GH12-SVQ:living',
    'GH12-SVQ:marker',
  ],
  // U.S. Social Security Death Index
  'U.S. Social Security Death Index': [
    'GHB8-DXY:deathDate',
    'GHB8-DXY:deathPlace',
  ],
  // Lola Nati's grave headstone
  'https://drive.google.com/file/d/10Z0kurjxNy0s7M0um4w5SxFMAFWA8Ivm/view?usp=drive_link': [
    'GHB8-DXY:living',
    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
    'GHB8-DXY:firstName',
    'GHB8-DXY:GHBD-9L6:partner',
  ],
  // FamilySearch: Simplicio Lopecillo and Gregoria Villarubin
  'https://www.familysearch.org/ark:/61903/1:1:66XW-VQRT': [
    'G2HQ-YQS:firstName',
    'G2HQ-YQS:lastName',
    'G2HQ-YQS:gender',
    'G2H7-Q75:firstName',
    'G2H7-Q75:lastName',
    'G2H7-Q75:gender',
    'G2HQ-YQS:GHB8-RCH:parentChild',
    'G2H7-Q75:GHB8-RCH:parentChild',
    'G2HQ-YQS:G2H7-Q75:partner',
  ],
  // FamilySearch: Another record regarding Lolo Simplicio
  'https://www.familysearch.org/ark:/61903/1:1:66X6-LG3J': [
    'G2HQ-YQS:firstName',
    'G2HQ-YQS:lastName',
    'G2HQ-YQS:gender',
    'G2H7-Q75:firstName',
    'G2H7-Q75:lastName',
    'G2H7-Q75:gender',
    'G2HQ-YQS:GHB8-RCH:parentChild',
    'G2H7-Q75:GHB8-RCH:parentChild',
    'G2HQ-YQS:G2H7-Q75:partner',
  ],
  // FamilySearch: Record of Lola Trinidad, another daughter of Lolo Bio
  'https://www.familysearch.org/ark:/61903/1:1:HBBS-S7W2': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',
    'GHBZ-TM4:GHBZ-P5Q:partner',
  ],
  // Records regarding Adela Sison and Lolo Estanislao
  'https://www.familysearch.org/ark:/61903/1:1:FN4G-JSW': [
    'GNNH-JLM:firstName',
    'GNNH-JLM:lastName',
    'GNNH-JLM:gender',
    'GJJX-1SG:firstName',
    'GJJX-1SG:lastName',
    'GJJX-1SG:gender',
    'GNNH-JLM:GJJX-1SG:partner',
  ],
  // Record regarding Lolo Victor and Lola Genoveba
  'https://www.familysearch.org/ark:/61903/1:1:HBP6-8VZM': [
    'GHB8-M8D:firstName',
    'GHB8-M8D:lastName',
    'GHB8-M8D:gender',
    'GHB8-M86:firstName',
    'GHB8-M86:lastName',
    'GHB8-M86:gender',
    'GHB8-M8D:GHB8-M86:partner',
  ],
  // Old parish article regarding Don Agustin Bautista where he
  // donated a bell for a church in Santa Barbara, Pangasinan and
  // it was mentioned that he was an Alcalde as well
  'http://www.oocities.org/hfamilyparishpang/history.html': [
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:gender',
    'GC7T-H59:prefix',
    'GC7T-H59:marker',
  ],
  // Guillermo Maramba from Daniel Maramba's biology
  'https://drive.google.com/file/d/1dDJs3rrAsbMSo_qp6my6J-wxE676FMEa/view?usp=drive_link': [
    'LLQS-6YC:firstName',
    'LLQS-6YC:lastName',
    'LLQS-6YC:gender',
    'LLQS-6YC:marker',
    'LLQS-6YC:marker2',

    'L281-614:firstName',
    'L281-614:lastName',
    'L281-614:gender',

    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:L281-614:parentChild',
    'GC7T-1PK:firstName',
    'GC7T-1PK:lastName',
    'GC7T-1PK:L281-614:parentChild',
    'GC7T-H59:GC7T-1PK:partner',
  ],
  // Felipe A. Mia. Brother of Lola Francisca Mia
  'https://www.familysearch.org/ark:/61903/1:1:FK6J-3YC': [
  ],
  // Felipe A. Mia larger. Brother of Lola Francisca Mia
  'https://www.familysearch.org/ark:/61903/1:1:66XW-N368': [
    ''
  ],
};
isChecking = window.location.get("check") == "true";

var KEYS_IN_SOURCE = '';
for (const [url, originalSourceKeys] of Object.entries(SOURCES)) {
  KEYS_IN_SOURCE += originalSourceKeys.toString();
}

var KEYS_IN_SENTIMENT_SOURCE = '';
for (const [i, originalSourceKeys] of Object.entries(SOURCES['SENTIMENTS OF LIVING RELATIVES'])) {
  KEYS_IN_SENTIMENT_SOURCE += originalSourceKeys.toString();
}

function isEmpty(value) {
  return value === undefined || value === null || value.trim() === '';
}

function checkPerPerson(person) {
  let sourceCount = 0;
  let expectedSourceCount = 0;
  let unverifiedAttributes = [];

  let attributesToIgnore = [
    'key', // custom-information attribute, not verifiable
    'hasDNA', // aesthetic attribute
    'parent', // derived attribute
    'fullName', // composite attribute
  ];

  if (person.living) {
    attributesToIgnore.push('deathDate');
    attributesToIgnore.push('deathPlace');
    attributesToIgnore.push('deathAge');

    sourceCount += 3;
    expectedSourceCount += 3;
  }

  if (!person.living) {
    attributesToIgnore.push('livingPlace');

    sourceCount += 1;
    expectedSourceCount += 1;
  }

  if (person.deathAge === null) {
    attributesToIgnore.push('deathAge');

    sourceCount += 1;
    expectedSourceCount += 1;
  }

  if (isEmpty(person.middleName)) {
    attributesToIgnore.push('middleName');
  }

  if (isEmpty(person.marker)) {
    attributesToIgnore.push('marker');
  }

  if (isEmpty(person.prefix)) {
    attributesToIgnore.push('prefix');
  }

  if (isEmpty(person.suffix)) {
    attributesToIgnore.push('suffix');
  }

  if (isEmpty(person.partner)) {
    attributesToIgnore.push('partner');
  }

  if (person.living) {
    attributesToIgnore.push('living');
  }

  if (!person.hasImage) {
    attributesToIgnore.push('hasImage');
  }

  for (const [attributeName, attributeValue] of Object.entries(person)) {
    if (attributesToIgnore.includes(attributeName)) {
      continue;
    }

    expectedSourceCount += 1;

    let verified = false;
    let sourceKey = `${person.key}:${attributeName}`;
    let sourceKeyAlternative = null;

    if (attributeName == "child") {
      sourceKey = `${attributeValue}:${person.key}:parentChild`;
      sourceKeyAlternative = `${person.key}:${attributeValue}:parentChild`;
    }
    if (attributeName == "partner") {
      sourceKey = `${attributeValue}:${person.key}:partner`;
      sourceKeyAlternative = `${person.key}:${attributeValue}:partner`;
    }

    let currentSourceCount = 0;

    // This attribute is already a statement of "having an image"
    // since we don't put a random image at all cost, having this
    // attribute already serves as a source
    if (attributeName == "hasImage") {
      currentSourceCount += 1;
    }

    currentSourceCount += KEYS_IN_SOURCE.occurrences(sourceKey);
    currentSourceCount += KEYS_IN_SOURCE.occurrences(sourceKeyAlternative);
    sourceCount += currentSourceCount;

    // An attribute is unverified if there are no current
    // sources found for that specific attribute
    if (currentSourceCount <= 0) {
      unverifiedAttributes.push(attributeName);
    } else if (currentSourceCount > 1) {
      expectedSourceCount += (currentSourceCount - 1);
    }
  }

  return [
    sourceCount,
    expectedSourceCount,
    unverifiedAttributes,
    KEYS_IN_SENTIMENT_SOURCE.occurrences(person.key),
  ];
}

function isUniqueObjectArray(arr, key) {
    let values = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(values.has(arr[i][key])) return false;
        values.add(arr[i][key]);
    }

    return true;
}

function isUniqueStringArray(arr) {
    let values = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(values.has(arr[i])) return false;
        values.add(arr[i]);
    }

    return true;
}

function checkSources() {
  console.group(`Verifying family tree dataset ...`)
  if (isUniqueObjectArray(TREE_DATA, 'key')) {
    console.valid('All the people in the dataset are unique');
  } else {
    console.invalid('Dataset contains duplicate people');
  }

  let hasDuplicateSource = false;
  for (const [url, sourceKeys] of Object.entries(SOURCES)) {
    hasDuplicateSource = hasDuplicateSource || !isUniqueStringArray(sourceKeys);
  }
  if (hasDuplicateSource) {
    console.invalid('Dataset contains duplicate sources');
  } else {
    console.valid('All the source in the dataset are unique');
  }

  let sortedPeople = [];
  let peopleWithSources = [];
  let peopleWithNoSources = [];
  let fullyVerifiedPeople = [];

  for (const [i, person] of Object.entries(TREE_DATA)) {
    // Ignore people with no name
    if (person.fullName === undefined) {
      person['verificationBgColor'] = `#${BG_COLORS[0]}`;
      person['verificationFgColor'] = `#${FG_COLORS[0]}`;
      continue;
    }

    let [sourceCount, expectedSourceCount, unverifiedAttributes, sentimentSourceCount] = checkPerPerson(person);
    if (sourceCount == expectedSourceCount) {
      fullyVerifiedPeople.push(person.fullName);
    }
    if (sourceCount <= 0) {
      person['verificationBgColor'] = `#${BG_COLORS[0]}`;
      person['verificationFgColor'] = `#${FG_COLORS[0]}`;
      peopleWithNoSources.push(person.fullName);
      continue;
    }

    person['sourceCount'] = sourceCount;
    person['expectedSourceCount'] = expectedSourceCount;
    person['unverifiedAttributes'] = unverifiedAttributes;
    person['sourcePercentage'] = sourceCount / expectedSourceCount;
    person['sentimentSourceCount'] = sentimentSourceCount;

    // Not really used but we already prepared it
    // by adding it to the actual tree dataset
    person['verificationBgColor'] = `#${BG_COLORS[colorScaler(sourceCount / expectedSourceCount * 100)]}`;
    person['verificationFgColor'] = `#${FG_COLORS[colorScaler(sourceCount / expectedSourceCount * 100)]}`;

    sortedPeople.push(person);
  }
  console.valid(`${String(fullyVerifiedPeople.length).padStart(2, '0')} / ${TREE_DATA.length} people have complete sources`)

  sortedPeople.sort((a, b) => b.sourcePercentage - a.sourcePercentage);
  for (const [i, person] of Object.entries(sortedPeople)) {
    let sourceCount = person['sourceCount'];
    let expectedSourceCount = person['expectedSourceCount'];
    let unverifiedAttributes = person['unverifiedAttributes'];

    let prettySourceCount = `${String(sourceCount).padStart(2, '0')}`;
    let prettyexpectedSourceCount = `${String(expectedSourceCount).padStart(2, '0')}`;

    if (sourceCount >= expectedSourceCount) {
      peopleWithSources.push(person.fullName);
      console.valid(`${prettySourceCount} / ${prettyexpectedSourceCount} checks passed for ${person.fullName}`);
    } else if (sourceCount > 0) {
      peopleWithSources.push(person.fullName);
      console.dynamicGroup(`${prettySourceCount} / ${prettyexpectedSourceCount} checks passed for ${person.fullName}`, sourceCount, expectedSourceCount);
      for (const [j, unverifiedAttribute] of Object.entries(unverifiedAttributes)) {
        console.log(`No source given for %c${unverifiedAttribute}`, 'font-weight: 700;');
      }
      console.groupEnd();
    }
  }

  if (peopleWithNoSources.length > 0) {
    console.invalidGroup(`${peopleWithNoSources.length} / ${TREE_DATA.length} people have no documented sources`);
  }
  for (const [i, personFullName] of Object.entries(peopleWithNoSources)) {
    console.log(`%c${personFullName}`, 'font-weight: 700;');
  }
  console.groupEnd();
  console.groupEnd();
}

if (isChecking) {
  checkSources();
}
/**
 * Returns a boolean value indicating whether the node should have a "none" photo displayed.
 *
 * @param {object} nodeData - An object representing a node in a family tree.
 * @returns {boolean} - `true` if the node should have a "none" photo displayed, otherwise `false`.
 */
function useNonePhoto(nodeData) {
  return (
    !nodeData.hasImage
    && !nodeData.living
    && nodeData.birthDate == null
    && nodeData.deathDate == null
    && nodeData.birthPlace == null
    && nodeData.deathPlace == null
  );
}

/**
 * Returns an adjusted height value for the node based on its biographical information.
 *
 * @param {object} nodeData - An object representing a node in a family tree.
 * @returns {number} - The adjusted height value for the node.
 */
function calculateAdjustedHeight(nodeData) {
  if (nodeData.useNonePhoto) {
    return ui.measure.node.height - 45;
  }

  let adjustedHeight = ui.measure.node.height;
  if (nodeData.birthPlace == null) {
    adjustedHeight -= 15;
  }
  if (nodeData.deathPlace == null) {
    adjustedHeight -= 15;
  }
  return adjustedHeight;
}

// Add height calculations to actual data for less function calls
for (var i = TREE_DATA.length - 1; i >= 0; i--) {
  let nodeData = TREE_DATA[i];
  TREE_DATA[i]['useNonePhoto'] = useNonePhoto(nodeData);
  TREE_DATA[i]['height'] = calculateAdjustedHeight(nodeData);
}

let template = {};
template['Node'] = function() {
  return $(
    bino.Shape,
    {
      figure: 'RoundedRectangle',
      fill: ui.color.node.background,
      stroke: null,
      strokeWidth: 0,
    },
    new bino.Binding('desiredSize', function(nodeData) {
      return new bino.Size(ui.measure.node.width, nodeData.height);
    }),
  );
}

template['TopLeftBorderRadius'] = function() {
  return $(
    bino.Shape, 'TopLeftBorderRadius',
    {
      fill: ui.color.background,
      stroke: null,
      margin: new bino.Margin(0, 0, 0, 0),
      strokeWidth: 0,
    }
  );
}

template['BottomLeftBorderRadius'] = function() {
  return $(
    bino.Shape, 'BottomLeftBorderRadius',
    { fill: ui.color.background, stroke: null, strokeWidth: 0 },
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(nodeData.height - 5.8, 0, 0, 0);
    }),
  );
}

template['CheckFill'] = function() {
  return $(
    bino.Panel,
    new bino.Binding("visible", function(nodeData) {
      return isChecking;
    }),
    $(
      bino.Shape,
      {
        figure: 'Rectangle',
        stroke: null,
        strokeWidth: 0,
        opacity: 0.7,
        margin: new bino.Margin(0.2, 0, 0, 0.2),
      },
      new bino.Binding("visible", function(nodeData) {
        return isChecking;
      }),
      new bino.Binding('desiredSize', function(nodeData) {
        return new bino.Size(
          (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4,
          nodeData.height - 0.4,
        );
      }),
      new bino.Binding('fill', function(nodeData) {
        return nodeData.verificationBgColor;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.name * 0.92}px Google Sans, sans-serif`,
        height: ui.font.size.name + 2,
        textAlign: 'center',
        opacity: 0.55,
      },
      new bino.Binding("visible", function(nodeData) {
        return isChecking;
      }),
      new bino.Binding('width', function(nodeData) {
        return (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4;
      }),
      new bino.Binding('stroke', function(nodeData) {
        return '#111111';
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          nodeData.height / 2 - 11, 0, 0, 0,
        );
      }),
      new bino.Binding('text', function(nodeData) {
        // let prettySourceCount = `${String(nodeData.sourceCount).padStart(2, '0')}`;
        // let prettyexpectedSourceCount = `${String(nodeData.expectedSourceCount).padStart(2, '0')}`;

        let prettySourceCount = `${nodeData.sourceCount}`;
        let prettyexpectedSourceCount = `${nodeData.expectedSourceCount}`;

        if (prettySourceCount === 'undefined') {
          return '';
        }
        // let sentimentSourceCount = (nodeData.sentimentSourceCount > 0) ? ` / ${sentimentSourceCount}` : '';
        let sentimentSourceCount = ''
        if (nodeData.sentimentSourceCount > 0) {
          sentimentSourceCount = `${nodeData.sentimentSourceCount} / `
        }
        return `${sentimentSourceCount}${prettySourceCount} / ${prettyexpectedSourceCount}`;
      })
    ),
    $(
      bino.TextBlock,
      {
        font: `700 8px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
        textAlign: 'center',
        opacity: 0.6,
      },
      new bino.Binding("visible", function(nodeData) {
        return isChecking;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          nodeData.height / 2 + 4, 0, 0, 0,
        );
      }),
      new bino.Binding("width", function(nodeData) {
        return (ui.measure.node.height + ui.measure.genderBand.width - 0.8) - 0.4;
      }),
      // new bino.Binding("margin", function(nodeData) {
      //   return new bino.Margin(
      //     24 + parseInt(ui.measure.node.padding / 2),
      //     0,
      //     0,
      //     ui.measure.node.height + ui.font.size.details,
      //   );
      // }),
      new bino.Binding("stroke", function(nodeData) {
        return '#111111';
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.sourceCount === undefined) {
          return '';
        }
        return 'CHECKS PASSED';
      }),
    )
  );
}
template['Link'] = function() {
  return $(
    bino.Link,
    { selectable: false, routing: bino.Link.Orthogonal },
    $(bino.Shape, { strokeWidth: 1, stroke: ui.color.link }),
  );
}
template['Photo'] = function() {
  return $(bino.Panel, 'Spot',
    { isClipping: true, margin: new bino.Margin(0.2, 0, 0, 0.2) },
    $(
      bino.Shape, 'Rectangle',
      {
        width: ui.measure.node.height - 0.4,
        strokeWidth: 0,
      },
      new bino.Binding('height', function(nodeData) {
        return nodeData.height - 0.4;
      }),
    ),
    $(
      bino.Picture,
      {
        margin: new bino.Margin(0.2, 0, 0, 0.2),
      },
      new bino.Binding('imageStretch', function(nodeData) {
        if (nodeData.useNonePhoto) {
          return bino.GraphObject.Fill;
        }
        return bino.GraphObject.UniformToFill;
      }),
      new bino.Binding('scale', function(nodeData) {
        return calculatePhotoScale(nodeData);
      }),
      new bino.Binding('source', function(nodeData) {
        if (nodeData.useNonePhoto) {
          return ui.photo.none;
        }
        if (nodeData.hasImage) {
          return 'images/people/' + nodeData.key + '.jpg';
        }
        if (nodeData.gender.toUpperCase() == 'M') {
          return ui.photo.male;
        }
        return ui.photo.female;
      })
    ),
  );
}

function calculatePhotoScale(nodeData) {
  if (nodeData.useNonePhoto) {
    return 1;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
    return 0.35;
  }
  if (nodeData.birthPlace == null && nodeData.deathPlace != null) {
    return 0.47;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace == null) {
    return 0.47;
  }
  if (nodeData.birthPlace != null && nodeData.deathPlace != null) {
    return 0.52;
  }
  return 1;
}
template['GenderBand'] = function() {
  return $(
    bino.Shape,
    {
      margin: new bino.Margin(0, 0, 0, ui.measure.node.height - 1),
      figure: "Rectangle",
      stroke: null,
      strokeWidth: 0,
    },
    new bino.Binding("desiredSize", function(nodeData) {
      return new bino.Size(ui.measure.genderBand.width, nodeData.height);
    }),
    new bino.Binding("fill", function(nodeData) {
      return nodeData.gender.toUpperCase() == 'M' ? ui.color.male : ui.color.female;
    })
  );
}

template["DNAMarker"] = function() {
  return $(
    bino.Panel,
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin;
      return new bino.Margin(
        topMargin, 0, 0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      )
    }),
    new bino.Binding("visible", function(nodeData) {
      return nodeData.hasDNA !== undefined && nodeData.hasDNA;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: ui.measure.marker.width },
      new bino.Binding("fill", function(nodeData) {
        return ui.color.marker.background.dna;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.hasDNA === undefined) {
          return '';
        }
        if (isDark) {
          return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBmaWxsPSIjYjczZGY5IiBkPSJNMTg1IDk3Ni4wNjJxMC0xMzguMTM3IDYxLjUtMjI1LjA5OVEzMDggNjY0IDQxMSA1NzZxLTEwMy04OC0xNjQuNS0xNzQuOTYzUTE4NSAzMTQuMDc1IDE4NSAxNzUuOTM4VjE1NnEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRMjExLjM2NSAxMTAgMjI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQyNzYgMTU2djIwcTAgNC4xLjc1IDcuNTV0LjI4NSA3LjQ1aDQwNi45MzdxLS45NzItNCAuMDI4LTcuNDV0MS03LjU1di0yMHEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRNzExLjM2NSAxMTAgNzI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQ3NzYgMTU2djE5LjkzOHEwIDEzOC4xMzctNjIgMjI1LjA5OVE2NTIgNDg4IDU1MCA1NzZxMTAyIDg4IDE2NCAxNzQuOTYzIDYyIDg2Ljk2MiA2MiAyMjUuMDk5Vjk5NnEwIDE4LjYyLTEzLjQ3NSAzMS44MVE3NDkuMDUgMTA0MSA3MzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTY4NSAxMDE0LjYyIDY4NSA5OTZ2LTIwcTAtNC4xLS43NS03LjU1dC0uMjg1LTcuNDVIMjc3cS41IDQtLjI1IDcuNDVUMjc2IDk3NnYyMHEwIDE4LjYyLTEzLjQ3NSAzMS44MVEyNDkuMDUgMTA0MSAyMzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTE4NSAxMDE0LjYyIDE4NSA5OTZ2LTE5LjkzOFpNMzE3IDMzOWgzMjdxOS42ODgtMTQuNjY3IDE3Ljg0NC0zMy4zMzNRNjcwIDI4NyA2NzUgMjY3SDI4NnE0LjQgMjAuMDUgMTIuNDM4IDM4LjQxMlEzMDYuNDc1IDMyMy43NzUgMzE3IDMzOVptMTYzIDE3NiA1OC00OHEyOS0yNCA1Mi01MUgzNzBxMjMgMjcgNTEuNSA1MXQ1OC41IDQ4Wk0zNzAgNzM2aDIyMHEtMjMtMjctNTItNTF0LTU4LTUwcS0yOSAyNi01OCA1MHQtNTIgNTFabS04NCAxNDhoMzg5cS00Ljc3OC0xOS4xODUtMTMuMjY0LTM3LjY2OFE2NTMuMjUgODI3Ljg1IDY0NCA4MTJIMzE3cS0xMC42ODggMTUuNjY3LTE4Ljg0NCAzNC4zMzNRMjkwIDg2NSAyODYgODg0WiIvPjwvc3ZnPg==';
        }
        return `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjQ4Ij48cGF0aCBmaWxsPSIjOTgzMWNmIiBkPSJNMTg1IDk3Ni4wNjJxMC0xMzguMTM3IDYxLjUtMjI1LjA5OVEzMDggNjY0IDQxMSA1NzZxLTEwMy04OC0xNjQuNS0xNzQuOTYzUTE4NSAzMTQuMDc1IDE4NSAxNzUuOTM4VjE1NnEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRMjExLjM2NSAxMTAgMjI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQyNzYgMTU2djIwcTAgNC4xLjc1IDcuNTV0LjI4NSA3LjQ1aDQwNi45MzdxLS45NzItNCAuMDI4LTcuNDV0MS03LjU1di0yMHEwLTE5LjA1IDEzLjE4Mi0zMi41MjVRNzExLjM2NSAxMTAgNzI5Ljk4MiAxMTBxMTguNjE4IDAgMzIuMzE4IDEzLjQ3NVQ3NzYgMTU2djE5LjkzOHEwIDEzOC4xMzctNjIgMjI1LjA5OVE2NTIgNDg4IDU1MCA1NzZxMTAyIDg4IDE2NCAxNzQuOTYzIDYyIDg2Ljk2MiA2MiAyMjUuMDk5Vjk5NnEwIDE4LjYyLTEzLjQ3NSAzMS44MVE3NDkuMDUgMTA0MSA3MzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTY4NSAxMDE0LjYyIDY4NSA5OTZ2LTIwcTAtNC4xLS43NS03LjU1dC0uMjg1LTcuNDVIMjc3cS41IDQtLjI1IDcuNDVUMjc2IDk3NnYyMHEwIDE4LjYyLTEzLjQ3NSAzMS44MVEyNDkuMDUgMTA0MSAyMzAgMTA0MXEtMTguNjI1IDAtMzEuODEyLTEzLjE5UTE4NSAxMDE0LjYyIDE4NSA5OTZ2LTE5LjkzOFpNMzE3IDMzOWgzMjdxOS42ODgtMTQuNjY3IDE3Ljg0NC0zMy4zMzNRNjcwIDI4NyA2NzUgMjY3SDI4NnE0LjQgMjAuMDUgMTIuNDM4IDM4LjQxMlEzMDYuNDc1IDMyMy43NzUgMzE3IDMzOVptMTYzIDE3NiA1OC00OHEyOS0yNCA1Mi01MUgzNzBxMjMgMjcgNTEuNSA1MXQ1OC41IDQ4Wk0zNzAgNzM2aDIyMHEtMjMtMjctNTItNTF0LTU4LTUwcS0yOSAyNi01OCA1MHQtNTIgNTFabS04NCAxNDhoMzg5cS00Ljc3OC0xOS4xODUtMTMuMjY0LTM3LjY2OFE2NTMuMjUgODI3Ljg1IDY0NCA4MTJIMzE3cS0xMC42ODggMTUuNjY3LTE4Ljg0NCAzNC4zMzNRMjkwIDg2NSAyODYgODg0WiIvPjwvc3ZnPg==`;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(2, 0, 0, 2);
      }),
    ),
  );
}

template["FirstMarker"] = function() {
  return $(
    bino.Panel,
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin + (ui.measure.marker.width + ui.measure.marker.margin) - 3;
      if (!nodeData.hasDNA) {
        topMargin = ui.measure.marker.margin;
      }
      return new bino.Margin(
        topMargin, 0, 0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      )
    }),
    new bino.Binding("visible", function(nodeData) {
      return nodeData.marker !== undefined;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: ui.measure.marker.width },
      new bino.Binding("fill", function(nodeData) {
        if (ui.color.marker.background[nodeData.marker] !== undefined) {
          return ui.color.marker.background[nodeData.marker];
        }
        return ui.color.marker.background.default;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.marker === undefined) {
          return '';
        }
        if (isDark) {
          return `images/icons/${nodeData.marker}.dark.svg`;
        }
        return `images/icons/${nodeData.marker}.svg`;
      }),
      new bino.Binding("margin", function(nodeData) {
        return marginConditions(nodeData.marker);
      }),
    ),
  );
}

template["SecondMarker"] = function() {
  return $(
    bino.Panel,
    new bino.Binding("margin", function(nodeData) {
      let topMargin = ui.measure.marker.margin + (ui.measure.marker.width + ui.measure.marker.margin) - 3;
      return new bino.Margin(
        topMargin, 0, 0,
        ui.measure.node.width - (ui.measure.marker.width + ui.measure.marker.margin),
      )
    }),
    new bino.Binding("visible", function(nodeData) {
      return nodeData.marker2 !== undefined && !nodeData.hasDNA;
    }),
    $(
      bino.Shape,
      { figure: 'Circle', stroke: null, width: ui.measure.marker.width },
      new bino.Binding("fill", function(nodeData) {
        if (ui.color.marker.background[nodeData.marker2] !== undefined) {
          return ui.color.marker.background[nodeData.marker2];
        }
        return ui.color.marker.background.default;
      }),
    ),
    $(
      bino.Picture,
      { scale: ui.measure.marker.scale },
      new bino.Binding("source", function(nodeData) {
        if (nodeData.marker2 === undefined) {
          return '';
        }
        if (isDark && nodeData.marker2 !== 3) {
          return `images/icons/${nodeData.marker2}.dark.svg`;
        }
        return `images/icons/${nodeData.marker2}.svg`;
      }),
      new bino.Binding("margin", function(nodeData) {
        return marginConditions(nodeData.marker2);
      }),
    ),
  );
}

function marginConditions(marker) {
  if (marker === 'military') {
    return new bino.Margin(1.5, 0, 0, 2);
  }
  if (marker === 'housewife') {
    return new bino.Margin(0.5, 0, 0, 0.5);
  }
  if (marker === 'farming') {
    return new bino.Margin(2, 0, 0, 1);
  }
  if (marker === 'train') {
    return new bino.Margin(3, 0, 0, 2);
  }
  if (marker === 'cattle') {
    return new bino.Margin(-0.25, 0, 0, 0.75);
  }
  if (marker === 'sales') {
    return new bino.Margin(3, 0, 0, 3);
  }
  return new bino.Margin(2, 0, 0, 2);
}
template['Name'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `700 ${ui.font.size.name}px Google Sans, sans-serif`,
      height: ui.font.size.name + 2,
    },
    new bino.Binding('width', function(nodeData) {
      return ui.measure.node.width - 93;
    }),
    new bino.Binding('margin', function(nodeData) {
      return new bino.Margin(
        ui.measure.node.padding,
        0, //ui.measure.node.margin,
        0,
        ui.measure.node.height + ui.font.size.details,
      );
    }),
    new bino.Binding('stroke', function(nodeData) {
      if (nodeData.firstName.includes('known')) {
        return ui.color.node.nameless.name;
      }
      return ui.color.node.name;
    }),
    new bino.Binding('text', function(nodeData) {
      return nodeData.fullName;
    })
  );
}

template['Lifespan'] = function() {
  return $(
    bino.TextBlock,
    {
      font: `400 ${ui.font.size.details}px Roboto, sans-serif`,
      height: ui.font.size.details + 2,
    },
    new bino.Binding("width", function(nodeData) {
      return ui.measure.node.width - 94;
    }),
    new bino.Binding("margin", function(nodeData) {
      return new bino.Margin(
        24 + parseInt(ui.measure.node.padding / 2),
        0,
        0,
        ui.measure.node.height + ui.font.size.details,
      );
    }),
    new bino.Binding("stroke", function(nodeData) {
      if (nodeData.firstName.includes("nknown")) {
        return ui.color.node.nameless.details;
      }
      return ui.color.node.details;
    }),
    new bino.Binding("text", function(nodeData) {
      if (nodeData.living) {
        return getLifeSpan(nodeData, isPrivate);
      }
      return getLifeSpan(nodeData);
    }),
  );
}

template['BirthDeathPlace1'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return (ui.measure.node.width - 94) - 14;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 14,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
          return "";
        }
        if (nodeData.birthPlace != null) {
          return `    ${nodeData.birthPlace}`;
        }
        if (nodeData.deathPlace != null) {
          return `    ${nodeData.deathPlace}`;
        }
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return ui.measure.node.width - 94;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          39 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.birthPlace == null && nodeData.deathPlace == null) {
          return "";
        }
        if (nodeData.birthPlace != null) {
          return 'B:';
        }
        if (nodeData.deathPlace != null) {
          return 'D:';
        }
      }),
    ),
  );
}

template['BirthDeathPlace2'] = function() {
  return $(bino.Panel,
    $(
      bino.TextBlock,
      {
        font: `400 ${ui.font.size.details}px Roboto, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return (ui.measure.node.width - 94) - 14;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details + 14,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.deathPlace == null || nodeData.birthPlace == null) {
          return "";
        }
        let prefixLetter = nodeData.living ? 'L' : 'D';
        return `    ${nodeData.deathPlace}`;
      }),
    ),
    $(
      bino.TextBlock,
      {
        font: `700 ${ui.font.size.details}px Google Sans, sans-serif`,
        height: ui.font.size.details + 2,
      },
      new bino.Binding("width", function(nodeData) {
        return ui.measure.node.width - 94;
      }),
      new bino.Binding("margin", function(nodeData) {
        return new bino.Margin(
          54.5 + parseInt(ui.measure.node.padding / 2),
          0,
          0,
          ui.measure.node.height + ui.font.size.details,
        );
      }),
      new bino.Binding("stroke", function(nodeData) {
        if (nodeData.firstName.includes("nknown")) {
          return ui.color.node.nameless.details;
        }
        return ui.color.node.details;
      }),
      new bino.Binding("text", function(nodeData) {
        if (nodeData.deathPlace == null || nodeData.birthPlace == null) {
          return "";
        }
        if (nodeData.living) {
          return 'L:';
        }
        return 'D:';
      }),
    ),
  );
}

/**
 * Get lifespan information from given nodeData.
 * @param {Object} nodeData - Contains living, birthDate, and deathDate data.
 * @return {string} Formatted lifespan string.
 */
function getLifeSpan(nodeData, isPrivate) {
  if (nodeData.useNonePhoto) {
    return "";
  }

  const separator = ' — ';
  const { living, birthDate, deathDate } = nodeData;

  let rawAge = calculateAge(birthDate, deathDate)
  let age = rawAge;

  const birthYear = formatDate(birthDate, isPrivate);
  const deathYear = formatDate(deathDate);

  // If both birthYear and deathYear do not exist, return
  // "Living" or "Deceased" based on the living flag.
  if (!birthYear && !deathYear) {
    return living ? 'Living' : 'Deceased';
  }

  // If birthYear does not exist, return the
  // formatted deathYear with a separator.
  if (!birthYear) {
    return `${separator}${deathYear}`;
  }

  // If deathYear does not exist, return the formatted
  // `birthYear` with a separator and "Living" or "Deceased"
  // based on the living flag.
  if (!deathYear) {
    if (nodeData.deathAge) {
      age = nodeData.deathAge;
    }

    return `${birthYear}${separator}${living ? 'Living' : 'Deceased'}` + (living ? ` (${age})` : '');
  }

  if (deathDate.includes('after')) {
    if (birthDate.includes('after')) {
      age = `~${rawAge}`;
    } else if (birthDate.includes('before')) {
      age = `${rawAge}+`;
    } else if (birthDate.includes('about')) {
      age = `~${rawAge}`;
    } else {
      age = `${rawAge}+`;
    }
  } else if (deathDate.includes('before')) {
    if (birthDate.includes('after')) {
      age = `${rawAge}-`;
    } else if (birthDate.includes('before')) {
      age = `~${rawAge}`;
    } else if (birthDate.includes('about')) {
      age = `~${rawAge}`;
    } else {
      age = `${rawAge}-`;
    }
  } else if (deathDate.includes('about')) {
    age = `~${rawAge}`;
  } else {
    if (birthDate.includes('after')) {
      age = `${rawAge}-`;
    } else if (birthDate.includes('before')) {
      age = `${rawAge}+`;
    } else if (birthDate.includes('about')) {
      age = `~${rawAge}`;
    }
  }

  if (nodeData.deathAge) {
    age = nodeData.deathAge;
  }

  // If both birthYear and deathYear exist,
  // return the formatted lifespan string.
  return `${birthYear}${separator}${deathYear} (${age})`;
}

/**
 * Format date string as 'day month year'.
 * @param {string} dateString - Date in 'YYYY-MM-DD' format.
 * @return {string|null} Formatted date or null if dateString is falsy.
 */
function formatDate(raw, isPrivate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const longMonths = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];

  if (!raw) {
    return null;
  }

  // Check for prefix words
  let [prefix, dateString] = raw.includes(' ') ? raw.split(' ') : ["", raw];
  let [year, month, day] = dateString.split('-', 3);

  // Add a separating space for prefix if its populated
  if (prefix != '') {
    prefix += ' ';
  }

  if (month && !isPrivate) {
    day = (day === undefined) ? "" : day + " ";

    // Remove leading zero from days
    if (day.startsWith('0')) {
      day = day.slice(1);
    }

    return `${prefix}${day}${months[parseInt(month, 10) - 1]} ${year}`;
  }

  if (month) {
    return `${prefix}${longMonths[parseInt(month, 10) - 1]} ${year}`;
  }

  return `${prefix}${year}`;
};

function calculateAge(birthDateString, deathDateString) {
    let deathDate = deathDateString ? new Date(deathDateString) : new Date();
    let birthDate = new Date(birthDateString);

    let age = deathDate.getFullYear() - birthDate.getFullYear();
    let m = deathDate.getMonth() - birthDate.getMonth();

    // adjust age if birth month hasn't occurred in the death year
    if (m < 0 || (m === 0 && deathDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
var tree = $(
  bino.Diagram,
  "tree",
  {
    isReadOnly: true,
    padding: ui.measure.padding,
    scale: ui.scale,
    layout: $(
      bino.TreeLayout, {
        angle: 0,
        layerSpacing: Math.max(parseInt(ui.measure.node.margin * 4), 20),
        nodeSpacing: ui.measure.node.margin,
      }
    ),
    hasHorizontalScrollbar: false,
    hasVerticalScrollbar: false,
    allowHorizontalScroll: true,
    allowSelect: false,
    allowVerticalScroll: true,
    allowZoom: true,
  }
);

tree.nodeTemplate = $(
  bino.Node, { selectable: false },
  new bino.Binding('height', 'height'),
  new bino.Binding('width', 'width'),
  template.Node(),
  template.Photo(),
  template.Name(),
  template.Lifespan(),
  template.BirthDeathPlace1(),
  template.BirthDeathPlace2(),

  // Markers should always be at the end
  template.DNAMarker(),
  template.FirstMarker(),
  template.SecondMarker(),
  template.GenderBand(),
  template.CheckFill(),
  template.TopLeftBorderRadius(),
  template.BottomLeftBorderRadius(),
);

// Define a Link template that routes orthogonally, with no arrowhead
tree.linkTemplate = template.Link();

// Create the tree diagram
let model = $(bino.TreeModel);
model.nodeDataArray = TREE_DATA;
tree.model = model;

// Show the copyright once everything loads up
document.querySelector('footer').classList.remove("hidden");
