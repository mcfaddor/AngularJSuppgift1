
var app = angular
.module("angularApp", ['ngRoute', 'ngCookies'])

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'view/card.html',
        controller: 'productController'
    })
    .when('/card', {
        templateUrl: 'view/card.html', 
        controller: 'productController'
    
    })
    .when('/list', {
        templateUrl: 'view/list.html',
        controller: 'productController'
    })
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'userController'
    })
    .otherwise({
        redirectionTo: '/'
    })
 
}]);







app.controller("userController", function($rootScope, $http) {

});

app.controller("productController", function($rootScope, $http) {
    
    const starsTotal = 5;
    
    var getProductId = function(products, id) {
        return _.find(products, function(product) {
            return product.id === id
        });
    };


    $http.get('http://localhost:5000/api/products')
    .then(function(res) {
        $rootScope.products = res.data;   
    });
   
    $rootScope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    } 
  
    $rootScope.cart = [];
    $rootScope.emptycart = ""; 

    $rootScope.addItem = function(product) {
        var found = getProductId($rootScope.cart, product.id);

        if(found) {
            found.quantity += product.quantity;
        }
        else {
            $rootScope.cart.push(angular.copy(product));
        }
    }

    $rootScope.removeItem = function(product) {
        var index = $rootScope.cart.indexOf(product);
        $rootScope.cart.splice(index, 1);
    }

    $rootScope.getProductCost = function(product) {
        return product.quantity * product.price;
    }

    $rootScope.getTotal = function() {
        var total = _.reduce($rootScope.cart, function(sum, product) {
            return sum + $rootScope.getProductCost(product);
        }, 0);

        if($rootScope.cart.length === 0) {
            $rootScope.emptycart = "Your cart is empty."
        }
        else {
            $rootScope.emptycart = ""
        }   
        return total;

        $scope.addItem = function(product) {
            var found = getProductId($scope.cart, product.id);
        
            if(found) {
                found.quantity += product.quantity;
            }
            else {
                $scope.cart.push(angular.copy(product));
            }
        }
        $scope.removeItem = function(product) {
            var index = $scope.cart.indexOf(product);
            $scope.cart.splice(index, 1);
        }
        
        $scope.getProductCost = function(product) {
            return product.quantity * product.price;
        }
        
        $scope.getTotal = function() {
            var total = _.reduce($scope.cart, function(sum, product) {
                return sum + $scope.getProductCost(product);
            }, 0);
        
            if($scope.cart.length === 0) {
                $scope.emptycart = "Your cart is empty."
            }
            else {
                $scope.emptycart = ""
            }   
            return total;
        }
    }


    run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
    function run($rootScope, $location, $cookies, $http) {

        $rootScope.globals = $cookies.getObject("globals") || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common["Authorization"] = 'Basic ' +  $rootScope.globals.currentUser.authdata;
            console.log($http.defaults.headers.common["Authorization"])
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
            
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
            }
        })
    }



});



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
