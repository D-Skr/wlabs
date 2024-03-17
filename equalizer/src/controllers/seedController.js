const Expense = require("../models/Expense");

// Function to seed data for testing
exports.seedData = async (req, res) => {
  try {
    // Sample data to seed
    const sampleExpenses = [
      {
        userId: "guest", // Assuming 'guest' is used for non-logged in users
        participants: [
          { name: "John", expense: 120 },
          { name: "Bill", expense: 65.5 },
          { name: "Anna", expense: 34.5 },
          { name: "Ted", expense: 0 },
        ],
        description: "Cafe",
        date: new Date("1970-01-01"),
      },
    ];

    // Clear existing data and insert new sample data
    await Expense.deleteMany({});
    await Expense.insertMany(sampleExpenses);

    res.status(200).json({ message: "Data seeded successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error seeding data", error: error.message });
  }
};
