const db = require("../models");
const axios = require("axios");

module.exports = function(app) {

    app.get("/api/user", (req, res) => {
        db.User.find({})
          .populate("favoritevideos")
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.send(err);
          });
      });
      app.get("/api/user/login/:email", (req, res) => {
        db.User.findOne({ email: req.params.email })
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.send(err);
          });
      });
   
};