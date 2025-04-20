import React from 'react';

// Komponen input pencarian buku
const BookSearch = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari buku..." // Placeholder input
      onChange={(e) => onSearch(e.target.value)} // Kirim value pencarian ke parent
    />
  );
};

export default BookSearch;
