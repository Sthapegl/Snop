import React from 'react';
import { useCart } from '../context/CartContext';
import XIcon from './icons/XIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button onClick={closeCart} className="p-1 rounded-full hover:bg-gray-100">
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          {cart.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
              <ShoppingCartIcon className="w-24 h-24 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">Your cart is empty</h3>
              <p className="text-gray-500">Looks like you haven't added anything yet.</p>
              <button
                onClick={closeCart}
                className="mt-6 bg-brand-orange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {cart.map(item => (
                  <div key={item.product.id} className="flex items-start space-x-3">
                    <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 rounded-md object-cover"/>
                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold truncate">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">R{item.product.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))} className="w-16 border rounded-md text-center"/>
                        <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-xs text-red-500 hover:underline">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                 <div className="flex justify-between items-center font-bold text-lg mb-4">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>R{cartTotal.toFixed(2)}</span>
                 </div>
                 <button className="w-full bg-brand-orange text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                   Proceed to Checkout
                 </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;