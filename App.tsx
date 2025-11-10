
import React, { useState, useCallback } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import ProductDetailPage from './views/ProductDetailPage';
import ShopPage from './views/ShopPage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import CartDrawer from './components/CartDrawer';
import { Product } from './types';
import { products as allProducts } from './data/mockData';

type View = 
  | { name: 'home' }
  | { name: 'shop'; category?: string }
  | { name: 'product'; product: Product }
  | { name: 'about' }
  | { name: 'contact' };

const App: React.FC = () => {
  const [view, setView] = useState<View>({ name: 'home' });

  const navigateTo = useCallback((newView: View) => {
    window.scrollTo(0, 0);
    setView(newView);
  }, []);

  const renderView = () => {
    switch (view.name) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'shop':
        return <ShopPage navigateTo={navigateTo} initialCategory={view.category}/>;
      case 'product':
        return <ProductDetailPage product={view.product} navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <CartProvider>
      <div className="bg-white text-brand-dark font-sans">
        <Header navigateTo={navigateTo} />
        <main className="pt-20 md:pt-24">
          {renderView()}
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
