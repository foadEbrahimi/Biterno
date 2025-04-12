import React, { useRef, useState } from "react";
import { Input } from "../../../components/ui/shadcn/input";

import eye from "../../../assets/imgs/auth/eye.svg";
import eyeFilled from "../../../assets/imgs/auth/eyeFilled.svg";
import lock from "../../../assets/imgs/auth/lock.svg";
import logo from "../../../assets/imgs/logo.svg";
import { Link } from "react-router";

export default function Login() {
  const [part, setPart] = useState("email");
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
          حساب کاربری ندارید؟{" "}
          <Link
            to="/auth/register"
            className="cursor-pointer font-bold text-[#3772FF]"
          >
            همین حالا ثبت نام کنید
          </Link>
        </p>
      </div>
      <div className="mx-auto mt-20 flex flex-col gap-3 sm:max-w-[25rem]">
        <span className="text-center text-3xl font-bold text-[#23262F]">
          وارد بیتکلود شوید
        </span>
        <span className="mx-auto mt-5 max-w-fit text-xs font-semibold text-[#777E90]">
          لطفاً مطمئن شوید که از آدرس اینترنتی صحیح بازدید می کنید.
        </span>
        <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-[#F4F5F6] px-3 py-1.5">
          <span className="font-sans">
            <span className="text-[#58BD7D]">https://</span>
            <span>bitcloud.com/login</span>
          </span>
          <img src={lock} alt="" />
        </div>
        <hr className="my-5" />
        <div>
          <div className="flex items-center justify-center gap-3">
            <span
              onClick={() => setPart("email")}
              className={`cursor-pointer ${part === "email" ? "bg-[#353945] text-white" : "text-[#777E90] hover:text-[#353945]"} rounded-full px-4 py-1 font-semibold transition-all`}
            >
              ایمیل
            </span>
            <span
              onClick={() => setPart("phone")}
              className={`cursor-pointer ${part === "phone" ? "bg-[#353945] text-white" : "text-[#777E90] hover:text-[#353945]"} rounded-full px-4 py-1 font-semibold transition-all`}
            >
              شماره تماس
            </span>
          </div>
        </div>
        {/* form */}
        <div className="mt-4">
          <form>
            {part === "phone" ? (
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold text-[#B1B5C3]">
                  شماره تماس
                </label>
                <Input
                  inputMode="phone"
                  id="phone"
                  type="phone"
                  placeholder="شماره تماس"
                  className="rounded-xl border-2 border-[#E6E8EC] px-3 py-3 font-sans text-[#23262F] transition-colors duration-300 placeholder:font-vazir placeholder:text-[#777E90] focus:border-[#777E90] focus:outline-none"
                />
              </div>
            ) : (
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
            )}
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
