const User = require('../models/user')

/**
 * @api {post} /users Create user
 * @apiName PostUsers
 * @apiGroup Users
 * 
 * @apiParam (Request) {String} username Unique username
 * @apiParam (Request) {String} password Password for the new user
 * 
 * @apiParamExample RequestExample
 *   {
 *     "username": "foobar",
 *     "password": "foobar"
 *   }
 * 
 * @apiSuccess (Response) {String} username New username
 * 
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 201 Created
 *   {
 *     "username": "foobar"
 *   }
 */
module.exports.create = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  user.save((err) => {
    if (err) return res.status(500).send(err)
    res.status(201).json(user.toJSON())
  })
}

/**
 * @api {put} /users/:userId Update user
 * @apiName PutUsers
 * @apiGroup Users
 * 
 * @apiParam (Request) {String} [username] Updated username
 * @apiParam (Request) {String} [password] Updated password
 * 
 * @apiParamExample RequestExample
 *   {
 *     "username": "newusername",
 *     "password": "newpassword"
 *   }
 * 
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 204 No Content
 * 
 * @apiErrorExample InvalidUserID
 *   HTTP/1.1 404 Not Found
 */
module.exports.update = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (user === null) return res.status(404).send()
    if (err) return res.status(500).send(err)
    user.username = req.body.username || user.username
    user.password = req.body.password || user.password
    user.save((err) => {
      if (err) return res.status(500).send(err)
      res.status(204).send()
    })
  })
}
