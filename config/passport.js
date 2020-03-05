const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;
// Use Passport.js for local authentication.

module.exports = passport => {
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        firstNameField: "firstName",
        lastNameField: "lastName",
        usernameField: "email",
        passwordField: "password"
      },

      function(username, password, done) {
        User.findOne({ username: email }, function(err, user) {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, false);
          } else {
            User.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password
            }).then(newUser => {
              return done(null, false);
            });
          }
          if (!user.verifyPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        });
      }
    )
  );
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },

      function(email, password, done) {
        console.log("pre db search for local-login");
        User.findOne({ email: email }, function(err, user) {
          console.log("Passport.js In Session");
          if (err) {
            console.log("err");
            return done(err);
          }
          if (!user) {
            console.log("user not found");
            return done(null, false);
          }
          if (!user.checkPassword(password)) {
            console.log("password not match");
            return done(null, false);
          }
          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser(function(user, done) {
    console.log("serialize user: " + user);
    done(null, {
      id: user["id"],
      email: user["email"]
    });
  });

  passport.deserializeUser(function(user, done) {
    console.log("deserialize user " + user);
    done(null, {
      id: user["id"],
      email: user["email"]
    });
  });
};


