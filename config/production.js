module.exports = {
  env: 'production',
  port: process.env.PORT,
  db: {
    url: process.env.DATABASE_URL
  }
}
