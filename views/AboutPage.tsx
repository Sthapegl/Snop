import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-brand-dark mb-4">About Snop</h1>
          <p className="text-lg text-gray-600 mb-8">Affordable Style. Everyday Luxury.</p>
        </div>

        <div className="relative h-80 rounded-lg overflow-hidden my-12">
          <img src="https://source.unsplash.com/1200x400/?modern,office,team" alt="Our Team" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
          <p>
            Welcome to Snop, your destination for trendy, high-quality products at prices that make you smile. We were founded on a simple belief: everyone deserves to experience a touch of luxury in their daily lives without breaking the bank.
          </p>
          <p>
            In a world of fast trends and even faster consumption, we saw a gap for a store that offered the excitement of discovering new styles combined with the confidence of quality and affordability. Inspired by the dynamic, visual-first shopping experiences of modern e-commerce, we created Snop to be a place of joy, discovery, and smart shopping.
          </p>
          <p>
            Our team scours the globe to curate a collection that's both on-trend and timeless. From statement jewelry and chic apparel to unique home décor that transforms a space, every item in our store is selected with you in mind. We're passionate about helping you express your personal style and create a life that feels beautiful and inspired.
          </p>
          <p>
            Thank you for joining us on this journey. We're so excited to have you as part of the Snop family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;