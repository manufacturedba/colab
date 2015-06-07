var mod = angular.module('colab.services', []);

mod.service('storeSrvc', ['$http', function(http){
    var endpoint = "/get";
    this.find = function(){
        return http.get(endpoint);
    }
}]);
