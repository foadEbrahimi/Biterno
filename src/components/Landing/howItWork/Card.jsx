import React from "react";

import connectLine from "../../../assets/imgs/connect-line.svg";
import step1 from "../../../assets/imgs/step-1.png";

export default function Card() {
  return (
    <div className="flex w-fit max-w-[15rem] flex-col gap-5 text-right lg:text-center 2xl:max-w-[18rem]">
      <div className="flex items-center gap-5 xl:hidden">
        <img src={step1} className="w-24" alt="" />
        <img
          src={connectLine}
          className="flex-1 md:w-52 md:flex-none lg:w-fit"
          alt="connectLine svg"
        />
      </div>
      <div>
        <span className="font-semibold text-[#777E90]">مرحله یک</span>
        <h2 className="my-3 mt-5 text-lg font-bold">دانلود</h2>
        <p className="text-[#353945]">
          ما ایده ها را از ساده تا پیچیده درک می کنیم، استفاده از همه چیز آسان
          می شود
        </p>
      </div>
    </div>
  );
}
