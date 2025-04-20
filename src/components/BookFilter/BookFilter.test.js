import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

// Test ini memastikan bahwa dropdown muncul dan dapat berfungsi dengan baik
test('dropdown muncul dan bisa diganti', () => {
  // Membuat mock function untuk menangkap perubahan filter
  const mockFilter = jest.fn();

  // Render komponen dengan prop mockFilter
  render(<BookFilter onFilter={mockFilter} />);

  // Ambil elemen dropdown (combobox)
  const select = screen.getByRole('combobox');

  // Pastikan dropdown muncul di dokumen
  expect(select).toBeInTheDocument();

  // Simulasikan perubahan nilai menjadi 'beli'
  fireEvent.change(select, { target: { value: 'beli' } });

  // Pastikan fungsi mockFilter dipanggil dengan nilai yang benar
  expect(mockFilter).toHaveBeenCalledWith('beli');
});
