import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Books from './books';
import Book from './book';
import Authors from './authors';
import Author from './author';

function App() {
  return (
    <Router>
      <div className="w-full h-[832px] p-[50px] bg-neutral-50 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch justify-center items-center inline-flex">
          <div className="text-black text-4xl font-light leading-[54px] hover:text-gray-600"><Link to={`/books/`}>[books]</Link></div>
          <div className="text-black text-4xl font-light leading-[54px] hover:text-gray-600"><Link to={`/authors/`}>[authors]</Link></div>
        </div>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Navigate replace to="/books" />} />
            <Route path="/books" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/authors/:name" element={<Author />} />
            <Route path="/books/:isbn" element={<Book />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
