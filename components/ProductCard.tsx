import React from 'react';
import { Product } from '../types';
import StarRating from './StarRating';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer" onClick={onClick}>
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isHot && <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">HOT</span>}
          {product.isNew && <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>}
          {discountPercentage > 0 && <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded-full">-{discountPercentage}%</span>}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{product.name}</h3>
        <div className="flex items-baseline my-2">
          <p className="text-lg font-bold text-brand-orange">R{product.price.toFixed(2)}</p>
          {product.originalPrice && <p className="text-sm text-gray-400 line-through ml-2">R{product.originalPrice.toFixed(2)}</p>}
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <StarRating rating={product.rating} className="h-3.5 w-3.5" />
          <span className="ml-1">({product.reviewCount})</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-3 w-full bg-brand-cream text-brand-orange font-bold py-2 rounded-md hover:bg-brand-orange hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;