const express = require('express');
const routes = express.Router();
const Author = require('../models/author');


routes.post('/create', (req, res) => {
  const { name } = req.body;
  console.log(name);
  const author = new Author({
    name,
  })

  // saving author instance to database
  //
  author
    .save()
    .then(data => {
      console.log("entry saved in DB");
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });


});

// request -> url, method, headers, parameters, body, etcc,,

routes.get('', (req, res) => {
  Author.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send("ERROR");
    });
});
module.exports = routes;
