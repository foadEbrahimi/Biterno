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
    <div className="flex h-[8.5rem] !w-fit max-w-[23rem] cursor-pointer items-center justify-between gap-12 rounded-full bg-white px-10 shadow transition-all duration-300 xl:!min-w-[90%] xl:!max-w-[90%]">
      <div className="flex flex-1 flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <img src={image} className="w-8" alt="" />
          <span className="font-vazirDemiBold text-sm uppercase text-gray-500">
            {name}/usdt
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold ~text-xl/2xl">
            {formatToTomanWithCommas(price)}
          </span>
          <svg
            aria-hidden="true"
            data-prefix="fal"
            data-icon="arrow-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`drop-shadow-green-600 ${change24h > 0 ? "drop-shadow-green-600 text-green-600" : "drop-shadow-red-600 text-red-600 scale-y-[-1]"} w-4 drop-shadow-2xl`}
          >
            <path
              fill="currentColor"
              d="M4.465 263.536l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L207 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l178.494 178.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.05c-4.686-4.686-12.284-4.686-16.971 0L4.465 246.566c-4.687 4.686-4.687 12.284 0 16.97z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-[7rem] flex-1">
        <img src={change24h > 0 ? chart : chart2} alt="" />
      </div>
    </div>
  );
}
