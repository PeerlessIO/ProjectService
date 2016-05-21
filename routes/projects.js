var express = require('express');
var router = express.Router();

/* GET project listing. */
router.get('/', function(req, res) {
    res.send('respond with a list of projects');
});

module.exports = router;