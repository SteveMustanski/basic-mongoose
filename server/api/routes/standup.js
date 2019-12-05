const Standup = require('../../models/standup')

module.exports =  function (router) {
  router.get('/standup', function (req, res) {
    Standup.find()
      .sort({ 'createdOn': 1})
      .exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding standup notes',
          error: err
        }))
  })
  router.post('/standup', function (req, res) {
    let note = new Standup(req.body);
    note.save(function(err, note) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(note);
    })
  })
}