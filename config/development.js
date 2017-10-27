module.exports = {
  env: 'development',
  port: process.env.PORT || 3000,
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost/ejeff-development'
  }
}
