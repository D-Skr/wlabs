const express = require("express");
const cors = require("cors");

const app = express();

// accept json
app.use(express.json());

app.get("/api/users", (req, res) => {});

app.listen(4000, () => console.log("Server runs on 4000 port"));
