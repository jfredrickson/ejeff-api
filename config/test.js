module.exports = {
  env: 'test',
  port: undefined, // Random port for test
  secret: process.env.SECRET || 'abc123',
  tokenExpiration: '1 day',
  logFormat: 'dev',
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost/ejeff-test'
  }
}
