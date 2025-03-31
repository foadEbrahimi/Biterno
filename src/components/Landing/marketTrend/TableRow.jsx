import React from 'react';

import chart from '../../../assets/imgs/chart.svg';
import chart2 from '../../../assets/imgs/chart2.svg';
import bitcoin from '../../../assets/imgs/coin symbol.svg';
import eth from '../../../assets/imgs/coin symbol (3).svg';

export default function TableRow() {
  return (
    <tr className="bg-white border-gray-200">
      <th
        scope="row"
        className="py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        1
      </th>
      <th
        scope="row"
        className="py-5 flex items-center gap-3 font-medium text-gray-900 whitespace-nowrap "
      >
        <img src={eth} className="w-5 lg:w-fit" alt="coin svg" />
        <span className="font-semibold">ریپل</span>
        <span className="text-[#B1B5C3] font-sans text-sm">XRP</span>
      </th>
      <td className="py-4 font-bold text-black">$36,201.34</td>
      <td className="py-4 text-[#FF6838] font-sans font-bold" dir="ltr">
        -0.74%
      </td>
      <td className="hidden sm:table-cell">
        <img src={chart} alt="chart svg" />
      </td>
      <td className="py-4 hidden sm:table-cell">
        <button className="py-1 px-4 font-semibold text-black border-2 rounded-full">
          ترید
        </button>
      </td>
    </tr>
  );
}
