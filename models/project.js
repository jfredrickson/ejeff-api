const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  details: String
})

module.exports = mongoose.model('Project', ProjectSchema)
