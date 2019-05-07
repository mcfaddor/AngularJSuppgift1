const express = require('express');
const route = express.Router();


route.get("/", (req, res, next) => {
    res.status(200).json([
            { id: 1, image_urls: "pictures/1.jpg" ,productname: "Omgiven av psykopater", author: "Thomas Erikson", category: "Psykologi", Typ: "Häftad", price: 45 , instock : 100,  rating : 2, totalratings: 100, quantity: 1  },
            { id: 2, image_urls: "pictures/2.jpg" ,productname: "Hjärnstark", author: "Anders Hansen", category: "Psykologi", Typ: "Pocket", price: 59 , instock : 40,  rating : 5, totalratings: 5, quantity: 1 },
            { id: 3, image_urls: "http://localhost:5500/website/pictures/3.jpg" ,productname: "Lär dig leva : mindre stress - mer närvaro ", author: "Mats Billmark, Susan Billmark", category: "Psykologi", Typ: "Inbunden", price: 45 , instock : 40, rating : 3.4, totalratings: 35, quantity: 1   },
            { id: 4, image_urls: "http://localhost:5500/website/pictures/4.jpg" ,productname: "Mitt hjärta är ditt", author: "Anna Jansson", category: "Deckare", Typ: "E-bok", price: 149 , instock : 15 ,  rating : 1.3, totalratings: 18, quantity: 1   },
            { id: 5, image_urls: "http://localhost:5500/website/pictures/5.jpg" ,productname: "Döden är alltid sann", author: "Anna Jansson", category: "Deckare", Typ: "Pocket", price: 63 , instock : 45, rating : 1.3, totalratings: 40, quantity: 1     },
            { id: 6, image_urls: "http://localhost:5500/website/pictures/6.jpg" ,productname: "Systrarna", author: "Claire Douglas", category: "Deckare", Typ: "Pocket", price: 59 , instock : 10 , rating : 1.3, totalratings: 48, quantity: 1   },
            { id: 7, image_urls: "http://localhost:5500/website/pictures/7.jpg" ,productname: "Jorden runt på 1000 dagar", author: "Fredrika Ek", category: "Resor", Typ: "Inbunden", price: 50 , instock : 45, rating : 1.3, totalratings: 7, quantity: 1     },
            { id: 8, image_urls: "http://localhost:5500/website/pictures/8.jpg" ,productname: "Stockholm:Vattnet, Öarna och staden", author: "Per Kallstenius, Jeppe Wikström", category: "Resor", Typ: "Inbunden", price: 360 , instock : 94 , rating : 1.3, totalratings: 14, quantity: 1   },
            { id: 9, image_urls: "http://localhost:5500/website/pictures/9.jpg" ,productname: "Kring Västergötlands berg", author: "Ola Högberg", category: "Resor", Typ: "Inbunden", price: 179 , instock : 75, rating : 1.3, totalratings: 44, quantity: 1     },
            { id: 10, image_urls: "http://localhost:5500/website/pictures/10.jpg" ,productname: "Salt som socker", author: "Linn Utbult", category: "Mat & dryck", Typ: "Inbunden", price: 189, instock : 40 , rating : 1.3, totalratings: 32, quantity: 1    },
            { id: 11, image_urls: "http://localhost:5500/website/pictures/11.jpg" ,productname: "Zeinas kitchen : recept från Mellanöstern", author: "Zeina Mourtada", category: "Mat & dryck", Typ: "Inbunden", price: 219 , instock : 30,  rating : 5, totalratings: 71, quantity: 1 },
            { id: 12, image_urls: "http://localhost:5500/website/pictures/12.jpg" ,productname: "Pauls kök : en grönare matfilosofi", author: "Paul Svensson", category: "Mat & dryck", Typ: "Inbunden", price: 119 , instock : 10,  rating : 3, totalratings: 4, quantity: 1 }
        ]);


})




module.exports = route;

