var mod = angular.module('colab.controllers', ['colab.services']);

mod.controller('homeCtrl', [
    '$scope',
    'storeSrvc',
    function(scope, storeSrvc){
        storeSrvc.find()
            .then(function(data){
                scope.entries = data;
            })
}]);
