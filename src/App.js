// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router untuk navigasi halaman
import { BookProvider } from './context/BookContext'; // Context Provider untuk state global buku

// Import halaman utama dan halaman statistik
import Home from './pages/Home/HomePage';
import Stats from './pages/Stats/StatsPage';

import './App.css'; // Import file styling global untuk aplikasi

const App = () => {
  return (
    // Bungkus seluruh app dengan BookProvider agar semua komponen bisa mengakses data buku
    <BookProvider>
      <Router>
        {/* Navigasi utama */}
        <nav>
          <Link to="/">🏠 Home</Link>
          <Link to="/stats">📊 Statistik</Link>
        </nav>

        {/* Rute halaman */}
        <Routes>
          {/* Halaman utama */}
          <Route path="/" element={<Home />} />
          {/* Halaman statistik */}
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
