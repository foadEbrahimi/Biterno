import React from "react";

import img from "../../../assets/imgs/step-1@2x.png";
export default function Card() {
  return (
    <div className="xl:max-w-[25rem] rounded-2xl bg-white p-3 pb-12 hover:shadow-xl">
      <img src={img} className="mx-auto flex max-w-[40%] pt-10" alt="" />
      <div className="mt-10 space-y-2 pb-12 text-center">
        <span className="text-xl font-bold">ارزش اصلی 01</span>
        <p className="!pt-3 font-semibold text-[#777E90]">
          ما ایده ها را از ساده تا پیچیده درک می کنیم، استفاده از همه چیز آسان
          می شود و به بالقوه ترین مشتریان دسترسی پیدا می کند.
        </p>
      </div>
      <button className="mx-auto flex rounded-full border-2 px-4 py-1.5 font-semibold transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD]">
        خرید کریپتو
      </button>
    </div>
  );
}
