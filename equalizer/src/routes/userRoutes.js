const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/:userId", authMiddleware, userController.viewAccount);
router.post("/:userId/expenses", authMiddleware, userController.manageExpenses);
router.delete(
  "/:userId/expenses",
  authMiddleware,
  userController.deleteAllExpensesForUser
);
router.delete("/:userId", authMiddleware, userController.deleteAccount);
router.get("/:userId/history", authMiddleware, userController.viewHistory);
router.get(
  "/:userId/history/:expenseId",
  authMiddleware,
  userController.viewExpenseDetails
);

// In userRoutes.js or your main application file
// router.get("/", authMiddleware, (req, res) => {
//   // If the user is logged in, redirect to their profile page
//   res.redirect(`/users/${req.userId}`);
// });

module.exports = router;
