const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const Port = process.env.Port || 5000;

const dataCollection = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("Next coder server ready for Run");
});



app.listen(Port, () => {
  console.log("Next coder server is running", Port);
});
