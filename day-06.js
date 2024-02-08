const express = require("express");
const app = express();

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}!`);
}

app.get("/greet", greetHandler);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
