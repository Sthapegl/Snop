
import React from 'react';
import { categories } from '../data/mockData';

interface CategoryIconsProps {
    navigateTo: (view: any) => void;
}

const CategoryIcons: React.FC<CategoryIconsProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigateTo({ name: 'shop', category: category.id })}
              className="flex flex-col items-center justify-center p-4 bg-brand-cream rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-transform"
            >
              <category.icon className="w-10 h-10 text-brand-orange mb-2" />
              <span className="font-semibold text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryIcons;
