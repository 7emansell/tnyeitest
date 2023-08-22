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
        <div class={`pl-2.5 flex-col justify-start items-start gap-3.5 inline-flex ${book.fiction ? 'border-teal-600' : 'border-pink-600'} border-l`}>
            <div class="flex-col justify-start items-start gap-5 inline-flex">
                <div class="text-black text-4xl font-medium leading-10">{book.title}</div>

                <div class="flex-col justify-start items-start flex">
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">Author</div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-lg font-medium leading-relaxed">{book.author}</div>
                    </div>
                </div>

                <div class="flex-col justify-start items-start flex">
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">Publisher</div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-lg font-medium leading-relaxed">{book.publisher}</div>
                    </div>
                </div>

                <div class="flex-col justify-start items-start flex">
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">City</div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-lg font-medium leading-relaxed">{book.publisher_city}</div>
                    </div>
                </div>

                <div class="flex-col justify-start items-start flex">
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">Format</div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-lg font-medium leading-relaxed">{book.format}</div>
                    </div>
                </div>

                <div class="flex-col justify-start items-start flex">
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">Year</div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-lg font-medium leading-relaxed">{book.year}</div>
                    </div>
                </div>

                <div class="flex-col justify-start items-start flex">
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">ISBN</div>
                    </div>
                    <div class="justify-center items-center gap-2.5 inline-flex">
                        <div class="text-black text-lg font-medium leading-relaxed">{book.isbn}</div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Book;
