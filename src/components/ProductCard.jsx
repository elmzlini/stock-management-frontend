import React, { useState } from 'react';
import { ShoppingCart, Edit, Trash2, AlertTriangle } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Vérifiez le chemin

export default function ProductCard({ product, onEdit, onDelete }) {
  // Vérifiez que useCart retourne bien quelque chose
  const cart = useCart();
  const { addToCart } = cart; // Maintenant c'est sécurisé
  
  const [quantity, setQuantity] = useState(1);
  const isCritical = product.stock <= product.minStock;

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product, parseInt(quantity));
      setQuantity(1);
    } else {
      console.error('addToCart n\'est pas défini');
    }
  };

  // Version sécurisée avec vérification
  if (!cart) {
    return (
      <div className="card p-4">
        <p className="text-red-500">Erreur: Panier non disponible</p>
      </div>
    );
  }

  return (
    <div className={`card p-4 ${isCritical ? 'border-red-300' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
        {isCritical && (
          <AlertTriangle className="text-red-500" size={20} />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Prix:</span>
          <span className="font-bold text-lg text-blue-600">{product.price} DT</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Stock:</span>
          <div className="flex items-center space-x-2">
            <span className={`font-medium ${
              isCritical ? 'text-red-600' : 'text-gray-900'
            }`}>
              {product.stock} unités
            </span>
            {isCritical && (
              <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
                Critique
              </span>
            )}
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex space-x-2 mb-3">
            <input
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="input-field flex-1 text-center"
            />
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart size={18} className="mr-2" />
              Ajouter
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => onEdit && onEdit(product)}
              className="btn-secondary flex-1 flex items-center justify-center"
            >
              <Edit size={18} className="mr-2" />
              Modifier
            </button>
            <button
              onClick={() => onDelete && onDelete(product.id)}
              className="btn-danger flex-1 flex items-center justify-center"
            >
              <Trash2 size={18} className="mr-2" />
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}