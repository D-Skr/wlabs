const express = require("express");
const cors = require("cors");

const app = express();

// accept json and cors
app.use(express.json());
app.use(express.cors());

app.get("/api/users", (req, res) => {
  let friends = ["Bob", "John", "Sam", "Smith", "Billy"];
  res.status(200).send(friends);
});

app.get("wheather/:temperature", (req, res) => {
  const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});

app.listen(4000, () => console.log("Server runs on 4000 port"));
