var express = require('express');
var router = express.Router();
var store = require('../lib/store');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET fetch entries */
router.get('/get', function(req, res, next){
    res.json([{
        content: "I think we did a great job today guys",
        creator: "roberto",
        title: "Hello world",
        creationDate: new Date().toISOString()
    }]);
});

/* POST save entries */
router.post('/upload', store.save);

module.exports = router;
