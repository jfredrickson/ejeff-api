const express = require('express')
const router = express.Router()
const projectsController = require('./projectsController')
const usersController = require('./usersController')

router.get('/projects', projectsController.index)
router.get('/projects/:projectId', projectsController.show)
router.post('/projects', projectsController.create)
router.put('/projects/:projectId', projectsController.update)
router.delete('/projects/:projectId', projectsController.destroy)

router.post('/users', usersController.create)
router.put('/users/:userId', usersController.update)

router.get('/', (req, res) => {
  res.json()
})

module.exports = router
