import React from 'react';

import logo from '../../assets/imgs/logo.svg';
import line from '../../assets/imgs/line2.svg';
import line1 from '../../assets/imgs/line.svg';
import Layout from '../../layout/landing/layout';

export default function Navbar() {
  return (
    <div className="border-b py-3">
      <Layout>
        <div className="flex items-center justify-between">
          <div className="flex items-center ~gap-3/7 justify-between">
            <div className="flex items-center gap-1">
              <img src={logo} alt="logo svg" />
              <span className="text-2xl">بیتکلود</span>
            </div>
            <div className="bg-[#E6E8EC] w-[1px] h-10 hidden md:flex"></div>
            <div>
              <ul className="text-[#777E90] hidden md:flex font-bold [&>*]:cursor-pointer items-center ~gap-5/14">
                <li>تبدیل</li>
                <li className="flex items-center gap-1">
                  خرید کریپتو
                  <img src={line} alt="line svg" className="w-5" />
                </li>
                <li>بازار</li>
                <li>کشف کنید</li>
              </ul>
            </div>
          </div>
          <div className="items-center hidden md:flex gap-3">
            <div className="flex items-center gap-2">
              <button className="py-2 rounded-full border-2 font-bold px-4">
                ورود
              </button>
              <button className="p-2 rounded-full bg-[#3772FF] text-white font-bold px-4">
                ثبت نام
              </button>
            </div>
            <button className="uppercase font-bold flex items-center gap-1">
              انگلیسی/دلار
              <img src={line} alt="line svg" className="w-5" />
            </button>
          </div>
          <div className="md:hidden">
            <img src={line1} alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
