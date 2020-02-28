
const db = require("../models");
const axios = require("axios");




app.get("/api/user/login/:email", (req, res) => {
    db.User.findOne({ email: req.params.email })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.send(err);
      });
  });