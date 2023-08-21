const express = require('express');
const { get_authors, get_books, get_book_by_isbn } = require('../db');
const router = express.Router();

function create_router(db) {
  // GET /authors
  router.get('/authors', async (req, res) => {
    try {
      const authorsList = await get_authors(db);
      res.json(authorsList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /books
  router.get('/books', async (req, res) => {
    try {
      const booksList = await get_books(db);
      res.json(booksList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /books/:isbn
  router.get('/books/:isbn', async (req, res) => {
    try {
      const isbn = req.params.isbn;
      const book = await get_book_by_isbn(isbn, db);
      if (!book) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        console.log(book);
        res.json(book);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}

module.exports = {
  create_router
};
