const Users = require("../model/users");

async function createUser() {
  try {
    const user = await Users.create({
      username: "",
      password: "",
      phone: "",
      gmail: "",
      position: "",
      avatar: "",
    });
    console.log(user);
    await user.save();
  } catch (err) {
    console.log(err);
  }
}
module.exports = createUser;
