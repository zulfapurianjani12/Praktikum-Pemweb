import React, { useEffect, useState } from 'react';
import { useBookContext } from '../../context/BookContext';

const BookForm = ({ editBook, onFinish }) => {
  // Ambil fungsi add dan update dari context
  const { addBook, updateBook } = useBookContext();

  // State lokal untuk menyimpan data buku dari form
  const [book, setBook] = useState({ title: '', author: '', status: 'milik' });

  // Jika editBook berubah (ada data untuk diedit), isi form dengan data tersebut
  useEffect(() => {
    if (editBook) setBook(editBook);
  }, [editBook]);

  // Meng-handle perubahan input field dan menyimpan ke state
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // Submit form untuk tambah/update buku
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi: judul dan penulis wajib diisi
    if (!book.title || !book.author) {
      return alert('Judul dan Penulis wajib diisi!');
    }

    // Jika sedang edit, panggil update; kalau tidak, tambah buku baru
    if (editBook) {
      updateBook(book);
    } else {
      addBook(book);
    }

    // Reset form
    setBook({ title: '', author: '', status: 'milik' });

    // Jika ada callback onFinish (misalnya untuk reset mode edit), panggil
    if (onFinish) onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input judul buku */}
      <input
        name="title"
        placeholder="Judul Buku"
        value={book.title}
        onChange={handleChange}
      />
      {/* Input nama penulis */}
      <input
        name="author"
        placeholder="Penulis"
        value={book.author}
        onChange={handleChange}
      />
      {/* Dropdown status buku */}
      <select name="status" value={book.status} onChange={handleChange}>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      {/* Tombol submit */}
      <button type="submit">{editBook ? 'Update' : 'Tambah'} Buku</button>
    </form>
  );
};

export default BookForm;
