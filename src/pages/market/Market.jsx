import React from 'react';

import Layout from '../../layout/landing/Layout';
import Content from '../../components/Market/Content';
export default function Market() {
  return (
    <div className="">
      <div
        style={{
          height: 'calc(100dvh - 56px)',
        }}
        className="bg-[#DECBE9] p-2 py-5 lg:flex lg:items-center h-screen"
      >
        <Layout>
          <Content />
        </Layout>
      </div>
    </div>
  );
}
