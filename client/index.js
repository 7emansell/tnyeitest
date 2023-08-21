const express = require('express');
const path = require('path');
const app = express();

const NODE_PORT = process.env.NODE_PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(NODE_PORT, () => {
  console.log(`client listening on port ${NODE_PORT}`);
});
