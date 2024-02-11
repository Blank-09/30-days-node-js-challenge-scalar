const express = require('express');
const app = express();

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res) {
  if (req.url === '/') {
    res.sendFile(__dirname + '/public/index.html');
  } else {
    res.sendFile(__dirname + '/public' + req.url);
  }
}

app.get('*', staticFileServer);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
