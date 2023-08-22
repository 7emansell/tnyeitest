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
        <div class="w-[1280px] h-[832px] p-[50px] bg-neutral-50 flex-col justify-start items-start gap-[50px] inline-flex">
            <div class="w-[1180px] h-[43px] justify-center items-center gap-2.5 inline-flex">
                <div class="w-[1180px] h-[43px] pl-3 pr-[892px] py-3 bg-white border border-black justify-start items-center flex">
                    <div class="w-[276px] h-[19px] justify-center items-center inline-flex">
                        <div class="w-full text-zinc-500 text-base font-normal leading-normal">
                            <input
                                type="text"
                                placeholder="Search by title, author"
                                value={searchTerm}
                                onChange={event => setSearchTerm(event.target.value)}
                                class="w-full focus:outline-none text-black"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                {filteredBooks.map(book => (
                    <li key={book.isbn}>
                        <div class={`w-[1180px] h-[71px] py-[5px] border-t ${book.fiction ? 'border-teal-600' : 'border-pink-600'} flex-col justify-center items-center inline-flex`}>
                            <div class="self-stretch text-black text-4xl font-medium leading-[43.20px]">
                                <Link to={`/books/${book.isbn}`}>{book.title}</Link>
                            </div>
                            <div class="self-stretch justify-between items-start inline-flex">
                                <div class="text-black text-xs font-medium leading-[18px]">{book.author}</div>
                                <div class="text-right text-black text-xs font-medium leading-[18px]">{book.year}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Books;
