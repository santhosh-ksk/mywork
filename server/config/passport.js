var LocalStrategy = require('passport-local').Strategy;

var User = require('./../mongoose/mongooseSchema/userDetailSchema.js');


module.exports = function(passport){

      // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
          done(null, user);
      });
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use(new LocalStrategy(function(userID, password, done) {
    process.nextTick(function() {
      User.findOne({'userID': userID}, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }

        return done(null, user);
      });
    });
  }));

};
