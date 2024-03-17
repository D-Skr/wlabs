const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  expenseId: { type: Schema.Types.ObjectId, ref: "Expense", required: true },
  name: { type: String, required: true },
  data: { type: Buffer, required: true },
});

module.exports = mongoose.model("Image", imageSchema);
