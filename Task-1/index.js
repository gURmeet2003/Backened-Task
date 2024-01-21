const User = require("./model/user");
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/UserDB")
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("Error Occured");
  });

app.post("/", async (req, res) => {
  const userData = new User(req.body);
  await userData.save();
  let a = fs.readFileSync("submit.html");
  res.send(a.toString());
});

app.get("/", (req, res) => {
  let a = fs.readFileSync("index.html");
  res.send(a.toString());
});

app.listen(3000, () => {
  console.log("server is running");
});
