import React, { useRef } from "react";
import { Input } from "../../../components/ui/shadcn/input";

import logo from "../../../assets/imgs/logo.svg";
import eye from "../../../assets/imgs/auth/eye.svg";
import eyeFilled from "../../../assets/imgs/auth/eyeFilled.svg";
import google from "../../../assets/imgs/auth/google.svg";
import apple from "../../../assets/imgs/auth/apple.svg";

export default function Signup() {
  const passwordRef = useRef(null);
  const eyeIconRef = useRef(null);

  const togglePasswordVisibility = () => {
    const input = passwordRef.current;
    const eyeIcon = eyeIconRef.current;

    if (input.type === "password") {
      input.type = "text";
      eyeIcon.src = eyeFilled; // تغییر به آیکون چشم بسته
    } else {
      input.type = "password";
      eyeIcon.src = eye; // تغییر به آیکون چشم باز
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 md:mx-20 md:flex-row md:justify-between lg:mx-0 lg:items-center lg:justify-end">
        <div className="flex cursor-pointer items-center justify-center gap-1 lg:hidden">
          <img src={logo} alt="bitCloud logo" />
          <span className="text-2xl">بیتکلود</span>
        </div>
        <p className="text-sm">
          از قبل حساب کاربری دارید؟{" "}
          <span className="cursor-pointer font-bold text-[#3772FF]">
            وارد شوید{" "}
          </span>
        </p>
      </div>
      <div className="mx-auto mt-20 flex flex-col gap-3 sm:max-w-[25rem]">
        <span className="text-center text-3xl font-bold text-[#23262F]">
          ثبت نام کنید{" "}
        </span>
        <span className="mx-auto mt-5 max-w-fit text-xs font-semibold text-[#777E90]">
          از OpenID خود برای ثبت نام استفاده کنید{" "}
        </span>
        <div className="mt-3 flex items-center justify-center gap-3">
          <button className="flex w-[10rem] flex-1 items-center justify-center gap-1 rounded-full bg-[#3772FF] p-3 text-white transition-all duration-300 hover:bg-[#0045ea]">
            <img src={google} alt="google svg" />
            <span>گوگل</span>
          </button>
          <button className="flex w-[10rem] flex-1 items-center justify-center gap-1 rounded-full bg-[#23262F] p-3 text-white transition-all duration-300 hover:bg-[#353945]">
            <img src={apple} alt="google svg" />
            <span>اپل</span>
          </button>
        </div>
        <hr className="my-5" />
        <span className="text-center text-[#777E90]">
          یا با ایمیل ادامه دهید
        </span>
        {/* form */}
        <div className="mt-4">
          <form>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-[#B1B5C3]">
                ایمیل
              </label>
              <Input
                inputMode="email"
                id="email"
                type="email"
                placeholder="آدرس ایمیل"
                className="rounded-xl border-2 border-[#E6E8EC] px-3 py-3 font-sans text-[#23262F] transition-colors duration-300 placeholder:font-vazir placeholder:text-[#777E90] focus:border-[#777E90] focus:outline-none"
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-semibold text-[#B1B5C3]"
              >
                رمز عبور
              </label>
              <div className="group flex items-center gap-2 rounded-xl border-2 border-[#E6E8EC] pl-3 transition-colors duration-300 focus-within:border-[#777E90]">
                <Input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  placeholder="رمز عبور"
                  className="border-0 px-3 py-3 font-sans text-[#23262F] placeholder:font-vazir placeholder:text-[#777E90] focus:outline-none"
                />
                <div onClick={togglePasswordVisibility}>
                  <img
                    ref={eyeIconRef}
                    src={eye}
                    className="cursor-pointer"
                    alt="Toggle Password Visibility"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <button className="font-bold text-[#777E90] transition-all duration-300 hover:text-[#23262F]">
                اسکن برای ورود
              </button>
              <button className="font-bold text-[#3772FF] transition-all duration-300 hover:text-[#044eff]">
                فراموشی رمز ؟
              </button>
            </div>
            <button
              type="submit"
              className="mt-9 w-full rounded-full bg-[#3772FF] py-3 text-xl font-bold text-white transition-all duration-300 hover:bg-[#0045ea]"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
