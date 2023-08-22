/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Books from './books';

global.fetch = jest.fn();

const mockBooks = [
  { isbn: '123', title: 'Jonathan Strange and Mr Norrell', author: 'Susanna Clarke', year: 2004, fiction: true },
  { isbn: '456', title: 'The Path To Power', author: 'Robert Caro', year: 1982, fiction: false },
];

beforeEach(() => {
  fetch.mockClear();
});

test('renders books', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => mockBooks,
  });

  render(<BrowserRouter>
    <Books />
  </BrowserRouter>);

  await waitFor(() => {
    expect(screen.getByText('Jonathan Strange and Mr Norrell')).toBeInTheDocument();
  });
});

test('searches books by title', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => mockBooks,
  });

  render(<BrowserRouter>
    <Books />
  </BrowserRouter>);

  const searchInput = screen.getByPlaceholderText('Search by title, author');
  fireEvent.change(searchInput, { target: { value: 'Norrell' } });

  await waitFor(() => {
    expect(screen.getByText('Jonathan Strange and Mr Norrell')).toBeInTheDocument();
  });
});

test('searches books by author', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => mockBooks,
  });

  render(<BrowserRouter>
    <Books />
  </BrowserRouter>);

  const searchInput = screen.getByPlaceholderText('Search by title, author');
  fireEvent.change(searchInput, { target: { value: 'Caro' } });

  await waitFor(() => {
    expect(screen.getByText('The Path To Power')).toBeInTheDocument();
    expect(screen.queryByText('Jonathan Strange and Mr Norrell')).toBeNull();
  });
});
