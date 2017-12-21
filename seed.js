const mongoose = require('mongoose')
const config = require('./config')
const User = require('./models/user')

mongoose.Promise = global.Promise

mongoose.connect(config.db.url, { useMongoClient: true }, (err, db) => {
  const initialUser = new User({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  })
  initialUser.save((err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Seeded user: ' + initialUser.username)
    }
    mongoose.connection.close()
  })
})
