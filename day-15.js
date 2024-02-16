const express = require("express");
const app = express();

/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const headers = req.headers;
  const body = req.body;

  console.log("Timestamp:", timestamp);
  console.log("Method:", method);
  console.log("URL:", url);
  console.log("Headers:", headers);
  console.log("Body:", body);

  next();
}

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
