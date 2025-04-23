import React from "react";

import chart from "@assets/imgs/common/chart.svg";
import chart2 from "@assets/imgs/common/chart2.svg";

import { Skeleton } from "@/components/ui/Skeleton";
import { formatToTomanWithCommas } from "@/utils/helper";

export function TableRowSkeleton() {
  return (
    <tr className="border-b">
      <td className="hidden w-[3rem] px-1 py-3 sm:table-cell">
        <Skeleton className="h-4 w-4" />
      </td>
      <td className="w-[10rem] px-1 py-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      </td>
      <td className="w-[8rem] px-1 py-3">
        <Skeleton className="h-4 w-24" />
      </td>
      <td className="w-[8rem] px-1 py-3">
        <Skeleton className="h-4 w-16" />
      </td>
      <td className="hidden w-[12rem] px-1 py-3 md:table-cell 2xl:w-[8rem]">
        <Skeleton className="h-10 w-32" />
      </td>
      <td className="hidden w-[8rem] px-1 py-3 sm:table-cell">
        <Skeleton className="h-8 w-20" />
      </td>
      <td className="hidden w-[12rem] px-1 py-3 sm:table-cell">
        <Skeleton className="h-8 w-20" />
      </td>
    </tr>
  );
}

export default function TableRow({ index, crypto }) {
  if (!crypto) return null;
  const { name, image, price, change24h, change7d, marketCap } = crypto;

  return (
    <tr className="group/row border-gray-200 bg-bg transition-all duration-500 hover:bg-[#F4F5F6] dark:hover:scale-95 dark:hover:bg-transparent">
      <th
        scope="row"
        className="whitespace-nowrap py-4 font-medium text-gray-900"
      >
        <div className="group/star flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition-all duration-200 group-hover/star:fill-[#FFD166]"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.3485 5.95574C6.28114 6.11706 6.12928 6.2272 5.95502 6.24111L2.78884 6.49396C2.37455 6.52705 2.20692 7.04438 2.52307 7.31414L4.93269 9.37023C5.06617 9.48413 5.12448 9.66327 5.08362 9.83391L4.34697 12.9101C4.25035 13.3136 4.68891 13.6331 5.04337 13.4175L7.75764 11.766C7.90664 11.6754 8.09376 11.6754 8.24277 11.766L10.957 13.4175C11.3115 13.6331 11.7501 13.3136 11.6534 12.9101L10.9168 9.83391C10.8759 9.66327 10.9342 9.48413 11.0677 9.37023L13.4773 7.31414C13.7935 7.04438 13.6259 6.52705 13.2116 6.49396L10.0454 6.24111C9.87113 6.2272 9.71926 6.11705 9.65191 5.95574L8.43084 3.03132C8.27114 2.64885 7.72927 2.64885 7.56957 3.03132L6.3485 5.95574ZM10.6786 4.9541L9.66123 2.51759C9.04523 1.04231 6.95517 1.04232 6.33918 2.51759L5.32183 4.9541L2.6827 5.16486C1.08475 5.29247 0.43818 7.2879 1.65761 8.32842L3.66328 10.0398L3.0503 12.5996C2.6776 14.156 4.36922 15.3884 5.73641 14.5565L8.0002 13.1792L10.264 14.5565C11.6312 15.3884 13.3228 14.156 12.9501 12.5996L12.3371 10.0398L14.3428 8.32842C15.5622 7.28789 14.9156 5.29247 13.3177 5.16486L10.6786 4.9541Z"
              fill="#777E91"
            />
          </svg>
          <span>{index + 1}</span>
        </div>
      </th>
      <th
        scope="row"
        className="flex items-center gap-3 whitespace-nowrap py-5 font-medium text-gray-900"
      >
        <img src={image} className="w-8" alt="coin svg" />
        <span className="font-iranSans font-semibold dark:text-white">
          {name}
        </span>
      </th>
      <td className="py-4 font-bold text-[#23262F] dark:text-white">
        {formatToTomanWithCommas(price.slice(0, -1))}
      </td>
      <td
        className={`py-4 pr-5 font-bold ${change24h > 0 ? "text-green-600" : "text-red-600"}`}
        dir="ltr"
      >
        {change24h}
      </td>
      <td
        className={`py-4 font-bold ${change7d > 0 ? "text-green-600" : "text-red-600"}`}
        dir="ltr"
      >
        {change7d.toFixed(2)}
      </td>
      <td className="py-4 font-bold text-[#23262F] dark:text-white">
        {formatToTomanWithCommas(marketCap).slice(0, -1)}
      </td>
      <td className="hidden lg:table-cell">
        <img
          src={change24h > 0 ? chart : chart2}
          alt="chart svg"
          className="hidden group-hover/row:hidden xl:block"
        />
        <button className="hover: rounded-full bg-primary px-5 py-2 text-[16px] font-semibold text-white transition-all duration-200 hover:text-black group-hover/row:flex xl:hidden">
          خرید
        </button>
      </td>
    </tr>
  );
}
