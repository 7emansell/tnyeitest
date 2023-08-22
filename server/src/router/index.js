const express = require('express');
const { get_authors, get_books, get_book_by_isbn, get_author_by_name, get_books_by_author } = require('../db');
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

  // GET /authors/:name
  router.get('/authors/:name', async (req, res) => {
    const authorURLName = req.params.name;

    // Converting URL name back to normal name
    const authorName = authorURLName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    try {
      const author = await get_author_by_name(authorName, db);
      if (author) {
        res.json(author);
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET /books/:name
  router.get('/books/author/:name', async (req, res) => {
    const authorURLName = req.params.name;

    // Converting URL name back to normal name
    const authorName = authorURLName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    try {
      const booksList = await get_books_by_author(authorName, db);
      if (booksList) {
        res.json(booksList);
      } else {
        res.status(404).json({ error: 'Books not found' });
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
