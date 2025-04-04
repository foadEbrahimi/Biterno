import React from "react";

import Layout from "../../layout/landing/Layout";
import LearnCard from "./LearnCard";

export default function Learn() {
  return (
    <div className="mt-20">
      <div>
        <div className="flex flex-col gap-3">
          <span className="text-center font-bold text-[#23262F] ~text-3xl/4xl">
            یاد بگیرید و کسب درآمد کنید
          </span>
          <span className="mx-auto text-center text-[#353945] md:max-w-[20rem]">
            Stacks is a production-ready library of stackablecontent blocks
            built in React Native.
          </span>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3 lg:gap-10">
          <LearnCard />
          <LearnCard />
          <LearnCard />
        </div>
      </div>
    </div>
  );
}
