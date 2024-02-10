const express = require("express");
const app = express();

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} request received`);
  next();
}

app.use(requestLoggerMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
