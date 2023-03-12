const mongoose = require('mongoose')

const invoiceDetailproduct = new mongoose.Schema({
    invoiceDate: {
      type: Date,
    },
  
    // productList: {
      // require: productId,
      // require: productName,
      // require: productCost,
    // },
  
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
  
module.exports = mongoose.model("Invoice", invoiceSchema)
