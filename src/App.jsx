import React from "react";
import { Route, Routes } from "react-router";

import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Landing/hero/Navbar";
import Footer from "./pages/Landing/Footer";

import Market from "./pages/market/Market";
import Discover from "./pages/discover/Discover";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="market" element={<Market />} />
        <Route path="discover" element={<Discover />} />
      </Routes>
      <Footer />
    </>
  );
}
