const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  participants: [
    {
      name: { type: String, required: true },
      expense: [{ type: Number, required: true }],
    },
  ],
  description: { type: String, default: "" },
  date: { type: Date, default: Date.now, notNull: true },
  total: { type: Number, required: true },
  avg: { type: Number, required: true },
  equalizedResult: [
    {
      from: String,
      to: String,
      amount: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Expense", expenseSchema);
