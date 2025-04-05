import React from "react";

import Card from "../../components/Latest/Card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/shadcn/select";
export default function Latest() {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <span className="font-semibold text-[#777E90] md:flex-1">وبلاگ ما</span>
        <div className="flex flex-col gap-3 md:flex-1">
          <h2 className="text-4xl font-bold text-[#23262F]">آخرین نسخه ها</h2>
          <p className="max-w-[30rem] text-sm text-[#353945]">
            Stacks یک کتابخانه آماده تولید از بلوک های محتوای قابل استک است که
            در React Native ساخته شده است.
          </p>
          <div className="md:hidden">
            <Select dir="rtl">
              <SelectTrigger className="h-12 border-2">
                <SelectValue placeholder="دیزاین 3 بعدی" />
              </SelectTrigger>
              <SelectContent className="border-2 bg-white">
                <SelectItem value="DeFi">دیزاین 2 بعدی</SelectItem>
                <SelectItem value="Innovation">تجربه کاربری</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="hidden md:flex md:items-center md:gap-3">
            <span className="rounded-full bg-[#353945] px-4 py-1.5 text-sm font-semibold text-white lg:text-[16px]">
              دیزاین 3 بعدی
            </span>
            <span className="rounded-full px-4 py-1.5 text-sm font-semibold text-[#777E90] lg:text-[16px]">
              دیزاین 2 بعدی
            </span>
            <span className="rounded-full px-4 py-1.5 text-sm font-semibold text-[#777E90] lg:text-[16px]">
              تجربه کاربری
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
