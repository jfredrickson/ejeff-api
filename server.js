const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const morgan = require('morgan')
const config = require('./config')
const routes = require('./controllers')

mongoose.Promise = global.Promise
mongoose.connect(config.db.url, { useMongoClient: true })

const app = express()

app.use(morgan(config.logFormat))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use('/api', routes)

let server = app.listen(config.port, () => {
  console.log(`Listening on port ${server.address().port} (environment: ${config.env})`)
})

module.exports = app
