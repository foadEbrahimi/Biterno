import React from "react";

import chart from "@assets/imgs/chart.svg";
import chart2 from "@assets/imgs/chart2.svg";

import { Skeleton } from "@/components/ui/Skeleton";
import { formatToTomanWithCommas } from "../../../../utils/helper";

export function ArzCardSkeleton() {
  return (
    <div className="flex h-[8.5rem] !w-full animate-pulse cursor-pointer items-center justify-between gap-12 rounded-full bg-white px-10 shadow">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-24 rounded" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-16 w-32 rounded-full" />
    </div>
  );
}

export default function CardArz({ name, image, price, change24h }) {
  return (
    <div className="flex w-[15rem] max-w-[23rem] cursor-pointer items-center justify-between gap-5 rounded-full bg-white px-5 py-6 shadow transition-all duration-300 hover:shadow-lg sm:h-[7rem] sm:w-[20rem] sm:px-8 md:h-[8.5rem] md:w-full md:gap-12 md:px-10 xl:!min-w-[90%] xl:!max-w-[90%]">
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img src={image} className="w-8" alt="" />
          <span className="font-vazirDemiBold text-sm uppercase text-gray-500">
            {name}/usdt
          </span>
        </div>
        <div className="flex w-full justify-end">
          {/* <span
            className={`mr-1 font-bold ~text-sm/2xl ${change24h > 0 ? "text-green-600" : "text-red-600"}`}
            dir="ltr"
          >
            {change24h}
          </span> */}
          <span className="font-bold ~text-sm/2xl">
            {formatToTomanWithCommas(price.slice(0, -1))}
          </span>
        </div>
      </div>
      <div className="w-[7rem] flex-1 md:w-[7rem]">
        <img src={change24h > 0 ? chart : chart2} alt="" />
      </div>
    </div>
  );
}
