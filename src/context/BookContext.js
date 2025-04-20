import React, { createContext, useContext, useEffect, useState } from 'react';

// Membuat konteks untuk manajemen data buku
const BookContext = createContext();

// Custom hook agar komponen lain bisa mengakses context dengan mudah
export const useBookContext = () => useContext(BookContext);

// Provider utama yang membungkus komponen dan menyimpan state global buku
export const BookProvider = ({ children }) => {
  // State untuk menyimpan list buku, diinisialisasi dari localStorage jika ada
  const [books, setBooks] = useState(() => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  // Menyimpan data buku ke localStorage setiap kali books berubah
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // Menambahkan buku baru ke state
  const addBook = (book) => {
    const newBook = { ...book, id: Date.now() }; // Tambah ID unik
    setBooks((prev) => [...prev, newBook]);
  };

  // Mengupdate buku berdasarkan ID
  const updateBook = (updatedBook) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  // Menghapus buku berdasarkan ID
  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  // Menyediakan state dan fungsi ke seluruh komponen anak
  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};
