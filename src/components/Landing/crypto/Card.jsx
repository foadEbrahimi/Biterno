import React from 'react';

export default function Card({ height, vertical, img, max = false }) {
  return (
    <div
      className={`space-y-3 ${
        vertical === true
          ? 'flex flex-row-reverse items-center gap-5'
          : 'flex flex-col'
      }`}
    >
      <img src={img} alt="img" className={`rounded-lg ${height} w-full`} />
      <div className={`space-y-2 ${max && 'max-w-[15rem]'}`}>
        <span
          className={`text-[#23262F] ${vertical ? '' : 'text-2xl'} font-bold`}
        >
          توکن های اهرمی اکنون در دسترس هستند
        </span>
        <p className="text-[#777E90] font-semibold text-xs">
          چیزهای خوب در 3 ثانیه می آیند. اکنون 3 برابر توکن اهرمی دریافت کنید.{' '}
        </p>
      </div>
    </div>
  );
}
