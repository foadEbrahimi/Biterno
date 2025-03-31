import React from 'react';

import Layout from '../../../layout/landing/layout';
import cards from '../../../assets/imgs/cards.png';
import curve from '../../../assets/imgs/curve.svg';
import curve2 from '../../../assets/imgs/curve2.png';

export default function Content() {
  return (
    <Layout>
      <div className="flex z-10 flex-col mt-10 md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start gap-5 md:flex md:flex-1">
          <h1 className="text-[#23262F]  ~text-4xl/6xl text-center md:text-right leading-[3.5rem] xl:leading-[5rem] font-bold">
            خرید و فروش <br /> رمزنگاری در چند دقیقه
          </h1>
          <p className="text-[#777E90] font-semibold text-center md:text-right lg:max-w-[25rem]">
            بیت کوین، اتریوم، USDT و توپالت کوین ها را در صرافی افسانه ای دارایی
            های کریپتو معامله کنید.
          </p>
          <div className="flex items-center gap-5 md:hidden">
            <button className="py-2 rounded-full border-2 font-bold px-4">
              ورود
            </button>
            <button className="py-2 px-5 bg-[#3772FF] font-semibold text-white rounded-full">
              ثبت نام
            </button>
          </div>
          <button className="py-2 px-5 bg-[#3772FF] font-semibold hidden md:flex text-white rounded-full">
            همین الان شروع کنید
          </button>
        </div>
        {/* <img src={curve} className="absolute top-0 right-0 -z-10" alt="" />
        <img src={curve2} className="absolute top-0 right-0 -z-10" alt="" /> */}
        <div className="flex-1 items-center flex justify-center">
          <img src={cards} alt="" className="max-h-[39rem]" />
        </div>
      </div>
    </Layout>
  );
}
