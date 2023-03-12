const mongoose = require("mongoose");
const { MONGO_URL } = process.env;
const createUser = require("../middleware/createUser")
const createProduct = require("../middleware/createProduct")
const createInvoice = require("../middleware/createInvoice")

mongoose.set("strictQuery", false);
exports.connect = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("database is connected!");
    })
    .catch((err) => {
      console.log(err);
    });
  // createUser()
  // createProduct()
  // createInvoice()
};


