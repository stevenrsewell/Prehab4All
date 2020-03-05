
const db = require("../models");
const axios = require("axios");
const mongoose = require("mongoose");

var ObjectId = require('mongoose').Types.ObjectId;
module.exports = function (app) {



  // app.get("/api/user/:id", (req, res) => {
  //   db.User.find({})
  //     .populate("favorites")
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.send(err);
  //     });
  // });
  
  //finding the user
  app.get("/api/user/login/:email", (req, res) => {
    db.User.findOne({ email: req.params.email })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.send(err);
      });
  });



  //To update the users model with favorites.
  app.put("/api/user/:id", (req, res) => {
    console.log("working", req.body)
    var stringUrl = JSON.stringify(req.body)
    db.User.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          favorites: stringUrl
        }
      },
      { new: true }
    )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        console.log(err)
        res.send(err);
      });
  });
  
  
//To get all the favorite videos for that user.
app.get("/api/favorites/:id", (req, res) => {
  var objectId = mongoose.Types.ObjectId(req.params.id);
  db.User.find({
    _id: objectId
  })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/favorites/:url", (req, res) => {
  var objectId = mongoose.Types.ObjectId(req.params.id);
  db.User.find({
    _id: objectId
  })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});


}
