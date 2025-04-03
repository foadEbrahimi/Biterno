import React from 'react';

import Layout from '../../layout/landing/Layout';

import arrow from '../../assets/imgs/arrow-long.svg';
import logo from '../../assets/imgs/logo.svg';
import img from '../../assets/imgs/education-pic-4@2x.png';

export default function Subs() {
  return (
    <div className="mt-20">
      <Layout>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <img src={logo} alt="logo svg" />
            <span className="text-2xl">بیتکلود</span>
          </div>
          <span className="~text-3xl/4xl font-semibold text-center mt-3">
            با بیتکلود از کریپتو آگاه باشید
          </span>
          <p className="text-[#777E90] mt-2">
            آژانس خلاقی که رهبری و الهام بخش است
          </p>
        </div>
        <div className="h-[30rem] relative md:mx-10 mt-10">
          <button className="border-2 w-10 absolute -bottom-8 left-[42%] md:bottom-[50%] translate-y-[50%] md:-left-10 translate-x-[-50%] h-10 flex items-center justify-center rounded-full">
            <img src={arrow} alt="arrow svg" className="w-4 scale-x-[-1]" />
          </button>
          <button className="border-2 w-10 absolute -bottom-8 right-[42%] md:bottom-[50%] translate-y-[50%] md:-right-10 translate-x-[50%] h-10 flex items-center justify-center rounded-full">
            <img src={arrow} alt="arrow svg" className="w-4" />
          </button>
          <div className="p-4 flex-col gap-2 border rounded-2xl h-full w-full flex items-center md:flex-row justify-center">
            <div className="flex-col gap-2 rounded-2xl h-full w-full flex justify-center">
              <span className="font-semibold mt-24 text-[#777E90]">
                اخبار دیزاین
              </span>
              <span className="~text-2xl/4xl font-bold">
                بخشی از جامعه جهانی ما باشید
              </span>
              <span className="text-[#777E90] font-semibold max-w-[15rem]">
                Stack مشکلات کسب و کار را از ساده تا پیچیده حل می کند.
              </span>
              <button className="rounded-full mt-20 border-2 py-1 px-3 text-black w-fit font-semibold">
                اکنون عضو شوید
              </button>
            </div>
            <img
              src={img}
              alt=""
              className="hidden md:flex md:w-[20rem] md:h-[20rem] xl:w-fit xl:h-fit"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
