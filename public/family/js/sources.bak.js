// Age for Mothers (youngest ever was 9) so let's use 10
// Age for Fathers (youngest ever was 5) so let's use 6

// Birth estimates
// Lolo Bio = Estimate birth year from Death Certificate and age
// Lola Estebana = Estimate birth year from Death Certificate and age
// Lola Francisca
//   = Birth was 10 years from earliest daughter birth year estimate
//   = Death was 4 years after Lolo Marcial's birth (Lolo Marcial is youngest)
// Lolo Ligorio = Estimate birth year from Death Certificate and age
// Lolo Don Miguel = Estimate death is 10 months before Lolo Sotero was born
// Lolo Guillermo Maramba = Estimate birth from Lolo Miguel's birth - 6
// Lola Maria Baustista = Estimate birth from Lolo Miguel's birth - 10

// Lolo Felomino = Estimate birth year from Death Certificate and age
// Lola Consuelo Ladera
//   = Estimate birth from Lolo Nestor's birth - 10
//   = Estimate death is any time after Lolo Felomino's death
// Lolo Napoleon
//   = Estimate birth from Tita Mylen's birth - 6
//   = Estimate death is time after Tita Cecil was born
// Lola Enoria
//   = Estimate birth from Mamang's birth - 10
//   = Estimate death is time after Mitch reached 3 years old
// Lola Leoncia = Estimate birth year from Death record and age
// Lolo Manuel Ajesta
//   = Birth is 6 years before known children's birth
//   = Death is time after known children's birth
// Ursula Badoles
//   = Birth is 10 years before known children's birth
//   = Death is time after known children's birth
// Unknown name = Death date is after photo taken

const SOURCES = {

  // FamilySearch: Lolo Felomino death record
  // 'https://www.familysearch.org/ark:/61903/1:1:HYTD-R5ZM': [
  'https://drive.google.com/file/d/1Iu-cO6zNvD--hQoozbIXFQVPA3CXeAAm/view?usp=sharing': [
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
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',

    'GH12-SVQ:GH12-DRN:parentChild',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
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
  // 'https://www.familysearch.org/ark:/61903/1:1:FN4G-JSW': [
  'https://drive.google.com/file/d/1g_6PxiUEuhW_jvUU3p8TySDi9u-7hlwG/view?usp=sharing': [
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
};