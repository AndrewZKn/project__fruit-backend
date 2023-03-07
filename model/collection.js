const mongoose = require("mongoose");

const priceProduct = new mongoose.Schema({
  currency: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  quality: {
    type: Number,
    
  },
  discount: {
    type: Number,
    
  },
  codeDown: {
    type: String,
    
  },
});
const imageProduct = new mongoose.Schema({
  imageDisplay: {
    type: String,
    
  },
  imageAnotherone: {
    type: String,
    
  },
  imageAnothertwo: {
    type: String,
    
  },
  imageAnotherthree: {
    type: String,
    
  },
});
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 30,
    
    lowercase: true,
  },
  price: priceProduct,
  brand: {
    type: Number,
    
  },
  catelogy: {
    type: String,
    
  },
  image: imageProduct,
  dateOrder: {
    type: Date,
    default: () => Date.now(),
    
  },

  sold: {
    type: Number,
    
  },
  feeShip: {
    type: Number,
    
  },

  detailProduct: {
    type: String,
    max: 250,
    
  },
});

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
const invoiceDetailproduct = new mongoose.Schema({
  invoiceDate: {
    type: Date,
  },

  productList: {
    // require: productId,
    // require: productName,
    // require: productCost,
  },

  productQuantity: {
    type: Number,
    
  },

  //cái này tạo tượng trưng cho khuyến mãi + ship vô thành tiền
  promoteCodeUse: {
    type: String,
    
  },

  // cái này tạo tượng trưng, nên là tự động tính rồi lưu
  invoiceAmount: {
    type: Number,
    
  },
});
const invoiceSchema = new mongoose.Schema({
  invoiceTitle: {
    type: String,
    
  },

  createDate: {
    type: Date,
    
  },

  Cost: {
    type: Number,
    
  },

  Status: {
    type: Boolean,
    
  },

  // không chắc lắm, mấy ông xem lại nha
  invoiceDetails: invoiceDetailproduct,
});

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("Users", userSchema);
const Invoice = mongoose.model("Invoice", invoiceSchema)
module.exports = User;
// const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Product
module.exports = Invoice
