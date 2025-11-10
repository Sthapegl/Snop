import React from 'react';
import AppStoreIcon from './icons/AppStoreIcon';
import GooglePlayIcon from './icons/GooglePlayIcon';
import VisaIcon from './icons/VisaIcon';
import MastercardIcon from './icons/MastercardIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream text-brand-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-orange">Jewelry & Accessories</a></li>
              <li><a href="#" className="hover:text-brand-orange">Fashion Apparel</a></li>
              <li><a href="#" className="hover:text-brand-orange">Lighting & Home Décor</a></li>
              <li><a href="#" className="hover:text-brand-orange">Home Essentials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About Snop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-orange">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-orange">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-orange">Shipping</a></li>
              <li><a href="#" className="hover:text-brand-orange">Returns</a></li>
              <li><a href="#" className="hover:text-brand-orange">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              {/* SVG icons would go here */}
            </div>
            <h3 className="font-bold text-lg mb-4 mt-6">Download Our App</h3>
            <div className="flex flex-col space-y-2 items-start">
                <AppStoreIcon className="h-10"/>
                <GooglePlayIcon className="h-10"/>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-sm text-gray-500">
            <p>&copy; 2025 snop. All rights reserved.</p>
            <p>Property of Nthebe & Khalienyane</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 mb-2">We accept:</p>
            <div className="flex justify-center items-center space-x-2">
                <VisaIcon className="h-8" />
                <MastercardIcon className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;