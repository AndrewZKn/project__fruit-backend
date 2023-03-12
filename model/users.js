const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 30,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model("Users", userSchema);

