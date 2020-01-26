const express = require('express');
const routes = express.Router();
const subredditRoutes = require('./subreddit');

routes.get('', (req, res) => {
  res.json({
    text: 'Home page of Reddit',
    data: null,
  });
});

routes.get('/r', subredditRoutes);


module.exports = routes;
