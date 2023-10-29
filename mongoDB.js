const mongoose = require("mongoose");

function connectMongoDB() {
  mongoose
    .connect(
      `mongodb+srv://${encodeURIComponent(
        "pavithran_paviii"
      )}:${encodeURIComponent(
        process.env.MONGOPASSWORD
      )}@leetcode-clone.upirzre.mongodb.net/leetcode-clone?retryWrites=true&w=majority`
    )
    .then((response) => {
      console.log("Succesfully connected to mongoDB");
    })
    .catch((error) => {
      console.log("Error while connecting to DB", error.message);
    });
}

module.exports = connectMongoDB;
