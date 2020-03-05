
const db = require("../models");
const mongoose = require("mongoose");


module.exports = function (app) {

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
