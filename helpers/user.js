const bcrypt = require("bcrypt");

const User = require("../model/User");

async function createUser(username, email, password) {
  const userExist = await findUserByEmail(email);
  if (userExist?.length > 0) {
    // console.log(userExist, "findUserByEmail userExist");
    return false;
  }

  try {
    const salt = 8;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    return user;
  } catch (error) {
    console.log("Error while creating user", error.message);
  }
}

async function findUserByEmail(email) {
  const user = await User.find({ email });
  console.log(user, "findUserByEmail email", email);
  return user;
}

module.exports = { createUser: createUser, findUserByEmail: findUserByEmail };
