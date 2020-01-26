const express = require('express');
const routes = express.Router();

routes.get('', (req, res) => {
  res.json({
    text: 'Home page of author',
    data: null,
  });
});

module.exports = routes;
