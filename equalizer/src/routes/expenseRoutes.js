const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router.post("/create", expenseController.createExpense);
router.get("/equalize", expenseController.equalizeExpenses);

module.exports = router;
