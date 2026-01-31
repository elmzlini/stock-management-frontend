import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const total = (parseFloat(item.price) * item.quantity).toFixed(2);

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-gray-900 font-medium mt-1">{item.price} DT / unité</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>
          <span className="w-12 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-lg hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="w-24 text-right">
          <p className="font-bold text-lg text-blue-600">{total} DT</p>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}