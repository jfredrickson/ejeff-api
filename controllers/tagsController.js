const Project = require('../models/project')

/**
 * @api {get} /tags List all tags
 * @apiName GetTags
 * @apiGroup Tags
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 200 OK
 *   [
 *     "alpha",
 *     "beta",
 *     "gamma"
 *   ]
 */
module.exports.index = (req, res) => {
  Project.find().distinct('tags', (err, tags) => {
    if (err) return res.status(500).send(err)
    res.status(200).json(tags)
  })
}
