const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const config = require('../config')

const basicStrategy = new BasicStrategy((username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) return done(err)
    if (!user) return done(null, false, { message: "Invalid username or password." })
    user.verifyPassword(password, (err, verified) => {
      if (err) return done(err)
      if (!verified) return done(null, false, { message: "Invalid username or password." })
      return done(null, user)
    })
  })
})

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret
}

const jwtStrategy = new JwtStrategy(jwtStrategyOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    console.log(user)
    if (err) return done(err)
    if (!user) return done(null, false)
    done(null, user)
  })
})

passport.use(basicStrategy)
passport.use(jwtStrategy)

module.exports.requireLogin = passport.authenticate('basic', { session: false })
module.exports.requireAuth = passport.authenticate('jwt', { session: false })
