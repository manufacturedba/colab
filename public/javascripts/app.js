var mod = angular.module('colab', [
    'ngRoute',
    'ngPaper',
    'colab.controllers'
]);

mod.config([
    '$routeProvider',
    function(routeProvider){
        routeProvider
            .when('/home', {
                templateUrl: 'home.jade',
                controller: 'homeCtrl'
            })
            .otherwise('/home')

    }
]);

mod.run([
    '$location',
    function(location){
        location.path('/home')
}]);


window.addEventListener('WebComponentsReady', function(){
    angular.bootstrap(document, ['colab']);
})
