import React, { useState } from "react";

import Navbar from "@/components/layout/landing/Navbar";
import Layout from "../../components/layout/landing/Layout";

import object from "@assets/imgs/landing/hero/object.png";

export default function Contact() {
  const [state, setState] = useState("general");

  return (
    <div className="relative bg-bg py-20 lg:py-14 2xl:my-0">
      <Layout>
        <div className="absolute right-0 top-0 z-0 h-full w-full">
          <img src={object} alt="object png" />
        </div>
        <div className="absolute -left-20 -top-20 z-0 h-[326px] w-[322px] rounded-full bg-primary/40 blur-[100px]"></div>
        <Navbar />
        <div className="relative !z-20 flex w-full flex-col gap-5 md:flex-row">
          <div className="flex w-full flex-1 flex-col items-center text-center ~gap-6/10 lg:pt-10 xl:pt-20">
            <h1 className="!leading-[4rem] ~text-4xl/5xl dark:text-white">
              <span className="text-primary">بیترنو</span> نسل نوین معاملات
              هوشمند
            </h1>
            <ul className="grid grid-cols-3 items-center gap-3 text-[13px] lg:grid-cols-6 lg:text-[18px] [&>*]:rounded-full [&>*]:px-3 [&>*]:py-1.5">
              <li
                onClick={() => setState("general")}
                className={`cursor-pointer ${state === "general" ? "bg-primary font-semibold text-white" : "hover:text-primabg-primary text-[#777E90]"}`}
              >
                احرازهویت
              </li>
              <li
                onClick={() => setState("hosting")}
                className={`cursor-pointer ${state === "hosting" ? "bg-primary font-semibold text-white" : "hover:text-primabg-primary text-[#777E90]"}`}
              >
                کارمزد
              </li>
              <li
                onClick={() => setState("product")}
                className={`cursor-pointer ${state === "product" ? "bg-primary font-semibold text-white" : "hover:text-primabg-primary text-[#777E90]"}`}
              >
                قوانین و شرایط
              </li>
              <li
                onClick={() => setState("support")}
                className={`cursor-pointer ${state === "support" ? "bg-primary font-semibold text-white" : "hover:text-primabg-primary text-[#777E90]"}`}
              >
                درباره ما
              </li>
              <li
                onClick={() => setState("tellUs")}
                className={`cursor-pointer ${state === "tellUs" ? "bg-primary font-semibold text-white" : "hover:text-primabg-primary text-[#777E90]"}`}
              >
                تماس با ما
              </li>
              <li
                onClick={() => setState("faq")}
                className={`cursor-pointer ${state === "faq" ? "bg-primary font-semibold text-white" : "hover:text-primabg-primary text-[#777E90]"}`}
              >
                حریم خصوصی
              </li>
            </ul>
            <div className="flex flex-col gap-5 rounded-[30px] border text-center text-[16px] leading-10 text-black/80 ~p-4/10 dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
              و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
              امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
              تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
              و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.
            </div>
          </div>
        </div>
      </Layout>
      {/* <div className="mt-20 w-full">
        <span className="flex justify-center text-center font-bold leading-8 text-[#777E90] ~px-5/40">
          قبل از درخواست پاسخ، ممکن است آن را در مرکز یادگیری رمزنگاری ما بیابید
        </span>
        <div className="lg:px-6">
          <Swiper
            slidesPerView={"1"}
            modules={[Navigation]}
            navigation={{
              nextEl: ".prevSlide",
              prevEl: ".nextSlide",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2, // For md screens
              },
              1280: {
                slidesPerView: 3, // For lg screens
              },
              1536: {
                slidesPerView: 4, // For 2xl screens
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <SwiperSlide className="!w-full sm:!w-fit">
              <Card />
            </SwiperSlide>
            <div className="flex items-center justify-center gap-3">
              <button className="nextSlide flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:border-2">
                <img src={arrow} alt="" className="w-4" />
              </button>
              <button className="prevSlide flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:border-2">
                <img src={arrow} alt="" className="w-4 scale-x-[-1]" />
              </button>
            </div>
          </Swiper>
        </div>
      </div> */}
    </div>
  );
}
