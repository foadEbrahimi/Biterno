import React, { useRef } from "react";
import { Input } from "../../../components/ui/shadcn/input";

import { Link } from "react-router";
import eye from "../../../assets/imgs/auth/eye.svg";
import eyeFilled from "../../../assets/imgs/auth/eyeFilled.svg";
import lock from "../../../assets/imgs/auth/lock.svg";

import logoB from "../../../assets/imgs/logo/biterno-b.svg";

export default function Signup() {
  const passwordRef = useRef(null);
  const repeatpasswordRef = useRef(null);
  const passwordEyeIconRef = useRef(null);
  const repeatPasswordEyeIconRef = useRef(null);

  const togglePasswordVisibility = (e, inputRef, eyeIconRef) => {
    e.preventDefault();
    const input = inputRef.current;
    const eyeIcon = eyeIconRef.current;

    if (input.type === "password") {
      input.type = "text";
      eyeIcon.src = eyeFilled;
    } else {
      input.type = "password";
      eyeIcon.src = eye;
    }
    input.focus();
  };

  return (
    <div className="!z-20 mx-auto flex flex-col gap-3 sm:max-w-[25rem]">
      <Link to="/">
        <img src={logoB} className="mx-auto w-14" alt="" />
      </Link>
      <span className="text-center text-3xl font-bold text-[#23262F] dark:text-white">
        ثبت نام کنید{" "}
      </span>
      <span className="mx-auto mt-1 max-w-fit text-xs font-semibold text-[#777E90]">
        لطفاً مطمئن شوید که از آدرس اینترنتی صحیح بازدید می کنید.
      </span>
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-[#F4F5F6] px-3 py-1.5">
        <span className="font-sans">
          <span className="text-[#58BD7D]">https://</span>
          <span>biterno.com/register</span>
        </span>
        <img src={lock} alt="" />
      </div>
      <hr className="my-5" />
      {/* form */}
      <div>
        <form>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phoneNumber"
              className="font-semibold text-[#B1B5C3]"
            >
              شماره تماس
            </label>
            <Input
              inputMode="number"
              id="phoneNumber"
              type="number"
              placeholder="شماره تلفن"
              className="rounded-xl border-2 border-[#E6E8EC] px-3 py-3 font-sans text-[#23262F] transition-colors duration-300 placeholder:font-iranSansRegular placeholder:text-[#777E90] focus:border-[#777E90] focus:outline-none dark:text-white"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-[#B1B5C3]">
              رمز عبور
            </label>
            <div className="group flex items-center gap-2 rounded-xl border-2 border-[#E6E8EC] pl-3 transition-colors duration-300 focus-within:border-[#777E90]">
              <Input
                ref={passwordRef}
                id="password"
                type="password"
                placeholder="رمز عبور"
                className="border-0 px-3 py-3 font-sans text-[#23262F] placeholder:font-iranSansRegular placeholder:text-[#777E90] focus:outline-none dark:text-white"
              />
              <div
                onClick={(e) =>
                  togglePasswordVisibility(e, passwordRef, passwordEyeIconRef)
                }
              >
                <img
                  ref={passwordEyeIconRef}
                  src={eye}
                  className="cursor-pointer"
                  alt="Toggle Password Visibility"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label
              htmlFor="reapetpassword"
              className="font-semibold text-[#B1B5C3]"
            >
              تایید رمز عبور{" "}
            </label>
            <div className="group flex items-center gap-2 rounded-xl border-2 border-[#E6E8EC] pl-3 transition-colors duration-300 focus-within:border-[#777E90]">
              <Input
                ref={repeatpasswordRef}
                id="reapetpassword"
                type="password"
                placeholder="رمز عبور"
                className="border-0 px-3 py-3 font-sans text-[#23262F] placeholder:font-iranSansRegular placeholder:text-[#777E90] focus:outline-none dark:text-white"
              />
              <div
                onClick={(e) =>
                  togglePasswordVisibility(
                    e,
                    repeatpasswordRef,
                    repeatPasswordEyeIconRef,
                  )
                }
              >
                <img
                  ref={repeatPasswordEyeIconRef}
                  src={eye}
                  className="cursor-pointer"
                  alt="Toggle Password Visibility"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3">
            <li className="list-none">
              <input id="c1" type="checkbox" defaultChecked />
            </li>
            <label
              htmlFor="acceptPolicy"
              className="text-sm font-semibold text-[#777E90]"
            >
              با ثبت نام در بیترنو ،{" "}
              <Link to="/contact" className="text-primary">
                قوانین و مقررات
              </Link>{" "}
              آن را میپذیرید.
            </label>
          </div>
          <button className="mt-4 flex w-full items-center gap-1 dark:text-white">
            قبلا ثبت نام کرده اید ؟{" "}
            <Link
              to="/auth/login"
              className="font-iranSansDemiBold text-primary"
            >
              ورود
            </Link>
          </button>
          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-primary py-3 text-lg font-bold text-white transition-all duration-300 hover:text-black"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}
