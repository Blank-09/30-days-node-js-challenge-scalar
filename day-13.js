const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

/**
 * WebSocket server for Express
 * @param {Object} server - HTTP server instance
 */
function setupWebSocket(server) {
  const ws = new WebSocket.Server({ server });

  ws.on("connection", (ws) => {
    console.log("WebSocket connection established");

    ws.on("message", (message) => {
      console.log("Received message: ", message);
      ws.send(message);
    });
  });

  return ws;
}

setupWebSocket(server);

app.get("/websocket", (req, res) => {
  res.sendFile(__dirname + "/day-13/index.html");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
