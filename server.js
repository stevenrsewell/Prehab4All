
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}


// Passport
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);
// Add routes
require("./routes/userRoutes")(app, passport);
require("./routes/htmlRoutes")(app, path);
// Connect to the Mongo DB


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/prehab");




app.listen(PORT, function() {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
}); 