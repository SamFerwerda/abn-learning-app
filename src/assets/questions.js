const vragen = [
    {
        "id": 1,
        "title": "Welkom",
        "question": "Tijdens het zoeken naar een huis zul je vragen moeten beantwoorden. Met deze vragen kun je coins verdienen. Hoe meer coins je hebt, hoe hoger je op het scorebord komt te staan!",
        "buttons": [
            {
                "text": "Oke, duidelijk!",
                "buttonClicked": "buttonClicked"
            },
        ],
        "images": [
            {
                'src' : '/quiz.jpg'
            }
        ]
    },
    {
        "id": 2,
        "title": "Welkom",
        "question": "Bij het gebruik van deze applicatie zul je het proces doorlopen van het huren of kopen van een huis. Dit kun je zien als een soort van simulatie. Het lijkt dus alsof het allemaal echt is wat je moet doen, maar dat is het niet. Wees dus niet bang om het proces te doorlopen en in te vullen wat jij denkt dat goed is.",
        "buttons": [
            {
                "text": "Oke, duidelijk!",
                "buttonClicked": "buttonClicked"
            },
        ],
        "images": [
            {
                'src' : '/simulation.jpg'
            }
        ],
    },
    {
        "id": 3,
        "title": "Welkom",
        "question": "Laten we de zoektocht naar je huis beginnen! Ben je op zoek naar een huurhuis of een koophuis?",
        "buttons": [
            {
                "text": "Huurhuis",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "Koophuis",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/house-illustration.jpg'
            }
        ]
    }, 
    {
        "id": 4,
        "title": "Inkomen",
        "question": "Wat verdien je per maand?",
        "buttons": [
            {
                "text": "Opslaan",
                "buttonClicked": "buttonClicked"
            }
        ],
        "inputType": "slider",
    },
    {
        "id": 5,
        "title": "Vraag 1",
        "question": "Wat voor huis denk je dat je kan kopen met jouw inkomen?",
        "buttons": [
            {
                "text": "",
                "image": "/house1.png",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "",
                "image": "/house2.png",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "",
                "image": "/house3.png",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "",
                "image": "/house4.png",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "",
                "image": "/house5.png",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "",
                "image": "/house6.png",
                "buttonClicked": "buttonClicked"
            }
        ],
    },
    {
        "id": 6,
        "title": "Hypotheek",
        "question": "Nu we weten welk werk je doet, kunnen we bepalen hoeveel je kunt lenen! Stel je hebt eigen spaargeld, namelijk €25.000. Zou je hier een deel van gebruiken voor je hypotheek?",
        "buttons": [
            {
                "text": "Ja",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "Nee",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/spaarvarken.png'
            }
        ],
    },
    {
        "id": 7,
        "title": "Vraag 2",
        "question": "Welke zaken zorgen ervoor dat je een lagere hypotheek kunt krijgen?",
        "buttons": [
            {
                "text": "Antwoorden opslaan",
                "buttonClicked": "buttonClicked"
            }
        ],
        "inputType": "checkbox",
        "inputs": [
            {
                "icon": "/studieschuld.png",
                "text": "Studieschuld",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/telefoonabonnement.png",
                "text": "Telefoonabonnement",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/scooter.png",
                "text": "Scooter",
                "isAnswer": false,
                "value": 0
            },
            {
                "icon": "/car.png",
                "text": "Private lease auto",
                "isAnswer": true,
                "value": 15
            },
            {
                "icon": "/leningen.png",
                "text": "Leningen",
                "isAnswer": true,
                "value": 15
            }
        ]
    },
    {
        "id": 8,
        "title": "Antwoord",
        "question": "Welke zaken zorgen ervoor dat je een lagere hypotheek kunt krijgen?",
        "buttons": [
            {
                "text": "Verder",
                "buttonClicked": "buttonClicked"
            }
        ],
        "answers": [
            {
                "icon": "/studieschuld.png",
                "text": "Studieschuld",
                "isAnswer": true
            },
            {
                "icon": "/telefoonabonnement.png",
                "text": "Telefoonabonnement",
                "isAnswer": true
            },
            {
                "icon": "/scooter.png",
                "text": "Scooter",
                "isAnswer": true
            },
            {
                "icon": "/car.png",
                "text": "Private lease auto",
                "isAnswer": true
            },
            {
                "icon": "/leningen.png",
                "text": "Leningen",
                "isAnswer": true
            }
        ]
    },
    {
        "id": 9,
        "title": "Hypotheek",
        "question": "Heb je zelf schulden of een vorm van een lening?",
        "buttons": [
            {
                "text": "Volgende",
                "buttonClicked": "buttonClicked"
            }
        ],
        "inputs": [
            {
                "icon": "/studieschuld.png",
                "text": "Studieschuld"
            },
            {
                "icon": "/telefoonabonnement.png",
                "text": "Telefoonabonnement"
            },
            {
                "icon": "/car.png",
                "text": "Private lease auto"
            },
            {
                "icon": "/leningen.png",
                "text": "Leningen"
            }
        ],
        "inputType": "checkbox",
    },
    {
        "id": 10,
        "title": "Hypotheek",
        "question": "Hoeveel denk je per maand te moeten betalen voor de schulden en leningen?",
        "buttons": [
            {
                "text": "Opslaan",
                "buttonClicked": "buttonClicked"
            }
        ],
        "inputType": "open",
        "placeholder": "Voer hier het bedrag in"
    },
    {
        "id": 11,
        "title": "Hypotheek",
        "question": "De hypotheekadviseur van de bank geeft aan dat je een hypotheek kunt krijgen van €350.000. Zonder schulden en leningen had je een hypotheek kunnen krijgen van €370.000.",
        "buttons": [
            {
                "text": "Super!",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/hypotheek.png'
            }
        ]
    },
    {
        "id": 11,
        "title": "Huizen zoeker",
        "question": "Ga op zoek naar het huis dat past bij jouw wensen!",
        "buttons": [
            {
                "text": "Huis 1",
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "Huis 2",
                "buttonClicked": "buttonClicked"
            }
        ]
    },
    {
        "id": 12,
        "title": "Huizen zoeker",
        "question": "Informatie over huis",
        "buttons": [
            {
                "text": "Bod doen",
                "buttonClicked": "buttonClicked"
            }
        ]
    },
    {
        "id": 13,
        "title": "Bieden",
        "question": "Wat is de hoogte van het bod dat je gaat doen?",
        "buttons": [
            {
                "text": "Bieden",
                "buttonClicked": "buttonClicked"
            }
        ],
        "inputType": "open",
        "placeholder": "Voer hier het bedrag in"
    },
    {
        "id": 14,
        "title": "Vraag 3",
        "question": "Welke kosten heb je nog meer als koper van een huis?",
        "buttons": [
            {
                "text": "Antwoorden opslaan",
                "buttonClicked": "buttonClicked"
            }
        ],
        "inputs": [
            {
                "text": "Overdrachtsbelasting",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Bouwtechnische keuring",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Notariskosten",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Financieringskosten",
                "isAnswer": true,
                "value": 30
            },
            {
                "text": "Kadasterkosten",
                "isAnswer": true,
                "value": 30
            }
        ],
        "inputType": "checkbox",
    },
    {
        "id": 15,
        "title": "Antwoord",
        "question": "Als koper van een huis heb je veel kosten die je nog moet maken.",
        "buttons": [
            {
                "text": "Ga verder",
                "buttonClicked": "buttonClicked"
            }
        ],
        "answers": [
            {
                "text": "Studieschuld",
                "isAnswer": true
            },
            {
                "text": "Telefoonabonnement",
                "isAnswer": true
            },
            {
                "text": "Scooter",
                "isAnswer": true
            },
            {
                "text": "Private lease auto",
                "isAnswer": true
            },
            {
                "text": "Leningen",
                "isAnswer": true
            }
        ]
    },
    {
        "id": 16,
        "title": "Bieden",
        "question": "Gefeliciteerd! Je bod is geaccepteerd!",
        "buttons": [
            {
                "text": "Voorlopig koopcontract tekenen",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/bod-geaccepteerd.png'
            }
        ]
    },
    {
        "id": 17,
        "title": "Vraag 4",
        "question": "Het bod is een week geleden geaccepteerd. Betekent dit nu dat je niet meer onder de koop van de woning uit kunt komen?",
        "buttons": [
            {
                "text": "Ja, je hebt het huis nu gekocht.",
                "isAnswer": false,
                "value": 0,
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "Nee, als je ontbindende voorwaarden hebt opgesteld bij het bieden op de woning dan kna  de koop nog steeds niet doorgaan.",
                "isAnswer": true,
                "value": 50,
                "buttonClicked": "buttonClicked"
            },
            {
                "text": "Nee, je kunt nog altijd onder de koop uit ook al is het bod geaccepteerd.",
                "isAnswer": false,
                "value": 0,
                "buttonClicked": "buttonClicked"
            }
        ]
    },
    {
        "id": 18,
        "title": "Antwoord",
        "question": "Dat is niet juist. Bij het kopen van een woning is het belangrijk om bij het doen van je bod ook ontbindende voorwaarden op te stellen. Hierin zet je bjivoorbeeld dat de koop van het huis niet door kan gaan wanneer je de financiering niet rond krijgt.",
        "buttons": [
            {
                "text": "Doorgaan naar de volgende stap",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/contract-verscheurd.png'
            }
        ]
    },
    {
        "id": 19,
        "title": "Antwoord",
        "question": "Dat klopt! Bij het kopen van een woning is het belangrijk om bij het doen van je bod ook ontbindende voorwaarden op te stellen. Hierin zet je bjivoorbeeld dat de koop van het huis niet door kan gaan wanneer je de financiering niet rond krijgt.",
        "buttons": [
            {
                "text": "Doorgaan naar de volgende stap",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/contract-verscheurd.png'
            }
        ]
    },
    {
        "id": 20,
        "title": "Bank",
        "question": "Nu komt het belangrijkste gedeelte, de hypotheek aanvragen bij de bank. Wanneer je alle gegevens aanlevert, gaat de bank nog een keer controleren of je kan lenen wat je wilt lenen. Wanneer de bank akkoord is, ontvang je hiervan een hypotheekvoorstel.",
        "buttons": [
            {
                "text": "Naar de notaris",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/hypotheekvoorstel.png'
            }
        ]
    },
    {
        "id": 21,
        "title": "Notaris",
        "question": "Dan nu is het tijd om het officiële koopcontract te tekenen. Dit doe je bij de notaris. Wanneer het contract is getekend, is alles geregeld!",
        "buttons": [
            {
                "text": "Doorgaan naar laatste stap",
                "buttonClicked": "buttonClicked"
            }
        ],
        "images": [
            {
                "src" : '/notaris.png'
            }
        ]
    },
    {
        "id": 22,
        "title": "Gefeliciteerd",
        "question": "Gefeliciteerd, je hebt de sleutels gekregen van je nieuwe huis!",
        "buttons": [
            {
                "text": "Bekijk plek op het scorebord",
                "buttonClicked": "getScore"
            }
        ],
        "images": [
            {
                "src" : '/sleutels.png'
            }
        ]
    }
]

export {
    vragen
}