
var app = angular.module("angularApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'view/cards.html'
    })
    .when('/card', {
        templateUrl: 'view/card.html', 
        controller: 'userController'
    })
    .when('/list', {
        templateUrl: 'view/list.html',
        controller: 'userController'
    })
    .otherwise({
        redirectionTo: '/'
    })

}]);



app.controller("userController", function($scope) {

    products = 
    [
        { image_urls: "../pictures/1.jpg" ,productname: "Omgiven av psykopater", author: "Thomas Erikson", category: "Psykologi", Typ: "Häftad", price: 45 , instock : 100  },
        { image_urls: "../pictures/2.jpg" ,productname: "Hjärnstark", author: "Anders Hansen", category: "Psykologi", Typ: "Pocket", price: 59 , instock : 40  },
        { image_urls: "../pictures/3.jpg" ,productname: "Lär dig leva : mindre stress - mer närvaro ", author: "Mats Billmark, Susan Billmark", category: "Psykologi", Typ: "Inbunden", price: 45 , instock : 40  },
        { image_urls: "../pictures/4.jpg" ,productname: "Mitt hjärta är ditt", author: "Anna Jansson", category: "Deckare", Typ: "E-bok", price: 149 , instock : 15  },
        { image_urls: "../pictures/5.jpg" ,productname: "Döden är alltid sann", author: "Anna Jansson", category: "Deckare", Typ: "Pocket", price: 63 , instock : 45  },
        { image_urls: "../pictures/6.jpg" ,productname: "Systrarna", author: "Claire Douglas", category: "Deckare", Typ: "Pocket", price: 59 , instock : 10  },
        { image_urls: "../pictures/7.jpg" ,productname: "Jorden runt på 1000 dagar", author: "Fredrika Ek", category: "Resor", Typ: "Inbunden", price: 50 , instock : 45  },
        { image_urls: "../pictures/8.jpg" ,productname: "Stockholm:Vattnet, Öarna och staden", author: "Per Kallstenius, Jeppe Wikström", category: "Resor", Typ: "Inbunden", price: 360 , instock : 94  },
        { image_urls: "../pictures/9.jpg" ,productname: "Kring Västergötlands berg", author: "Ola Högberg", category: "Resor", Typ: "Inbunden", price: 179 , instock : 75  },
        { image_urls: "../pictures/10.jpg" ,productname: "Salt som socker", author: "Linn Utbult", category: "Mat & dryck", Typ: "Inbunden", price: 189, instock : 40  },
        { image_urls: "../pictures/11.jpg" ,productname: "Zeinas kitchen : recept från Mellanöstern", author: "Zeina Mourtada", category: "Mat & dryck", Typ: "Inbunden", price: 219 , instock : 30  },
        { image_urls: "../pictures/12.jpg" ,productname: "Pauls kök : en grönare matfilosofi", author: "Paul Svensson", category: "Mat & dryck", Typ: "Inbunden", price: 119 , instock : 10  }
    ];
    $scope.products = products;

});
