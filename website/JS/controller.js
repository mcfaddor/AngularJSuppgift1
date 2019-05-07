
var app = angular
    .module("angularApp", ['ngRoute', 'ngCookies'])

app.run(function ($rootScope, $cookies) {


    var storedCart = $cookies.getObject('savecookies');

    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

    if (storedCart) {
        $rootScope.cart = storedCart;
    } else {
        $rootScope.cart = [];
    }



})



app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'view/card.html'
        })
        .when('/card', {
            templateUrl: 'view/card.html'
        })
        .when('/list', {
            templateUrl: 'view/list.html'
        })
        .otherwise({
            redirectionTo: '/'
        })

}]);


app.controller("productController", function ($rootScope, $http, $cookies) {

    $rootScope.cart = [];

    
    if ($cookies.getObject("shoppingcart") !== null) {
        $rootScope.cart = $cookies.getObject("shoppingcart");
        tempcart = $cookies.getObject("shoppingcart");
    }
    var tempcart = [];



    const starsTotal = 5;

    $http.get('http://localhost:5000/api/products')
        .then(function (res) {
            $rootScope.products = res.data;
        });

    var getProductId = function (products, id) {
        return _.find(products, function (product) {
            return product.id === id
        });
    };


    $rootScope.rating = function (input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }

    $rootScope.emptycart = "Your cart is empty maddafakka";



    var cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);

    $rootScope.addItem = function (product) {
        var found = getProductId($rootScope.cart, product.id);


        if (found) {
            found.quantity += product.quantity;
        }
        else {
            tempcart.push(angular.copy(product));
            $rootScope.cart = tempcart;
        }

        $cookies.putObject("shoppingcart", $rootScope.cart, { expires: cookieExp });

    }

    $rootScope.removeItem = function (product) {
        var index = $rootScope.cart.indexOf(product);
        $rootScope.cart.splice(index, 1);
        $cookies.putObject("shoppingcart", $rootScope.cart, { expires: cookieExp });
    }

    $rootScope.getProductCost = function (product) {
        return product.quantity * product.price;
    }

    $rootScope.getProductQuantity = function (product) {
        return product.quantity;
    }

    $rootScope.getTotal = function () {
        var total = _.reduce($rootScope.cart, function (sum, product) {
            return sum + $rootScope.getProductCost(product);
        }, 0);

        return total;
    }

    $rootScope.getQuantity = function () {
        var quantity = _.reduce($rootScope.cart, function (sum, product) {
            return sum + $rootScope.getProductQuantity(product);
        }, 0);

        if (quantity === 0) {
            $rootScope.badgeColor = "badge-secondary"
        } else {
            $rootScope.badgeColor = "badge-danger"
        }

        return quantity;
    }


});




$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
