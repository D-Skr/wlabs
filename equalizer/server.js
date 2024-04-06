require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/authRoutes");
const expenseRoutes = require("./src/routes/expenseRoutes");
const userRoutes = require("./src/routes/userRoutes");
const authMiddleware = require("./src/middlewares/authMiddleware");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
const cors = require("cors");
const ROLLBAR_TOKEN = process.env.ROLLBAR_TOKEN;

// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Serve static files
app.use(express.static(`${__dirname}/public`));
//app.use(express.static(__dirname + "/public"));

// Define routes
app.use("/auth", authRoutes);
app.use("/api/expenses", authMiddleware, expenseRoutes); // Protected routes
app.use("/api/users", authMiddleware, userRoutes); // Protected routes

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  rollbar.log(`EQ Server running on port ${PORT}`);
});
