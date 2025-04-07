import React from "react";

import Layout from "../../layout/landing/Layout";
import Card from "../../components/Landing/crypto/Card";

import arrow from "../../assets/imgs/arrow-long.svg";
import blog1 from "../../assets/imgs/blog-1.jpg";
import blog2 from "../../assets/imgs/blog-2.jpg";
import blog3 from "../../assets/imgs/blog-3.jpg";
import blog4 from "../../assets/imgs/blog-4.jpg";

export default function Crypto() {
  return (
    <div className="mt-10">
      <Layout>
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold ~text-3xl/4xl">یادگیری کریپتو</span>
            <button className="hidden rounded-full border-2 px-3 py-2 text-sm font-semibold text-black transition-all duration-200 hover:border-[#23262F] hover:bg-[#23262F] hover:text-[#FCFCFD] md:flex lg:text-base">
              مشاهده بیشتر
            </button>
          </div>
          <div className="mt-10">
            <ul className="text-md flex items-center gap-5 font-semibold text-[#777E90] [&>*]:rounded-full [&>*]:px-3 [&>*]:py-0.5 [&>*]:hover:bg-[#353945] [&>*]:hover:text-white">
              <li className="rounded-full bg-[#353945] px-3 py-0.5 text-white">
                همه
              </li>
              <li>بیتکوین</li>
              <li>بلاکچین</li>
              <li>آموزش</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 space-y-5">
          <div className="grid gap-5 md:grid-cols-2 lg:hidden">
            <Card height="h-[20rem]" />
            <Card height="h-[20rem]" />
          </div>
          <div className="hidden items-start gap-20 lg:flex">
            <div className="flex-1 lg:max-w-[50rem]">
              <Card height="h-[31rem]" img={blog1} />
            </div>
            <div className="space-y-5">
              <Card
                max
                vertical={true}
                height="h-[12rem] w-[14rem]"
                img={blog2}
              />
              <Card
                max
                vertical={true}
                height="h-[12rem] w-[14rem]"
                img={blog4}
              />
              <Card
                max
                vertical={true}
                height="h-[12rem] w-[14rem]"
                img={blog3}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 md:justify-start lg:hidden">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
              <img src={arrow} alt="" className="w-4" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
              <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
            </button>
          </div>
          <button className="w-full rounded-full border-2 p-2 font-bold text-black md:hidden lg:hidden">
            مشاهده بیشتر
          </button>
        </div>
      </Layout>
    </div>
  );
}
