const path = require('node:path');
const sqlite3 = require('sqlite3').verbose();

const DB_LOCATION = 'db/data/tny-ei-tech-test.db';

async function start_db() {
  const filename = path.resolve('.', DB_LOCATION);
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(filename,
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(db);
        }
      }
    );
  });
}

async function stop_db(db) {
  return new Promise((resolve) => {
    db.close(() => resolve());
  });
}

async function get_authors(db) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM authors', (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

async function get_books(db) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM books', (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

async function get_book_by_isbn(isbn, db) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM books WHERE isbn = ?';
    db.all(query, [isbn], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        // Return 1st row (isbn is unique)
        const book = rows.length > 0 ? rows[0] : null;
        resolve(book);
      }
    });
  });
}

module.exports = {
  start_db,
  stop_db,
  get_authors,
  get_books,
  get_book_by_isbn
}
