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

//Come back to this
async function authors(db) {
  const sql = `SELECT * FROM authors`;

  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    })
  });
}

module.exports = {
  start_db,
  stop_db,
  authors,
}
