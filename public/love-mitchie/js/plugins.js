const secret = window.location.get("s");
var invitees = [
    // Immediate Family ================================================
    {
        "firstNames": ["Lydia"],
        "middleName": "Perez",
        "lastName": "Saplala",
        "marriedName": "Argabioso",
    },
    {
        "firstNames": ["Rolando", "Roland", "Olan"],
        "middleName": "Saplala",
        "lastName": "Argabioso",
    },
    {
        "firstNames": ["Larry"],
        "middleName": "Calilong",
        "lastName": "Ignacio",
    },
    {
        "firstNames": ["Ira Mae", "Ira"],
        "middleName": "Acosta",
        "lastName": "Ignacio",
    },
    {
        "firstNames": ["Joshua Caleb", "Caleb"],
        "middleName": "Acosta",
        "lastName": "Ignacio",
    },
    {
        "firstNames": ["Riand Nikole", "Ryan", "Rain", "Rian"],
        "middleName": "Martin",
        "lastName": "Argabioso",
    },
    {
        "firstNames": ["Yen", "Nierene"],
        "middleName": "Dianela",
        "lastName": "Martin",
        "marriedName": "Argabioso",
    },
    {
        "firstNames": ["Mylen"],
        "middleName": "Vergara",
        "lastName": "Ajesta",
        "marriedName": "Adanza",
    },
    {
        "firstNames": ["Darne"],
        "middleName": "Elican",
        "lastName": "Adanza",
    },
    {
        "firstNames": ["DM", "Daryll Matthew", "Pangs"],
        "middleName": "Ajesta",
        "lastName": "Adanza",
    },
    // Extended Family =================================================
    {
        "firstNames": ["Dulce"],
        "middleName": "Urgel",
        "lastName": "Cruz",
        "marriedName": "Argabioso",
    },
    {
        "firstNames": ["Antonio", "Tony", "Toni"],
        "middleName": "Saplala",
        "lastName": "Argabioso",
    },
]

var people = []
for (let id in invitees) {
    let invitee = invitees[id]
    fullName = `${invitee["lastName"]}, ${invitee["firstNames"][0]} ${invitee["middleName"]}`;
    invitees[id]["fullName"] = fullName;
    invitees[id]["encoded"] = secretEncoder(fullName);

    for (let i in invitee["firstNames"]) {
        let firstName = invitee["firstNames"][i];

        people.push({"id": parseInt(id), "name": `${invitee["lastName"]}, ${firstName} ${invitee["middleName"]}`});
        people.push({"id": parseInt(id), "name": `${firstName} ${invitee["middleName"]} ${invitee["lastName"]}`});
        people.push({"id": parseInt(id), "name": `${invitee["lastName"]}, ${firstName}`});
        people.push({"id": parseInt(id), "name": `${firstName} ${invitee["lastName"]}`});

        if (invitee.hasOwnProperty("marriedName")) {
            people.push({"id": parseInt(id), "name": `${invitee["marriedName"]}, ${firstName} ${invitee["lastName"]}`});
            people.push({"id": parseInt(id), "name": `${firstName} ${invitee["lastName"]} ${invitee["marriedName"]}`});
            people.push({"id": parseInt(id), "name": `${invitee["marriedName"]}, ${firstName}`});
            people.push({"id": parseInt(id), "name": `${firstName} ${invitee["marriedName"]}`});
        }
    }
}

const options = {
  includeScore: true,
  findAllMatches: true,
  minMatchCharLength: 6,  // 3 letters first name + space + 3 letters last name
  threshold: 0.16,
  keys: [
    "name",
  ]
};

function getIdWithLowestScore(data) {
    const idToScores = {};
    for (let obj of data) {
        if (!idToScores[obj.id]) {
            idToScores[obj.id] = [];
        }
        idToScores[obj.id].push(obj.score);
    }

    let maxCount = Math.max(...Object.values(idToScores).map(arr => arr.length));

    const maxCountIds = Object.keys(idToScores).filter(id => idToScores[id].length === maxCount);

    let minScoreId = null;
    let minScoreAvg = Infinity;

    for (let id of maxCountIds) {
        let scoreAvg = idToScores[id].reduce((a, b) => a + b, 0) / idToScores[id].length;
        if (scoreAvg < minScoreAvg) {
            minScoreAvg = scoreAvg;
            minScoreId = id;
        }
    }

    return minScoreId;
}

function checkName(name) {
    const fuse = new Fuse(people, options);

    // Change the pattern
    let pattern = name;
    pattern = trim(pattern);


    if (pattern.includes(" ")) {
        let results = fuse.search(pattern);
        let tableResults = []
        let resultCounter = {}

        for (let key in results) {
            let id = results[key]["item"]["id"];
            let score = results[key]["score"];
            let name = results[key]["item"]["name"];
            let fullName = invitees[id]["fullName"];
            let encoded = invitees[id]["encoded"];

            if (score <= options.threshold && !name.includes(` ${pattern}`)) {
                tableResults.push({
                    "id": results[key]["item"]["id"],
                    "name": results[key]["item"]["name"],
                    "score": Math.round(score * 10_000) / 10_000,
                    "encoded": encoded,
                });
            }
        }

        if (tableResults.length > 0) {
            console.table(tableResults);
            match = invitees[getIdWithLowestScore(tableResults)]; // Outputs: 11
            console.log(match["encoded"])
            console.log(secret)
            if (match["encoded"] != secret) {
                alert("Please use the QR code given to you by the couple");
            } else {
                alert("Name match: " + match["fullName"]);
            }
        }
    }

    function trim(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    return null
}

function _soundex(name) {
    var soundexChars = ["", "1", "2", "3", "", "1", "2", "", "", "2", "2", "4", "5", "5", "", "1", "", "2", "6", "2", "3", "", "1", "2", "", "2"],
        soundexNum = "",
        prevChar = "",
        nameLength = name.length,
        i;

    // Ensure the name is in uppercase
    name = name.toUpperCase();

    // Start with the first character
    soundexNum = name.charAt(0);

    // Process the rest of the name
    for (i = 1; i < nameLength; i += 1) {
        var c = name.charCodeAt(i) - 65;

        // Skip this character if it's out of range or a duplicate or if
        // the last character was coded as 7 (this character is coded as 2)
        if (c >= 0 && c <= 25 && soundexChars[c] !== '' && soundexChars[c] !== prevChar && !(prevChar === '2' && soundexChars[c] === '7')) {
            soundexNum += soundexChars[c];
            prevChar = soundexChars[c];
        }
    }

    // Pad with zeroes or truncate to 4 characters and return
    return (soundexNum + '000').slice(0, 4);
}

function processWords(inputString, wordProcessorFunction) {
    let words = inputString.split(" "); // split the string into an array of words

    let resultWords = words.map(word => {
        return wordProcessorFunction(word); // call the wordProcessorFunction for each word and store the result
    });

    return resultWords.join(""); // join the processed words into a single string
}

function secretEncoder(inputString) {
    return uuid.v5(processWords(inputString, _soundex), uuid.v5.DNS);
}
