import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        const filtered = books.filter(
            book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(filtered);
    }, [searchTerm, books]);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:3001/books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error('Could not fetch books:', error);
        }
    };

    return (
        <div>
            <h1>Book List</h1>
            <input
                type="text"
                placeholder="Search by title, author"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
            />
            <ul>
                {filteredBooks.map(book => (
                    <li key={book.isbn}>
                        <Link to={`/books/${book.isbn}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;
