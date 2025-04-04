import React from "react";

import Layout from "../../layout/landing/Layout";

import Hero from "../../components/Discover/Hero";
import Latest from "./Latest";
import Search from "./Search";

export default function Discover() {
  return (
    <div className="mt-10">
      <Layout>
        <Hero />
        <Latest />
        <Search />
      </Layout>
    </div>
  );
}
