import React, { useState, useEffect } from 'react';

function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = async () => {
        try {
            const response = await fetch('http://localhost:3001/authors');
            const data = await response.json();
            setAuthors(data);
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };

    return (
        <div>
            <h1>Authors List</h1>
            <ul>
                {authors.map(author => (
                    <li key={author.id}>{author.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Authors;