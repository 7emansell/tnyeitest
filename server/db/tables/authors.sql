DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  name                    TEXT,
  author_date_of_birth      DATE,
  author_date_of_death      DATE
);

-- Nabokov
INSERT INTO authors (
  name,
  author_date_of_birth,
  author_date_of_death  
) VALUES (
  'Vladimir Nabokov',
  '1899-04-22',
  '1977-07-02'
);

-- Smith
INSERT INTO authors (
  name,
  author_date_of_birth,
  author_date_of_death  
) VALUES (
  'Zadie Smith',
  '1975-10-25',
  NULL
);

-- Wallace
INSERT INTO authors (
  name,
  author_date_of_birth,
  author_date_of_death  
) VALUES (
  'David Foster Wallace',
  '1962-02-21',
  '2008-09-12'
);
