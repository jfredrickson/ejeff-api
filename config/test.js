module.exports = new function () {
  this.env = 'test'
  this.port = undefined // Random port for test
  this.baseUrl = process.env.BASE_URL || 'http://localhost:' + this.port + '/'
  this.secret = process.env.SECRET || 'abc123'
  this.tokenExpiration = '1 day'
  this.logFormat = 'dev'
  this.db = {
    url: process.env.DATABASE_URL || 'mongodb://localhost/ejeff-test'
  }
  this.inquiriesMailFrom = 'from@example.net'
  this.inquiriesMailTo = 'to@example.com'
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
