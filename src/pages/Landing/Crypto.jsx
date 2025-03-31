import React from 'react';

import Layout from '../../layout/landing/Layout';
import Card from '../../components/Landing/crypto/Card';

import arrow from '../../assets/imgs/arrow-long.svg';

export default function Crypto() {
  return (
    <div className="mt-10">
      <Layout>
        <div>
          <div className="flex items-center justify-between">
            <span className="~text-3xl/4xl font-bold">یادگیری کریپتو</span>
            <button className="py-1 font-semibold px-3 text-sm   lg:text-base text-black rounded-full border-2">
              مشاهده بیشتر
            </button>
          </div>
          <div className="mt-3">
            <ul className="flex font-semibold text-[#777E90] [&>*]:hover:bg-[#353945] [&>*]:py-0.5 [&>*]:rounded-full [&>*]:hover:text-white [&>*]:px-3 text-md items-center gap-5">
              <li className="bg-[#353945] py-0.5  rounded-full text-white px-3">
                همه
              </li>
              <li>بیتکوین</li>
              <li>بلاکچین</li>
              <li>آموزش</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 space-y-5">
          <div className="grid lg:hidden md:grid-cols-2 gap-5">
            <Card height="h-[20rem]" />
            <Card height="h-[20rem]" />
          </div>
          <div className="hidden lg:flex items-start gap-20">
            <div className="flex-1">
              <Card height="h-[33rem]" />
            </div>
            <div className="space-y-5">
              <Card vertical={true} height="h-40" />
              <Card vertical={true} height="h-40" />
              <Card vertical={true} height="h-40" />
            </div>
          </div>
          <div className="flex items-center lg:hidden md:justify-start justify-center gap-3">
            <button className="hover:border-2 w-10 h-10 flex items-center justify-center rounded-full">
              <img src={arrow} alt="" className="w-4" />
            </button>
            <button className="hover:border-2 w-10 h-10 flex items-center justify-center rounded-full">
              <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
            </button>
          </div>
          <button className="border-2 md:hidden rounded-full p-2 text-black w-full font-bold">
            مشاهده بیشتر
          </button>
        </div>
      </Layout>
    </div>
  );
}
