const express = require('express')
const router = express.Router()
const projectsController = require('./projectsController')

router.get('/projects', projectsController.index)
router.get('/projects/:projectId', projectsController.show)
router.post('/projects', projectsController.create)
router.put('/projects/:projectId', projectsController.update)
router.delete('/projects/:projectId', projectsController.destroy)

router.get('/', (req, res) => {
  res.json()
})

module.exports = router
