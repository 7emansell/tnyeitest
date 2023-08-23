import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Author() {
    const { name } = useParams();
    const [author, setAuthor] = useState(null);
    const [booksByAuthor, setBooksByAuthor] = useState([]);

    useEffect(() => {
        fetchAuthor();
        fetchBooksByAuthor();
    }, [name]);

    function createAuthorURLName(name) {
        return name.replace(/\s+/g, '-').toLowerCase();
    }

    const fetchAuthor = async () => {
        try {
            const authorURLName = createAuthorURLName(name);
            const response = await fetch(`http://localhost:3001/authors/${authorURLName}`);
            const data = await response.json();
            setAuthor(data);
        } catch (error) {
            console.error('Error fetching author:', error);
        }
    }

    const fetchBooksByAuthor = async () => {
        try {
            const authorURLName = createAuthorURLName(name);
            const response = await fetch(`http://localhost:3001/books/author/${authorURLName}`);
            const data = await response.json();
            setBooksByAuthor(data);
        } catch (error) {
            console.error('Error fetching books by author:', error);
        }
    }

    if (!author) {
        return <div>Loading...</div>;
    }

    return (
        <div class="pl-2.5 flex-col justify-start items-start gap-3.5 inline-flex border-teal-600">
            <div class="flex-col justify-start items-start gap-5 inline-flex">
                <div class="text-black text-4xl font-medium leading-10">{author.name}</div>

                <div class="flex-row justify-start space-x-10 items-start flex">
                    <div class="flex-col  justify-start items-start flex">
                        <div class="justify-center items-center gap-2.5 inline-flex">
                            <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">Date of Birth</div>
                        </div>
                        <div class="justify-center items-center gap-2.5 inline-flex">
                            <div class="text-black text-lg font-medium leading-relaxed">{author.author_date_of_birth}</div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-start flex">
                        <div class="justify-center items-center gap-2.5 inline-flex">
                            <div class="text-black text-xs font-normal uppercase leading-none tracking-wide">Date of Death</div>
                        </div>
                        <div class="justify-center items-center gap-2.5 inline-flex">
                            <div class="text-black text-lg font-medium leading-relaxed">{author.author_date_of_death}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`pl-2.5 flex-col justify-start items-start gap-3.5 inline-flex border-l`}>
                <div class="flex-col justify-start items-start gap-5 inline-flex">
                    <ul>
                        {booksByAuthor.map(book => (
                            <li>
                                <div class="flex-col justify-start items-start gap-5 inline-flex">
                                    <div class={`text-black text-2xl font-medium leading-10 ${book.fiction ? 'hover:text-teal-600' : 'hover:text-pink-600'}`}><Link to={`/books/${book.isbn}`}>{book.title}</Link></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </div >

    );
}

export default Author;
