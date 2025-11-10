// FIX: Import React to resolve 'Cannot find namespace "React"' error.
import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isHot?: boolean;
  dealEnds?: string; // ISO string for countdown
  description: string;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
