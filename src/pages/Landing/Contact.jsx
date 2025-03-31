import React from 'react';

import Layout from '../../layout/landing/Layout';
import Card from '../../components/Landing/contact/Card';

export default function Contact() {
  return (
    <div className="mt-20">
      <Layout>
        <div className="flex flex-col items-center">
          <span className="~text-3xl/4xl font-bold">
            در چند ثانیه یک معامله گر کریپتو شوید
          </span>
          <p className="text-[#777E90] font-semibold lg:hidden text-sm mt-3">
            Stacks یک کتابخانه آماده تولید از بلوک های محتوای قابل استک است که
            در React Native ساخته شده است.
          </p>
          <p className="text-[#777E90] hidden lg:flex font-semibold mt-3">
            ما همه چیزهایی را که برای شروع معامله نیاز دارید در اختیار داریم.{' '}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 items-center justify-center mt-10 gap-10">
          {/* TODO: add slider */}
          <Card />
          <Card />
          <Card />
        </div>
        <button className="bg-blue-600 mx-auto mt-5 text-white py-1.5 flex px-6 rounded-full font-semibold text-lg">
          ارتباط با ما{' '}
        </button>
      </Layout>
    </div>
  );
}
