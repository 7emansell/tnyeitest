const express = require('express');
const { nabokov } = require('../db');
const router = express.Router();

//come back to this (authors subbed for nabakov)
function create_router(db) {
  router.get('/authors', async (req, res) => {
    const authors_books = await authors(db);
    res.json(authors_books);
  });

  router.get('/', (req, res) => {
    res.send('hello, world');
  });

  return router;
}

module.exports = {
  create_router
};
