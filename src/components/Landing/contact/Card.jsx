import React from 'react';

export default function Card() {
  return (
    <div className="rounded-2xl border bg-white pb-5 max-w-[25rem] p-3">
      <img src="" className="h-[20rem]" alt="" />
      <div className="text-center space-y-2">
        <span className="font-bold text-xl">ارزش اصلی 01</span>
        <p className="text-[#777E90] font-semibold">
          ما ایده ها را از ساده تا پیچیده درک می کنیم، استفاده از همه چیز آسان
          می شود و به بالقوه ترین مشتریان دسترسی پیدا می کند.
        </p>
      </div>
    </div>
  );
}
