const User = require("../models/User");
const Expense = require("../models/Expense");
var userId;

// Function to view user account details
exports.viewAccount = async (req, res) => {
  try {
    userId = req.params.userId;
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

// Function to handle managing expenses for existing user and equalizing them
exports.manageExpenses = async (req, res) => {
  try {
    // Extract participants from the request body
    const { participants, date, description } = req.body;
    // Calculate the total and average expenses
    const totalExpense = participants.reduce(
      (acc, participant) =>
        acc + participant.expenses.reduce((sum, expense) => sum + expense, 0),
      0
    );
    const averageExpense = totalExpense / participants.length;

    // Calculate the balance for each participant
    const settlements = participants.map((participant) => {
      const totalParticipantExpense = participant.expenses.reduce(
        (sum, expense) => sum + expense,
        0
      );
      const balance = totalParticipantExpense - averageExpense;
      return { name: participant.name, balance };
    });
    // Sorting settlements by balance
    settlements.sort((a, b) => a.balance - b.balance);

    const equalizedResult = [];
    let i = 0;
    let j = settlements.length - 1;
    // Matching payers with receivers
    while (i < j) {
      const payer = settlements[i];
      const receiver = settlements[j];
      const amount = Math.min(-payer.balance, receiver.balance);

      payer.balance += amount;
      receiver.balance -= amount;
      equalizedResult.push({
        from: payer.name,
        to: receiver.name,
        amount: amount.toFixed(2),
      });

      if (payer.balance === 0) {
        i++;
      }
      if (receiver.balance === 0) {
        j--;
      }
    }

    // Create and save the Expense in MongoDB
    const newExpense = new Expense({
      userId: req.userId,
      participants: participants.map((participant) => ({
        name: participant.name,
        expense: participant.expenses,
      })),
      description,
      date,
      total: totalExpense,
      avg: averageExpense,
      equalizedResult,
    });

    await newExpense.save();

    // Return the total, average, and equalized result
    res.status(200).json({
      message: `Expenses equalized successfully for user_id: ${req.userId}`,
      totalExpenses: totalExpense.toFixed(2),
      avgExpense: averageExpense.toFixed(2),
      equalizedResult,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error managing expenses for user_id: ${userId}`,
      error: error.message,
    });
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

// Function to delete all expenses for a specific user
exports.deleteAllExpensesForUser = async (req, res) => {
  try {
    // Delete all expenses for the user
    await Expense.deleteMany({ userId });

    // Return a success response
    res
      .status(200)
      .json({ message: "All expenses deleted successfully for user" });
    alert("History was wiped successfully");
  } catch (error) {
    if (!res.headersSent) {
      res
        .status(500)
        .json({
          message: "Error deleting expenses for user",
          error: error.message,
        });
    }
  }
};
