module.exports = {
  env: 'test',
  port: undefined, // Random port for test
  secret: process.env.SECRET || 'abc123',
  tokenExpiration: '1 day',
  logFormat: 'dev',
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost/ejeff-test'
  },
  inquiriesMailFrom: 'from@example.net',
  inquiriesMailTo: 'to@example.com',
  mailTransport: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  }
}
