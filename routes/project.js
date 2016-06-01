var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET project by ID. */
router.get('/:id', function(req, res) {
     fs.readFile( './data/projects.json', 'utf8', function (err, data) {
       var projects = JSON.parse(data);
       var project = null;
       for (i = 0; i < projects.length; i++) {
           if (req.params.id == projects[i]._id) {
               console.log(projects[i]._id);
               project = projects[i];
           }
       }
       
       //HACK FOR LOCAL DEVELOPMENT FIND A HOME IN MIDDLEWARE
       // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
       // Set to true if you need the website to include cookies in the requests sent
       // to the API (e.g. in case you use sessions)
       res.setHeader('Access-Control-Allow-Credentials', true);
       
       if (project) {
           res.send(project);
       }
       else {
           res.status(404).send('Project not found');
       }
    });
});

module.exports = router;