const express = require("express");

const app = express();

// accept json
app.use(express.json());

app.listen(4000, () => console.log("Server runs on 4000 port"));
