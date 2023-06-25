const express = require("express");
const app = express();

//routes imports
const userRoute = require("./routes/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/user", userRoute);

app.listen("3000", () => {
  console.log("Running on port 3000");
});
