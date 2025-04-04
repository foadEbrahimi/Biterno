import React from "react";

import marketplace from "../../assets/imgs/marketplace.svg";
import chartLine from "../../assets/imgs/chartLine.svg";
import TableRow from "./TableRow";

export default function Table() {
  return (
    <div className="mt-40">
      <div className="relative mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 lg:text-lg rtl:text-right">
          <thead className="border-b uppercase text-[#777E90]">
            <tr>
              <th scope="col" className="px-1 py-3">
                #
              </th>
              <th scope="col" className="px-1 py-3">
                نام
              </th>
              <th scope="col" className="px-1 py-3">
                قیمت
              </th>
              <th scope="col" className="px-1 py-3">
                <span className="font-sans">%</span> 24 ساعت
              </th>
              <th scope="col" className="px-1 py-3">
                <span className="font-sans">%</span> 7 روز
              </th>
              <th scope="col" className="flex items-center gap-1 px-1 py-3">
                <img src={marketplace} alt="" /> بازار
              </th>
              <th scope="col" className="hidden px-1 py-3 lg:table-cell">
                <div className="flex items-center gap-1">
                  <img src={chartLine} alt="" /> میزان صدا (24 ساعت)
                </div>
              </th>
              <th scope="col" className="hidden px-1 py-3 lg:table-cell">
                نمودار{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}
