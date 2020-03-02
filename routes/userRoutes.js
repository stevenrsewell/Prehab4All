const User = require("../models/User");

// const passport = require("../config/passport");
module.exports = function(app, passport) {
  app.post("/", (req, res) => {
    console.log("user signup");

    const { email, password } = req.body;
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log("User.js post error: ", err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the email: ${email}`
        });
      } else {
        const newUser = new User({
          email: email,
          password: password
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
        });
      }
    });
  });

  //   creates one user
  app.post("/api/user", (req, res) => {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.send(err);
      });
  });
  app.put("/api/user/login", passport.authenticate("local-login"), function (req, res) {
    res.json(req.user.email);
  
  });


   



//   app.get("/choices", (req, res, next) => {
//     console.log("===== user!!======");
//     console.log(req.user);
//     if (req.user) {
//       res.json({ user: req.user });
//     } else {
//       res.json({ user: null });
//     }
//   });

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};

