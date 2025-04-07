import React from "react";

import Card from "../../components/Landing/contact/Card";
import Layout from "../../layout/landing/Layout";
import arrow from "../../assets/imgs/arrow-long.svg";

export default function Contact() {
  return (
    <div className="mt-20 flex min-h-[100dvh] items-center bg-[#F4F5F6] py-20">
      <Layout>
        <div className="flex flex-col items-center">
          <span className="mb-4 max-w-[23rem] text-center font-bold !leading-[3rem] ~text-3xl/4xl">
            در چند ثانیه یک معامله گر کریپتو شوید
          </span>
          <p className="text-sm font-semibold text-[#777E90] lg:hidden">
            Stacks یک کتابخانه آماده تولید از بلوک های محتوای قابل استک است که
            در React Native ساخته شده است.
          </p>
          <p className="mt-3 hidden font-semibold text-[#777E90] lg:flex">
            ما همه چیزهایی را که برای شروع معامله نیاز دارید در اختیار
            داریم.{" "}
          </p>
        </div>
        <div className="mt-16 grid items-center justify-center lg:grid-cols-3">
          {/* TODO: add slider */}
          <Card />
        </div>
        <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
            <img src={arrow} alt="" className="w-4" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:border-2">
            <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
          </button>
        </div>
        <button className="mx-auto mt-7 flex w-full items-center justify-center rounded-full bg-blue-600 px-7 py-2.5 text-center text-lg font-semibold text-white transition-all duration-200 hover:bg-[#0045ea] lg:w-fit xl:mt-14">
          ارتباط با ما{" "}
        </button>
      </Layout>
    </div>
  );
}
