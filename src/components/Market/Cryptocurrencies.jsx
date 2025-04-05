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
    <div className="absolute -bottom-[4.8rem] lg:-bottom-[5rem] left-0 w-full ~px-5/32">
      <div className="z-10 w-full rounded-[24px] border bg-white pt-5 shadow-2xl">
        <div className="grid place-items-center gap-2 px-5 pb-[26px] sm:grid-cols-2 lg:grid-cols-3">
          <CardSlider />
        </div>
        <div className="border-t px-5 py-5">
          <div className="lg:hidden">
            <Select>
              <SelectTrigger className="font-sans">
                <SelectValue placeholder="Cryptocurrencies" />
              </SelectTrigger>
              <SelectContent className="bg-white font-sans">
                <SelectItem value="DeFi">DeFi</SelectItem>
                <SelectItem value="Innovation">Innovation</SelectItem>
                <SelectItem value="POS">POS</SelectItem>
                <SelectItem value="NFT">NFT</SelectItem>
                <SelectItem value="POW">POW</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
