import React from 'react';
import Landing from './pages/Landing/Landing';
import { BrowserRouter, Route, Routes } from 'react-router';
import Hero from './pages/Landing/Hero';
import Footer from './pages/Landing/Footer';
import Market from './pages/market/Market';
import Navbar from './components/Landing/hero/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="market" element={<Market />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
