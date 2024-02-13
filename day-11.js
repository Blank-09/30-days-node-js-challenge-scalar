require("dotenv").config();

const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.use(express.json());

function authenticationMiddleware(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Access Denied: No Token Provided!");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (error) {
    return res.status(401).send("Access Denied: Invalid Token!");
  }
}

app.get("/", authenticationMiddleware, (req, res) => {
  res.send(`Hello ${req.username} 👋! [Authenticated User]`);
});

// Function to generate token
app.post("/token", (req, res) => {
  const { username } = req.body;
  const accessToken = jwt.sign({ username }, process.env.JWT_SECRET);
  res.json({ accessToken });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
