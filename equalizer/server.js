require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwtMiddleware = require("./src/middlewares/jwtMiddleware");
const authRoutes = require("./src/routes/authRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");

const app = express();

app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", jwtMiddleware, expenseRoutes);
//app.use("/api", require("./src/routes"));

// Serve static files
app.use(express.static("public"));

// Start the server
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server error!");
});
