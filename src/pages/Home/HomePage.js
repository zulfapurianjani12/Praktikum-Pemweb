import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookFilter from '../../components/BookFilter/BookFilter';
import BookList from '../../components/BookList/BookList';
import BookSearch from '../../components/BookSearch/BookSearch';

const Home = () => {
  const [filter, setFilter] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [editBook, setEditBook] = useState(null); // buat nyimpan buku yang mau diedit

  const handleEdit = (book) => {
    setEditBook(book); // Set buku yang mau diedit
  };

  const handleFinish = () => {
    setEditBook(null); // Reset editBook setelah selesai edit
  };

  return (
    <div className="container">
      <h1>📚 Manajemen Novel Zulfa 📚</h1>
      <BookForm editBook={editBook} onFinish={handleFinish} /> {/* Props sesuai BookForm */}
      <BookFilter onFilter={setFilter} />
      <BookSearch onSearch={setSearchQuery} />
      <BookList filter={filter} searchQuery={searchQuery} onEdit={handleEdit} /> {/* Kirim handleEdit */}
    </div>
  );
};

export default Home;
