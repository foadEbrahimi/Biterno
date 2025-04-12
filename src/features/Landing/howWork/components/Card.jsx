import React from "react";

import connectLine from "@assets/imgs/connect-line.svg";

export default function Card({ image, step, title, desc }) {
  return (
    <div className="flex w-fit max-w-[15rem] flex-col gap-5 text-right lg:text-center 2xl:max-w-[18rem]">
      <div className="flex items-center gap-5 xl:hidden">
        <img src={image} className="~w-20/24" alt="step img" />
        <img
          src={connectLine}
          className="w-32 md:w-52 md:flex-none lg:w-fit"
          alt="connectLine svg"
        />
      </div>
      <div>
        <span className="font-vazirDemiBold text-[#777E90]">مرحله {step}</span>
        <h2 className="my-3 mt-5 text-lg font-bold">{title}</h2>
        <p className="text-[#353945]">{desc}</p>
      </div>
    </div>
  );
}
