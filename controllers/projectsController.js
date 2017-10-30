const Project = require('../models/project')

module.exports.index = (req, res) => {
  Project.find((err, projects) => {
    if (err) return res.status(500).send(err)
    res.status(200).json(projects)
  })
}

module.exports.show = (req, res) => {
  Project.findById(req.params.projectId, (err, project) => {
    if (err) return res.status(500).send(err)
    res.status(200).json(project)
  })
}

module.exports.create = (req, res) => {
  let project = new Project()
  project.title = req.body.title
  project.summary = req.body.summary
  project.details = req.body.details
  project.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(400).send(err)
      } else {
        return res.status(500).send()
      }
    }
    res.status(201).json(project)
  })
}

module.exports.update = (req, res) => {
  Project.findById(req.params.projectId, (err, project) => {
    if (err) return res.status(500).send(err)
    project.title = req.body.title || project.title
    project.summary = req.body.summary || project.summary
    project.details = req.body.details || project.details
    project.save((err) => {
      if (err) {
        if (err.name === 'ValidationError') {
          return res.status(400).send(err)
        } else {
          return res.status(500).send()
        }
      }
      res.status(204).send()
    })
  })
}

module.exports.destroy = (req, res) => {
  Project.findByIdAndRemove(req.params.projectId, (err) => {
    if (err) return res.status(500).send(err)
    res.status(204).send()
  })
}
