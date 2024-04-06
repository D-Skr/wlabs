const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guestController");

router.post("/expenses", guestController.manageExpenses);

module.exports = router;
