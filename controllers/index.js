const express = require('express')
const router = express.Router()
const projectsController = require('./projectsController')
const tagsController = require('./tagsController')
const usersController = require('./usersController')
const tokensController = require('./tokensController')
const inquiriesController = require('./inquiriesController')
const auth = require('../services/auth')

router.get('/projects', projectsController.index)
router.get('/projects/:projectId', projectsController.show)
router.post('/projects', auth.requireAuth, projectsController.create)
router.put('/projects/:projectId', auth.requireAuth, projectsController.update)
router.delete('/projects/:projectId', auth.requireAuth, projectsController.destroy)

router.get('/tags', tagsController.index)

router.post('/users', auth.requireAuth, usersController.create)
router.put('/users/:userId', auth.requireAuth, usersController.update)

router.post('/token', auth.requireLogin, tokensController.create)

router.post('/inquiries', inquiriesController.create)

router.get('/', (req, res) => {
  res.json()
})

module.exports = router
