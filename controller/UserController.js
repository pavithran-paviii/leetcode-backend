const { createUser, findUserByEmail } = require("../helpers/user");
const User = require("../model/User");

const bcrypt = require("bcrypt");

module.exports = {
  get: async (req, res) => {
    try {
      const user = await User.find();
      console.log(user, "User");
      res.status(200).send(user);
    } catch (error) {
      console.log(error?.message, "get users error");
      res.status(500).send(error?.message);
    }
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

  loginFunc: async (req, res) => {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    try {
      if (user?.length > 0) {
        const isPasswordValid = await bcrypt.compare(
          password,
          user[0]?.password
        );

        console.log(isPasswordValid, "isPasswordValid");

        if (isPasswordValid) {
          console.log(isPasswordValid, "isPasswordValid");
          res.status(200).send("Login successful");
          console.log(user, "login user");
        } else {
          res.status(401).send("Invalid username/password");
        }
      } else {
        res.status(400).send("User not found");
      }
    } catch (error) {
      res.status(500).send("Server error while login");
    }
  },
};
