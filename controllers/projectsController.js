const Project = require('../models/project')

/**
 * @api {get} /projects List all projects
 * @apiName GetProjects
 * @apiGroup Projects
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 200 OK
 *   [
 *     {
 *       "_id": "5a986f06be4c400237ddb3b0",
 *       "title": "Project 1",
 *       "__v": 0,
 *       "tags": [],
 *       "imageRef": "https://example.com/project1.png"
 *     },
 *     {
 *       "_id": "5a987ee8c6be33349b3defe5",
 *       "title": "Project 2",
 *       "__v": 0,
 *       "tags": [],
 *       "imageRef": "/files/project2.png"
 *     },
 *     {
 *       "_id": "5bca13ee58806d53af7becc3",
 *       "summary": "Project summary",
 *       "title": "Project 3",
 *       "__v": 0,
 *       "tags": [
 *           "alpha",
 *           "beta",
 *           "gamma"
 *       ]
 *     }
 *   ]
 */
module.exports.index = (req, res) => {
  Project.find((err, projects) => {
    if (err) return res.status(500).send(err)
    res.status(200).json(projects)
  })
}

/**
 * @api {get} /projects/:projectId Get a specific project
 * @apiName GetProject
 * @apiGroup Projects
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 200 OK
 *   {
 *     "_id": "5bca13ee58806d53af7becc3",
 *     "summary": "Project summary",
 *     "title": "Project 3",
 *     "__v": 0,
 *     "tags": [
 *       "alpha",
 *       "beta",
 *       "gamma"
 *     ],
 *     "imageRef": "https://example.com/project3.png"
 *   }
 */
module.exports.show = (req, res) => {
  Project.findById(req.params.projectId, (err, project) => {
    if (err) return res.status(500).send(err)
    res.status(200).json(project)
  })
}

/**
 * @api {post} /projects Create project
 * @apiName PostProject
 * @apiGroup Projects
 *
 * @apiParam (Request) {String} title Project title
 * @apiParam (Request) {String} [summary] Brief project summary
 * @apiParam (Request) {String} [details] Detailed description
 * @apiParam (Request) {String[]} [tags] Array of tags
 * @apiParam (Request) {String} [imageRef] Image URL or filename
 *
 * @apiParamExample RequestExample
 *   {
 *     "title": "foobar",
 *     "summary": "An awesome project",
 *     "details": "This project is all about foobar.",
 *     "tags": [ "foo", "bar" ],
 *     "imageRef": "/files/foobar.png"
 *   }
 *
 * @apiSuccess (Response) {String} username New username
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 201 Created
 *   {
 *     "__v": 0,
 *     "summary": "summary",
 *     "title": "p3",
 *     "_id": "5bca140f58806d53af7becc5",
 *     "tags": [
 *       "foo",
 *       "bar"
 *     ],
 *     "imageRef": "/files/foobar.png"
 *   }
 */
module.exports.create = (req, res) => {
  let project = new Project()
  project.title = req.body.title
  project.summary = req.body.summary
  project.details = req.body.details
  project.tags = req.body.tags
  project.imageRef = req.body.imageRef
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

/**
 * @api {put} /projects/:projectId Update project
 * @apiName PutProject
 * @apiGroup Projects
 *
 * @apiParam (Request) {String} [title] Updated project title
 * @apiParam (Request) {String} [summary] Updated brief project summary
 * @apiParam (Request) {String} [details] Updated detailed description
 * @apiParam (Request) {String[]} [tags] Updated array of tags
 * @apiParam (Request) {String} [imageRef] Updated image URL or filename
 *
 * @apiParamExample RequestExample
 *   {
 *     "details": "Here's an updated description for this project.",
 *     "tags": [ "foo", "bar", "newtag" ]
 *   }
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 204 No Content
 */
module.exports.update = (req, res) => {
  Project.findById(req.params.projectId, (err, project) => {
    if (err) return res.status(500).send(err)
    project.title = req.body.title || project.title
    project.summary = req.body.summary || project.summary
    project.details = req.body.details || project.details
    project.tags = req.body.tags || project.tags
    project.imageRef = req.body.imageRef || project.imageRef
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

/**
 * @api {delete} /projects/:projectId Remove project
 * @apiName DeleteProject
 * @apiGroup Projects
 *
 * @apiSuccessExample SuccessResponse
 *   HTTP/1.1 204 No Content
 */
module.exports.destroy = (req, res) => {
  Project.findByIdAndRemove(req.params.projectId, (err) => {
    if (err) return res.status(500).send(err)
    res.status(204).send()
  })
}
