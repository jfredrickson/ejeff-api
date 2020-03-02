const chai = require('chai')
const chaiHttp = require('chai-http')
const jwt = require('jsonwebtoken')
const Project = require('../models/project')
const User = require('../models/user')
const server = require('../server')
const config = require('../config')

const should = chai.should()
chai.use(chaiHttp)

describe('Projects', function () {
  let testUser

  beforeEach(function (done) {
    Project.deleteMany({}, function (err) {
      done()
    })
  })

  beforeEach(function (done) {
    User.deleteMany({}, function (err) {
      User.create({ username: 'user1', password: 'user1' }, (err, user) => {
        testUser = user
        done()
      })
    })
  })

  describe('GET /api/projects', function () {
    it('should get all projects', function (done) {
      chai.request(server).get('/api/projects').end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.an('array')
        res.body.length.should.be.eql(0)
        done()
      })
    })
  })

  describe('POST /api/projects', function () {
    it('should add a project', function (done) {
      let project = {
        title: 'Title',
        summary: 'Summary',
        details: 'Details'
      }
      let token = jwt.sign({_id: testUser._id, username: testUser.username}, config.secret, { expiresIn: config.tokenExpiration })
      chai.request(server).post('/api/projects').set('Authorization', `Bearer ${token}`).send(project).end((err, res) => {
        res.should.have.status(201)
        res.body.should.be.an('object')
        done()
      })
    })

    it('should not add a project without a title', function (done) {
      let project = {
        summary: 'Summary',
        details: 'Details'
      }
      let token = jwt.sign({_id: testUser._id, username: testUser.username}, config.secret, { expiresIn: config.tokenExpiration })
      chai.request(server).post('/api/projects').set('Authorization', `Bearer ${token}`).send(project).end((err, res) => {
        res.should.have.status(400)
        res.body.should.be.an('object')
        res.body.should.have.property('errors')
        res.body.errors.should.have.property('title')
        res.body.errors.title.should.have.property('kind').eql('required')
        done()
      })
    })
  })
})
