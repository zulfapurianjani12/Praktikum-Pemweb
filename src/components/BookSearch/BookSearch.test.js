import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookSearch from './BookSearch';

describe('BookSearch', () => {
  // Test untuk memastikan input pencarian tampil di dokumen
  it('renders search input', () => {
    render(<BookSearch onSearch={() => {}} />);
    const input = screen.getByPlaceholderText(/cari buku/i);
    expect(input).toBeInTheDocument(); // Input ditemukan
  });

  // Test untuk memastikan fungsi onSearch terpanggil saat mengetik
  it('calls onSearch when typing', () => {
    const mockSearch = jest.fn(); // Mock function untuk onSearch
    render(<BookSearch onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText(/cari buku/i);
    fireEvent.change(input, { target: { value: 'react' } }); // Simulasi user mengetik "react"

    expect(mockSearch).toHaveBeenCalledWith('react'); // Pastikan onSearch dipanggil dengan "react"
  });
});
