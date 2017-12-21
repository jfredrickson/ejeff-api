module.exports = {
  env: 'production',
  port: process.env.PORT,
  secret: process.env.SECRET,
  tokenExpiration: process.env.TOKEN_EXPIRATION || '1 day',
  logFormat: process.env.LOG_FORMAT || 'common',
  db: {
    url: process.env.DATABASE_URL
  }
}
