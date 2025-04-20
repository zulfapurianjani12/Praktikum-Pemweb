import { renderHook, act } from '@testing-library/react';
import { BookProvider, useBookContext } from './BookContext';

// Unit test untuk memastikan fungsi addBook bekerja dengan benar
test('menambahkan buku ke context', () => {
  // Membungkus hook dengan BookProvider agar bisa akses context
  const wrapper = ({ children }) => <BookProvider>{children}</BookProvider>;

  // Render hook untuk menggunakan useBookContext
  const { result } = renderHook(() => useBookContext(), { wrapper });

  // Tambahkan buku baru menggunakan act
  act(() => {
    result.current.addBook({ id: 1, title: 'Buku Test', author: 'Penulis Test' });
  });

  // Verifikasi bahwa buku berhasil ditambahkan
  expect(result.current.books).toHaveLength(1);
});
