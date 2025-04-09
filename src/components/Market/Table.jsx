import React from "react";

import marketplace from "../../assets/imgs/marketplace.svg";
import chartLine from "../../assets/imgs/chartLine.svg";
import TableRow from "./TableRow";

export default function Table() {
  return (
    <div className="mt-40 hidden lg:block">
      <div className="relative mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
          <thead className="border-b uppercase text-[#777E90]">
            <tr>
              <th scope="col" className="px-1 py-3">
                <div className="flex items-center gap-2">
                  #
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.14741 6.80441C5.40776 7.06476 5.82987 7.06476 6.09022 6.80441L7.95215 4.94248L9.81408 6.80441C10.0744 7.06476 10.4965 7.06476 10.7569 6.80441C11.0172 6.54406 11.0172 6.12195 10.7569 5.8616L8.42355 3.52827C8.1632 3.26792 7.74109 3.26792 7.48074 3.52827L5.14741 5.8616C4.88706 6.12195 4.88706 6.54406 5.14741 6.80441Z"
                      fill="#777E91"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.14741 9.19461C5.40776 8.93426 5.82987 8.93426 6.09022 9.19461L7.95215 11.0565L9.81408 9.19461C10.0744 8.93426 10.4965 8.93426 10.7569 9.19461C11.0172 9.45496 11.0172 9.87707 10.7569 10.1374L8.42355 12.4708C8.1632 12.7311 7.74109 12.7311 7.48074 12.4708L5.14741 10.1374C4.88706 9.87707 4.88706 9.45496 5.14741 9.19461Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-1 py-3">
                <div className="flex items-center gap-3">
                  نام
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.14741 6.80441C5.40776 7.06476 5.82987 7.06476 6.09022 6.80441L7.95215 4.94248L9.81408 6.80441C10.0744 7.06476 10.4965 7.06476 10.7569 6.80441C11.0172 6.54406 11.0172 6.12195 10.7569 5.8616L8.42355 3.52827C8.1632 3.26792 7.74109 3.26792 7.48074 3.52827L5.14741 5.8616C4.88706 6.12195 4.88706 6.54406 5.14741 6.80441Z"
                      fill="#777E91"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.14741 9.19461C5.40776 8.93426 5.82987 8.93426 6.09022 9.19461L7.95215 11.0565L9.81408 9.19461C10.0744 8.93426 10.4965 8.93426 10.7569 9.19461C11.0172 9.45496 11.0172 9.87707 10.7569 10.1374L8.42355 12.4708C8.1632 12.7311 7.74109 12.7311 7.48074 12.4708L5.14741 10.1374C4.88706 9.87707 4.88706 9.45496 5.14741 9.19461Z"
                      fill="#777E91"
                    />
                  </svg>
                </div>
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
              <th scope="col" className="hidden px-1 py-3 xl:table-cell">
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
