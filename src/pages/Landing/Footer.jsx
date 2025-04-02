import React from 'react';

import Layout from '../../layout/landing/Layout';

import logo from '../../assets/imgs/logo.svg';
import arrowLong from '../../assets/imgs/arrow-long-white.svg';
import facebook from '../../assets/imgs/facebook.svg';
import twitter from '../../assets/imgs/twitter.svg';
import instagram from '../../assets/imgs/instagram.svg';
import dribble from '../../assets/imgs/dribble.svg';
import be from '../../assets/imgs/be.svg';

export default function Footer() {
  return (
    <div>
      <Layout>
        <div className="flex flex-col md:flex-row md:items-start w-full">
          <div className="md:mt-10 md:hidden">
            <div className="flex items-center gap-1">
              <img src={logo} alt="logo svg" />
              <span className="text-2xl">بیتکلود</span>
            </div>
          </div>
          <div className="mt-5 pt-5 items-start md:border-t-0 w-full flex gap-10 pr-5 border-t-2">
            <img src={logo} alt="" className="hidden md:flex" />
            <div className="space-y-5">
              <span className="text-2xl font-bold ml-8">درباره بیتکلود</span>
              <ul className="flex [&>*]:cursor-pointer flex-col gap-3 [&>*]:text-[#90949B]">
                <li className="hover:text-blue-600 transition-all duration-300">
                  پروژه ها
                </li>
                <li className="hover:text-blue-600 transition-all duration-300">
                  ما چه کاری انجام میدیم؟
                </li>
                <li className="hover:text-blue-600 transition-all duration-300">
                  پرسس
                </li>
                <li className="hover:text-blue-600 transition-all duration-300">
                  شغل ها
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-5 mt-5 pt-5 md:items-center md:border-t-0 w-full flex flex-col md:border-r pr-5 border-t-2">
            <span className="text-2xl font-bold ml-16">ارتباط باما</span>
            <ul className="flex [&>*]:cursor-pointer flex-col gap-3 [&>*]:text-[#90949B]">
              <li className="hover:text-blue-600 transition-all duration-300">
                43252 Borer Mountains
              </li>
              <li className="hover:text-blue-600 transition-all duration-300">
                Zackerychester
              </li>
              <li className="hover:text-blue-600 transition-all duration-300">
                Bahamas
              </li>
              <li className="hover:text-blue-600 transition-all duration-300">
                732-528-4945
              </li>
            </ul>
          </div>
          <div className="space-y-5 mt-5 pt-5 md:border-t-0 w-full md:max-w-[25rem] md:border-r pr-5 border-t-2 flex flex-col">
            <span className="text-2xl font-bold">خبرنامه</span>
            <span className="text-[#23262F] max-w-[20rem]">
              برای دریافت دوره و منبع طراحی رایگان بیشتر در خبرنامه ما مشترک
              شوید.
            </span>
            <div className="border-2 rounded-full grid grid-cols-[auto_2.5rem] py-1 px-3">
              <input
                className="outline-none border-none bg-transparent w-full"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              />
              <div className="rounded-full cursor-pointer w-10 h-10 bg-blue-600 flex items-center justify-center">
                <img
                  src={arrowLong}
                  className="w-5 scale-x-[-1]"
                  alt="arrowLong svg"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="space-y-5 ~px-5/20 mt-5 py-5 border-t-2 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-[#777E90] text-sm">
          تمامی حقوق برای بیتکلود محفوظ است. 2025 ©
        </span>
        <div className="flex [&>*]:cursor-pointer items-center gap-5">
          <img className="w-6" src={facebook} alt="" />
          <img className="w-6" src={instagram} alt="" />
          <img className="w-6" src={twitter} alt="" />
          <img className="w-6" src={dribble} alt="" />
          <img className="w-6" src={be} alt="" />
        </div>
      </div>
    </div>
  );
}
