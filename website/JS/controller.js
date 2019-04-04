
var app = angular.module("angularApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'view/card.html',
        controller: 'userController'
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



app.controller("userController", function($scope, $http) {




    $http.get('http://localhost:5000/api/products')
    .then(function(res) {
        $scope.products = res.data;
    });
    
    console.log($scope.products)

});
