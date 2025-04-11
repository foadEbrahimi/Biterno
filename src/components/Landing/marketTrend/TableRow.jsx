import React from "react";

import chart from "../../../assets/imgs/chart.svg";
import chart2 from "../../../assets/imgs/chart2.svg";
import eth from "../../../assets/imgs/crypto icons/eth.svg";
import bitcoin from "../../../assets/imgs/crypto icons/bitcoin.svg";

export default function TableRow() {
  return (
    <tr className="cursor-pointer rounded-2xl border-gray-200 bg-white px-5 transition-all duration-200 hover:bg-[#F4F5F6]">
      <th
        scope="row"
        className="hidden whitespace-nowrap px-2 py-4 font-bold text-gray-900 sm:table-cell lg:text-lg"
      >
        1
      </th>
      <th
        scope="row"
        className="flex items-center gap-3 whitespace-nowrap py-5 font-medium text-gray-900"
      >
        <img src={eth} className="w-7 lg:w-fit" alt="coin svg" />
        <span className="font-semibold">ریپل</span>
        <span className="font-sans text-sm text-[#B1B5C3]">XRP</span>
      </th>
      <td className="py-4 text-[16px] font-bold text-black">36,201.34</td>
      <td className="py-4 text-[16px] font-bold text-[#FF6838]" dir="ltr">
        -0.74%
      </td>
      <td className="hidden md:table-cell">
        <img src={chart} alt="chart svg" />
      </td>
      <td className="hidden py-4 sm:table-cell">
        <button className="rounded-full border-2 px-5 py-1.5 font-semibold text-black transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD]">
          ترید
        </button>
      </td>
    </tr>
  );
}
