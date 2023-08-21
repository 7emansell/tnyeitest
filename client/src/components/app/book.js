import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Book() {
    const { isbn } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBook();
    });

    const fetchBook = async () => {
        try {
            const response = await fetch(`http://localhost:3001/books/${isbn}`);
            const data = await response.json();
            setBook(data);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    }

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Genre: {book.genre}</p>
        </div>
    );
}

export default Book;
