// Age for Mothers (youngest ever was 9) so let's use 10
// Age for Fathers (youngest ever was 5) so let's use 6

const SOURCES = {

  // ___________________________________________________________________________
  // ===========================================================================
  // Undocumented Sources

  'Present and Direct Interactions': [
    'TEMP-000:GHB5-TWN:parentChild', // aesthetic data consideration
    'TEMP-000:GQX8-CQP:parentChild', // aesthetic data consideration

    'GHB5-TWN:GQX8-CQP:partner',
    'GHB5-TWN:firstName',
    'GHB5-TWN:gender',
    'GHB5-TWN:lastName',
    'GHB5-TWN:middleName',
    'GQX8-CQP:birthDate',
    'GQX8-CQP:firstName',
    'GQX8-CQP:gender',
    'GQX8-CQP:lastName',
    'GQX8-CQP:middleName',
    'GQJK-LCT:deathPlace',
    'GQX8-CQP:marker',
    'GQJK-G8W:marker',
    'GQJK-L51:marker',
    'GHBZ-YVX:marker',
    'GHB5-XTZ:marker',
    'GHBR-FK3:marker',
    'GHBR-FK3:marker2',

    'GH12-W17:deathDate',
    'GH12-W17:deathPlace',
    'GH12-W17:living',
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
    'GHB8-J1B:deathDate',

    // Directly from Tito Darne (son of Lolo Nestor)
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:birthPlace',

    // Directly from Lolo Marcial (son of Lola Francisca)
    // According to Lola Lydia and Lolo Marcial, Lola Francisca
    // died around the time Lolo Marcial was 4 years old
    'GHBZ-P5Q:living',
    'GHBZ-P5Q:deathDate',

    // Directly from Lola Lydia and Lolo Boning (children of Lolo Andong)
    'GHB8-7T6:middleName',
    'GHB8-7T6:birthDate',
    'GHB8-7T6:birthPlace',
    'GHB8-7T6:deathDate',
    'GHB8-7T6:deathPlace',
    'GHB8-7T6:living',
    'GHB8-7T6:marker',

    // Directly from Lola Lydia and Lolo Boning (children of Lola Lucing)
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
    'GH12-DRN:birthPlace',
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

    // Directly from Lola Becky
    // (daughter of Lola Cresencia, sister of Lola Catalina)
    'GHBD-9LY:birthPlace',
    'GHBD-9LY:marker',  // saws or creates clothes
    'LLQS-641:firstName',
    'LLQS-641:GHB8-GB6:parentChild',
    'TEMP-001:GHBD-9LY:parentChild',
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
  // or everyone born on 1900s and older
  'PROBABLY NOT LIVING ANYMORE': [
    'GHBZ-TM4:living',
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

  // ___________________________________________________________________________
  // ===========================================================================
  // Me, Mitch, and Direct Ancestors

  // =======================================================================
  // Argabioso, Arbyn Acosta
  //
  // GQX8-CQP - Argabioso, Arbyn Acosta
  // GQJK-L51 - Argabioso, Rolando Saplala
  // GQJK-G8W - Acosta, Corazon Maramba
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/1B1umw_xm5i-AmNp9YzshX2DebSAhj3cz/view': [
    'GQX8-CQP:birthPlace',
    'GQX8-CQP:firstName',
    'GQX8-CQP:middleName',
    'GQX8-CQP:gender',
    'GQX8-CQP:birthDate',

    'GQJK-G8W:GQX8-CQP:parentChild',
    'GQJK-G8W:gender',
    'GQJK-G8W:firstName',
    'GQJK-G8W:middleName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:marker',

    'GQJK-L51:GQX8-CQP:parentChild',
    'GQJK-L51:gender',
    'GQJK-L51:firstName',
    'GQJK-L51:middleName',
    'GQJK-L51:lastName',

    'GQJK-L51:GQJK-G8W:partner',
  ],

  // Certificate of Baptism
  'https://drive.google.com/file/d/1nJVXB-p0ZM0OUXsXK4TyI7JRwvbDln53/view': [
    'GQX8-CQP:firstName',
    'GQX8-CQP:middleName',
    'GQX8-CQP:lastName',
    'GQX8-CQP:birthDate',

    'GQJK-G8W:GQX8-CQP:parentChild',
    'GQJK-G8W:gender',
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:birthPlace',

    'GQJK-L51:GQX8-CQP:parentChild',
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

  // Proposal to Mitchie, Facebook
  'https://www.facebook.com/arbyn.argabioso/posts/pfbid02U3X7BU11Lb41vrbLQKrAyGe8oCEvd8SSqbY8rcCZ2MEQzcb3BUQJWL8UPhF1ZttYl': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],
  // Proposal to Mitchie, YouTube
  'https://www.youtube.com/watch?v=LNkv-M1TMtg': [
    'GQX8-CQP:GHB5-TWN:partner',
  ],

  // =======================================================================
  // Argabioso, Rolando Saplala
  //
  // GQJK-L51 - Argabioso, Rolando Saplala
  // GQJK-LCT - Argabioso, Marcial Mia
  // GHBZ-YVX - Saplala, Lydia Perez
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/1degLEAa8cBBxJrRsWwz0t6wHh9vs29cH/view': [
    'GQJK-L51:birthPlace',
    'GQJK-L51:firstName',
    'GQJK-L51:middleName',
    'GQJK-L51:lastName',
    'GQJK-L51:gender',
    'GQJK-L51:birthDate',

    'GQJK-LCT:GQJK-L51:parentChild',
    'GQJK-LCT:gender',
    'GQJK-LCT:firstName',
    'GQJK-LCT:middleName',
    'GQJK-LCT:lastName',
    'GQJK-LCT:birthPlace',

    'GHBZ-YVX:GQJK-L51:parentChild',
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
  'https://drive.google.com/file/d/1kMHiW0mbPuPGyGOBm08qY6yWgvnHd82K/view': [
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

  // News Article, Inquirer.NET
  'https://drive.google.com/file/d/1Zw8fzrh9ELRvIx1W7ncqT010edcT6hpK/view': [
    'GQJK-L51:marker',
    'GQJK-L51:firstName',
    'GQJK-L51:lastName',
  ],

  // =======================================================================
  // Argabioso, Marcial Mia
  //
  // GQJK-LCT - Argabioso, Marcial Mia
  // GHBZ-TM4 - Argabioso, Eusebio Lopecillo
  // GHBZ-P5Q - Mia, Francisca
  // =======================================================================

  // Certificate of Marriage
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?side=argabioso': [
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

  // Petition for Reconstitution of Title, Official Gazette
  'https://drive.google.com/file/d/1tu21m1RMRjiTwPfzp1VrFENbPUhLsEKq/view': [
    'GQJK-LCT:firstName',
    'GQJK-LCT:lastName',

    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
  ],

  // Grave Marker
  'https://drive.google.com/file/d/1x1M6Z1asZU99nMTdtKYdfDxY_w_s2Gnc/view': [
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
  // Argabioso, Eusebio Lopecillo
  //
  // GHBZ-TM4 - Argabioso, Eusebio Lopecillo
  // GHB8-RCH - Lopecillo, Estebana
  // =======================================================================

  // Certificate of Death
  'https://drive.google.com/file/d/1SQy34nGR1Z5-AqNSZDInfkewArzP_xqp/view': [
    'GHBZ-TM4:living',
    'GHBZ-TM4:deathPlace',
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:middleName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:deathDate',
    'GHBZ-TM4:gender',

    'GHBZ-P5Q:living',

    'GHBZ-TM4:birthDate',
    'GHBZ-TM4:marker',
    'GHBZ-TM4:birthPlace',

    'GHB8-RCH:GHBZ-TM4:parentChild',
    'GHB8-RCH:gender',
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
  ],

  // =======================================================================
  // Lopecillo, Estebana
  //
  // GHB8-RCH - Lopecillo, Estebana
  // G2HQ-YQS - Lopecillo, Simplicio
  // G2H7-Q75 - Villarubin, Gregoria
  // =======================================================================

  // Certificate of Death
  'https://drive.google.com/file/d/1yf_M5CJgnXsHGFvFmF5Uzfp4YrsAnfUY/view': [
    'GHB8-RCH:living',
    'GHB8-RCH:deathPlace',
    'GHB8-RCH:firstName',
    'GHB8-RCH:lastName',
    'GHB8-RCH:gender',
    'GHB8-RCH:deathDate',
    'GHB8-RCH:birthDate',
    'GHB8-RCH:birthPlace',
  ],

  // FamilySearch: Simplicio Lopecillo and Gregoria Villarubin (TODO)
  'https://www.familysearch.org/ark:/61903/1:1:66XW-VQRT': [
    'G2HQ-YQS:GHB8-RCH:parentChild',
    'G2HQ-YQS:firstName',
    'G2HQ-YQS:lastName',
    'G2HQ-YQS:gender',

    'G2H7-Q75:GHB8-RCH:parentChild',
    'G2H7-Q75:firstName',
    'G2H7-Q75:lastName',
    'G2H7-Q75:gender',

    'G2HQ-YQS:G2H7-Q75:partner',
  ],

  // FamilySearch: Another record regarding Lolo Simplicio (TODO)
  'https://www.familysearch.org/ark:/61903/1:1:66X6-LG3J': [
    'G2HQ-YQS:GHB8-RCH:parentChild',
    'G2HQ-YQS:firstName',
    'G2HQ-YQS:lastName',
    'G2HQ-YQS:gender',

    'G2H7-Q75:GHB8-RCH:parentChild',
    'G2H7-Q75:firstName',
    'G2H7-Q75:lastName',
    'G2H7-Q75:gender',

    'G2HQ-YQS:G2H7-Q75:partner',
  ],

  // =======================================================================
  // Saplala, Lydia Saplala
  //
  // GHBZ-YVX - Saplala, Lydia Saplala
  // GHB8-7T6 - Saplala, Fernando Sison
  // GHB8-GZL - Perez, Lucina Gutierrez
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/1Yy9S1Y4NOilHHulCeejkeeY1BUbzgRyn/view': [
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
  'https://drive.google.com/file/d/1C2TFs8kVvf6lWq-ANjEEG165f7bWUZCs/view?side=saplala': [
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
  'https://drive.google.com/file/d/1Db5lGDp-mhJH7LAXnuijFXBc1c1vA07j/view': [
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
  'https://drive.google.com/file/d/1yqWECbcDTyhFig6IiK_AqPwXfL7gk0e0/view': [
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
  'https://drive.google.com/file/d/17vMMCyBJ2qOyjFYCtb7UWkIJrRymiz8_/view': [
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
  'https://drive.google.com/file/d/1JArFl6_m-kuvyPf-LqDLU3_SapZzCvkt/view': [
    'GQJK-G8W:living',
    'GQJK-G8W:firstName',
    'GQJK-G8W:lastName',
    'GQJK-G8W:gender',
    'GQJK-G8W:deathDate',
    'GQJK-G8W:birthDate',
    'GQJK-G8W:deathPlace',
  ],

  // Grave Marker
  'https://drive.google.com/file/d/1sIWWgh8zfcIYtQfk2rIm4iW97sGzgK-x/view': [
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

  // Certificate of Marriage, City
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?side=acosta': [
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

  // Certifacte of Marriage, Church
  'https://drive.google.com/file/d/1zjeJs9azWMLnnEjulRpAnBi8Vno4H_9U/view?side=acosta': [
    'GHBD-7M4:marriagePlace',
    'GHBD-7M4:marriageDate',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
  ],

  // California Deaths and Burials, FamilySearch
  // https://www.familysearch.org/ark:/61903/1:1:HGZ8-33ZM
  'https://drive.google.com/file/d/194CO9-EnmMLwhHPGe0qTO1d3G7HGtTZl/view': [
    'GHBD-7M4:living',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:suffix',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:birthPlace',
    'GHBD-7M4:deathDate',
    'GHBD-7M4:deathPlace',

    'GHBD-9L6:GHBD-7M4:parentChild',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:gender',
    'GHBD-9L6:birthPlace',

    'GHB8-DXY:GHBD-7M4:parentChild',
    'GHB8-DXY:firstName',
    'GHB8-DXY:gender',
    'GHB8-DXY:birthPlace',

    'GHBD-9L6:GHB8-DXY:partner',
  ],

  // California Death Index, FamilySearch
  // https://www.familysearch.org/ark:/61903/1:1:VP27-9XM
  'https://drive.google.com/file/d/1Yclt46UY9IV4Pp4xyfuZitegj4B5iXN7/view': [
    'GHBD-7M4:living',
    'GHBD-7M4:firstName',
    'GHBD-7M4:middleName',
    'GHBD-7M4:lastName',
    'GHBD-7M4:deathDate',
    'GHBD-7M4:deathPlace',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:birthPlace',
  ],

  // =======================================================================
  // Acosta, Manuel Bongco Sr.
  //
  // GHBD-9L6 - Acosta, Manuel Bongco Sr.
  // GHB8-SQN - Acosta, Ligorio
  // GHB8-5K8 - Bongco, Maximiana
  // =======================================================================

  // Certificate of Marriage - Page 1
  'https://drive.google.com/file/d/1L4zy5f_l9gYFBQQ68WdVFLDunwFoKgru/view?side=acosta': [
    'GHBD-9L6:GHB8-DXY:partner',

    'GHBD-9L6:gender',
    'GHBD-9L6:firstName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:lastName',

    'GHB8-SQN:GHBD-9L6:parentChild',
    'GHB8-SQN:gender',
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',

    'GHB8-5K8:GHBD-9L6:parentChild',
    'GHB8-5K8:gender',
    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',

    'GHB8-SQN:GHB8-5K8:partner',

    'GHBD-9L6:marriagePlace',
    'GHBD-9L6:marriageDate',
  ],

  // Certificate of Marriage - Complete
  'https://drive.google.com/file/d/16SOA-h6729Zochb7g906v_LH7Mej7dn6/view?side=acosta': [
    // All details from page 1 are sourced from a better copy. So this
    // source only include sources from page 2 and 3.

    'GHBD-9L6:GHB8-DXY:partner',

    'GHBD-9L6:firstName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:lastName',

    'GHBD-9L6:GHBD-7M4:parentChild',
    'GHB8-DXY:GHBD-7M4:parentChild',

    'GHBD-7M4:firstName',
    'GHBD-7M4:birthDate',
    'GHBD-7M4:marker',
  ],

  // Certificate of Death
  'https://drive.google.com/file/d/1JuyRHuSaar2p3RM0nUjWX-KPMAGjk2FK/view': [
    'GHBD-9L6:living',

    'GHBD-9L6:firstName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:birthDate',
    'GHBD-9L6:gender',
    'GHBD-9L6:deathDate',
    'GHBD-9L6:birthPlace',
    'GHBD-9L6:marker',
    'GHBD-9L6:marker2',

    'GHB8-DXY:GHBD-9L6:partner',
    'GHB8-DXY:gender',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',

    'GHB8-SQN:GHBD-9L6:parentChild',
    'GHB8-SQN:gender',
    'GHB8-SQN:lastName',
    'GHB8-SQN:birthPlace',

    'GHB8-5K8:GHBD-9L6:parentChild',
    'GHB8-5K8:gender',
    'GHB8-5K8:lastName',
    'GHB8-5K8:birthPlace',

    'GHB8-SQN:GHB8-5K8:partner',

    'GHBD-9L6:deathPlace',
  ],

  // =======================================================================
  // Acosta, Ligorio
  //
  // GHB8-SQN - Acosta, Ligorio
  // =======================================================================

  // Certificate of Death
  'https://drive.google.com/file/d/1MIuMf7Q89LU89gmeNNZlH8lgKeMUR_yU/view': [
    'GHB8-SQN:living',

    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:gender',
    'GHB8-SQN:deathDate',
    'GHB8-SQN:birthDate',
    'GHB8-SQN:deathPlace',

    'GHB8-5K8:firstName',
    'GHB8-5K8:lastName',

    'GHBD-9L6:firstName',
    'GHBD-9L6:middleName',
    'GHBD-9L6:lastName',
  ],

  // Family Search: Lolo Ligorio Death Record
  // 'https://www.familysearch.org/ark:/61903/1:1:FV6D-SZH': [
  'https://drive.google.com/file/d/1AL6hsO1Snvv-_aOovfP88-w0oxPjQs4i/view': [
    'GHB8-SQN:living',

    'GHB8-SQN:deathPlace',
    'GHB8-SQN:firstName',
    'GHB8-SQN:lastName',
    'GHB8-SQN:birthDate',
    'GHB8-SQN:gender',
    'GHB8-SQN:deathDate',
    'GHB8-SQN:birthPlace',

    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
  ],

  // =======================================================================
  // San Agustin, Natividad
  //
  // GHB8-DXY - San Agustin, Natividad
  // GHB8-LCC - San Agustin, Vicente
  // GHB8-H7K - Nena
  // =======================================================================

  // Certificate of Marriage - Page 1
  'https://drive.google.com/file/d/1L4zy5f_l9gYFBQQ68WdVFLDunwFoKgru/view?side=san+agustin': [
    'GHBD-9L6:GHB8-DXY:partner',

    'GHB8-DXY:gender',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',

    'GHB8-LCC:GHB8-DXY:parentChild',
    'GHB8-LCC:gender',
    'GHB8-LCC:firstName',
    'GHB8-LCC:lastName',

    'GHB8-H7K:GHB8-DXY:parentChild',
    'GHB8-H7K:gender',
    'GHB8-H7K:firstName',

    'GHB8-LCC:GHB8-H7K:partner',

    'GHB8-DXY:marriagePlace',
    'GHB8-DXY:marriageDate',
  ],

  // U.S. Social Security Death Index, MyHeritage
  // https://www.myheritage.com/research/record-10002-81189365/
  'https://drive.google.com/file/d/19m_AfnmTfHEdEy_IsgSWB9g1tREZnoJp/view': [
    'GHB8-DXY:living',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
    'GHB8-DXY:deathPlace',
  ],

  // Grave Marker
  'https://drive.google.com/file/d/10Z0kurjxNy0s7M0um4w5SxFMAFWA8Ivm/view': [
    'GHB8-DXY:living',
    'GHB8-DXY:firstName',

    // Married Lastname
    'GHB8-DXY:GHBD-9L6:partner',

    'GHB8-DXY:birthDate',
    'GHB8-DXY:deathDate',
  ],

  // =======================================================================
  // Maramba, Catalina Dumantay
  //
  // GHB8-J1B - Maramba, Catalina Dumantay
  // GHB8-GB6 - Maramba, Sotero Reyes Sr.
  // GHBD-9LY - Dumantay, Cresencia
  // =======================================================================

  // Philippines, Manila, Civil Registration, 1899-1984, FamilySearch
  // https://www.familysearch.org/ark:/61903/1:1:QKJT-S44Z
  'https://drive.google.com/file/d/1gKlJX95oRihP2yIJ9ukp-0gFKWAAGiIL/view': [
    'GHB8-J1B:firstName',
    'GHB8-J1B:lastName',
    'GHB8-J1B:gender',
    'GHB8-J1B:birthDate',

    'GHB8-GB6:GHB8-J1B:parentChild',
    'GHB8-GB6:gender',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',

    'GHBD-9LY:GHB8-J1B:parentChild',
    'GHBD-9LY:gender',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',

    'GHB8-GB6:GHBD-9LY:partner',
  ],

  // Certificate of Marriage, City
  'https://drive.google.com/file/d/1_3rvIfv82-KWjBsaZawQV4lMFUYSB_NK/view?side=maramba': [
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

  // Certifacte of Marriage, Church
  'https://drive.google.com/file/d/1zjeJs9azWMLnnEjulRpAnBi8Vno4H_9U/view?side=maramba': [
    'GHB8-J1B:marriagePlace',
    'GHB8-J1B:marriageDate',
    'GHB8-J1B:firstName',
    'GHB8-J1B:middleName',
    'GHB8-J1B:lastName',
  ],

  // Grave Marker
  'https://drive.google.com/file/d/1AeoNewX7fEeAaihfBI3Tz6kNA9ia0m-D/view': [
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
  // Maramba, Sotero Reyes Sr.
  //
  // GHB8-GB6 - Maramba, Sotero Reyes Sr.
  // LLQS-641 - Maramba, Miguel Bautista
  // LLQS-6F1 - Reyes, Mercedes Novilla
  // =======================================================================

  // News Article, The Malaya Tribune
  'https://drive.google.com/file/d/15o0fdYYMYTzXQ3ikiMCOqy-YlfAND76C/view': [
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:marker',
    'GHB8-GB6:marker2',
  ],

  // Family Photo
  'https://drive.google.com/file/d/1jorhb44fg6jrJcUDctHNB2BhVGUwDki7/view': [
  ],

  // Certificate of Death
  'https://drive.google.com/file/d/1Pn6Xvn7ucwnzTgNTcFBsQq9hzAnARp51/view': [
    'GHB8-GB6:living',

    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
    'GHB8-GB6:deathDate',
    'GHB8-GB6:gender',
    'GHB8-GB6:birthDate',
    'GHB8-GB6:marker2',
    'GHB8-GB6:birthPlace',

    'GHBD-9LY:GHB8-GB6:partner',
    'GHBD-9LY:gender',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',
  ],

  // =======================================================================
  // Maramba, Miguel Bautista
  //
  // LLQS-641 - Maramba, Miguel Bautista
  // LLQS-6YC - Maramba, Guillermo Bautista
  // L281-614 - Bautista, Maria Garcia
  // =======================================================================

  // Geni Profile
  // https://www.geni.com/people/Miguel-Maramba/4012194445110022663
  'https://drive.google.com/file/d/1PGx6mKequtCtKWRjEAdJ999OX78Rgmvq/view': [
    'LLQS-641:firstName',
    'LLQS-641:middleName',
    'LLQS-641:lastName',
    'LLQS-641:gender',
    'LLQS-641:birthDate',

    'LLQS-6YC:LLQS-641:parentChild',
    'LLQS-6YC:firstName',
    'LLQS-6YC:middleName',
    'LLQS-6YC:lastName',

    'L281-614:LLQS-641:parentChild',
    'L281-614:firstName',
    'L281-614:middleName',
    'L281-614:lastName',

    'LLQS-6YC:L281-614:partner',

    'LLQS-6F1:LLQS-641:partner',
    'LLQS-6F1:gender',
    'LLQS-6F1:firstName',
    'LLQS-6F1:lastName',

    'LLQS-641:GHB8-GB6:parentChild',
    'GHB8-GB6:firstName',
    'GHB8-GB6:lastName',
  ],

  // Page 266, Daniel Maramba: His Life and Times
  'https://drive.google.com/file/d/1CNF4lEbL4vfjbhMnTOEk02KFDhaO-Xwa/view': [
    'LLQS-641:prefix',
    'LLQS-641:firstName',
    'LLQS-641:lastName',

    'LLQS-6YC:LLQS-641:parentChild',
    'L281-614:LLQS-641:parentChild',
  ],

  // Registration of Titles, Province of Pangasinan
  'https://drive.google.com/file/d/1Ik8lFHm_F4-FaKOs4qL4CNiq-Il2WfLR/view': [
    'LLQS-641:firstName',
    'LLQS-641:lastName',
    'LLQS-641:marker',
  ],

  // =======================================================================
  // Maramba, Guillermo Bautista
  //
  // LLQS-6YC - Maramba, Guillermo Bautista
  // =======================================================================

  // Geni Profile
  // https://www.geni.com/people/Guillermo-Maramba/6000000010495044375
  'https://drive.google.com/file/d/1cIXCw6wvKrPjzTYfpAfS3ri_Ms8ihSAS/view': [
    // We don't want to include all details because we already added
    // them in Lolo Miguel's sources. Since its a profile, and not an
    // individual document, it probably came from a single database and
    // we would be duplicating redundant information

    'LLQS-6YC:gender',
    'LLQS-6YC:birthDate',
  ],

  // Page 5-7, Daniel Maramba: His Life and Times
  'https://drive.google.com/file/d/1dDJs3rrAsbMSo_qp6my6J-wxE676FMEa/view': [
    'LLQS-6YC:gender',
    'LLQS-6YC:firstName',
    'LLQS-6YC:lastName',
    'LLQS-6YC:marker',
    'LLQS-6YC:marker2',
    'LLQS-6YC:deathPlace',

    'L281-614:firstName',
    'L281-614:lastName',
    'L281-614:gender',
    'L281-614:deathPlace',

    'GC7T-H59:L281-614:parentChild',
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',

    'GC7T-1PK:L281-614:parentChild',
    'GC7T-1PK:firstName',
    'GC7T-1PK:lastName',

    'GC7T-H59:GC7T-1PK:partner',
  ],

  // =======================================================================
  // Bautista, Maria Garcia
  //
  // L281-614 - Bautista, Maria Garcia
  // GC7T-H59 - Bautista, Agustin
  // GC7T-1PK - Garcia, Felipa
  // =======================================================================

  // Geni Profile
  // https://www.geni.com/people/Maria-Maramba/6000000017013425750
  'https://drive.google.com/file/d/1eURb38MuWvI0RVG9IaHxEzs-rOt0vBgb/view': [
    // We don't want to include all details because we already added
    // them in Lolo Miguel's sources. Since its a profile, and not an
    // individual document, it probably came from a single database and
    // we would be duplicating redundant information

    'L281-614:gender',
    'L281-614:birthDate',

    'GC7T-H59:L281-614:parentChild',
    'GC7T-H59:gender',
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',

    'GC7T-1PK:L281-614:parentChild',
    'GC7T-1PK:gender',
    'GC7T-1PK:firstName',
    'GC7T-1PK:lastName',

    'GC7T-H59:GC7T-1PK:partner',
  ],

  // =======================================================================
  // Bautista, Agustin
  //
  // GC7T-H59 - Bautista, Agustin
  // =======================================================================

  // Geni Profile
  // https://www.geni.com/people/Agustin-Bautista/6000000017013722083
  'https://drive.google.com/file/d/1fU_c4Ew4h9R85zZLDe5QQR-R2DDHT1Mq/view': [
    // We don't want to include all details because we already added
    // them in Lola Maria's sources. Since its a profile, and not an
    // individual document, it probably came from a single database and
    // we would be duplicating redundant information

    'GC7T-H59:birthDate',
  ],

  // Article, Parish of the Holy Family
  // http://www.oocities.org/hfamilyparishpang/history.html
  'https://drive.google.com/file/d/1ReDCDspaaaXQ4JoLgYcEznm-bGxhzc54/view': [
    'GC7T-H59:firstName',
    'GC7T-H59:lastName',
    'GC7T-H59:gender',
    'GC7T-H59:prefix',
    'GC7T-H59:marker',
    'GC7T-H59:deathDate',
  ],

  // =======================================================================
  // Adanza, Mitchie Ajesta
  //
  // GHB5-TWN - Adanza, Mitchie Ajesta
  // GHB5-XTZ - Adanza, Darne Elican
  // GHBR-FK3 - Ajesta, Mylen Vergara
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/19s_gdN98AQ1sZ5lhqSf8GrpJJIpFhsdf/view': [
    'GHB5-TWN:birthPlace',
    'GHB5-TWN:firstName',
    'GHB5-TWN:middleName',
    'GHB5-TWN:lastName',
    'GHB5-TWN:gender',
    'GHB5-TWN:birthDate',

    'GHB5-XTZ:GHB5-TWN:parentChild',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',

    'GHBR-FK3:GHB5-TWN:parentChild',
    'GHBR-FK3:gender',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:marker',

    'GHB5-XTZ:GHBR-FK3:partner',
    'GHB5-XTZ:marriageDate',
    'GHBR-FK3:marriageDate',
  ],

  // =======================================================================
  // Adanza, Darne Elican
  //
  // GHB5-XTZ - Adanza, Darne Elican
  // GH12-SVQ - Adanza, Nestor Ladera
  // GH12-9F6 - Elican, Rufa Acerto
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/1jYZqUHatNlvgDuyFw7jxSwgZsE6jy_9V/view': [
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:middleName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:gender',
    'GHB5-XTZ:birthDate',
    'GHB5-XTZ:birthPlace',

    'GH12-9F6:GHB5-XTZ:parentChild',
    'GH12-9F6:gender',
    'GH12-9F6:firstName',
    'GH12-9F6:lastName',

    'GH12-SVQ:GHB5-XTZ:parentChild',
    'GH12-SVQ:gender',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',

    'GH12-9F6:GH12-SVQ:partner',
  ],

  // Certificate of Marriage
  'https://drive.google.com/file/d/1rVr3RKFXqxPfw--yVwacLYGwyQFf6LzQ/view?side=adanza': [
    'GHB5-XTZ:GHBR-FK3:partner',

    'GHB5-XTZ:gender',
    'GHB5-XTZ:firstName',
    'GHB5-XTZ:lastName',
    'GHB5-XTZ:birthPlace',

    'GH12-SVQ:GHB5-XTZ:parentChild',
    'GH12-SVQ:gender',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',

    'GH12-9F6:GHB5-XTZ:parentChild',
    'GH12-9F6:gender',
    'GH12-9F6:firstName',
    'GH12-9F6:lastName',

    'GH12-9F6:GH12-SVQ:partner',

    'GHB5-XTZ:marriagePlace',
    'GHB5-XTZ:marriageDate',
  ],

  // =======================================================================
  // Adanza, Nestor Ladera
  //
  // GH12-SVQ - Adanza, Nestor Ladera
  // GH12-DRN - Adanza, Felomino R.
  // GH12-3GN - Ladera, Consuelo
  // =======================================================================

  // Certificate of Death
  'https://drive.google.com/file/d/1peIClAbyWzZV_kWcxPKAVBPDnVqFXG2Q/view': [
    'GH12-SVQ:living',

    'GH12-SVQ:firstName',
    'GH12-SVQ:middleName',
    'GH12-SVQ:lastName',
    'GH12-SVQ:gender',
    'GH12-SVQ:deathDate',
    'GH12-SVQ:birthDate',
    'GH12-SVQ:deathPlace',
    'GH12-SVQ:marker',

    'GH12-DRN:GH12-SVQ:parentChild',
    'GH12-DRN:gender',
    'GH12-DRN:firstName',
    'GH12-DRN:lastName',

    'GH12-3GN:GH12-SVQ:parentChild',
    'GH12-3GN:gender',
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',
  ],

  // =======================================================================
  // Adanza, Felomino R.
  //
  // GH12-DRN - Adanza, Felomino R.
  // =======================================================================

  // Certificate of Death
  'https://drive.google.com/file/d/1BK3uw-U_2ONst68_V7wUXFQWzzlu0pFc/view': [
    'GH12-DRN:living',

    'GH12-DRN:firstName',
    'GH12-DRN:middleName',
    'GH12-DRN:lastName',
    'GH12-DRN:gender',
    'GH12-DRN:birthDate',
    'GH12-DRN:marker',
    'GH12-DRN:deathDate',
    'GH12-DRN:deathPlace',

    'GH12-3GN:GH12-DRN:partner',
    'GH12-3GN:gender',
    'GH12-3GN:firstName',
    'GH12-3GN:lastName',

    'GH12-3GN:deathDate',

    'GH12-DRN:GH12-SVQ:parentChild',
    'GH12-SVQ:firstName',
    'GH12-SVQ:lastName',
  ],

  // =======================================================================
  // Ajesta, Mylen Vergara
  //
  // GHBR-FK3 - Ajesta, Mylen Vergara
  // GH12-Z3C - Ajesta, Napoleon Cripolon Badoles
  // GH12-W17 - Vergara, Celma Borja
  // =======================================================================

  // Certificate of Live Birth
  'https://drive.google.com/file/d/1J6wUo6AwrS5aO9LJWbh8CUReaRTkUEFF/view': [
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',
    'GHBR-FK3:birthPlace',

    'GH12-Z3C:GHBR-FK3:parentChild',
    'GH12-Z3C:gender',
    'GH12-Z3C:firstName',
    'GH12-Z3C:lastName',

    'GH12-W17:GHBR-FK3:parentChild',
    'GH12-W17:gender',
    'GH12-W17:firstName',
    'GH12-W17:lastName',

    'GH12-Z3C:GH12-W17:partner',
  ],

  // Certificate of Birth
  'https://drive.google.com/file/d/18MFv7G6xKBJj9M4ewH8a3GgcpFW4VSht/view': [
    'GHBR-FK3:birthPlace',
    'GHBR-FK3:firstName',
    'GHBR-FK3:middleName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:gender',
    'GHBR-FK3:birthDate',

    'GH12-Z3C:GHBR-FK3:parentChild',
    'GH12-Z3C:gender',
    'GH12-Z3C:firstName',
    'GH12-Z3C:middleName',
    'GH12-Z3C:lastName',

    'GH12-W17:GHBR-FK3:parentChild',
    'GH12-W17:gender',
    'GH12-W17:firstName',
    'GH12-W17:middleName',
    'GH12-W17:lastName',

    'GH12-Z3C:GH12-W17:partner',

    'GH12-Z3C:marriageDate',
    'GH12-W17:marriageDate',
  ],

  // Certificate of Marriage
  'https://drive.google.com/file/d/1rVr3RKFXqxPfw--yVwacLYGwyQFf6LzQ/view?side=ajesta': [
    'GHB5-XTZ:GHBR-FK3:partner',

    'GHBR-FK3:gender',
    'GHBR-FK3:firstName',
    'GHBR-FK3:lastName',
    'GHBR-FK3:birthPlace',

    'GH12-Z3C:GHBR-FK3:parentChild',
    'GH12-Z3C:gender',
    'GH12-Z3C:firstName',
    'GH12-Z3C:lastName',

    'GH12-W17:GHBR-FK3:parentChild',
    'GH12-W17:gender',
    'GH12-W17:firstName',
    'GH12-W17:lastName',

    'GH12-W17:GH12-Z3C:partner',

    'GHBR-FK3:marriagePlace',
    'GHBR-FK3:marriageDate',
  ],

  // ___________________________________________________________________________
  // ===========================================================================
  // Other People

  // =======================================================================
  // Acosta, Benjamin San Agustin Sr.
  // - male sibling of Lolo Manuel Acosta Jr.
  // - uncle of Nanay
  //
  // GHBD-9L6 - Acosta, Manuel Bongco Sr.
  // GHB8-DXY - San Agustin, Natividad
  // =======================================================================

  // Certificate of Birth
  'https://drive.google.com/file/d/1u-7tnWjKdZ5-GrdLKuKi-NOAVvty25Qo/view': [
    'GHBD-9L6:gender',
    'GHBD-9L6:firstName',
    'GHBD-9L6:lastName',
    'GHBD-9L6:birthPlace',
    'GHBD-9L6:marker2',

    'GHB8-DXY:gender',
    'GHB8-DXY:firstName',
    'GHB8-DXY:lastName',
    'GHB8-DXY:birthPlace',
    'GHB8-DXY:marker',

    'GHBD-9L6:GHB8-DXY:partner',
  ],

  // =======================================================================
  // Saplala, Hilaria Sison
  // - female sibling of Lolo Fernando Saplala
  // - aunt of Lola Lydia Saplala
  //
  // GNNH-2HX - Saplala, Hilaria Sison
  // GNNH-JLM - Saplala, Estanislao
  // GJJX-1SG - Adela Sison
  // =======================================================================

  // Philippines Marriages, 1723-1957, FamilySearch
  // https://www.familysearch.org/ark:/61903/1:1:FN4G-JSW
  'https://drive.google.com/file/d/1g_6PxiUEuhW_jvUU3p8TySDi9u-7hlwG/view': [
    'GNNH-JLM:firstName',
    'GNNH-JLM:lastName',
    'GNNH-JLM:gender',

    'GJJX-1SG:firstName',
    'GJJX-1SG:lastName',
    'GJJX-1SG:gender',

    'GNNH-JLM:GJJX-1SG:partner',
  ],

  // =======================================================================
  // Maramba, Corazon Dumantay
  // - female sibling of Lola Catalina Maramba
  // - aunt of Nanay
  //
  // GHB8-GB6 - Maramba, Sotero Reyes Sr.
  // GHBD-9LY - Dumantay, Cresencia
  // =======================================================================

  // Philippine Marriages, 1723-1957, FamilySearch
  // https://www.familysearch.org/ark:/61903/1:1:HBNK-LY2M
  'https://drive.google.com/file/d/1n_6mEB9oGikZeRXw71-_buL1cIoT8X9p/view': [
    'GHB8-GB6:gender',
    'GHB8-GB6:firstName',
    'GHB8-GB6:middleName',
    'GHB8-GB6:lastName',

    'GHBD-9LY:gender',
    'GHBD-9LY:firstName',
    'GHBD-9LY:lastName',

    'GHB8-GB6:GHBD-9LY:partner',
  ],

  // =======================================================================
  // Maramba, Jose Reyes
  //
  // LLQS-641 - Maramba, Miguel Bautista
  // LLQS-6F1 - Reyes, Mercedes Novilla
  // =======================================================================

  // Christening Record, FamilySearch
  // https://www.familysearch.org/ark:/61903/1:1:66HQ-VJGQ
  'https://drive.google.com/file/d/1EZnFrq2uHZVgfDSItdUrxBqy7Wzkto7o/view': [
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

    'G7C3-B6P:LLQS-6F1:parentChild',
    'G7C3-B6P:firstName',
    'G7C3-B6P:gender',

    'G7C3-J9S:LLQS-6F1:parentChild',
    'G7C3-J9S:firstName',
    'G7C3-J9S:lastName',
    'G7C3-J9S:gender',

    'G7C3-B6P:G7C3-J9S:partner',
  ],

  // =======================================================================
  // Unknown
  // =======================================================================

  // FamilySearch: Record regarding Lolo Victor and Lola Genoveba (TODO)
  'https://www.familysearch.org/ark:/61903/1:1:HBP6-8VZM': [
    'GHB8-M8D:firstName',
    'GHB8-M8D:lastName',
    'GHB8-M8D:gender',

    'GHB8-M86:firstName',
    'GHB8-M86:lastName',
    'GHB8-M86:gender',

    'GHB8-M8D:GHB8-M86:partner',
  ],

  // FamilySearch: Manuel Ajesta and Ursula badoles in son's catholic record (TODO)
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
    'GKBT-9GD:GH12-HQN:parentChild',
    'GKBR-M9Y:GH12-XX4:parentChild',
  ],

  // FamilySearch: Record of Lola Trinidad, another daughter of Lolo Bio (TODO)
  'https://www.familysearch.org/ark:/61903/1:1:HBBS-S7W2': [
    'GHBZ-TM4:firstName',
    'GHBZ-TM4:lastName',
    'GHBZ-TM4:gender',
    'GHBZ-P5Q:firstName',
    'GHBZ-P5Q:lastName',
    'GHBZ-P5Q:gender',
    'GHBZ-TM4:GHBZ-P5Q:partner',
  ],

  // Twin of Lolo Manuel, Certificate of Death
  // since this is a twin of Lolo Manuel, they are born in the
  // same hospital, same city, same country, same time
  'https://drive.google.com/file/d/13-RZPCmG9h3jLf4L-8yMIl7Fi-jdiAbg/view': [
    'GHBD-7M4:birthDate',
    'GHBD-7M4:birthPlace',
  ],

  // =======================================================================
  // Ajesta, Emmanuel
  //
  // GKBR-M9Y - Ajesta, Eustaquio
  // GKBR-7P7 - Bermúdez, Florencia
  // =======================================================================

  // MyHeritage: Marriage Record of Lolo Emmanuel and Lola Ursula
  'https://drive.google.com/file/d/1irYmUaWoR44n7p-33kxmaI0H9HkWqDrY/view?side=ajesta': [
    'GH12-XX4:gender',
    'GH12-XX4:firstName',
    'GH12-XX4:lastName',
    'GH12-XX4:birthDate',

    'GKBR-M9Y:GH12-XX4:parentChild',
    'GKBR-M9Y:gender',
    'GKBR-M9Y:firstName',
    'GKBR-M9Y:lastName',

    'GKBR-7P7:GH12-XX4:parentChild',
    'GKBR-7P7:gender',
    'GKBR-7P7:firstName',
    'GKBR-7P7:lastName',

    'GKBR-M9Y:GKBR-7P7:partner',

    'GH12-XX4:marriagePlace',
    'GH12-XX4:marriageDate',
  ],

  // =======================================================================
  // Badoles, Ursula
  //
  // GKBT-9GD - Badoles, Pedro
  // K2GJ-YY3 - Villanes, Leoncia
  // =======================================================================

  // MyHeritage: Marriage Record of Lolo Emmanuel and Lola Ursula
  'https://drive.google.com/file/d/1irYmUaWoR44n7p-33kxmaI0H9HkWqDrY/view?side=badoles': [
    'GH12-HQN:gender',
    'GH12-HQN:firstName',
    'GH12-HQN:lastName',
    'GH12-HQN:birthDate',

    'GKBT-9GD:GH12-HQN:parentChild',
    'GKBT-9GD:gender',
    'GKBT-9GD:firstName',
    'GKBT-9GD:lastName',

    'K2GJ-YY3:GH12-HQN:parentChild',
    'K2GJ-YY3:gender',
    'K2GJ-YY3:firstName',
    'K2GJ-YY3:lastName',

    'GKBT-9GD:K2GJ-YY3:partner',

    'GH12-HQN:marriagePlace',
    'GH12-HQN:marriageDate',
  ],
};

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
