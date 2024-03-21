require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/authRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");
const guestRoutes = require("./src/routes/guestRoutes");
const userRoutes = require("./src/routes/userRoutes");
const seedRoutes = require("./src/routes/seedRoutes");
const authMiddleware = require("./src/middlewares/authMiddleware");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
app.use("/guest", guestRoutes);
app.use("/auth", authRoutes);
// app.use("/signin", authRoutes);
// app.use("/api/auth", authRoutes);
//app.use("/api/auth/signup", authRoutes);
// app.use("/auth/signup", authRoutes);
app.use("/api/expenses", authMiddleware, expenseRoutes); // Protected routes
app.use("/api/users", authMiddleware, userRoutes); // Protected routes

// Serve static files
app.use(express.static("public"));
//app.use(express.static(__dirname + "/public/"));

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
