import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import { categories } from '../data/mockData';

interface HeaderProps {
  navigateTo: (view: any) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const { cartCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: { name: 'home' } },
    { name: 'Shop', view: { name: 'shop' } },
    ...categories.map(c => ({ name: c.name, view: { name: 'shop', category: c.id }})),
    { name: 'About Us', view: { name: 'about' } },
    { name: 'Contact', view: { name: 'contact' } },
  ];

  const handleNav = (view: any) => {
    navigateTo(view);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="text-3xl font-extrabold text-brand-orange cursor-pointer" onClick={() => navigateTo({ name: 'home' })}>
            Snop
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0,6).map((link) => (
              <button key={link.name} onClick={() => handleNav(link.view)} className="text-gray-600 hover:text-brand-orange transition-colors font-medium">
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative cursor-pointer" onClick={openCart}>
              <ShoppingCartIcon className="h-7 w-7 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon className="h-7 w-7 text-gray-700" /> : <MenuIcon className="h-7 w-7 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => handleNav(link.view)} className="text-left py-2 px-3 rounded-md text-gray-700 hover:bg-brand-cream hover:text-brand-orange transition-colors font-medium">
                {link.name}
              </button>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;