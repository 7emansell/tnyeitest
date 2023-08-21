import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './books';
import Book from './book';

function App() {

  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books/:isbn" element={<Book />}></Route>
      </Routes>
    </Router>
  );
}

export default App;