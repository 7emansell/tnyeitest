# _The New Yorker_ Editorial Infrastructure Technical Test: Emma

Hello and welcome to Emma's _The New Yorker_ Editorial Infrastructure Technical Test!

### Requirements

You’ll need [Node](https://nodejs.org/en), [NPM](https://www.npmjs.com/), [NVM](https://github.com/nvm-sh/nvm/tree/master), and [sqlite3](https://www.sqlite.org/cli.html).

### Running Locally

```
nvm use
npm install --workspaces
```

Seed the SQLite database:

```
npm run seed:db
```

In separate terminals, start the server:

```
npm run start:server
```

and the client:

```
npm run start:client
```

(\*\*When I tested a fresh copy, I once had to run

```
npm install
```

again in the client terminal for all dependencies to show up)

The server should be accessible at [http://localhost:3001](http://localhost:3001) and the client should be accessible at [http://localhost:3000](http://localhost:3000).

### Testing

Run

```
npx jest
```

to run the 2 test suites (checking that correct data is fetched, search works, and components render correctly for authors and books).

### Required tasks completed

- [x] Update the database schema defined in [server/db/tables][sql] and import the newly-structured data into the [tny-ei-tech-test.db][db].
- [x] Build a back-end service with at least two routes that respond to GET requests:
  - [x] `/books`, which must return a JSON representation of all of the books in the database
  - [x] `/books/:isbn`, which must return a JSON representation of the book with the given ISBN
- [x] Build a front-end client, written in React, with two corresponding routes:
  - [x] `/books`, which has a [search page][search] that matches the search string against book titles and authors
  - [x] `/books/:isbn`, which has a [detail page][book-detail] for an individual book

### Optional tasks completed

To the back-end:

- [ ] Add a POST route that creates a book
- [ ] Add a PUT route to update a book
- [x] Add any other sensible collection or individual entity routes (all 'authors' routes)
- [x] Add tests

To the front-end:

- [x] Make the design responsive across different screen sizes
- [ ] Add any relevant `<meta>` tags to the `<head>`
- [x] Add tests (Jest)

## Resources

- [TNY EI Technical Test — Source Data][data]
- [TNY EI Technical Test — Wireframes][wireframes]

[data]: https://docs.google.com/spreadsheets/d/1ec2OSWYjXENyRd9JKilCrJfBzwGxHBJh9hP8d8paRRU/edit#gid=158941343 "TNY EI Technical Test — Source Data"
[sql]: server/db/tables/ "SQL Table Definitions"
[db]: server/db/data/tny-ei-tech-test.db "SQLite Database"
[wireframes]: https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=2%3A723&mode=design&t=ZAgUCyAoE5wJAQWl-1 "Figma Wireframes"
[search]: https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=7645-1446&mode=design "Figma Wireframes — Search Page"
[book-detail]: https://www.figma.com/file/iBcDDEeTNOGHMnPCBhNSQi/TNY-EI-Technical-Test-%E2%80%94-Wireframes?type=design&node-id=17-121&mode=design "Figma Wireframe — Detail Page"
