const express = require("express");
const app = express();

//config env
require("dotenv").config();

//routes imports
const userRoute = require("./routes/User");
const connectMongoDB = require("./mongoDB");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/user", userRoute);

app.listen("3000", () => {
  console.log("Running on port 3000");
  connectMongoDB();
});
