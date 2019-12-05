const Project = require('../../models/project');

module.exports =  function (router) {
  const qry = {
    isActive: {$eq: true}
  }

  router.get('/project', function (req, res) {
    Project.find(qry) 
    .sort({ 'name': 1})
    .exec()
    .then(docs => res.status(200)
      .json(docs))
    .catch(err => res.status(500)
      .json({
        message: 'Error finding team members',
        error: err
      }))
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