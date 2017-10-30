module.exports = {
  env: 'development',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'abc123',
  tokenExpiration: '1 day',
  logFormat: 'dev',
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost/ejeff-development'
  }
}
