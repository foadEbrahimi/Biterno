import React from "react";

import Layout from "../../layout/landing/Layout";
import Card from "../../components/Landing/howItWork/Card";

import connectLine from "../../assets/imgs/connect-line.svg";
import step1 from "../../assets/imgs/step-1.png";
import step2 from "../../assets/imgs/step-2.png";
import step3 from "../../assets/imgs/step-3.png";
import step4 from "../../assets/imgs/step-4.png";

export default function HowWork() {
  return (
    <div className="mt-20 flex h-[100dvh] items-center pb-20">
      <div>
        <Layout>
          <div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-center font-bold ~text-4xl/5xl">
                چگونه کار می کند
              </span>
              <p className="mt-4 max-w-[30rem] text-center !leading-[2rem] font-semibold text-[#353945]">
                Stacks یک کتابخانه آماده تولید از بلوک های محتوای stackable است
                که در React Native ساخته شده است.
              </p>
            </div>
            <div className="mx-auto mt-10 hidden items-center justify-center gap-10 md:flex">
              <img src={step1} className="w-10 lg:w-20" alt="" />
              <img
                src={connectLine}
                className="w-20 lg:w-fit xl:w-28 2xl:w-fit"
                alt="connectLine svg"
              />
              <img src={step2} className="w-10 lg:w-20" alt="" />
              <img
                src={connectLine}
                className="w-20 lg:w-fit xl:w-28 2xl:w-fit"
                alt="connectLine svg"
              />
              <img src={step3} className="w-10 lg:w-20" alt="" />
              <img
                src={connectLine}
                className="w-20 lg:w-fit xl:w-28 2xl:w-fit"
                alt="connectLine svg"
              />
              <img src={step4} className="w-10 lg:w-20" alt="" />
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
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
