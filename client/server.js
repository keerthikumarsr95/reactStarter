const express = require('express');

const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('Server listening at port' + port)
});