import React from "react";
import { Outlet, Route, Routes } from "react-router";

import Footer from "@/components/layout/landing/Footer";
import Landing from "@features/Landing/Landing";
import Navbar from "@/components/layout/landing/Navbar";

import Login from "@features/auth/login/Login";
import Signup from "@features/auth/signup/Signup";
import Contact from "@features/contact/Contact";
import Discover from "@features/discover/Discover";
import Market from "@features/market/Market";
import Layout from "./components/layout/auth/Layout";

export default function App() {
  return (
    <>
      <Routes>
        {/* landing */}
        <Route
          path="/"
          element={
            <>
              {/* <Navbar /> */}
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Landing />} />
          <Route path="market" element={<Market />} />
          <Route path="discover" element={<Discover />} />
          <Route path="contact" element={<Contact />} />
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
