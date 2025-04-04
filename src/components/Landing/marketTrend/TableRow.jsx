import React from "react";

import chart from "../../../assets/imgs/chart.svg";
import chart2 from "../../../assets/imgs/chart2.svg";
import bitcoin from "../../../assets/imgs/coin symbol.svg";
import eth from "../../../assets/imgs/coin symbol (3).svg";

export default function TableRow() {
  return (
    <tr className="border-gray-200 bg-white">
      <th
        scope="row"
        className="whitespace-nowrap py-4 font-medium text-gray-900"
      >
        1
      </th>
      <th
        scope="row"
        className="flex items-center gap-3 whitespace-nowrap py-5 font-medium text-gray-900"
      >
        <img src={eth} className="w-5 lg:w-fit" alt="coin svg" />
        <span className="font-semibold">ریپل</span>
        <span className="font-sans text-sm text-[#B1B5C3]">XRP</span>
      </th>
      <td className="py-4 font-bold text-black">$36,201.34</td>
      <td className="py-4 font-sans font-bold text-[#FF6838]" dir="ltr">
        -0.74%
      </td>
      <td className="hidden sm:table-cell">
        <img src={chart} alt="chart svg" />
      </td>
      <td className="hidden py-4 sm:table-cell">
        <button className="rounded-full border-2 px-4 py-1 font-semibold text-black">
          ترید
        </button>
      </td>
    </tr>
  );
}
