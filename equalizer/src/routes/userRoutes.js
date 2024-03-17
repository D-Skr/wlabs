const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jwtMiddleware = require("../middlewares/authMiddleware");

router.get("/:userId", jwtMiddleware, userController.viewAccount);
router.delete("/:userId", jwtMiddleware, userController.deleteAccount);
router.get("/:userId/history", jwtMiddleware, userController.viewHistory);
router.get(
  "/:userId/history/:expenseId",
  jwtMiddleware,
  userController.viewExpenseDetails
);

module.exports = router;
