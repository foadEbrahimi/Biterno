import React from "react";

import Layout from "../../components/layout/landing/Layout";
import Navbar from "@/components/layout/landing/Navbar";
import MarketTrend from "../Landing/marketTrend/MarketTrend";

import Content from "./components/Content";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Table from "./components/Table";

import object from "@assets/imgs/landing/hero/object.png";

export default function Market() {
  return (
    <div className="overflow-x-hidden relative bg-bg">
      <div className=" !z-20">
        <Navbar />
        <div
          id="marketHero"
          style={{
            height: "calc(90dvh - 56px)",
          }}
          className="relative p-2 py-10 lg:flex lg:items-center"
        >
          <Layout>
            <div className="!z-20 mt-5">
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
        </Layout>
        <div
          draggable={false}
          className="absolute -left-20 -top-20 z-10 h-[326px] w-[322px] rounded-full bg-primary/40 blur-[100px]"
        ></div>
      </div>
      <div className="absolute right-0 top-0 z-10 h-full w-full">
        <img src={object} alt="object png" draggable={false} />
      </div>
    </div>
  );
}
