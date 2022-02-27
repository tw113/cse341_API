const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const proRoutes = require('./routes/professional');

const app = express();

app.use(bodyParser.json()); // application/json content

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/feed', feedRoutes);
app.use('/professional', proRoutes);

app.listen(8080);
