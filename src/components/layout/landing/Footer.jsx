import React from "react";

import Layout from "@/components/layout/landing/Layout";

import arrowLong from "@assets/imgs/landing/application/arrow-long-white.svg";
import facebook from "@assets/imgs/landing/socialIcons/facebook.svg";
import instagram from "@assets/imgs/landing/socialIcons/instagram.svg";
import linkedin from "@assets/imgs/landing/socialIcons/linkedin.svg";
import telegram from "@assets/imgs/landing/socialIcons/telegram.svg";
import twitter from "@assets/imgs/landing/socialIcons/twitter.svg";
import youtube from "@assets/imgs/landing/socialIcons/youtube.svg";

import logoB from "@assets/imgs/logo/biterno-b.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="mt-10 border-t bg-bg pt-3 dark:mt-0 md:py-0">
      <Layout>
        <div className="w-full md:flex md:items-start">
          <Accordion
            defaultValue="item-1"
            className="mt-5 md:hidden"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold dark:text-white">
                صفحات بیشتر
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-3 font-semibold [&>*]:cursor-pointer [&>*]:text-[#90949B]">
                  <li className="transition-all duration-300 hover:text-primary">
                    احرازهویت
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    کارمزد
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    قوانین و شرایط
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    درباره ما
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    تماس با ما
                  </li>
                  <li className="transition-all duration-300 hover:text-primary">
                    حریم خصوصی{" "}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="hidden w-full items-start gap-10 border-t-2 py-10 md:flex md:border-t-0 md:pr-5">
            <div className="space-y-5">
              <span className="ml-8 text-2xl font-bold dark:text-white">
                درباره بیترنو
              </span>
              <ul className="flex flex-col gap-3 [&>*]:cursor-pointer [&>*]:text-[#90949B]">
                <Link to="/contact">
                  <li className="transition-all duration-300 hover:text-primary">
                    احرازهویت
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="transition-all duration-300 hover:text-primary">
                    کارمزد
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="transition-all duration-300 hover:text-primary">
                    قوانین و شرایط
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="transition-all duration-300 hover:text-primary">
                    درباره ما
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="transition-all duration-300 hover:text-primary">
                    تماس با ما
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="transition-all duration-300 hover:text-primary">
                    حریم خصوصی
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-5 border-t-2 pb-10 pt-10 md:border-r md:border-t-0 md:pr-5 lg:pb-20">
            <span className="ml-16 font-bold ~text-xl/2xl dark:text-white">
              تماس با ما
            </span>
            <ul className="flex flex-col gap-3 text-sm lg:text-base [&>*]:cursor-pointer [&>*]:text-[#90949B]">
              <li className="transition-all duration-300 hover:text-primary">
                تهران
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                Zackerychester
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                Bahamas
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                732-528-4945
              </li>
              <li className="transition-all duration-300 hover:text-primary">
                732-528-4945
              </li>
            </ul>
          </div>
          <div className="flex w-full flex-col space-y-5 border-t-2 pb-10 pt-10 md:max-w-[25rem] md:border-r md:border-t-0 md:pr-5 lg:pb-32">
            <span className="text-2xl font-bold dark:text-white">خبرنامه</span>
            <span className="max-w-[18rem] text-[#23262F] dark:text-white/80">
              برای دریافت اخرین خبرهای بازار در خبرنامه ما مشترک شوید.
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
        <span className="flex items-center gap-1 text-[#777E90] ~text-xs/sm dark:text-white">
          <img src={logoB} className="w-5" alt="" />
          تمامی حقوق مادی و معنوی برای بیترنو محفوظ است. 2025 ©{" "}
        </span>
        <div className="flex items-center gap-5 [&>*]:cursor-pointer">
          <a aria-label="LinkedIn" href="https://linkedin.com/in/biternoex">
            <img src={linkedin} className="w-7" alt="LinkedIn icon" />
          </a>
          <a
            aria-label="Twitter"
            href="https://twitter.com/biternoex"
            target="_blank"
          >
            <img src={twitter} className="w-7" alt="Twitter icon" />
          </a>
          <a
            aria-label="YouTube"
            href="https://youtube.com/biternoex"
            target="_blank"
          >
            <img src={youtube} className="w-7" alt="YouTube icon" />
          </a>
          <a
            aria-label="Telegram"
            href="https://t.me/biternoex"
            target="_blank"
          >
            <img src={telegram} className="w-7" alt="Telegram icon" />
          </a>
          <a
            aria-label="Facebook"
            href="https://facebook.com/biternoex"
            target="_blank"
          >
            <img src={facebook} className="w-7" alt="Facebook icon" />
          </a>
          <a
            aria-label="Instagram"
            href="https://instagram.com/biternoex"
            target="_blank"
          >
            <img src={instagram} className="w-7" alt="Instagram icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
