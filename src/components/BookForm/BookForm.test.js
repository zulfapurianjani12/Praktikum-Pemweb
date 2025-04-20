import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

test('menampilkan input form dan bisa submit', () => {
  // Buat mock function untuk menangani penambahan buku
  const mockAddBook = jest.fn();

  // Render komponen BookForm dengan prop mockAddBook
  render(<BookForm addBook={mockAddBook} />);

  // Ambil elemen input berdasarkan placeholder
  const titleInput = screen.getByPlaceholderText(/Judul Buku/i);
  const authorInput = screen.getByPlaceholderText(/Penulis/i);
  const submitBtn = screen.getByRole('button', { name: /Tambah Buku/i });

  // Simulasikan user mengisi input
  fireEvent.change(titleInput, { target: { value: 'Buku A' } });
  fireEvent.change(authorInput, { target: { value: 'Penulis A' } });

  // Simulasikan klik tombol submit
  fireEvent.click(submitBtn);

  // Verifikasi bahwa mockAddBook dipanggil dengan data yang benar
  expect(mockAddBook).toHaveBeenCalledWith(expect.objectContaining({
    title: 'Buku A',
    author: 'Penulis A',
  }));
});
