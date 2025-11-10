import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryIcons from '../components/CategoryIcons';
import ProductCard from '../components/ProductCard';
import CountdownTimer from '../components/CountdownTimer';
import { products, flashSaleProducts } from '../data/mockData';
import AppStoreIcon from '../components/icons/AppStoreIcon';
import GooglePlayIcon from '../components/icons/GooglePlayIcon';

interface HomePageProps {
  navigateTo: (view: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-gray-50">
      <HeroSlider />
      <CategoryIcons navigateTo={navigateTo} />
      
      {/* Flash Sale Section */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-orange">Flash Sale</h2>
            {flashSaleProducts[0]?.dealEnds && <CountdownTimer targetDate={flashSaleProducts[0].dealEnds} />}
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar">
              {flashSaleProducts.map(product => (
                <div key={product.id} className="flex-shrink-0 w-64">
                    <ProductCard product={product} onClick={() => navigateTo({ name: 'product', product })} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">You Might Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.slice(0, 10).map(product => (
              <ProductCard key={product.id} product={product} onClick={() => navigateTo({ name: 'product', product })} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => navigateTo({ name: 'shop' })} className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
              Shop All
            </button>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
            <div className="bg-brand-dark text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold">Get the Snop App</h3>
                    <p className="text-gray-300 mt-2">Shop faster and get exclusive deals!</p>
                </div>
                <div className="flex space-x-4 mt-6 md:mt-0">
                    <AppStoreIcon className="h-12"/>
                    <GooglePlayIcon className="h-12"/>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;