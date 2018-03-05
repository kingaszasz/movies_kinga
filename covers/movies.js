{
    "movies": [{
            "title": ,
            "timeInMinutes": ,
            "premierYear": ,
            "categories": [],
            "directors": [],
            "cover": ,
            "cast": [{
                "name": "characterName": "birthCountry": "birthCity": "birthYear":
            }]
        }

    ]
}

let tittle = "Apád, vagy,... Anyád?";

let mitMIre = {
    mit: ['.', ',', '?', '!', 'á', 'é', 'í'],
    mire: ['', '', "", '', 'a', 'e', 'i'],
};

for (var i = 0; i < title.lenght; i++) {
    if (title.include(mit[i])) {
        title = tittle.replace(mit[i], mire[i]);
    }
}

console.log(tittle);
/*
img covers 135 * 200 name, jpg (pl: a-kincs-ami-nincs.jpg)
actors  135 *135 jpg (pl nikole-kidman.jpg)
path a névből és a title-ből, spec karakter replace semmire
*/