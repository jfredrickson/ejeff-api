const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  const user = this

  // If the password hasn't changed, don't bother re-encrypting it
  if (!user.isModified('password')) return next()

  bcrypt.genSalt((err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.verifyPassword = function (password, done) {
  bcrypt.compare(password, this.password, (err, verified) => {
    if (err) return done(err)
    done(null, verified)
  })
}

UserSchema.methods.toJSON = function () {
  return {
    username: this.username,
  }
}

module.exports = mongoose.model('User', UserSchema)
