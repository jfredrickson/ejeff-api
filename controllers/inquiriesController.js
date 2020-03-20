const config = require('../config')
const nodemailer = require('nodemailer')

/**
 * @api {post} /inquiries Create inquiry
 * @apiName PostInquiry
 * @apiGroup Inquiries
 *
 * @apiParam (Request) {String} name Submitter name
 * @apiParam (Request) {String} email Submitter email
 * @apiParam (Request) {String} message Message
 *
 * @apiParamExample RequestExample
 *   {
 *     "name": "J Doe",
 *     "email": "jdoe@example.com",
 *     "message": "Hello!"
 *   }
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 204 No Content
 */
module.exports.create = (req, res) => {
  if (!validateEmail(req.body.email)) {
    return res.status(400).send("Invalid email address.")
  }
  if (!req.body.name) {
    return res.status(400).send("A name is required.")
  }
  if (!req.body.message) {
    return res.status(400).send("A message is required.")
  }

  const subject = req.body.message.substring(0, 50) + (req.body.message.length > 50 ? '...' : '')

  const mail = {
    from: `${req.body.name} <${req.body.email}>`,
    to: config.inquiriesMailTo,
    subject: `[ejeff.org inquiry] ${subject}`,
    text: req.body.message
  }

  const transport = nodemailer.createTransport(config.mailTransport)

  transport.sendMail(mail, (err, info) => {
    if (err) {
      console.error(err)
      return res.status(500).send()
    }
    res.status(204).send()
  })
}

/**
 * Basic email address format sanity check, matching most of RFC2822.
 */
validateEmail = function (email) {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return re.test(email)
}
