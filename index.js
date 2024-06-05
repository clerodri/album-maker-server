require("dotenv").config();
const express = require("express");
const path = require("path");
const eventConnection = require("./eventEmitter");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const PORT = `${process.env.PORT}`;

//express app
const app = express();
app.use(bodyParser.json({ type: "application/json" }));
app.use("/", controllers);
app.use("/static", express.static(path.join(__dirname, "build", "static")));

// register view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

eventConnection.on("dbConnect", () => {
  //listen for requests
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
});

connectDB();
