const express = require("express");
const app = express();

let cache = {};

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cachingMiddleware(req, res, next) {
  const url = req.originalUrl;
  const now = Date.now();
  const cacheExpirationTime = 5 * 60 * 1000;

  if (cache[url] && now - cache[url].timestamp < cacheExpirationTime) {
    return res.send(cache[url].data);
  }

  res.originalSend = res.send;
  res.send = (data) => {
    cache[url] = { data: data, timestamp: now };
    res.originalSend(data);
  };

  next();
}

app.use(cachingMiddleware);

app.get("/", (req, res) => res.send("Hello, Cache!"));
app.listen(3000, () => console.log("Server is running on port 3000"));
