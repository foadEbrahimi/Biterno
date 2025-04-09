import React, { useState } from "react";

import Content from "../../components/Landing/hero/Content";

import chevronBottom from "../../assets/imgs/chevronBottom.svg";
import { Link } from "react-router";
import { useLocalState } from "../../context/LocalStateProvider";

export default function Hero() {
  const { showNav } = useLocalState();

  return (
    <div className="relative">
      <Content />
      
    </div>
  );
}
