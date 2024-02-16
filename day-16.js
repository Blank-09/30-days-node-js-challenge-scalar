const express = require("express");
const mongoose = require("mongoose");

const app = express();

/**
 * Establishes a connection to MongoDB using Mongoose
 */
function connectToMongoDB() {
  mongoose.connect("mongodb://localhost:27017/mydatabase");

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  db.once("open", () => {
    console.log("MongoDB connection successful");
  });
}

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
