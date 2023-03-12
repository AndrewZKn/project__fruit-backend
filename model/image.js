const mongoose = require('mongoose')

const imageProduct = new mongoose.Schema({
  imageDisplay: {
    type: String,
    required: true,
  },
  imageAnotherone: {
    type: String,
    required: true,
  },
  imageAnothertwo: {
    type: String,
    required: true,
  },
  imageAnotherthree: {
    type: String,
    required: true,
  },
});