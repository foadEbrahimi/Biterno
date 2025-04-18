import React from "react";
import Layout from "../../components/layout/landing/Layout";

import Content from "./components/Content";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Learn from "./components/Learn";
import Table from "./components/Table";
import SmallCards from "./components/SmallCards";
import Navbar from "@/components/layout/landing/Navbar";

import img from "@assets/imgs/hero/object.png";
import MarketTrend from "../Landing/marketTrend/MarketTrend";

export default function Market() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        id="marketHero"
        style={{
          height: "calc(100dvh - 56px)",
        }}
        className="relative p-2 py-10 lg:flex lg:items-center"
      >
        <div className="absolute right-0 top-0 !-z-10 h-full w-full">
          <img src={img} alt="" />
        </div>
        <div className="absolute -left-20 -top-20 !-z-20 h-[326px] w-[322px] rounded-full bg-primary/40 blur-[100px]"></div>
        <Layout>
          <div className="mt-5">
            <Content />
            <Cryptocurrencies />
          </div>
        </Layout>
      </div>
      <Layout>
        <div className="~mt-32/40 lg:hidden">
          <MarketTrend btn={false} bg={false} maxCrypto={10} />
        </div>
        <Table />
        {/* <Learn /> */}
      </Layout>
    </div>
  );
}
