var store = require('../lib/store');
var socketRoutes = require('../lib/socketRoutes');

var events = {
    find: store.find
}

module.exports = {
    use: function(){
        socketRoutes.add(events);
    }
}
