const Project = require('../../models/project');

module.exports =  function (router) {
  router.get('/project', function (req, res) {
    
  })
  router.post('/project', function (req, res) {
    let project = new Project(req.body);
    note.save(function(err, note) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(project);
    })
  })
}