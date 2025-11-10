
import React from 'react';
import StarIcon from './icons/StarIcon';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = 'h-4 w-4' }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`${className} ${
              starValue <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
