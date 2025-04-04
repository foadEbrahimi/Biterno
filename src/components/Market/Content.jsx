import React from "react";

export default function Content() {
  return (
    <div className="mt-20 flex flex-col ~gap-2/5 lg:!mt-[15rem] xl:!mt-[16.5rem] 2xl:!mt-[15rem]">
      <h1 className="font-bold ~text-4xl/6xl">
        قیمت <br /> ارزهای دیجیتال <br /> امروزی
      </h1>
      <span className="text-[#353945] ~text-sm/2xl">
        ارزش بازار جهانی کریپتو{" "}
        <span className="font-extrabold text-black">1.86 تریلیون دلار</span> است
      </span>
    </div>
  );
}
