import React from 'react';

export default function Card({ height, vertical }) {
  return (
    <div
      className={`space-y-3 ${
        vertical === true
          ? 'flex flex-row-reverse items-center gap-5'
          : 'flex flex-col'
      }`}
    >
      <div className={`bg-red-200 rounded-lg ${height} w-full`}></div>
      <div className='space-y-2'>
        <span
          className={`text-[#23262F] ${vertical ? '' : 'text-lg'} font-bold`}
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
