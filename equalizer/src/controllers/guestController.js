//const Expense = require("../models/Expense");

// Function to handle viewing the main page for guests
exports.viewHomePage = (req, res) => {
  // Logic to display the main page content
  res.status(200).json({ message: "Welcome to Equalizer" });
};

// Function to handle managing expenses for guests and equalizing them
exports.manageExpenses = (req, res) => {
  try {
    // Extract participants from the request body
    const { participants } = req.body;
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
    // Return the total, average, and equalized result
    res.status(200).json({
      message: "Expenses equalized successfully for guest",
      totalExpenses: totalExpense.toFixed(2),
      avgExpense: averageExpense.toFixed(2),
      equalizedResult,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error managing expenses for guest",
      error: error.message,
    });
  }
};
