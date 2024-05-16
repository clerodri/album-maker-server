const express = require("express");
const path = require("path");
//express app
const app = express();

// register view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from my app
app.use("/static", express.static(path.join(__dirname, "build", "static")));

app.get("/", (req, res) => {
  res.render("index", { content: "" });
});

//listen for requests
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
