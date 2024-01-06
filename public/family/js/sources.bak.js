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

  // Family Search: Lolo Ligorio Death Record
  // 'https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH': [
  'https://drive.google.com/file/d/1AL6hsO1Snvv-_aOovfP88-w0oxPjQs4i/view?usp=sharing': [
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',
    'GHB8-SQN:deathDate',
    'GHB8-SQN:deathPlace',
    'GHB8-SQN:living',

    'GHB8-SQN:GHB8-5K8:partner',
    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',
  ],
  // Family Search: José Pedro Maramba Reyes christening record
  // includes lolo Miguel Maramba's and parents' details
  // 'https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ': [
  'https://drive.google.com/file/d/1EZnFrq2uHZVgfDSItdUrxBqy7Wzkto7o/view?usp=sharing': [
    'LLQS-641:LLQS-6F1:partner',

    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:gender',

    'LLQS-6F1:firstName',
    'LLQS-6F1:lastName',
    'LLQS-6F1:gender',

    'L281-614:LLQS-641:parentChild',
    'L281-614:firstName',
    'L281-614:lastName',
    'L281-614:gender',

    'LLQS-6F1:G7C3-B6P:parentChild',
    'G7C3-B6P:firstName',
    'G7C3-B6P:gender',

    'LLQS-6F1:G7C3-J9S:parentChild',
    'G7C3-J9S:firstName',
    'G7C3-J9S:lastName',
    'G7C3-J9S:gender',

    'G7C3-B6P:G7C3-J9S:partner',
  ],
  // Geni Record for Lolo Miguel Maramba
  'https://www.geni.com/people/Miguel-Maramba/4012194445110022663': [
    'LLQS-641:firstName',
    'LLQS-641:middleName',
    'LLQS-641:lastName',
    'LLQS-641:gender',

    'GHB8-GB6:LLQS-641:parentChild',
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',

    'LLQS-641:L281-614:parentChild',
    'L281-614:firstName',
    'L281-614:middleName',
    'L281-614:lastName',

    'LLQS-641:LLQS-6YC:parentChild',
    'LLQS-6YC:firstName',
    'LLQS-6YC:middleName',
    'LLQS-6YC:lastName',

    'LLQS-641:LLQS-6F1:partner',
    'LLQS-6F1:firstName',
    'LLQS-6F1:middleName',
    'LLQS-6F1:lastName',
  ],
  // Official Gazette ni Lolo Miguel
  'https://drive.google.com/file/d/1Ik8lFHm_F4-FaKOs4qL4CNiq-Il2WfLR/view?usp=drive_link': [
    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:marker',
  ],
  // Another Official Gazette entry for Lolo Miguel
  'https://drive.google.com/file/d/1CNF4lEbL4vfjbhMnTOEk02KFDhaO-Xwa/view?usp=drive_link': [
    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:prefix',
  ],
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
  // Lola Estebana Death Certificate
  'https://drive.google.com/file/d/1yf_M5CJgnXsHGFvFmF5Uzfp4YrsAnfUY/view?usp=sharing': [
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
    'GHB8-RCH:gender',

    'GHB8-RCH:birthPlace',
    'GHB8-RCH:deathDate',
    'GHB8-RCH:deathPlace',
    'GHB8-RCH:living',
  ],
  // Lola Lydia Birth Certificate
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view?usp=sharing': [
    'GHBZ-YVX:birthDate',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:living',

    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHB8-7T6:firstName',
    'GHB8-7T6:middleName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:marker',

    'GHBZ-YVX:GHB8-GZL:parentChild',
    'GHB8-GZL:firstName',
    'GHB8-GZL:middleName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:marker',

    'GHB8-7T6:GHB8-GZL:partner',
  ],
  // Lola Lydia marriage certificate with Lolo Marcial
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing': [
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',

    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',

    'GHBZ-TM4:GQJK-LCT:parentChild',
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',

    'GHBZ-P5Q:GQJK-LCT:parentChild',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',

    'GHB8-7T6:GHBZ-YVX:parentChild',
    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:gender',

    'GHB8-GZL:GHBZ-YVX:parentChild',
    'GHB8-GZL:firstName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:gender',

    'GHBZ-P5Q:GHBZ-TM4:partner',
    'GHB8-7T6:GHB8-GZL:partner',
    'GHBZ-YVX:GQJK-LCT:partner',
  ],
  // FamilySearch: Lola Marcial marriage record
  // 'https://www.familysearch.org/ark:/61903/1:1:HBBK-QDMM': [
  'https://drive.google.com/file/d/1VQzDD8JzFMEdsN8xm1EaWsYsQqgUYuBz/view?usp=sharing': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',

    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',

    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:gender',

    'GHB8-GZL:firstName',
    'GHB8-GZL:lastname',
    'GHB8-GZL:gender',

    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',

    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',

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
    'GQJK-LCT:deathPlace', // I visited Lolo Marcial in his final days in Saint Lukes
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
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
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',

    'GHB8-GB6:GHBD-9LY:partner',

    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',
    'GHBD-9LY:birthDate',
    'GHBD-9LY:deathDate',
    'GHBD-9LY:living',
    'GHBD-9LY:deathPlace', // Photo was taken by Arbyn Argabioso (Me)

    'GHB8-J1B:firstName',
    'GHB8-J1B:deathPlace', // Photo was taken by Arbyn Argabioso (Me)
    'GHB8-J1B:living',
  ],
  // Lolo Manuel Jr. California deaths and burials record
  'https://www.familysearch.org/ark:/61903/1:1:HGZ8-33ZM': [
    'GHBD-7M4:living',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:deathDate',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:deathPlace',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:suffix',
    'GHBD-7M4:gender',

    'GHBD-7M4:GHB8-DXY:parentChild',
    'GHB8-DXY:firstName',
    'GHB8-DXY:gender',

    'GHBD-7M4:GHBD-9L6:parentChild',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:gender',
  ],
  // Death Certificate ni Lolo Manuel Sr.
  'https://drive.google.com/file/d/1JuyRHuSaar2p3RM0nUjWX-KPMAGjk2FK/view?usp=sharing': [
    'GHBD-9L6:firstName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:gender',

    'GHBD-9L6:birthDate',
    'GHBD-9L6:deathDate',
    'GHBD-9L6:deathPlace',
    'GHBD-9L6:living',
    'GHBD-9L6:marker',
    'GHBD-9L6:marker2',

    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHB8-DXY:gender',

    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',
    'GHB8-5K8:lastName',
    'GHB8-5K8:gender',
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
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
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
  // 'https://www.familysearch.org/ark:/61903/1:1:HR2D-1GN2': [
  'https://drive.google.com/file/d/1KlRi9VusQgxel2U6EK-pOcXxUd_Wbgll/view?usp=sharing': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
    'GHBZ-TM4:gender',
  ],
  // Death certificate ni Lolo Bio
  'https://drive.google.com/file/d/1SQy34nGR1Z5-AqNSZDInfkewArzP_xqp/view?usp=share_link': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:middleName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:living',
    'GHBZ-TM4:marker',
    'GHBZ-TM4:gender',

    'GHBZ-TM4:GHB8-RCH:parentChild',
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
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
  // FamilySearch: record of Corazon Maramba including her parents
  // nanay ni Tita Cherry
  // 'https://www.familysearch.org/ark:/61903/1:1:HBNK-LY2M': [
  'https://drive.google.com/file/d/1n_6mEB9oGikZeRXw71-_buL1cIoT8X9p/view?usp=sharing': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:gender',

    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',
    'GHBD-9LY:gender',

    'GHB8-GB6:GHBD-9LY:partner',
  ],
  // News article regarding Lolo Sotero being the chief in the police force
  // caputuring some trouble makers near a train station
  'https://drive.google.com/file/d/15o0fdYYMYTzXQ3ikiMCOqy-YlfAND76C/view?usp=sharing': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:marker',
    'GHB8-GB6:marker2',
  ],
  // Geni: Guillermo Maramba
  'https://www.geni.com/people/Guillermo-Maramba/6000000010495044375': [
    'LLQS-6YC:firstName',
    'LLQS-6YC:lastName',
    'LLQS-6YC:gender',

    'LLQS-6YC:LLQS-641:parentChild',
    'LLQS-641:firstName',
    'LLQS-641:lastName',

    'LLQS-6YC:L281-614:partner',
    'L281-614:firstName',
    'L281-614:lastName',
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
