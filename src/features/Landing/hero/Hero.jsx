import React from "react";

import Content from "./components/Content";
import Navbar from "@/components/layout/landing/Navbar";


export default function Hero() {
  return (
    <div className="bg-bg">
      <div className="relative">

        <Navbar />
        <Content />
      </div>
    </div>
  );
}
