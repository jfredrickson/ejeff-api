const jwt = require('jsonwebtoken')
const config = require('../config')

/**
 * @api {post} /token Get authentication token
 * @apiName PostToken
 * @apiGroup Token
 * 
 * @apiHeader {String} Authorization HTTP basic auth data
 * 
 * @apiHeaderExample HeaderExample
 *   "Authorization: Basic Zm9vYmFyOmZvb2Jhcg=="
 * 
 * @apiSuccess (Response) {String} token Authentication token
 * @apiSuccess (Response) {Object} user User information
 * 
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 200 OK
 *   {
 *     "token": "abc123",
 *     "user": {
 *       "_id": 1,
 *       "username": "foobar"
 *     }
 *   }
 */
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
