const systemNames = [
    'Terebellum',
    'Cujam',
    'Dziban',
    'Taiyangshou',
    'Elgafar',
    'Beemim',
    'Theemin',
    'Castula',
    'Zhang',
    'Lesath',
    'Alkarab',
    'Thabit',
    'Titawin',
    'Angetenar',
    'Paikauhale',
    'Salm',
    'Alniyat',
    'Nunki',
    'Polaris Australis',
    'Brachium',
    'Minchir',
    'Alsafi',
    'Unurgunite',
    'Al Kalb al Rai',
    'Iklil',
    'Tureis',
    'Tabit',
    'Azelfafage',
    'Fang',
    'Albaldah',
    'Beid',
    'Muscida',
    'Torcular',
    'Atik',
    'Subra',
    'Jishui',
    'Mira',
    'Alula Australis',
    'Graffias',
    'Azmidi',
    'Menkib',
    'Alzirr',
    'Grumium',
    'Kurhah',
    'Nahn',
    'Libertas',
    'Bunda',
    'Adhil',
    'Ainalrami',
    'Alula Borealis',
    'Jabbah',
    'Kuma',
    'Alshat',
    'Pipirima',
    'Xamidimura',
    'Alkalurops',
    'Tania Australis',
    'Polis',
    'Sadalbari',
    'Alathfar',
    'Rasalas',
    'Tejat',
    'Alrakis',
    'Garnet Star',
    'Cervantes',
    'Khambalia',
    'Suhail',
    'Tania Borealis',
    'Shaula',
    'Kaus Borealis',
    'Meissa',
    'Marfik',
    'Alterf',
    'Maasym',
    'Giausar',
    'Piautos',
    'Xuange',
    'Kang',
    'Markeb',
    'Alkaphrah',
    'Gudja',
    'Misam',
    'Saiph',
    'Al Minliar al Asad',
    'Marsic',
    'Asellus Tertius',
    'Situla',
    'Syrma',
    'Talitha',
    'Hatysa',
    'Ukdah',
    'Edasich',
    'Aspidiske',
    'Asellus Secundus',
    'Hassaleh',
    'Chamukuy',
    'Alya',
    'Sarir',
    'Sargas',
    'Biham',
    'Chertan',
    'Elkurud',
    'Menkent',
    'Marfark',
    'Asellus Primus',
    'Mahasim',
    'Ancha',
    'Zaniah',
    'Alkaid',
    'Alcyone',
    'Alpherg',
    'Miram',
    'Matar',
    'Sabik',
    'Aladfar',
    'Propus',
    'Azha',
    'Athebyne',
    'Achird',
    'Aludra',
    'Muphrid',
    'Haedus',
    'Tegmine',
    'Heze',
    'Mizar',
    'Tianguan',
    'Ascella',
    'Naos',
    'Revati',
    'Wurren',
    'Homam',
    'Alnitak',
    'Adhafera',
    'Mekbuda',
    'Zibal',
    'Aldhibah',
    'Baten Kaitos',
    'Fulu',
    'Furud',
    'Saclateni',
    'Okab',
    'Vindemiatrix',
    'Alioth',
    'Ain',
    'Larawag',
    'Kaus Australis',
    'Enif',
    'Alnilam',
    'Yed Posterior',
    'Ashlesha',
    'Mebsuta',
    'Ran',
    'Aldulfin',
    'Aljanah',
    'Ginan',
    'Segin',
    'Avior',
    'Adhara',
    'Meleph',
    'Izar',
    'Almaaz',
    'Albali',
    'Secunda Hyadum',
    'Minelauva',
    'Alsephina',
    'Yildun',
    'Megrez',
    'Dschubba',
    'Kaus Media',
    'Mintaka',
    'Yed Prior',
    'Zosma',
    'Sarin',
    'Wasat',
    'Altais',
    'Fawaris',
    'Imai',
    'Algorab',
    'Ruchbah',
    'Deneb Algedi',
    'Wezen',
    'Asellus Australis',
    'Botein',
    'Skat',
    'Alnasl',
    'Mesarthim',
    'Nash',
    'Algieba',
    'Porrima',
    'Regor',
    'Pherkad',
    'Phecda',
    'Prima Hyadum',
    'Algenib',
    'Bellatrix',
    'Sulafat',
    'Zubenelhakrabi',
    'Aldhanab',
    'Alhena',
    'Zaurak',
    'Eltanin',
    'Sadr',
    'Gacrux',
    'Gienah',
    'Kaffaljidhma',
    'Errai',
    'Navi',
    'Nashira',
    'Muliphein',
    'Asellus Borealis',
    'Seginus',
    'Tarazed',
    'Sadachbia',
    'Almach',
    'Alamak',
    'Arkab Posterior',
    'Arkab Prior',
    'Albireo',
    'Dabih',
    'Zavijava',
    'Kochab',
    'Merak',
    'Elnath',
    'Acrab',
    'Fumalsamakah',
    'Algol',
    'Scheat',
    'Rigel',
    'Cebalrai',
    'Sheliak',
    'Kekouan',
    'Zubeneschamali',
    'Nihal',
    'Denebola',
    'Kornephoros',
    'Tiaki',
    'Pollux',
    'Cursa',
    'Rastaban',
    'Rotanev',
    'Mimosa',
    'Kraz',
    'Nusakan',
    'Wazn',
    'Diphda',
    'Alfirk',
    'Hadar',
    'Caph',
    'Miaplacidus',
    'Chara',
    'Gomeisa',
    'Mirzam',
    'Tarf',
    'Nekkar',
    'Menkalinan',
    'Sheratan',
    'Alshain',
    'Sadalsuud',
    'Mirach',
    'Zubenelgenubi',
    'Algedi',
    'Rasalgethi',
    'Anser',
    'Spica',
    'Polaris',
    'Dubhe',
    'Atria',
    'Mothallah',
    'Aldebaran',
    'Unukalhai',
    'Antares',
    'Rukbat',
    'Sham',
    'Alrescha',
    'Fomalhaut',
    'Ankaa',
    'Mirfak',
    'Markab',
    'Peacock',
    'Betelgeuse',
    'Rasalhague',
    'Vega',
    'Kakkab',
    'Arneb',
    'Regulus',
    'Alphard',
    'Alnair',
    'Castor',
    'Dalim',
    'Achernar',
    'Kitalpha',
    'Thuban',
    'Sualocin',
    'Deneb',
    'Acrux',
    'Alkes',
    'Alchiba',
    'Alphecca',
    'Meridiana',
    'Diadem',
    'Phact',
    'Menkar',
    'Alderamin',
    'Proxima Centauri',
    'Toliman',
    'Rigil Kentaurus',
    'Schedar',
    'Canopus',
    'Cor Caroli',
    'Procyon',
    'Sirius',
    'Acubens',
    'Arcturus',
    'Capella',
    'Hamal',
    'Altair',
    'Sadalmelik',
    'Alpheratz',
    'La Superba',
    'Absolutno',
    'Koit',
    'Moldoveanu',
    'Tislit',
    'Petra',
    'Diya',
    'Mpingo',
    'Montuno',
    'Atakoraka',
    'Naledi',
    'Morava',
    'Anadolu',
    'Chaophraya',
    'Malmok',
    'Irena',
    'Amansinaya',
    'Parumleo',
    'Tojil',
    'Tangra',
    'Dìwö',
    'Nyamien',
    'Gloas',
    'Márohu',
    'Pipoltr',
    'Lich',
    'Sharjah',
    'Koeia',
    'Uruk',
    'Axólotl',
    'Poerava',
    'Ebla',
    'Lionrock',
    'Itonda',
    'Bosona',
    'Sāmaya',
    'Chechia',
    'Phoenicia',
    'Sika',
    'Belel',
    'Gumala',
    'Kaveh',
    'Xihe',
    'Alasia',
    'Pincoya',
    'Alruba',
    'Inquill',
    'Rapeto',
    'Mahsati',
    'Rosalíadecastro',
    'Ogma',
    'Timir',
    'Kamui',
    'Karaka',
    'Nikawiy',
    'Arcalís',
    'Mönch',
    'Liesma',
    'Dofida',
    'Funi',
    'Tupā',
    'Tonatiuh',
    'Aniara',
    'Flegetonte',
    'Uklun',
    'Sagarmatha',
    'Formosa',
    'Shama',
    'Hunahpú',
    'Dingolay',
    'Macondo',
    'Bibhā',
    'Felis',
    'Natasha',
    'Kalausi',
    'Illyrian',
    'Stribor',
    'Gakyid',
    'Násti',
    'Tapecue',
    'Ceibo',
    'Citalá',
    'Nervia',
    'Nosaxa',
    'Lusitânia',
    'Lucilinburhuc',
    'Amadioha',
    'Bubup',
    'Mago',
    'Mouhoun',
    'Hoggar',
    'Tupi',
    'Intan',
    'Ayeyarwady',
    'Nushagak',
    'Buna',
    'Bélénos',
    'Emiw',
    'Nenque',
    'Cocibolca',
    'Citadelle',
    'Lerna',
    'Taika',
    'Horna',
    'Tuiren',
    'Sansuna',
    'Muspelheim',
    'Moriah',
    'Berehinya',
    'Franz',
    'Tevel',
    'Sterrennacht',
    'Chason',
    'Dombay',
    'Hunor',
    'Fuyue',
    'Felixvarela',
    'Solaris',
    'Alcor',
    'Copernicus',
    'Sceptrum',
    'Helvetios',
    'Nembus',
    'Chalawan',
    'Praecipua',
    'Fafnir',
    'Intercrus',
    'Bharani',
    'Keid',
    'Lilii Borea',
    'Merga',
    'Guniibuu',
    'Alsciaukat',
    'Pleione',
    'Atlas',
    'Merope',
    'Asterope', 
    'Sterope',
    'Maia',
    'Taygeta',
    'Musica',
    'Electra',
    'Celaeno',
    'Veritate',
    'Baekdu',
    'Taiyi',
    'Tianyi'
    ]

    const femaleNames = [ "Fabia",
    "Fabiana",
    "Fabienne",
    "Fabiola",
    "Fable",
    "Fabriana",
    "Fabrizia",
    "Fae",
    "Faedra",
    "Faël",
    "Faelynn",
    "Fahima",
    "Faidra",
    "Faiga",
    "Faigel",
    "Faiqa",
    "Fairamay",
    "Fairlie",
    "Fairlight",
    "Fairuza",
    "Fairy",
    "Faith",
    "Faithe",
    "Faithful",
    "Faiza",
    "Fajar",
    "Fajga",
    "Fala",
    "Faline",
    "Fallon",
    "Fallyn",
    "Falon",
    "Falyn",
    "Famke",
    "Fannie",
    "Fanny",
    "Fantasia",
    "Fantine",
    "Fara",
    "Farah",
    "Fareeha",
    "Fareena",
    "Farhana",
    "Faria",
    "Farida",
    "Faridah",
    "Farin",
    "Farina",
    "Farishta",
    "Farlyn",
    "Farrah",
    "Farren",
    "Farrow",
    "Farwah",
    "Faryn",
    "Fatbardha",
    "Fate",
    "Fatima",
    "Fatma",
    "Fatoumata",
    "Faun",
    "Fausta",
    "Faustina",
    "Faustine",
    "Fauve",
    "Fawn",
    "Fawne",
    "Fawzia",
    "Fay",
    "Faya",
    "Faye",
    "Fayla",
    "Faylee",
    "Fayra",
    "Fayrah",
    "Fayth",
    "Faythe",
    "Fe",
    "Fearne",
    "Feather",
    "Febe",
    "February",
    "Federica",
    "Fedora",
    "Feigel",
    "Felecia",
    "Felesha",
    "Felice",
    "Felicia",
    "Feliciana",
    "Felicidad",
    "Felicita",
    "Felicitas",
    "Felicite",
    "Felicitti",
    "Felicity",
    "Felienne",
    "Felina",
    "Felipa",
    "Felisa",
    "Felisha",
    "Felixa",
    "Feliz",
    "Felizia",
    "Femke",
    "Femma",
    "Fenella",
    "Fenisia",
    "Fenna",
    "Fenris",
    "Feodora",
    "Feodosia",
    "Ferdinando",
    "Ferelith",
    "Fermina",
    "Fern",
    "Fernanda",
    "Fernande",
    "Fernandita",
    "Ferne",
    "Ferre",
    "Ferrin",
    "Feya",
    "Feyre",
    "Ffion",
    "Fflur",
    "Fia",
    "Fiadh",
    "Fiala",
    "Fiamma",
    "Fiammetta",
    "Fianna",
    "Fidela",
    "Fidelia",
    "Fidelma",
    "Fien",
    "Fiera",
    "Fifi",
    "Filipa",
    "Filippa",
    "Filomena",
    "Fina",
    "Findabair",
    "Fińelle",
    "Finja",
    "Finlay",
    "Finleigh",
    "Finley",
    "Finna",
    "Finnella",
    "Finnley",
    "Finnula",
    "Finola",
    "Finula",
    "Fion",
    "Fiona",
    "Fionna",
    "Fionne",
    "Fionnuala",
    "Fiora",
    "Fiore",
    "Fiorela",
    "Fiorella",
    "Fiorenza",
    "Fireese",
    "Firenze",
    "Fish",
    "Flame",
    "Flannery",
    "Flavia",
    "Flavie",
    "Flechia",
    "Flerida",
    "Fleta",
    "Fleur",
    "Fleurette",
    "Flicka",
    "Fliss",
    "Flo",
    "Floor",
    "Flor",
    "Flora",
    "Flòraidh",
    "Florbela",
    "Florence",
    "Florencia",
    "Florene",
    "Florentina",
    "Florentine",
    "Floriana",
    "Florice",
    "Florida",
    "Floride",
    "Florimel",
    "Florina",
    "Florinda",
    "Florine",
    "Florrie",
    "Floryn",
    "Flossie",
    "Floy",
    "Flutura",
    "Flynn",
    "Fonda",
    "Forever",
    "Forough",
    "Fortuna",
    "Fortunata",
    "Fortune",
    "Fotini",
    "Fotoula",
    "Foxglove",
    "Fraida",
    "Fran",
    "Franca",
    "France",
    "Francelle",
    "Frances",
    "Francesca",
    "Franchesca",
    "Francheska",
    "Francia",
    "Francie",
    "Francille",
    "Francina",
    "Francine",
    "Francis",
    "Francisca",
    "Franciszka",
    "Francoise",
    "Frania",
    "Franka",
    "Frankie",
    "Franklinia",
    "Frannie",
    "Franny",
    "Franya",
    "Franziska",
    "Frauke",
    "Fraya",
    "Fred",
    "Freda",
    "Freddie",
    "Frederica",
    "Frèdèrique",
    "Fredricka",
    "Freeda",
    "Freedom",
    "Freelove",
    "Freema",
    "Freesia",
    "Freida",
    "Freja",
    "Frenchy",
    "Freya",
    "Freyda",
    "Freyde",
    "Freyja",
    "Frida",
    "Friday",
    "Frideriki",
    "Frieda",
    "Frith",
    "Frona",
    "Fronie",
    "Frøydis",
    "Fuchsia",
    "Fumiko",
    "Funda",
    "Furiosa" ]

    const maleNames =  ["Fabian",
    "Fabien",
    "Fabio",
    "Fabius",
    "Fabrice",
    "Fabricio",
    "Fabrizio",
    "Fachtna",
    "Fadi",
    "Fahd",
    "Faheem",
    "Fahim",
    "Fairfax",
    "Faisal",
    "Falco",
    "Falcon",
    "Falk",
    "Fang",
    "Faolan",
    "Faramundo",
    "Farid",
    "Fariji",
    "Faris",
    "Farley",
    "Farol",
    "Faron",
    "Farran",
    "Farrell",
    "Farrier",
    "Farrington",
    "Fate",
    "Fatmir",
    "Faulkner",
    "Faunus",
    "Faustino",
    "Fausto",
    "Favien",
    "Fawkes",
    "Fay",
    "Fayette",
    "Fayt",
    "Feardorcha",
    "Federico",
    "Fedor",
    "Fegan",
    "Feivel",
    "Fela",
    "Felice",
    "Feliciano",
    "Feliks",
    "Felipe",
    "Felix",
    "Felton",
    "Femi",
    "Fenix",
    "Fennel",
    "Fennell",
    "Fenris",
    "Fenton",
    "Fenwicke",
    "Ferd",
    "Ferdie",
    "Ferdinand",
    "Ferenc",
    "Fergal",
    "Fergus",
    "Ferguson",
    "Fermin",
    "Fernand",
    "Fernando",
    "Fernleigh",
    "Ferran",
    "Ferris",
    "Ferruccio",
    "Fetus",
    "Feynman",
    "Ffinlo.",
    "Fiacre",
    "Fidel",
    "Field",
    "Fielding",
    "Fife",
    "Figaro",
    "Filemon",
    "Filiberto",
    "Filip",
    "Filipe",
    "Filippo",
    "Filippos",
    "Filius",
    "Fillan",
    "Fillin",
    "Fillmore",
    "Fin",
    "Finbar",
    "Finch",
    "Findlay",
    "Fingal",
    "Finian",
    "Finias",
    "Finis",
    "Finlay",
    "Finley",
    "Finlo",
    "Finn",
    "Finnbheara",
    "Finneas",
    "Finnegan",
    "Finnehas",
    "Finnian",
    "Finnick",
    "Finnigan",
    "Finnley",
    "Fintan",
    "Finton",
    "Finvarra",
    "Fionn",
    "Fiore",
    "Fiorello",
    "Firmin",
    "Firth",
    "Fisher",
    "Fiske",
    "Fitz",
    "Fitzgerald",
    "Fitzhugh",
    "Fitzpatrick",
    "Fitzwilliam",
    "Fiyero",
    "Flaminio",
    "Flart",
    "Flash",
    "Flavio",
    "Flavius",
    "Flemming",
    "Fletcher",
    "Flint",
    "Floran",
    "Florencio",
    "Florentin",
    "Florentino",
    "Florian",
    "Florin",
    "Florizel",
    "Flowers",
    "Floyd",
    "Flynn",
    "Foivos",
    "Foley",
    "Folsom",
    "Fonzy",
    "Forbes",
    "Ford",
    "Forden",
    "Forest",
    "Forester",
    "Forrest",
    "Forrester",
    "Fortunato",
    "Fosco",
    "Foster",
    "Fotios",
    "Fotis",
    "Fouad",
    "Four",
    "Fox",
    "Foxworth",
    "Foxx",
    "Foy",
    "Foyle",
    "Fran",
    "Francescantonio",
    "Francesco",
    "Francis",
    "Francisco",
    "Franciszek",
    "Franco",
    "François",
    "Frank",
    "Frankie",
    "Franklin",
    "Franklyn",
    "Franky",
    "Franz",
    "Fraser",
    "Frasier",
    "Frazier",
    "Fred",
    "Freddie",
    "Freddy",
    "Frederic",
    "Frederick",
    "Frederico",
    "Frederik",
    "Fredric",
    "Fredrick",
    "Fredrik",
    "Fredy",
    "Freeman",
    "Freitz",
    "Frey",
    "Friederich",
    "Friedrich",
    "Fritz",
    "Frode",
    "Frodo",
    "Froilan",
    "Frost",
    "Froylan",
    "Fuad",
    "Fudge",
    "Fulgencio",
    "Fulk",
    "Fulton",
    "Furio",
    "Furman",
    "Fynbos",
    "Fynch",
    "Fynn",
    "Fynnley",
    "Fyodor"]

    const letters = [
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]

    const systemBodies = [
      'gas cloud', 'planetary rings', 'asteroid field', 
      'asteroid', 'comet', 'rogue planet', 'dwarf planet', 
      'moon', 'planetoid', 'debris field', 'gas giant'
    ]

  export {systemNames, femaleNames, maleNames, letters, systemBodies}