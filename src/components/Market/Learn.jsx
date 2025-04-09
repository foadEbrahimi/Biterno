import React from "react";

import LearnCard from "./LearnCard";

export default function Learn() {
  return (
    <div className="my-20 flex items-center lg:h-[90dvh]">
      <div>
        <div className="flex flex-col gap-5">
          <span className="text-center font-bold text-[#23262F] ~text-2xl/4xl">
            یاد بگیرید و کسب درآمد کنید
          </span>
          <span className="mx-auto text-center text-sm text-[#353945] md:max-w-[20rem]">
            Stacks is a production-ready library of stackablecontent blocks
            built in React Native.
          </span>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3 lg:gap-10">
          <LearnCard />
          <LearnCard />
          <LearnCard />
        </div>
        <button className="mx-auto mt-10 flex items-center justify-center gap-5 rounded-full border-2 px-5 py-2 transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD]">
          مشاهده بیشتر
          <div className="loader-market"></div>
        </button>
      </div>
    </div>
  );
}
