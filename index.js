const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const Port = process.env.Port || 5000;

const dataCollection = require("./Data/courses.json");

app.get("/", (req, res) => {
  res.send("Next coder server ready for Run");
});
app.get("/courses", (req, res) => {
  res.send(dataCollection);
});

app.get("/option/:id", (req, res) => {
  const id = req.params.id;
  const getOption = dataCollection.find((option) => option.id === id);
  if (!getOption) {
    res.send("Nothing to get");
  }
  res.send(getOption);
});



app.listen(Port, () => {
  console.log("Next coder server is running", Port);
});
