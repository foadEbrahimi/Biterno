import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Landing/hero/Navbar";
import Footer from "./pages/Landing/Footer";

import Market from "./pages/market/Market";
import Discover from "./pages/discover/Discover";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="market" element={<Market />} />
          <Route path="discover" element={<Discover />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
