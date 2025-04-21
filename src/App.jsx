import React from "react";
import { Outlet, Route, Routes } from "react-router";

import Footer from "@/components/layout/landing/Footer";
import Landing from "@features/Landing/Landing";

import Contact from "@/features/contact/Contact";
import Login from "@features/auth/login/Login";
import Signup from "@features/auth/signup/Signup";
import Discover from "@features/discover/Discover";
import Market from "@features/market/Market";
import ScrollToTop from "./components/common/ScrollToTop";
import Layout from "./components/layout/auth/Layout";
import ForgetPass from "./features/auth/forget/ForgetPass";

import { ThemeProvider } from "./components/common/theme-provider";

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <Routes>
          {/* landing */}
          <Route
            path="/"
            element={
              <>
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
            <Route path="forget" element={<ForgetPass />} />
          </Route>
        </Routes>
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}
