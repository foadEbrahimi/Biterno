import React from "react";

import img from "@assets/imgs/discover/contanerPlaceholder.png";

export default function Hero() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-[#23262F] ~text-4xl/6xl">
          بلاک چین و رمزارز
        </h1>
        <span className="mt-2 text-[#777E90] xl:text-lg">
          یک آژانس خلاق که رهبری و الهام بخش است
        </span>
        <div className="flex items-center gap-3">
          <button className="rounded-full border-2 px-4 py-2 font-semibold">
            الان یاد بگیر
          </button>
          <button className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white">
            تماشای آموزش
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
}
