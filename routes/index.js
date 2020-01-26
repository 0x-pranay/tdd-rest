const express = require('express');
const routes = express.Router();

routes.get('', (req, res) => {
  res.json({
    text: 'Home page of Reddit',
    data: null,
  });
});





module.exports = routes;
