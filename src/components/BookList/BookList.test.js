import { render, screen } from '@testing-library/react';
import BookList from './BookList';

test('menampilkan buku sesuai filter', () => {
  // Contoh data buku
  const books = [
    { id: 1, title: 'A', author: 'X', status: 'miliki' },
    { id: 2, title: 'B', author: 'Y', status: 'baca' },
  ];

  // Render BookList dengan filter status 'baca'
  render(<BookList books={books} filter="baca" onEdit={() => {}} />);

  // Pastikan buku dengan status 'baca' muncul
  expect(screen.getByText(/B/)).toBeInTheDocument();

  // Pastikan buku dengan status lain tidak muncul
  expect(screen.queryByText(/A/)).not.toBeInTheDocument();
});
