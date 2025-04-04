import React from "react";
import Layout from "../../layout/landing/Layout";

import Content from "../../components/Market/Content";
import Cryptocurrencies from "../../components/Market/Cryptocurrencies";
import SmallCard from "../../components/Market/SmallCard";
import Table from "../../components/Market/Table";

export default function Market() {
  return (
    <div>
      <div
        style={{
          height: "calc(100dvh - 56px)",
        }}
        className="bg-[#DECBE9] p-2 py-5 lg:flex lg:items-center"
      >
        <Layout>
          <div className="">
            <Content />
            <Cryptocurrencies />
          </div>
        </Layout>
      </div>
      <Layout>
        <div className="~mt-24/40 md:hidden">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <Table />
      </Layout>
    </div>
  );
}
