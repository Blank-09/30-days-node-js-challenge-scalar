const express = require('express');
const app = express();

let requestCounter = {};

function rateLimitMiddleware(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const limit = 5; // limit each IP to 100 requests per 15 minutes
  const windowMs = 15 * 60 * 1000; // 15 minutes

  if (!requestCounter[ip]) {
    requestCounter[ip] = { count: 1, startTime: now };
  } else if (requestCounter[ip].count < limit) {
    requestCounter[ip].count++;
  } else if (now - requestCounter[ip].startTime > windowMs) {
    requestCounter[ip] = { count: 1, startTime: now };
  } else {
    return res.status(429).send("Too many requests from this IP, please try again after 15 minutes");
  }

  next();
}

app.use(rateLimitMiddleware);

app.get('/endpoint', (req, res) => {
  res.send('This is API endpoint!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));