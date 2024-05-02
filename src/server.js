// server.js
'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const foodRoutes = require('./routes/foodRoutes.js');
const animalRoutes = require('./routes/animalRoutes.js');
const logger = require('./middleware/logger.js');

app.use(cors());
app.use(express.json());

app.use(foodRoutes);
app.use(animalRoutes);
app.use(logger);

// Error Handling
app.get('/broken', (req, res, next) => next(new Error('500 – Internal Server Error')));

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };

