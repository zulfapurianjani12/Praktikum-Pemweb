// Hook untuk menghitung statistik buku berdasarkan statusnya
import { useMemo } from 'react';

function useBookStats(books) {
  // useMemo digunakan agar perhitungan hanya dilakukan saat 'books' berubah
  return useMemo(() => {
    const stats = {
      total: books.length, // Total semua buku
      milik: books.filter(book => book.status === 'milik').length, // Buku yang dimiliki
      baca: books.filter(book => book.status === 'baca').length,   // Buku yang sedang dibaca
      beli: books.filter(book => book.status === 'beli').length,   // Buku yang ingin dibeli
    };
    return stats;
  }, [books]);
}

export default useBookStats;
