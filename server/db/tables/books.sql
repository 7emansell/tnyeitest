DROP TABLE IF EXISTS books;

CREATE TABLE books (
  title             TEXT,
  author            TEXT,
  isbn              TEXT,
  pages             INTEGER,
  publisher         TEXT,
  publisher_city    TEXT,
  year              INTEGER,
  format            TEXT,
  fiction           BOOLEAN
);

-- The Broom of the System
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'The Broom of the System',
  'David Foster Wallace',
  '0670812307',
  467,
  'Viking',
  'New York',
  1987,
  'hardcover',
  1
);

-- Infinite Jest (2006)
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Infinite Jest',
  'David Foster Wallace',
  '0274994747',
  1079,
  'Back Bay Books',
  'Boston',
  2006,
  'paperback',
  1
);

-- Infinite Jest (1997)
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Infinite Jest',
  'David Foster Wallace',
  '0349121087',
  1104,
  'Abacus',
  'New York',
  1997,
  'paperback',
  1
);

-- Oblivion
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Oblivion',
  'David Foster Wallace',
  '0316919810',
  329,
  'Little, Brown and Company',
  'New York',
  2004,
  'paperback',
  1
);

-- A Supposedly Fun Thing I‘ll Never Do Again: Essays and Arguments
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'A Supposedly Fun Thing I’ll Never Do Again: Essays and Arguments',
  'David Foster Wallace',
  '0316925284',
  368,
  'Back Bay Books',
  'Boston',
  1998,
  'paperback',
  0
);

-- Consider the Lobster and Other Essays
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Consider the Lobster and Other Essays',
  'David Foster Wallace',
  '0316013323',
  343,
  'Back Bay Books',
  'Boston',
  2007,
  'paperback',
  0
);

-- White Teeth
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'White Teeth',
  'Zadie Smith',
  '0375703861',
  464,
  'Vintage',
  'New York',
  2001,
  'paperback',
  1
);

-- On Beauty
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'On Beauty',
  'Zadie Smith',
  '014101945X',
  464,
  'Penguin',
  'London',
  2006,
  'paperback',
  1
);

-- NW
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'NW',
  'Zadie Smith',
  '1594203970',
  416,
  'Penguin',
  'London',
  2012,
  'hardcover',
  1
);

-- The Gift 
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'The Gift',
  'Vladimir Nabokov',
  '0679727256',
  384,
  'Vintage',
  'New York',
  1991,
  'paperback',
  1
);

-- Bend Sinister
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Bend Sinister',
  'Vladimir Nabokov',
  '0679727272',
  272,
  'Vintage',
  'New York',
  1990,
  'paperback',
  1
);

-- Lolita
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Lolita',
  'Vladimir Nabokov',
  '0679723161',
  317,
  'Vintage',
  'New York',
  1989,
  'paperback',
  1
);

-- Speak, Memory: An Autobiography Revisited
INSERT INTO books (
  title,
  author,
  isbn,
  pages,
  publisher,
  publisher_city,
  year,
  format,
  fiction
) VALUES (
  'Speak, Memory: An Autobiography Revisited',
  'Vladimir Nabokov',
  '0679723390',
  336,
  'Vintage',
  'New York',
  1989,
  'paperback',
  0
);
