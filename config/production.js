module.exports = new function () {
  this.env = 'production'
  this.port = process.env.PORT
  this.baseUrl = process.env.BASE_URL
  this.secret = process.env.SECRET
  this.tokenExpiration = process.env.TOKEN_EXPIRATION || '1 day'
  this.logFormat = process.env.LOG_FORMAT || 'common'
  this.db = {
    url: process.env.DATABASE_URL
  }
  this.inquiriesMailFrom = process.env.INQUIRIES_MAIL_FROM
  this.inquiriesMailTo = process.env.INQUIRIES_MAIL_TO
  this.mailTransport = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  }
  this.fileUploadDestination = 'files/'
}
