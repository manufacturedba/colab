var db = require('./connection')();
var s3 = require('s3');

var mod = {};

var collection = db.collection('colab');
/*
    {
        media: [
            {
                creationDate: ISOString,
                fileName: String,
                fileLocation: String
            }
        ] || null,
        content: html String || null,
        creator: String || null,
        title: String || null,
        creationDate: ISOString
    }
 */
mod.save = function(req, res, next){
    console.log(req);
};
module.exports = mod;
