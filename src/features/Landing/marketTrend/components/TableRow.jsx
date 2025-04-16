import React from "react";

import { Skeleton } from "@/components/ui/Skeleton";

import chart from "@assets/imgs/chart.svg";
import chart2 from "@assets/imgs/chart2.svg";
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
    </tr>
  );
}

export default function TableRow({ index, crypto }) {
  if (!crypto) return null;

  const { name, image, price, change24h } = crypto;

  return (
    <tr className="border-b transition-all duration-500 hover:scale-105 hover:bg-white/50 hover:shadow-md">
      <td className="hidden w-[3rem] px-4 py-3 sm:table-cell">
        <span className="text-sm font-bold text-black">{index + 1}</span>
      </td>
      <td className="w-[10rem] px-1 py-3">
        <div className="flex items-center gap-2">
          <img src={image} alt={name} className="h-8 w-8 rounded-full" />
          <span className="font-bold text-black">{name}</span>
        </div>
      </td>
      <td className="w-[8rem] px-1 py-3">
        <span className="text-[16px] text-black">
          {formatToTomanWithCommas(price.slice(0, -1))}
        </span>
      </td>
      <td className="w-[8rem] px-1 py-3 pl-7 text-center xl:pl-20">
        <span
          dir="ltr"
          className={`font-vazirBold ${change24h >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {change24h}%
        </span>
      </td>
      <td className="hidden w-[12rem] px-1 py-3 md:table-cell 2xl:w-[8rem]">
        <img src={change24h > 0 ? chart : chart2} alt="chart svg" />
      </td>
      <td className="hidden w-[8rem] px-1 py-3 sm:table-cell">
        <button className="rounded-full border-2 px-4 py-2 text-sm text-black transition-all hover:border-primary hover:bg-primary hover:text-[#FCFCFD]">
          معامله
        </button>
      </td>
    </tr>
  );
}
