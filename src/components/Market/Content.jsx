import React from 'react';

export default function Content() {
  return (
    <div className="flex mt-20 lg:mt-0 flex-col ~gap-2/5">
      <h1 className="font-bold ~text-4xl/6xl">
        قیمت <br /> ارزهای دیجیتال <br /> امروزی
      </h1>
      <span className="text-[#353945] ~text-sm/2xl">
        ارزش بازار جهانی کریپتو{' '}
        <span className="font-extrabold text-black">1.86 تریلیون دلار</span> است
      </span>
    </div>
  );
}
