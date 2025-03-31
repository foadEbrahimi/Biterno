import React from 'react';

import Layout from '../../layout/landing/Layout';

import connectLine from '../../assets/imgs/connect-line.svg';
import Card from '../../components/Landing/howItWork/Card';
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
            <div className="mt-10 flex items-center justify-between md:max-w-[60%] mx-auto">
              <img src={connectLine} alt="connectLine svg" />
              <img src={connectLine} alt="connectLine svg" />
              <img src={connectLine} alt="connectLine svg" />
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-5">
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
