import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    totalItems,
    totalPrice 
  } = useCart();

  const handleCheckout = () => {
    alert(`Commande confirmée ! Total: ${totalPrice} DT`);
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="text-gray-300" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Votre panier est vide</h2>
            <p className="text-gray-600 mb-8">Ajoutez des produits pour commencer vos achats</p>
            <Link
              to="/products"
              className="btn-primary inline-flex items-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voir les produits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panier</h1>
          <p className="text-gray-600 mt-2">
            {totalItems} produit{totalItems > 1 ? 's' : ''} dans votre panier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-bold text-gray-800">Articles</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                >
                  <Trash2 size={16} className="mr-1" />
                  Vider le panier
                </button>
              </div>
              
              <div>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="card p-6 sticky top-6">
              <h2 className="font-bold text-gray-800 text-lg mb-6">Récapitulatif</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{totalPrice} DT</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>{totalPrice} DT</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={handleCheckout}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <CreditCard size={20} className="mr-2" />
                  Procéder au paiement
                </button>
                
                <Link
                  to="/products"
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Continuer les achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}