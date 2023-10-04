const express = require("express");
const app = express();

//config env
require("dotenv").config();

//routes imports
const userRoute = require("./routes/User");
const problemRoute = require("./routes/Problem");

const connectMongoDB = require("./mongoDB");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add this middleware to enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//routes
app.use("/", userRoute);
app.use("/problem", problemRoute);

app.listen("3000", () => {
  console.log("Running on port 3000");
  connectMongoDB();
});
