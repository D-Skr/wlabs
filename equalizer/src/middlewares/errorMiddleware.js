const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server ERROR!", error: err.message });
};

module.exports = errorMiddleware;
