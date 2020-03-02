const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config')
const routes = require('./controllers')

mongoose.Promise = global.Promise
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use(morgan(config.logFormat))
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())
app.use('/api', routes)
app.use('/apidoc', express.static(__dirname + '/apidoc'))
app.use('/files', express.static(config.fileUploadDestination))

let server = app.listen(config.port, () => {
  console.log(`Listening on port ${server.address().port} (environment: ${config.env})`)
})

module.exports = app
