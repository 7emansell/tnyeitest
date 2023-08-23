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
        const sortedBooks = filtered.sort((a, b) => a.year - b.year);
        setFilteredBooks(sortedBooks);
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
        <div className="w-full md:w-[1280px] h-[832px] p-4 md:p-[50px] bg-neutral-50 flex-col justify-start items-start gap-6 md:gap-6 inline-flex">
            <div className="w-full md:w-[1180px] h-[43px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-full md:w-[1180px] h-[43px] md:pl-3 md:pr-[892px] py-3 bg-white border border-black justify-start items-center flex">
                    <div className="w-full md:w-[276px] h-[19px] justify-center items-center inline-flex">
                        <div className="w-full text-zinc-500 text-base font-normal leading-normal">
                            <input
                                type="text"
                                placeholder="Search by title, author"
                                value={searchTerm}
                                onChange={event => setSearchTerm(event.target.value)}
                                className="w-full focus:outline-none text-black p-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                {filteredBooks.map(book => (
                    <li key={book.isbn}>
                        <Link to={`/books/${book.isbn}`}>
                            <div className={`w-full md:w-[1180px] ${book.fiction ? 'border-teal-600' : 'border-pink-600'} flex-col p-4 md:p-2 border-t md:flex md:flex-row md:justify-between md:items-center`}>
                                <div className="md:w-3/4 md:mr-4">
                                    <span className={`text-lg md:text-black md:text-4xl font-medium md:leading-[43.20px] whitespace-normal ${book.fiction ? 'hover:text-teal-600' : 'hover:text-pink-600'}`}> {book.title}</span>
                                    <div className="text-md md:text-black md:text-xs md:font-medium md:leading-[18px] whitespace-normal">{book.author}</div>
                                </div>
                                <div className="text-md md:w-1/4 md:text-right md:text-xs md:font-medium md:leading-[18px]">
                                    {book.year}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Books;
