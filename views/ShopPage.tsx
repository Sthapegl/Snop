
import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { Product } from '../types';

interface ShopPageProps {
  navigateTo: (view: any) => void;
  initialCategory?: string;
}

const ShopPage: React.FC<ShopPageProps> = ({ navigateTo, initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);
  
  const hasMore = displayedProducts.length < filteredProducts.length;

  useEffect(() => {
    setPage(1);
    setDisplayedProducts(filteredProducts.slice(0, productsPerPage));
  }, [filteredProducts]);

  const loadMore = () => {
    const nextPage = page + 1;
    const newProducts = filteredProducts.slice(0, nextPage * productsPerPage);
    setDisplayedProducts(newProducts);
    setPage(nextPage);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4">Shop</h1>
        <p className="text-center text-gray-600 mb-8">Find your next favorite item from our collection.</p>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeCategory === 'all' ? 'bg-brand-orange text-white' : 'bg-white text-gray-700 hover:bg-brand-cream'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeCategory === cat.id ? 'bg-brand-orange text-white' : 'bg-white text-gray-700 hover:bg-brand-cream'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => navigateTo({ name: 'product', product })} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button onClick={loadMore} className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform hover:scale-105">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
