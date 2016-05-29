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
       if (project) {
           res.send(project);
       }
       else {
           res.status(404).send('Project not found');
       }
    });
});

module.exports = router;