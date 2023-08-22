import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Books from './books';
import Book from './book';

function App() {

  return (
    <Router>
      <div class="w-full h-[832px] p-[50px] bg-neutral-50 flex-col justify-start items-start gap-2.5 inline-flex">
        <div class="self-stretch justify-center items-center inline-flex">
          <div class="text-black text-4xl font-light leading-[54px]"><Link to={`/books/`}>[books]</Link></div>
        </div>
        <div class="w-[1180px] h-[668px] relative">
          <Routes>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/books/:isbn" element={<Book />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;