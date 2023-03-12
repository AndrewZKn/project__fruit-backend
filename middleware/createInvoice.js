const Invoices = require("../model/invoice");

async function createInvoice() {
  try {
    const invoice = await Invoices.create({
      invoiceTitle: "",
      createDate: "",
      cost: "",
      status: "",
      invoiceDetails: "",
    });
    console.log(product);
    await product.save();
  } catch (err) {
    console.log(err);
  }
}
module.exports = createInvoice;
