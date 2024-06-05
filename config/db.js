require("dotenv").config();
const mongoose = require("mongoose");
const eventConnection = require("../eventEmitter.js");

const connectDB = async () => {
  const URL = `${process.env.MONGO_URL}`;
  await mongoose
    .connect(URL)
    .then(() => {
      console.log("Database connected!");
      eventConnection.emit("dbConnect");
    })
    .catch((error) => {
      console.log("Error in Database:", error);
    });
};

module.exports = connectDB;
