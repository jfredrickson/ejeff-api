const config = require('../config')
const multer = require('multer')

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    // Create a timestamp using only alphanumeric characters.
    const timestamp = (new Date()).toJSON().replace(/[-:.]/g, '')

    // Allow only alphanumeric, dot, underscore, dash characters in filenames.
    const originalName = file.originalname.replace(/[^\w._-]/g, '_')

    cb(null, file.fieldname + '-' + timestamp + '-' + originalName)
  },
  destination: config.fileUploadDestination
})

module.exports = multer({ storage: storage })
