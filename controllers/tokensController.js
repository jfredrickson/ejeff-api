const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports.create = (req, res) => {
  const payload = {
    _id: req.user._id,
    username: req.user.username
  }
  res.status(200).json({
    token: jwt.sign(payload, config.secret, { expiresIn: config.tokenExpiration }),
    user: payload
  })
}
