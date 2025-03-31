import React from 'react';

import cards from '../../assets/imgs/cards.png';
import Layout from '../../layout/landing/layout';

export default function Hero() {
  return (
    <Layout>
      <div className="flex flex-col mt-10 md:flex-row items-center justify-between">
        <div className="flex flex-col items-start gap-8 md:flex md:flex-1">
          <h1 className="text-[#23262F] xl:text-6xl text-5xl leading-[3.5rem] xl:leading-[5rem] font-bold">
            خرید و فروش <br /> رمزنگاری در چند دقیقه
          </h1>
          <p className="text-[#777E90] font-semibold lg:max-w-[25rem]">
            بیت کوین، اتریوم، USDT و توپالت کوین ها را در صرافی افسانه ای دارایی
            های کریپتو معامله کنید.
          </p>
          <button className="py-2 px-5 bg-[#3772FF] font-semibold text-white rounded-full">
            همین الان شروع کنید
          </button>
        </div>
        <div className="flex-1 items-center flex justify-center">
          <img src={cards} alt="" className="max-h-[39rem]" />
        </div>
      </div>
    </Layout>
  );
}
