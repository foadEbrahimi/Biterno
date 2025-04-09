import React from "react";

import CardSlider from "../../components/Market/CardSlider";
import Menu from "../../components/Market/Menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/shadcn/select";

export default function Cryptocurrencies() {
  return (
    <div className="absolute -bottom-[4.8rem] left-0 w-full ~px-5/32 lg:-bottom-[5rem]">
      <div className="z-10 w-full rounded-[24px] border bg-white pt-5 shadow-2xl">
        <div className="px-5 pb-[26px]">
          <CardSlider />
        </div>
        <div className="border-t px-5 py-5">
          <div className="lg:hidden">
            <Select dir="rtl">
              <SelectTrigger>
                <SelectValue placeholder="ارزهای رمزنگاری شده" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="crypto">ارزهای رمزنگاری شده</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
