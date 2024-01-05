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
  // Argabioso, Arbyn Acosta
  //
  // GQX8-CQP - Argabioso, Arbyn Acosta
  // GQJK-L51 - Argabioso, Rolando Saplala
  // GQJK-G8W - Acosta, Corazon Maramba
  // =======================================================================

  // Certificate of Birth
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

  // Certificate of Baptism
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

  // =======================================================================
  // Argabioso, Rolando Saplala
  //
  // GQJK-L51 - Argabioso, Rolando Saplala
  // GQJK-LCT - Argabioso, Marcial Mia
  // GHBZ-YVX - Saplala, Lydia Perez
  // =======================================================================

  // Certificate of Birth
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

  // Certificate of Marriage
  'https://drive.google.com/file/d/1kMHiW0mbPuPGyGOBm08qY6yWgvnHd82K/view?usp=sharing': [
    'GQJK-L51:gender',
    'GQJK-L51:firstName',
    'GQJK-L51:middleName',
    'GQJK-L51:lastName',
    'GQJK-L51:birthDate',
    'GQJK-L51:birthPlace',

    'GQJK-LCT:GQJK-L51:parentChild',
    'GQJK-LCT:gender',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',

    'GHBZ-YVX:GQJK-L51:parentChild',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',

    'GQJK-LCT:GHBZ-YVX:partner',

    'GQJK-L51:marriagePlace',
    'GQJK-L51:marriageDate',
  ],

  // =======================================================================
  // Argabioso, Marcial Mia
  //
  // GQJK-LCT - Argabioso, Marcial Mia
  // GHBZ-TM4 - Argabioso, Eusebio Lopecillo
  // GHBZ-P5Q - Mia, Francisca
  // =======================================================================

  // Certificate of Marriage
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing&side=argabioso': [
    'GQJK-LCT:GHBZ-YVX:partner',

    'GQJK-LCT:marriagePlace',
    'GQJK-LCT:gender',
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',

    'GHBZ-TM4:GQJK-LCT:parentChild',
    'GHBZ-TM4:gender',
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',

    'GHBZ-P5Q:GQJK-LCT:parentChild',
    'GHBZ-P5Q:gender',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',

    'GHBZ-TM4:GHBZ-P5Q:partner',

    'GQJK-LCT:marriageDate',

    // Witnesses
    // Florencio Arcenal
    // Constweino Bajo
    // Andrea Araza
    // Mrs. Regina R. Cayco
    // Perpetua A. Maliwat
    // Consuelo N. Aquino
  ],

  // Grave Marker
  'https://drive.google.com/file/d/1x1M6Z1asZU99nMTdtKYdfDxY_w_s2Gnc/view?usp=share_link': [
    // The grave marker is in a different city compared to where Lolo
    // Marcial died. He died in St. Luke's Medical Center in Quezon City
    'GQJK-LCT:living',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:birthDate',
    'GQJK-LCT:deathDate',
    'GQJK-LCT:gender',
  ],

  // =======================================================================
  // Saplala, Lydia Saplala
  //
  // GHBZ-YVX - Saplala, Lydia Saplala
  // GHB8-7T6 - Saplala, Fernando Sison
  // GHB8-GZL - Perez, Lucina Gutierrez
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view?usp=sharing': [
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:middleName',
    'GHBZ-YVX:lastName',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:birthDate',
    'GHBZ-YVX:birthPlace',
    'GHBZ-YVX:living',

    'GHB8-GZL:GHBZ-YVX:parentChild',
    'GHB8-GZL:gender',
    'GHB8-GZL:firstName',
    'GHB8-GZL:middleName',
    'GHB8-GZL:lastName',
    'GHB8-GZL:marker',

    'GHB8-7T6:GHBZ-YVX:parentChild',
    'GHB8-7T6:gender',
    'GHB8-7T6:firstName',
    'GHB8-7T6:middleName',
    'GHB8-7T6:lastName',
    'GHB8-7T6:marker',

    'GHB8-7T6:GHB8-GZL:partner',
    'GQJK-LCT:GHBZ-YVX:partner',
  ],

  // Certificate of Marriage
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?usp=sharing&side=saplala': [
    'GQJK-LCT:GHBZ-YVX:partner',

    'GHBZ-YVX:marriagePlace',
    'GHBZ-YVX:gender',
    'GHBZ-YVX:firstName',
    'GHBZ-YVX:lastName',

    'GHB8-7T6:GHBZ-YVX:parentChild',
    'GHB8-7T6:gender',
    'GHB8-7T6:firstName',
    'GHB8-7T6:lastName',

    'GHB8-GZL:GHBZ-YVX:parentChild',
    'GHB8-GZL:gender',
    'GHB8-GZL:firstName',
    'GHB8-GZL:lastName',

    'GHB8-7T6:GHB8-GZL:partner',

    'GHBZ-YVX:marriageDate',

    // Witnesses
    // Florencio Arcenal
    // Constweino Bajo
    // Andrea Araza
    // Mrs. Regina R. Cayco
    // Perpetua A. Maliwat
    // Consuelo N. Aquino
  ],

  // =======================================================================
  // Acosta, Corazon Maramba
  //
  // GQJK-G8W - Acosta, Corazon Maramba
  // GHBD-7M4 - Acosta, Manuel San Agustin Jr.
  // GHB8-J1B - Maramba, Catalina Dumantay
  // =======================================================================

  // Certificate of Live Birth
  'https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view?usp=sharing': [
    'GQJK-G8W:birthPlace',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthDate',

    'GHBD-7M4:GQJK-G8W:parentChild',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:marker2',

    'GHB8-J1B:GQJK-G8W:parentChild',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',

    'GHBD-7M4:GHB8-J1B:partner',
    'GHBD-7M4:marriageDate',
    'GHBD-7M4:marriagePlace',
    'GHB8-J1B:marriageDate',
    'GHB8-J1B:marriagePlace',
  ],

  // Certificate of Baptism
  'https://drive.google.com/file/d/1yqWECbcDTyhFig6IiK_AqPwXfL7gk0e0/view?usp=sharing': [
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthDate',

    'GHBD-7M4:GQJK-G8W:parentChild',
    'GHBD-7M4:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:birthPlace',

    'GHB8-J1B:GQJK-G8W:parentChild',
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

  // Certificate of Marriage
  'https://drive.google.com/file/d/17vMMCyBJ2qOyjFYCtb7UWkIJrRymiz8_/view?usp=sharing': [
    'GQJK-G8W:gender',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthPlace',

    'GHBD-7M4:GQJK-G8W:parentChild',
    'GHBD-7M4:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',

    'GHB8-J1B:GQJK-G8W:parentChild',
    'GHB8-J1B:gender',
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',

    'GHBD-7M4:GHB8-J1B:partner',

    'GQJK-G8W:marriagePlace',
    'GQJK-G8W:marriageDate',
  ],

  // Certificate of Death
  'https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view?usp=sharing': [
    'GQJK-G8W:living',
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:gender',
    'GQJK-G8W:deathDate',
    'GQJK-G8W:birthDate',
    'GQJK-G8W:deathPlace',
  ],

  // Grave Marker
  'https://drive.google.com/file/d/1sIWWgh8zfcIYtQfk2rIm4iW97sGzgK-x/view?usp=sharing': [
    // Photo taken in Magdalena, Laguna. Nanay died in Santa Cruz, Laguna
    'GQJK-G8W:living',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthDate',
    'GQJK-G8W:deathDate',
  ],

  // =======================================================================
  // Acosta, Manuel San Agustin Jr.
  //
  // GHBD-7M4 - Acosta, Manuel San Agustin Jr.
  // GHBD-9L6 - Acosta, Manuel Bongco Sr.
  // GHB8-DXY - San Agustin, Natividad
  // =======================================================================

  // Certificate of Marriage
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?usp=sharing&side=acosta': [
    'GHBD-7M4:GHB8-J1B:partner',

    'GHBD-7M4:marriagePlace',
    'GHBD-7M4:gender',
    'GHBD-7M4:firstName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:suffix',

    'GHBD-9L6:GHBD-7M4:parentChild',
    'GHBD-9L6:gender',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',

    'GHB8-DXY:GHBD-7M4:parentChild',
    'GHB8-DXY:gender',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',

    'GHBD-9L6:GHB8-DXY:partner',

    'GHBD-7M4:marriageDate',

    // Witnesses
    // Josue Syquimsiam
    // Aquilino Crame
    // Milagros Caguioa
    // Cresencia Maramba
    // Jenerining Reyes
  ],

  // =======================================================================
  // Maramba, Catalina Dumantay
  //
  // GHB8-J1B - Maramba, Catalina Dumantay
  // GHB8-GB6 - Maramba, Sotero Reyes Sr.
  // GHBD-9LY - Dumantay, Cresencia
  // =======================================================================

  // Certificate of Marriage
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?usp=sharing&side=maramba': [
    'GHBD-7M4:GHB8-J1B:partner',

    'GHB8-J1B:marriagePlace',
    'GHB8-J1B:gender',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',

    'GHB8-GB6:GHB8-J1B:parentChild',
    'GHB8-GB6:gender',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',

    'GHBD-9LY:GHB8-J1B:parentChild',
    'GHBD-9LY:gender',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',

    'GHB8-GB6:GHBD-9LY:partner',

    'GHB8-J1B:marriageDate',

    // Witnesses
    // Josue Syquimsiam
    // Aquilino Crame
    // Milagros Caguioa
    // Cresencia Maramba
    // Jenerining Reyes
  ],

  // Grave Marker
  'https://drive.google.com/file/d/1AeoNewX7fEeAaihfBI3Tz6kNA9ia0m-D/view?usp=sharing': [
    // I took the photo from Sangandaan Cemetery
    'GHB8-J1B:deathPlace',
    'GHB8-GB6:deathPlace',
    'GHBD-9LY:deathPlace',

    'GHB8-J1B:living',
    'GHB8-J1B:firstName',

    'GHB8-GB6:living',
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:suffix',
    'GHB8-GB6:birthDate',
    'GHB8-GB6:deathDate',

    'GHBD-9LY:living',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',
    'GHBD-9LY:birthDate',
    'GHBD-9LY:deathDate',
  ],

  // =======================================================================
  // Adanza, Mitchie Ajesta
  // =======================================================================

  // Certificate of Birth
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
};
