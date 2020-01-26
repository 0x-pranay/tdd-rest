const express = require('express');
const routes = express.Router();

routes.get('', (req, res) => {
  res.json({
    text: 'List of all subreddits',
    data: {
      1: "reddit 1",
      2: "reddit 2",
      3: "reddit 3",
    },
  });
});

// GET localhost:3000/r/jokes
routes.get('/:subreddit', (req, res) => {
  console.log(req.params);
  const title = req.params.subreddit;
  res.status(200).json({
    text: `Home Page of ${title}`,
    data: {
      title, //
    }
  })
});


// POST /r/jokes/create
routes.post('/:subreddit/create', (req, res) => {
  const subReddit = req.params.subreddit;


  // create a subreddit in database.
  const { title, author } = req.body;
  res.json({
    subReddit,
    title,
    author
  })
});

module.exports = routes;
