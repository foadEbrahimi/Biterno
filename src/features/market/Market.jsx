import React from "react";
import Layout from "../../components/layout/landing/Layout";

import Content from "./components/Content";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Learn from "./components/Learn";
import Table from "./components/Table";
import SmallCards from "./components/SmallCards";

export default function Market() {
  return (
    <div>
      <div
        style={{
          height: "calc(100dvh - 56px)",
        }}
        className="relative bg-[#DECBE9] p-2 py-5 lg:flex lg:items-center"
      >
        <Layout>
          <div className="">
            <Content />
            <Cryptocurrencies />
          </div>
        </Layout>
      </div>
      <Layout>
        <div className="~mt-32/40 lg:hidden">
          <SmallCards />
        </div>
        <Table />
        <Learn />
      </Layout>
    </div>
  );
}
