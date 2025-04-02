import React from 'react';

import Layout from '../../layout/landing/Layout';
import Card from '../../components/Landing/crypto/Card';

import arrow from '../../assets/imgs/arrow-long.svg';
import blog1 from '../../assets/imgs/blog-1.jpg';
import blog2 from '../../assets/imgs/blog-2.jpg';
import blog3 from '../../assets/imgs/blog-3.jpg'
import blog4 from '../../assets/imgs/blog-4.jpg';

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
        <div className="mt-5 space-y-5">
          <div className="grid lg:hidden md:grid-cols-2 gap-5">
            <Card height="h-[20rem]" />
            <Card height="h-[20rem]" />
          </div>
          <div className="hidden lg:flex items-start gap-20">
            <div className="flex-1 lg:max-w-[40rem]">
              <Card height="h-[33rem]" img={blog1}/>
            </div>
            <div className="space-y-5">
              <Card max vertical={true} height="h-[12rem] w-[14rem]" img={blog2}/>
              <Card max vertical={true} height="h-[12rem] w-[14rem]" img={blog4}/>
              <Card max vertical={true} height="h-[12rem] w-[14rem]" img={blog3}/>
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
          <button className="border-2 lg:hidden rounded-full p-2 text-black w-full font-bold">
            مشاهده بیشتر
          </button>
        </div>
      </Layout>
    </div>
  );
}
