import React from 'react';
import { useBookContext } from '../../context/BookContext';

const BookList = ({ onEdit, filter, searchQuery }) => {
  // Ambil daftar buku dan fungsi hapus dari context
  const { books, deleteBook } = useBookContext();

  // Filter buku berdasarkan filter status dan pencarian judul
  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === 'semua' || book.status === filter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Tampilkan pesan jika tidak ada buku yang sesuai filter
  if (filteredBooks.length === 0) {
    return <p>Belum ada buku.</p>;
  }

  return (
    <ul className="book-list">
      {/* Loop buku yang sudah difilter */}
      {filteredBooks.map((book) => (
        <li key={book.id} className="book-item">
          {/* Tampilkan judul, penulis, dan status */}
          <span>
            <strong>{book.title}</strong> oleh {book.author} ({book.status})
          </span>

          {/* Tombol aksi: edit dan hapus */}
          <div className="actions">
            <button onClick={() => onEdit && onEdit(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Hapus</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
