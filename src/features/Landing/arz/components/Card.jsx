import React from "react";

import chart from "@assets/imgs/chart.svg";
import chart2 from "@assets/imgs/chart2.svg";

import { Skeleton } from "@/components/ui/Skeleton";
import { formatToTomanWithCommas } from "../../../../utils/helper";

export function ArzCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="mt-2">
        <Skeleton className="h-7 w-32" />
      </div>
      <div className="mt-2">
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </div>
  );
}

export default function CardArz({ name, image, price }) {
  return (
    <div className="flex h-[8.5rem] !w-full cursor-pointer items-center justify-between gap-5 rounded-full bg-white px-10 transition-all duration-300">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <img src={image} className="w-8" alt="" />
          <span className="font-vazirDemiBold text-sm uppercase text-gray-500">
            {name}/usdt
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            {formatToTomanWithCommas(price)}
          </span>
          <svg
            aria-hidden="true"
            data-prefix="fal"
            data-icon="arrow-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="drop-shadow-green-600 w-4 text-green-600 drop-shadow-2xl"
          >
            <path
              fill="currentColor"
              d="M4.465 263.536l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L207 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l178.494 178.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.05c-4.686-4.686-12.284-4.686-16.971 0L4.465 246.566c-4.687 4.686-4.687 12.284 0 16.97z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="">
        <img src={chart} className="" alt="" />
      </div>
    </div>
  );
}
