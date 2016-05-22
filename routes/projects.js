var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET project listing. */
router.get('/', function(req, res) {
    fs.readFile( './data/projects.json', 'utf8', function (err, data) {
       console.log(data);
       res.send(data);
    });
});

module.exports = router;