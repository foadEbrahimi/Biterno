import React from "react";

import Layout from "@/components/layout/landing/Layout";

import arrowLongWhite from "@assets/imgs/landing/application/arrow-long-white.svg";
import mobile from "@assets/imgs/landing/application/mobile.svg";

import { application } from "@/constants/application";

export default function Application() {
  return (
    <div className="mt-10">
      <Layout>
        <div className="flex flex-col gap-5 md:h-[100dvh] md:flex-row md:items-center md:justify-between lg:py-10">
          <div className="flex-[1.3] md:order-2" id="application-img">
            <img src={mobile} alt="mobile img" />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold !leading-[3rem] text-[#23262F] ~text-2xl/5xl dark:text-white">
                اپلیکیشن بیترنو ( بزودی )
              </h3>
              <span className="text-sm font-semibold text-[#777E90]">
                معامله در هرجا و هر مکان با اپلیکیشن بیترنو
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 md:max-w-[20rem]">
              {application.map((item, index) => (
                <div
                  key={index}
                  className="group flex cursor-pointer items-start gap-3 py-6"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#23262F]">
                    {item.img ? (
                      <img
                        src={item.img}
                        className="w-8"
                        alt="googlePlay svg"
                      />
                    ) : (
                      <span className="uppercase text-white">pwa</span>
                    )}
                    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <img
                        src={arrowLongWhite}
                        alt="arrowLongWhite svg"
                        className="scale-x-[-1]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm dark:text-white">
                      {item.title}
                    </span>
                    <span className="font-vazirBold dark:text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
