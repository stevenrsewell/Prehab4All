
const db = require("../models");
const axios = require("axios");


module.exports = function(app) {



    app.get("/api/user", (req, res) => {
        db.User.find({})
          .populate("getFavorite")
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



      app.get("/api/favorites/id/:media_id", (req, res) => {
        db.favorites.findOne({ media_id: req.params.media_id })
          .then(favorite => {
            res.json(favorite);
          })
          .catch(err => {
            res.send(err);
          });
      });
      app.put("/api/user/:id", (req, res) => {
        db.Favorite.create(req.body)
          .then(dbFavorite =>
            db.User.findOneAndUpdate(
              { _id: req.params.id },
              {
                $push: {
                 getFavorite: dbFavorite.id
                }
              },
              { new: true }
            )
          )
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.send(err);
          });
      });


      
   
};