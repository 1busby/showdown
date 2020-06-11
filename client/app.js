const express = require('express');
const path = require('path');
var proxy = require('http-proxy-middleware');

const app = express();
const port = 4200;

app.use('/', express.static(path.join(__dirname, './dist/brackets-client/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/brackets-client/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/brackets-client/index.html'));
});

app.listen(port, () => console.log(`Brackets app listening on port ${port}!`));
