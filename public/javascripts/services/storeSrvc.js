var mod = angular.module('colab.services', []);

mod.service('storeSrvc', ['socketSrvc', function(socket){
    this.find = function(){
        return socket.call("find");
    }
}]);
