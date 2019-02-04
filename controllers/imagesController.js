const config = require('../config')
const fs = require('fs')

/**
 * @api {post} /images Upload image
 * @apiName PostImage
 * @apiGroup Images
 *
 * @apiDescription Receives an image upload.
 * The request must be `multipart/form-data` with the image included in a field named `image`.
 *
 * @apiSuccess (Response) {String} url URL to the image
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 201 Created
 *   {
 *     "url": "http://localhost:3000/files/image-20190204T203340215Z-dot.png"
 *   }
 */
module.exports.create = (req, res) => {
  if (!/^image/.test(req.file.mimetype)) {
    fs.unlinkSync(req.file.path)
    return res.status(400).send("The file must be an image.")
  }

  res.status(201).json({
    url: config.baseUrl + 'files/' + req.file.filename,
  })
}