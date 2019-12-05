const Standup = require('../../models/standup');
const mongoose = require('mongoose');

module.exports =  function (router) {

  // get all standup notes
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
  // get by team member
  router.get('/standup/:teamMemberId', function (req, res) {
    const qry = {
      _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
    };
    console.log(qry);
    Standup.find(qry)
      .sort({ 'createdOn': 1})
      .exec()
      .then(docs => res.Status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({message: 'Error finding standup notes for the team member id', 
               error: err}))

  })
  // add a stand up
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