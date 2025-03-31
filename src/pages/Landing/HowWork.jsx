import React from 'react';

import Layout from '../../layout/landing/Layout';
import Card from '../../components/Landing/howItWork/Card';

import connectLine from '../../assets/imgs/connect-line.svg';
import step1 from '../../assets/imgs/step-1.png';
import step2 from '../../assets/imgs/step-2.png';
import step3 from '../../assets/imgs/step-3.png';
import step4 from '../../assets/imgs/step-4.png';

export default function HowWork() {
  return (
    <div className="mt-10 pb-20">
      <div>
        <Layout>
          <div>
            <div className="flex items-center flex-col justify-center gap-2">
              <span className="~text-3xl/4xl font-bold text-center">
                چگونه کار می کند
              </span>
              <p className="font-semibold text-[#353945] text-center max-w-[30rem]">
                Stacks یک کتابخانه آماده تولید از بلوک های محتوای stackable است
                که در React Native ساخته شده است.
              </p>
            </div>
            <div className="mt-10 items-center hidden md:flex gap-5 justify-between xl:max-w-[80%] mx-auto">
              <img src={step1} className="w-10 lg:w-20" alt="" />
              <img src={connectLine} className="w-20 lg:w-fit" alt="connectLine svg" />
              <img src={step2} className="w-10 lg:w-20" alt="" />
              <img src={connectLine} className="w-20 lg:w-fit" alt="connectLine svg" />
              <img src={step3} className="w-10 lg:w-20" alt="" />
              <img src={connectLine} className="w-20 lg:w-fit" alt="connectLine svg" />
              <img src={step4} className="w-10 lg:w-20" alt="" />
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-5">
              {/* TODO: add slider */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}
