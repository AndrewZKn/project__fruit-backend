require("dotenv").config();
require("./config/database").connect();
// require("module-alias/register");

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const http = require("http");

const server = http.createServer(app);

const { PORT } = process.env;
const { HOST } = process.env;
const { HTTP } = process.env;

const Users = require("./model/users");
const Products = require("./model/product");
const Invoices = require("./model/invoice");
const router = express.Router();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", async (req, res) => {
  res.send("HOMEPAGES");
});

// // config link on server
// app.use("/middleware", express.static(path.resolve(__dirname,"static/middleware")));
// app.use("/model", express.static(path.resolve(__dirname,"static/model")));

app.get("/api/products", async (req, res) => {
  const product = await Products.find();
  res.send(product);
  // res.send("product")
});

// config router
app.get("/api/users", async (req, res) => {
  const user = await Users.find();
  res.send(user);
});
app.get("/api/invoices", async (req, res) => {
  const invoice = await Invoices.find();
  res.send(invoice);
});

app.use("/api/products", router);
app.use("/api/users", router);
app.use("/api/invoices", router);

server.listen(PORT, () => {
  console.log(`server is running on port ${HTTP}${HOST}${PORT}`);
  console.log(`server is running on port user ${HTTP}${HOST}${PORT}/api/users`);
  console.log(
    `server is running on port invoice ${HTTP}${HOST}${PORT}/api/invoices`
  );
  console.log(
    `server is running on port product ${HTTP}${HOST}${PORT}/api/products`
  );
});
