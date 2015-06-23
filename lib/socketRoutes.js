/**
    {
        find: function(data){
            return data;
        }
    }
 */
var Q = require('q');

var routes = {};

module.exports = {
    add: function(events){
        routes = events;
    },
    attach: function(io){
        io.on('connection', function(socket){

            for (var r in routes) {
                socket.on(r, function(data){
                    var fn = routes[r];
                    Q.fcall(function(){
                        return fn(data);
                    }).then(function(result){
                        socket.emit(r, result);
                    });
                });
            }

        });
    }
}
