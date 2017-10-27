module.exports = {
  env: 'test',
  port: undefined, // Random port for test
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost/ejeff-test'
  }
}
