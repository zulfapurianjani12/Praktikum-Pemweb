// Komponen halaman Statistik Buku
import React from 'react';
import { useBookContext } from '../../context/BookContext'; // Mengakses state global daftar buku
import useBookStats from '../../hooks/useBookStats'; // Custom hook untuk menghitung statistik buku

const Stats = () => {
  const { books } = useBookContext(); // Ambil semua data buku dari context
  const stats = useBookStats(books);  // Hitung statistik berdasarkan data buku

  return (
    <div className="container">
      {/* Judul halaman */}
      <h1>📈 Statistik Buku</h1>
      
      {/* Tampilkan jumlah masing-masing kategori */}
      <p>Total Buku: {stats.total}</p>
      <p>Milik: {stats.milik}</p>
      <p>Sedang Dibaca: {stats.baca}</p>
      <p>Ingin Dibeli: {stats.beli}</p>
    </div>
  );
};

export default Stats;