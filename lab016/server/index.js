const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const crtl = require("./controller");

//routes
app.get("/api/houses", crtl.getHouses);
app.post("/api/houses", crtl.createHouse);
app.delete("/api/houses/:id", crtl.deleteHouse);
app.put("/api/houses/:id", crtl.updateHouse);

app.listen(4004, () => console.log("Server runs on 4004"));
