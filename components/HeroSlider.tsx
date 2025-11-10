
import React, { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../data/mockData';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <div className="relative w-full h-64 md:h-96 group">
      <div
        style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="w-full h-full bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">{heroSlides[currentIndex].title}</h1>
          <p className="text-md md:text-xl mt-2">{heroSlides[currentIndex].subtitle}</p>
          <button className="mt-6 bg-brand-orange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors">
            {heroSlides[currentIndex].buttonText}
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
        <ChevronLeftIcon className="w-6 h-6" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
        <ChevronRightIcon className="w-6 h-6" />
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentIndex === index ? 'bg-brand-orange' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
