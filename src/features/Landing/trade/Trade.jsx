import React from "react";

import Layout from "@/components/layout/landing/Layout";

import arrowLongWhite from "@assets/imgs/arrow-long-white.svg";
import img from "@assets/imgs/download-pic.png";

import mayket from "@assets/imgs/mayket.svg";
import cafeBazar from "@assets/imgs/cafe-bazar.svg";
import googlePlay from "@assets/imgs/google-play.svg";

export default function Trade() {
  return (
    <div className="">
      <Layout>
        <div className="flex flex-col md:h-[100dvh] md:flex-row md:items-center md:justify-between lg:py-10">
          <div className="flex-[1.3] md:order-2" id="trade-img">
            <img src={img} alt="trade img" />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold !leading-[3rem] text-[#23262F] ~text-3xl/5xl">
                اپلیکیشن بیترنو ( بزودی )
              </h3>
              <span className="text-sm font-semibold text-[#777E90]">
                معامله در هرجا و هر مکان با اپلیکیشن بیترنو
              </span>
            </div>
            <div className="mt-5 flex flex-col md:max-w-[20rem]">
              <div className="group flex cursor-pointer items-start gap-3 py-6">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#23262F]">
                  <img src={mayket} className="w-9" alt="googlePlay svg" />
                  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <img
                      src={arrowLongWhite}
                      alt="arrowLongWhite svg"
                      className="scale-x-[-1]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm">دانلود از</span>
                  <span className="text-xl font-bold">مایکت</span>
                </div>
              </div>
              <div className="group flex cursor-pointer items-start gap-3 border-y py-6">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#23262F]">
                  <img src={cafeBazar} alt="googlePlay svg" />
                  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <img
                      src={arrowLongWhite}
                      alt="arrowLongWhite svg"
                      className="scale-x-[-1]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm">دانلود از</span>
                  <span className="text-xl font-bold">فروشگاه پلی</span>
                </div>
              </div>
              <div className="group flex cursor-pointer items-start gap-3 py-6">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#23262F]">
                  <img src={googlePlay} className="w-9" alt="" />
                  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <img
                      src={arrowLongWhite}
                      alt="arrowLongWhite svg"
                      className="scale-x-[-1]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm">دانلود از</span>
                  <span className="text-xl font-bold">فروشگاه پلی</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
