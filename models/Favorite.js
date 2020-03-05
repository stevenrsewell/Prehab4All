const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  url: {
    type: String,
    required: true
  },
 
});

const Favorite = mongoose.model("Favorite",FavoriteSchema);

module.exports = Favorite;
