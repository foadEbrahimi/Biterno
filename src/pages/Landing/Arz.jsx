import React from 'react';
import Card from '../../components/Landing/arz/Card';
import Layout from '../../layout/landing/layout';

export default function Arz() {
  return (
    <Layout>
      <div className="bg-[#F4F5F6] grid sm:grid-cols-2 py-10 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-[24px] p-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
