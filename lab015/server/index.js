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

app.listen(4000, () => console.log("Server runs on 4000 port"));
