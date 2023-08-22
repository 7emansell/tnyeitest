import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Authors() {
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAuthors, setFilteredAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    function createAuthorURLName(name) {
        return name.replace(/\s+/g, '-').toLowerCase();
    }

    useEffect(() => {
        const filtered = authors.filter(
            author =>
                author.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAuthors(filtered);
    }, [searchTerm, authors]);

    const fetchAuthors = async () => {
        try {
            const response = await fetch('http://localhost:3001/authors');
            const data = await response.json();
            setAuthors(data);
        } catch (error) {
            console.error('Could not fetch authors:', error);
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
                                placeholder="Search by name"
                                value={searchTerm}
                                onChange={event => setSearchTerm(event.target.value)}
                                class="w-full focus:outline-none text-black"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                {filteredAuthors.map(author => (
                    <li key={author.author}>
                        <div class={`w-[1180px] h-[71px] py-[5px] border-tflex-col justify-start items-start inline-flex`}>
                            <div class="self-stretch text-black text-4xl font-medium leading-[43.20px]">
                                <Link to={`/authors/${createAuthorURLName(author.name)}`}>{author.name}</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Authors;
