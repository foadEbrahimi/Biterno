import React from "react";

import chart from "../../assets/imgs/chart.svg";
import eth from "../../assets/imgs/coin symbol (3).svg";
import star from "../../assets/imgs/star.svg";

export default function TableRow() {
  return (
    <tr className="font-arial border-gray-200 bg-white">
      <th
        scope="row"
        className="whitespace-nowrap py-4 font-medium text-gray-900"
      >
        <div className="flex items-center gap-1">
          <img src={star} className="w-5" alt="star svg" />1
        </div>
      </th>
      <th
        scope="row"
        className="flex items-center gap-3 whitespace-nowrap py-5 font-medium text-gray-900"
      >
        <img src={eth} className="w-5 lg:w-fit" alt="coin svg" />
        <span className="font-vazir font-semibold">ریپل</span>
        <span className="font-sans text-sm text-[#B1B5C3]">XRP</span>
      </th>
      <td className="py-4 font-bold text-[#23262F]">$36,201.34</td>
      <td className="py-4 font-bold text-[#FF6838]">0.74-</td>
      <td className="py-4 font-bold text-[#58BD7D]">6.04+</td>
      <td className="py-4 font-bold text-[#23262F]">$328,564,656,654</td>
      <td className="hidden py-4 font-bold text-[#23262F] lg:table-cell">
        $328,564,656,654
      </td>
      <td className="hidden lg:table-cell">
        <img src={chart} alt="chart svg" />
      </td>
    </tr>
  );
}
