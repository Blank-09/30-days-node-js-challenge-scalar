const express = require("express");
const app = express();

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);
  if (number > 0 && Number.isInteger(number)) {
    res.send("Success");
  } else {
    throw new Error("Invalid number: " + number);
  }
}

app.get("/positive", positiveIntegerHandler);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error Handling middleware");
  res.status(400).send(err.message);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
