const User = require("../model/User");

async function createUser(username, email, password) {
  const userExist = await findUserByEmail(email);
  if (userExist?.length > 0) {
    console.log(userExist, "findUserByEmail userExist");
    return false;
  }

  try {
    // const salt = 8;
    const user = await User.create({ username, password, email });
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

module.exports = { createUser: createUser };
