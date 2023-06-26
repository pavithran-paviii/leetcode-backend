const { createUser } = require("../helpers/user");
const User = require("../model/User");

module.exports = {
  get: async (req, res) => {
    const user = await User.find();
    console.log(user, "User");
    res.status(200).send(user);
  },

  createuser: async (req, res, next) => {
    const { username, email, password } = req.body;
    const createuser = await createUser(username, email, password);

    if (createuser) {
      res.status(200).send("User created successfully!!!");
    } else {
      res.status(409).send("User already exist!");
    }
  },
};
