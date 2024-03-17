const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guestController");

router.get("/home", guestController.viewHomePage);
router.post("/guest/expenses", guestController.manageExpenses);

module.exports = router;
