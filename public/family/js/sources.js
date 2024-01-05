// Age for Mothers (youngest ever was 9) so let's use 10
// Age for Fathers (youngest ever was 5) so let's use 6

const SOURCES = {

  // =======================================================================
  // Other sources
  // =======================================================================

  'Present and Direct Interactions': [
    'TEMP-000:GHB5-TWN:parentChild', // aesthetic data consideration
    'TEMP-000:GQX8-CQP:parentChild', // aesthetic data consideration

    'GHB5-TWN:GQX8-CQP:partner',
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
    'GQJK-LCT:birthPlace',
    'GQJK-LCT:deathPlace',
    'GQX8-CQP:marker',
    'GQJK-G8W:marker',
    'GQJK-L51:marker',
    'GHBZ-YVX:marker',
    'GHB5-XTZ:marker',
    'GHBR-FK3:marker',
    'GHBR-FK3:marker2',
  ],
  // Should only be used on ancestors with living children / grand children
  // since this type of source would have a bigger "mistake chance"
  // as the generation gets older (Family Tree started on March 2020)
  // DO NOT CHANGE THIS SOURCE NAME, IT IS USED DIRECTLY IN checks.js
  'SENTIMENTS OF LIVING RELATIVES': [
    // Everyone in the chat group of Lolo Bio's descendants say that
    // he was born in Majayjay Laguna. Same goes for Lola Estebana
    'GHBZ-TM4:birthPlace',
    'GHB8-RCH:birthPlace',

    // From Tita Susan (daughter of Lolo Manuel)
    'GHBD-7M4:marker2',

    // Directly from Nanay (daughter of Lola Catalina)
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:birthDate',
    'GHB8-J1B:deathDate',
    'GHB8-J1B:birthPlace',

    // Directly from Tito Darne (son of Lolo Nestor)
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:birthPlace',

    // Directly from Lolo Marcial (son of Lola Francisca)
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:living',

    // Directly from Lola Lydia and Lolo Boning (children of Lolo Andong)
    'GHB8-7T6:firstName',
    'GHB8-7T6:middleName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:birthDate',
    'GHB8-7T6:birthPlace',
    'GHB8-7T6:deathDate',
    'GHB8-7T6:deathPlace',
    'GHB8-7T6:living',
    'GHB8-7T6:marker',

    // Directly from Lola Lydia and Lolo Boning (children of Lola Lucing)
    'GHB8-GZL:firstName',
    'GHB8-GZL:middleName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:birthDate',
    'GHB8-GZL:birthPlace',
    'GHB8-GZL:deathDate',
    'GHB8-GZL:deathPlace',
    'GHB8-GZL:living',

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

    // Directly from Tito Darne (grandson of Lolo Felomino,
    // Lola Consuelo, Lolo Cecilio, and Lola Jovita)
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',
    'GH12-9JZ:firstName',
    'GH12-9JZ:lastName',
    'GH12-35H:firstName',
    'GH12-35H:lastName',

    // Directly from Tita Mylen (granddaughter of Lolo Manuel,
    // Lola Ursua, Lolo Benigno, and Lola Enoria)
    'GH12-XX4:firstName',
    'GH12-XX4:lastName',
    'GH12-HQN:firstName',
    'GH12-HQN:lastName',
    'GH12-6YL:firstName',
    'GH12-6YL:lastName',
    'GH12-DD8:firstName',
    'GH12-DD8:lastName',

    // Directly from Tita Mylen (daughter of Lolo Napoleon)
    'GH12-Z3C:living',
  ],
  // Suffix verification: Existence of same-name son
  "Existance of same-name son": [
    'GHBD-9L6:suffix',
    'GHB8-GB6:suffix',
  ],
  "Existance of same-name father": [
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
  // My Engagement: Proposal to Mitchie (Facebook Post)
  'https://www.facebook.com/arbyn.argabioso/posts/pfbid02U3X7BU11Lb41vrbLQKrAyGe8oCEvd8SSqbY8rcCZ2MEQzcb3BUQJWL8UPhF1ZttYl': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],
  // My Engagement: Proposal to Mitchie (Video)
  'https://www.youtube.com/watch?v=LNkv-M1TMtg': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],

  // =======================================================================
  // Birth Records
  // =======================================================================

  // Argabioso, Arbyn Acosta: Certificate of Birth
  'https://drive.google.com/file/d/1B1umw_xm5i-AmNp9YzshX2DebSAhj3cz/view?usp=sharing': [
    'GQX8-CQP:birthPlace',
    'GQX8-CQP:firstName',
    'GQX8-CQP:middleName',
    'GQX8-CQP:gender',
    'GQX8-CQP:birthDate',

    'GQX8-CQP:GQJK-G8W:parentChild',
    'GQJK-G8W:gender',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:marker',

    'GQX8-CQP:GQJK-L51:parentChild',
    'GQJK-L51:gender',
    'GQJK-L51:firstName',
    'GQJK-L51:middleName',
    'GQJK-L51:lastName',

    'GQJK-L51:GQJK-G8W:partner',
  ],

  // Adanza, Mitchie Ajesta: Certificate of Birth
  'https://drive.google.com/file/d/19s_gdN98AQ1sZ5lhqSf8GrpJJIpFhsdf/view?usp=sharing': [
    'GHB5-TWN:birthPlace',
    'GHB5-TWN:firstName',
    'GHB5-TWN:middleName',
    'GHB5-TWN:lastName',
    'GHB5-TWN:gender',
    'GHB5-TWN:birthDate',

    'GHB5-TWN:GHB5-XTZ:parentChild',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',

    'GHB5-TWN:GHBR-FK3:parentChild',
    'GHBR-FK3:gender',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:marker',

    'GHB5-XTZ:GHBR-FK3:partner',
    'GHB5-XTZ:marriageDate',
    'GHBR-FK3:marriageDate',
  ],

  // Argabioso, Rolando Saplala: Certificate of Birth
  'https://drive.google.com/file/d/1degLEAa8cBBxJrRsWwz0t6wHh9vs29cH/view?usp=sharing': [
    'GQJK-L51:birthPlace',
    'GQJK-L51:firstName',
    'GQJK-L51:middleName',
    'GQJK-L51:lastName',
    'GQJK-L51:gender',
    'GQJK-L51:birthDate',

    'GQJK-L51:GQJK-LCT:parentChild',
    'GQJK-LCT:gender',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:birthPlace',

    'GQJK-L51:GHBZ-YVX:parentChild',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:birthPlace',

    'GQJK-LCT:GHBZ-YVX:partner',
    'GQJK-LCT:marriageDate',
    'GQJK-LCT:marriagePlace',
    'GHBZ-YVX:marriageDate',
    'GHBZ-YVX:marriagePlace',
  ],

  // Acosta, Corazon Maramba: Certificate of Live Birth
  'https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view?usp=sharing': [
    'GQJK-G8W:birthPlace',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthDate',

    'GQJK-G8W:GHBD-7M4:parentChild',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:marker2',

    'GQJK-G8W:GHB8-J1B:parentChild',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',

    'GHBD-7M4:GHB8-J1B:partner',
    'GHBD-7M4:marriageDate',
    'GHBD-7M4:marriagePlace',
    'GHB8-J1B:marriageDate',
    'GHB8-J1B:marriagePlace',
  ],

  // Adanza, Darne Elican: Certificate of Birth
  'https://drive.google.com/file/d/1jYZqUHatNlvgDuyFw7jxSwgZsE6jy_9V/view?usp=sharing': [
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:birthDate',
    'GHB5-XTZ:birthPlace',

    'GHB5-XTZ:GH12-9F6:parentChild',
    'GH12-9F6:gender',
    'GH12-9F6:firstName',
    'GH12-9F6:lastName',

    'GHB5-XTZ:GH12-SVQ:parentChild',
    'GH12-SVQ:gender',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',

    'GH12-9F6:GH12-SVQ:partner',
  ],

  // Ajesta, Mylen Vergara: Certificate of Live Birth
  'https://drive.google.com/file/d/1J6wUo6AwrS5aO9LJWbh8CUReaRTkUEFF/view?usp=sharing': [
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:gender',
    'GH12-Z3C:firstName',
    'GH12-Z3C:lastName',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:gender',
    'GH12-W17:firstName',
    'GH12-W17:lastName',

    'GH12-Z3C:GH12-W17:partner',
  ],

  // Ajesta, Mylen Vergara: Certificate of Birth
  'https://drive.google.com/file/d/18MFv7G6xKBJj9M4ewH8a3GgcpFW4VSht/view?usp=sharing': [
    'GHBR-FK3:birthPlace',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',

    'GHBR-FK3:GH12-Z3C:parentChild',
    'GH12-Z3C:gender',
    'GH12-Z3C:firstName',
    'GH12-Z3C:middleName',
    'GH12-Z3C:lastName',

    'GHBR-FK3:GH12-W17:parentChild',
    'GH12-W17:gender',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',

    'GH12-Z3C:GH12-W17:partner',
    'GH12-Z3C:marriageDate',
    'GH12-W17:marriageDate',
  ],

  // Saplala, Lydia Perez: Certificate of Birth
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view?usp=sharing': [
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:birthDate',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:living',

    'GHBZ-YVX:GHB8-GZL:parentChild',
    'GHB8-GZL:gender',
    'GHB8-GZL:firstName',
    'GHB8-GZL:middleName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:marker',

    'GHBZ-YVX:GHB8-7T6:parentChild',
    'GHB8-7T6:gender',
    'GHB8-7T6:firstName',
    'GHB8-7T6:middleName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:marker',

    'GHB8-7T6:GHB8-GZL:partner',
    'GQJK-LCT:GHBZ-YVX:partner',
  ],

  // =======================================================================
  // Baptism Records
  // =======================================================================

  // Argabioso, Arbyn Acosta: Certificate of Baptism
  'https://drive.google.com/file/d/1nJVXB-p0ZM0OUXsXK4TyI7JRwvbDln53/view?usp=sharing': [
    'GQX8-CQP:firstName',
    'GQX8-CQP:middleName',
    'GQX8-CQP:lastName',
    'GQX8-CQP:birthDate',

    'GQX8-CQP:GQJK-G8W:parentChild',
    'GQJK-G8W:gender',
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthPlace',

    'GQX8-CQP:GQJK-L51:parentChild',
    'GQJK-L51:gender',
    'GQJK-L51:firstName',
    'GQJK-L51:lastName',
    'GQJK-L51:birthPlace',

    'GQJK-L51:GQJK-G8W:partner',

    // Ninongs
    // Emmanuel "Manny" Santos
    // Leo "Boyet" Talabucon

    // Ninangs
    // Susan Hanopol
    // Milagros Dela Cruz
    // Jocylin Cabral
    // Sheila Sarmiento
    // Norelli Manzon
    // Araceli Tongol
    // Cynthia Bagadiong
    // Aurora Ocampo
    // Cynthia Haber
  ],

  // Acosta, Corazon Maramba: Certificate of Baptism
  'https://drive.google.com/file/d/1yqWECbcDTyhFig6IiK_AqPwXfL7gk0e0/view?usp=sharing': [
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthDate',

    'GQJK-G8W:GHBD-7M4:parentChild',
    'GHBD-7M4:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:birthPlace',

    'GQJK-G8W:GHB8-J1B:parentChild',
    'GHB8-J1B:gender',
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:birthPlace',

    // Ninongs
    // Romeo Benavides
    // Delfin Quiboloy
    // Mark Conde
    // Benjamin Acosta

    // Ninangs
    // Alenjandra Abogado
    // Beth Dalgado
    // Baby Ignacio
    // Susana Benavides
  ],

  // =======================================================================
  // Marriage Records
  // =======================================================================

  // Argabioso, Marcial Mia: Certificate of Marriage
  // Saplala, Lydia Perez: Certificate of Marriage
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing': [
    'GQJK-LCT:marriagePlace',
    'GHBZ-YVX:marriagePlace',

    'GQJK-LCT:gender',
    'GHBZ-YVX:gender',

    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',

    'GHBZ-TM4:gender',
    'GHBZ-TM4:GQJK-LCT:parentChild',
    'GHB8-7T6:gender',
    'GHB8-7T6:GHBZ-YVX:parentChild',

    'GHBZ-P5Q:gender',
    'GHBZ-P5Q:GQJK-LCT:parentChild',
    'GHB8-GZL:gender',
    'GHB8-GZL:GHBZ-YVX:parentChild',

    'GQJK-LCT:marriageDate',
    'GHBZ-YVX:marriageDate',

    // Witnesses
    // Florencio Arcenal
    // Constweino Bajo
    // Andrea Araza
    // Mrs. Regina R. Cayco
    // Perpetua A. Maliwat
    // Consuelo N. Aquino
  ],

  // Acosta, Manuel San Agustin Jr.: Certificate of Marriage - Page 1
  // Maramba, Catalina Dumantay: Certificate of Marriage - Page 1
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?usp=share_link': [
    'GHBD-7M4:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:suffix',

    'GHB8-J1B:gender',
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:middleName',

    'GHBD-9L6:GHBD-7M4:parentChild',
    'GHBD-9L6:gender',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-GB6:GHB8-J1B:parentChild',
    'GHB8-GB6:gender',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',

    'GHB8-DXY:GHBD-7M4:parentChild',
    'GHB8-DXY:gender',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9LY:GHB8-J1B:parentChild',
    'GHBD-9LY:gender',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',

    'GHB8-J1B:GHBD-7M4:partner',
    'GHB8-DXY:GHBD-9L6:partner',
    'GHB8-GB6:GHBD-9LY:partner',

    'GHBD-7M4:marriagePlace',
    'GHBD-7M4:marriageDate',
  ],

  // Acosta, Manuel San Agustin Jr.: Certificate of Marriage - Complete
  // Maramba, Catalina Dumantay: Certificate of Marriage - Complete
  'https://drive.google.com/file/d/16SOA-h6729Zochb7g906v_LH7Mej7dn6/view?usp=sharing': [
    'GHBD-7M4:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:suffix',

    'GHB8-J1B:gender',
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:middleName',

    'GHBD-9L6:GHBD-7M4:parentChild',
    'GHBD-9L6:gender',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHB8-GB6:GHB8-J1B:parentChild',
    'GHB8-GB6:gender',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',

    'GHB8-DXY:GHBD-7M4:parentChild',
    'GHB8-DXY:gender',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHBD-9LY:GHB8-J1B:parentChild',
    'GHBD-9LY:gender',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',

    'GHB8-J1B:GHBD-7M4:partner',
    'GHB8-DXY:GHBD-9L6:partner',
    'GHB8-GB6:GHBD-9LY:partner',

    'GHBD-7M4:marriagePlace',
    'GHBD-7M4:marriageDate',

    'GHBD-7M4:birthDate',
    'GHBD-7M4:marker',
  ],

  // =======================================================================
  // Death Records
  // =======================================================================

  // Acosta, Corazon Maramba: Certificate of Death
  'https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view?usp=sharing': [
    'GQJK-G8W:living',
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:gender',
    'GQJK-G8W:deathDate',
    'GQJK-G8W:birthPlace',
    'GQJK-G8W:deathPlace',
  ],

  // Argabioso, Marcial Mia: Grave Marker
  'https://drive.google.com/file/d/1x1M6Z1asZU99nMTdtKYdfDxY_w_s2Gnc/view?usp=share_link': [
    // The grave marker is in a different city compared to where Lolo
    // Marcial died. He died in St. Luke's Medical Center in Quezon City
    'GQJK-LCT:living',
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:gender',
    'GQJK-LCT:birthDate',
    'GQJK-LCT:deathDate',
  ],

  // Maramba, Catalina Dumantay: Grave Marker
  'https://drive.google.com/file/d/1AeoNewX7fEeAaihfBI3Tz6kNA9ia0m-D/view?usp=sharing': [
    // I took the photo from Sangandaan Cemetery
    'GHB8-J1B:deathPlace',
    'GHB8-GB6:deathPlace',

    'GHB8-J1B:living',
    'GHB8-J1B:firstName',

    'GHB8-GB6:living',
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:suffix',
    'GHB8-GB6:birthDate',
    'GHB8-GB6:deathDate',
  ],

  // Argabioso, Eusebio Lopecillo: Certificate of Death
  'https://drive.google.com/file/d/1SQy34nGR1Z5-AqNSZDInfkewArzP_xqp/view?usp=share_link': [
    'GHBZ-TM4:living',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:middleName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:gender',
    'GHBZ-TM4:marker',

    'GHB8-RCH:GHBZ-TM4:parentChild',
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
    'GHB8-RCH:gender',
  ],
};
