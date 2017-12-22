const Project = require('../models/project')

module.exports.index = (req, res) => {
  Project.find().distinct('tags', (err, tags) => {
    if (err) return res.status(500).send(err)
    res.status(200).json(tags)
  })
}
