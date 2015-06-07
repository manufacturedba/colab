var promisedMongo = require('promised-mongo');
var config = require('config');
var mongodbUri = require('mongodb-uri');

var conSettings = {
    hosts: [
        {
            host:config.mongo.host || 'localhost',
            port: config.mongo.port || 27017
        }
    ],
    database: config.mongo.database || 'test'
}

var Connection = function(){
    var uri = mongodbUri.format(conSettings);
    return promisedMongo(uri);
}

module.exports = Connection;
