import React from "react";
import { Outlet, Route, Routes } from "react-router";

import Landing from "./pages/Landing/Landing";
import Navbar from "./components/Landing/hero/Navbar";
import Footer from "./pages/Landing/Footer";

import Market from "./pages/market/Market";
import Discover from "./pages/discover/Discover";
import Layout from "./layout/auth/Layout";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";

export default function App() {
  return (
    <>
      <Routes>
        {/* landing */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Landing />} />
          <Route path="market" element={<Market />} />
          <Route path="discover" element={<Discover />} />
        </Route>
        {/* auth */}
        <Route path="/auth" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}
