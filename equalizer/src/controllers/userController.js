const User = require("../models/User");
const Expense = require("../models/Expense");

// Function to view user account details
exports.viewAccount = async (req, res) => {
  try {
    const userId = req.params.userId;
    //const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving user account", error: error.message });
  }
};

// Function to delete user account
exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete related expenses
    await Expense.deleteMany({ userId: userId });

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user account", error: error.message });
  }
};

// Function to view user's expense history
exports.viewHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { startDate, endDate, description } = req.query;

    let query = { userId: userId };
    if (startDate && endDate) {
      query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }
    if (description) {
      query.description = { $regex: description, $options: "i" }; // Case-insensitive search
    }

    const expenses = await Expense.find(query).sort({ date: -1 });

    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving expense history",
      error: error.message,
    });
  }
};

// Function to view details of a specific expense
exports.viewExpenseDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const expenseId = req.params.expenseId;
    const expense = await Expense.findOne({ _id: expenseId, userId: userId });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({ expense });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving expense details",
      error: error.message,
    });
  }
};
