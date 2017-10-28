const User = require('../models/user')

module.exports.create = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  user.save((err) => {
    if (err) return res.status(500).send(err)
    res.status(201).json({ _id: user._id, username: user.username })
  })
}

module.exports.update = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) return res.status(500).send(err)
    user.username = req.body.username || user.username
    user.password = req.body.password || user.password
    user.save((err) => {
      if (err) return res.status(500).send(err)
      res.status(204).send()
    })
  })
}
