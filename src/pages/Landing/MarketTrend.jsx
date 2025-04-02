import React from 'react';
import TableRow from '../../components/Landing/marketTrend/TableRow';
import Layout from '../../layout/landing/Layout';

export default function MarketTrend() {
  return (
    <div id="scroll" className="mb-10 mt-16">
      <Layout>
        <div className="flex items-center justify-between">
          <span className="font-bold text-4xl">روند بازار</span>
          <button className="py-1 font-semibold px-3 text-sm   lg:text-base text-black rounded-full border-2">
            مشاهده بیشتر
          </button>
        </div>
        <div className="mt-3">
          <ul className="flex overflow-x-scroll sm:overflow-x-visible font-semibold text-[#777E90] [&>*]:hover:bg-[#353945] [&>*]:py-0.5 [&>*]:rounded-full [&>*]:hover:text-white [&>*]:min-w-fit [&>*]:px-3 text-md items-center gap-5">
            <li className="bg-[#353945] py-0.5  rounded-full text-white px-3">
              همه
            </li>
            <li>دیفای</li>
            <li>نوآوری</li>
            <li className="font-sans">POS</li>
            <li className="font-sans">NFT</li>
            <li className="font-sans">POW</li>
            <li>ذخیره سازی</li>
          </ul>
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <table className="w-full text-sm lg:text-lg text-left rtl:text-right text-gray-500">
            <thead className="border-b text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-1  py-3">
                  #
                </th>
                <th scope="col" className="px-1  py-3">
                  نام
                </th>
                <th scope="col" className="px-1  py-3">
                  قیمت
                </th>
                <th scope="col" className="px-1  py-3">
                  تغییر 24 ساعته
                </th>
                <th scope="col" className="px-1 hidden sm:table-cell py-3">
                  نمودار
                </th>
                <th scope="col" className="px-1 hidden sm:table-cell py-3">
                  ترید
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
