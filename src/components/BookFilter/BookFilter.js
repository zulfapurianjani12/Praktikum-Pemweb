import React from 'react';

// Komponen BookFilter menerima fungsi `onFilter` dari parent
// yang akan dipanggil saat user memilih filter dari dropdown
const BookFilter = ({ onFilter }) => {
  return (
    <div>
      <label>Filter:</label>
      {/* Saat opsi diubah, panggil fungsi onFilter dengan nilai yang dipilih */}
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="semua">Semua</option>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
};

export default BookFilter;