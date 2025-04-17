import React from "react";

import Layout from "@/components/layout/landing/Layout";

import arrowLong from "@assets/imgs/arrow-long-white.svg";
import facebook from "@assets/imgs/facebook.svg";
import instagram from "@assets/imgs/instagram.svg";
import linkedin from "@assets/imgs/linkedin.svg";
import telegram from "@assets/imgs/telegram.svg";
import twitter from "@assets/imgs/twitter.svg";
import youtube from "@assets/imgs/youtube.svg";

import logo from "@assets/imgs/logo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";

export default function Footer() {
  return (
    <div className="mt-10 border-t pt-10 md:py-0">
      <Layout>
        <div className="w-full md:flex md:items-start">
          <div className="md:mt-10 md:hidden">
            <div className="flex items-center gap-1">
              <img src={logo} alt="logo svg" className="~w-20/16" />
            </div>
          </div>
          <Accordion
            defaultValue="item-1"
            className="mt-5 md:hidden"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">
                صفحات بیشتر
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-3 font-semibold [&>*]:cursor-pointer [&>*]:text-[#90949B]">
                  <li className="transition-all duration-300 hover:text-primary">
                    احرازهویت
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    درباره ما
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    کارمزد
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    قوانین و شرایط
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    تماس با ما
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="hidden w-full items-start gap-10 border-t-2 py-10 md:flex md:border-t-0 md:pr-5">
            <img src={logo} alt="" className="hidden w-20 md:flex" />
            <div className="space-y-5">
              <span className="ml-8 text-2xl font-bold">درباره بیترنو</span>
              <ul className="flex flex-col gap-3 [&>*]:cursor-pointer [&>*]:text-[#90949B]">
                <li className="transition-all duration-300 hover:text-blue-600">
                  پروژه ها
                </li>
                <li className="transition-all duration-300 hover:text-blue-600">
                  ما چه کاری انجام میدیم؟
                </li>
                <li className="transition-all duration-300 hover:text-blue-600">
                  پرسس
                </li>
                <li className="transition-all duration-300 hover:text-blue-600">
                  شغل ها
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-5 border-t-2 py-10 md:items-center md:border-r md:border-t-0 md:pr-5">
            <span className="ml-16 font-bold ~text-xl/2xl">ارتباط باما</span>
            <ul className="flex flex-col gap-3 text-sm lg:text-base [&>*]:cursor-pointer [&>*]:text-[#90949B]">
              <li className="transition-all duration-300 hover:text-blue-600">
                تهران
              </li>
              <li className="transition-all duration-300 hover:text-blue-600">
                Zackerychester
              </li>
              <li className="transition-all duration-300 hover:text-blue-600">
                Bahamas
              </li>
              <li className="transition-all duration-300 hover:text-blue-600">
                732-528-4945
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col space-y-5 border-t-2 pb-[53px] pt-10 md:max-w-[25rem] md:border-r md:border-t-0 md:pr-5">
            <span className="text-2xl font-bold">خبرنامه</span>
            <span className="max-w-[20rem] text-[#23262F]">
              برای دریافت دوره و منبع طراحی رایگان بیشتر در خبرنامه ما مشترک
              شوید.
            </span>
            <div className="grid grid-cols-[auto_2.5rem] rounded-full border-2 px-3 py-1">
              <input
                className="w-full border-none bg-transparent outline-none"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              />
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary">
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
      <div className="flex flex-col space-y-5 border-t-2 py-5 ~px-5/20 md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-[#777E90]">
          تمامی حقوق برای بیترنو محفوظ است. 2025 ©
        </span>
        <div className="flex items-center gap-5 [&>*]:cursor-pointer">
          <a href="">
            <img src={linkedin} className="w-7" alt="linkedin svg" />
          </a>
          <img src={twitter} className="w-7" alt="twitter svg" />
          <img src={youtube} className="w-7" alt="youtube svg" />
          <img src={telegram} className="w-7" alt="telegram svg" />
          <img src={facebook} className="w-7" alt="telegram svg" />
          <img src={instagram} className="w-7" alt="telegram svg" />
        </div>
      </div>
    </div>
  );
}
