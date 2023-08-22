/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Authors from './authors';

global.fetch = jest.fn();

const mockAuthors = [
    { name: 'Susanna Clarke', author_date_of_birth: '1959-11-01', author_date_of_death: null },
    { name: 'Robert Caro', author_date_of_birth: '1935-10-30', author_date_of_death: null },
];

beforeEach(() => {
    fetch.mockClear();
});

test('renders authors', async () => {
    fetch.mockResolvedValueOnce({
        json: async () => mockAuthors,
    });

    render(<BrowserRouter>
        <Authors />
    </BrowserRouter>);

    await waitFor(() => {
        expect(screen.getByText('Susanna Clarke')).toBeInTheDocument();
        expect(screen.getByText('Robert Caro')).toBeInTheDocument();
    });
});

test('searches authors by name', async () => {
    fetch.mockResolvedValueOnce({
        json: async () => mockAuthors,
    });

    render(<BrowserRouter>
        <Authors />
    </BrowserRouter>);

    const searchInput = screen.getByPlaceholderText('Search by name');
    fireEvent.change(searchInput, { target: { value: 'Caro' } });

    await waitFor(() => {
        expect(screen.getByText('Robert Caro')).toBeInTheDocument();
        expect(screen.queryByText('Susanna Clarke')).toBeNull();
    });
});
