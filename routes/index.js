const express = require('express');
const routes = express.Router();
const subredditRoutes = require('./subreddit');
const authorRoutes = require('./author');


routes.use('/r', subredditRoutes);
routes.use('/u', authorRoutes);

routes.get('', (req, res) => {
  res.json({
    text: 'Home page of Reddit',
    data: null,
  });
});

module.exports = routes;
