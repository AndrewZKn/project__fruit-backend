const mongoose = require("mongoose");
const { MONGGO_URL } = process.env;
const User = require("../model/collection");

mongoose.set("strictQuery", false);
exports.connect = () => {
  mongoose
    .connect(MONGGO_URL)
    .then(() => {
      console.log("database is connected!");
    })
    .catch((err) => {
      console.log(err);
    });

  // createUser()
};

async  function createUser() {
  try {
    const user = await User.create({
      username: "hacker",
      password: "0938327",
      phone: 0826532009,
      gmail: "hackerchow@gmail.com",
      position: "staff",
      avatar:
        "https://ik.imagekit.io/fruitcompany/project__fruit/z4123790999235_0f34a757be1d3d8ff32f18afca4e9e6b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676885022323",
    });
    console.log(user);
    await user.save();
  } catch (err) {
    console.log(err);
  }
}
