module.exports = {
  env: 'production',
  port: process.env.PORT,
  secret: process.env.SECRET,
  tokenExpiration: process.env.TOKEN_EXPIRATION || '1 day',
  logFormat: process.env.LOG_FORMAT || 'common',
  db: {
    url: process.env.DATABASE_URL
  },
  inquiriesMailFrom: process.env.INQUIRIES_MAIL_FROM,
  inquiriesMailTo: process.env.INQUIRIES_MAIL_TO,
  mailTransport: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  }
}
