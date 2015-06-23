var mod = angular.module('colab.services');

mod.service('socketSrvc', ['$log', '$q', function(log, Q){
    'use strict';

    var on = false;
    var deferreds = [];

    if(io){
        var socket = io();
        socket.on('connect', function(){
            log.info('Socket is connected');
            socket.emit('ping')
            socket.on('ping', function(){
                console.log("We're in business");
            });
            on = true;
            resolve();
        });
    } else {
        log.error('No Socket Server');
    }

    this.call = function(name, data){
        var deferred = Q.defer();

        var fn = function(){
            console.log('Calling ' + name);
            socket.emit(name, data);
            socket.on(name, deferred.resolve);
        }

        if (!!on) {
            fn();
        } else {
            deferreds.push(fn);
        }

        return deferred.promise;
    }

    function resolve(){
        deferreds.forEach(function(deferred){
            deferred();
        });

        deferreds = [];
    }
}]);
