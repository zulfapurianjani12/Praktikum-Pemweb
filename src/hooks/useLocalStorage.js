// Hook untuk menyimpan dan membaca state dari localStorage
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Inisialisasi state dari localStorage jika ada, kalau tidak pakai initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key:', key);
      return initialValue;
    }
  });

  // Setter untuk mengupdate state dan localStorage secara bersamaan
  const setValue = (value) => {
    try {
      // Mendukung setter berbentuk function seperti useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key:', key);
    }
  };

  // Mengembalikan pasangan [value, setter], mirip seperti useState biasa
  return [storedValue, setValue];
}

export default useLocalStorage;
