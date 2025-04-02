import React from 'react';

import img from '../../../assets/imgs/step-1@2x.png'
export default function Card() {
  return (
    <div className="rounded-2xl border bg-white pb-5 max-w-[25rem] p-3">
      <img src={img} className="flex mx-auto" alt="" />
      <div className="text-center space-y-2 mt-10 pb-12">
        <span className="font-bold text-xl">ارزش اصلی 01</span>
        <p className="text-[#777E90] font-semibold">
          ما ایده ها را از ساده تا پیچیده درک می کنیم، استفاده از همه چیز آسان
          می شود و به بالقوه ترین مشتریان دسترسی پیدا می کند.
        </p>
      </div>
      <button className='font-semibold border-2 rounded-full py-1 px-4 text-lg flex mx-auto'>خرید کریپتو</button>
    </div>
  );
}
