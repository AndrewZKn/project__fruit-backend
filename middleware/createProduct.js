const { isDate } = require("util/types");
const Products = require("../model/product");

async function createProduct() {
  try {
    const product = await Products.create({
      productname: "Ổi Sấy Dẻo",
      cost: {
        currency: ["330,000"],
        weight: 20,
        quality: 1,
      },
      brand: "Healthy-Roo",
      catelogy: "Fruits",
      image: "https://ik.imagekit.io/fruitcompany/IMAGE_Usage/oisaydeo.png?updatedAt=1678539984845",
      description: "",
      feeShip: "",
      dateOrder: "",
      sold: ""
    });
    product.dateOrder = Date.now()
    console.log(product);
    await product.save();
  } catch (err) {
    console.log(err);
  }
}
module.exports = createProduct;
