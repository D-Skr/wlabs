const Expense = require("../models/Expense");
// Function to handle creating a new expense
exports.createExpense = async (req, res) => {
  try {
    const { userId, participants, description, date } = req.body;

    // Create a new expense record
    const newExpense = new Expense({
      userId,
      participants,
      description,
      date,
      total,
      avg,
      equalizedResult,
      createdAt: new Date(),
    });

    // Save the expense to the database
    await newExpense.save();

    // Return success response
    res.status(201).json({
      message: "Expense created successfully",
      expenseId: newExpense._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating expense", error: error.message });
  }
};

// Function to handle equalizing expenses
exports.equalizeExpenses = async (req, res) => {
  try {
    const { expenseId } = req.params;

    // Find the expense record
    const expense = await Expense.findById(expenseId);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const participants = expense.participants;
    const totalExpense = participants.reduce(
      (acc, participant) => acc + participant.totalExpense,
      0
    );
    const averageExpense = totalExpense / participants.length;

    const settlements = participants.map((participant) => {
      const balance = participant.totalExpense - averageExpense;
      return { name: participant.name, balance };
    });

    // Sorting settlements by balance
    settlements.sort((a, b) => a.balance - b.balance);

    const transactions = [];
    let i = 0;
    let j = settlements.length - 1;

    // Matching payers with receivers
    while (i < j) {
      const payer = settlements[i];
      const receiver = settlements[j];
      const amount = Math.min(-payer.balance, receiver.balance);

      payer.balance += amount;
      receiver.balance -= amount;

      transactions.push({
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

    // Update the expense with the equalized result
    expense.equalizedResult = transactions;
    rollbar.log("new expense saved!");
    await expense.save();

    // Return success response with equalized result
    res
      .status(200)
      .json({ message: "Expenses equalized successfully", equalizedResult });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error equalizing expenses", error: error.message });
  }
};
