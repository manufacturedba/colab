var mod = angular.module('colab.controllers', ['colab.services']);

mod.controller('homeCtrl', [
    '$scope',
    'storeSrvc',
    function(scope, storeSrvc){
        storeSrvc.find()
            .success(function(data){
                scope.entries = data;
            })
            .error(function(){
                console.log('error');
            });
}]);
