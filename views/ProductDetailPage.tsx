import React, { useState } from 'react';
import { Product } from '../types';
import StarRating from '../components/StarRating';
import CountdownTimer from '../components/CountdownTimer';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { products } from '../data/mockData';

interface ProductDetailPageProps {
  product: Product;
  navigateTo: (view: any) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, navigateTo }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="border rounded-lg overflow-hidden mb-4">
              <img src={mainImage} alt={product.name} className="w-full h-auto object-cover aspect-square" />
            </div>
            <div className="flex space-x-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-brand-orange' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500 ml-2">{product.reviewCount} reviews</span>
            </div>
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-4xl font-extrabold text-brand-orange">R{product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-xl text-gray-400 line-through">R{product.originalPrice.toFixed(2)}</span>}
            </div>
            {product.dealEnds && (
              <div className="bg-brand-cream p-3 rounded-lg flex items-center space-x-4 mb-4">
                <span className="font-bold text-red-500">Deal ends in:</span>
                <CountdownTimer targetDate={product.dealEnds} />
              </div>
            )}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="flex items-center space-x-4 mb-6">
              <label htmlFor="quantity" className="font-semibold">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-20 border-2 border-gray-200 rounded-lg text-center p-2 focus:border-brand-orange focus:ring-brand-orange"
                min="1"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={handleAddToCart} className="w-full bg-brand-cream text-brand-orange font-bold py-3 rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 border-2 border-brand-orange">
                Add to Cart
              </button>
              <button className="w-full bg-brand-orange text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onClick={() => navigateTo({ name: 'product', product: p })} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;