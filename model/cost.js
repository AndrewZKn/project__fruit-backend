const mongoose = require('mongoose')
const priceProduct = new mongoose.Schema({
    currency: {
      type: Number,
      required: true,
  
    },
    weight: {
      type: Number,
      required: true,
    },
    quality: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    codeDown: {
      type: String,
      required: true,
    },
  });