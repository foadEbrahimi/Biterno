import React from "react";
import { Link } from "react-router-dom";

import errorImage from "@assets/imgs/errors/404.svg";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-5 text-center">
      <img src={errorImage} alt="404 Error" className="mb-8 w-full max-w-xl" />
      <h1 className="mb-4 font-bold text-textColor ~text-2xl/4xl">
        صفحه مورد نظر پیدا نشد
      </h1>
      <p className="mb-8 text-textColor ~text-sm/lg">
        متاسفیم، اما صفحه‌ای که به دنبال آن هستید وجود ندارد. شاید به صفحه اصلی
        بروید و از آنجا شروع کنید.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-primary px-6 py-3 text-white shadow-md transition duration-300 hover:text-black"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
