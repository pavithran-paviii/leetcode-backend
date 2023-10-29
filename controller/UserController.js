const { createUser, findUserByEmail } = require("../helpers/user");
const User = require("../model/User");

const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

module.exports = {
  get: async (req, res) => {
    try {
      const user = await User.find();
      // console.log(user, "User");
      res.status(200).send(user);
    } catch (error) {
      console.log(error?.message, "get users error");
      res.status(500).send(error?.message);
    }
  },

  createuser: asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;
    const userExist = await findUserByEmail(email);

    if (userExist?.length > 0) {
      res.status(409).json({ message: "User already exist!" });
    } else {
      const createuser = await createUser(username, email, password);

      if (createuser) {
        res.status(200).json({ message: "User created successfully!!!" });
      } else {
        res.status(400);
        throw new Error("All fields are mandatory!");
      }
    }
  }),

  loginFunc: async (req, res) => {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    try {
      if (user?.length > 0) {
        const isPasswordValid = await bcrypt.compare(
          password,
          user[0]?.password
        );

        // console.log(isPasswordValid, "isPasswordValid");

        if (isPasswordValid) {
          res
            .status(200)
            .json({ status: true, message: "login successful..." });
        } else {
          res
            .status(200)
            .json({ status: false, message: "Invalid username/password" });
        }
      } else {
        res.status(200).json({ status: false, message: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: false, message: "Server error while login" });
    }
  },
};
