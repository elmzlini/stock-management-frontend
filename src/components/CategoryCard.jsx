import React from 'react';
import { Edit, Trash2, Package } from 'lucide-react';

export default function CategoryCard({ category, onEdit, onDelete }) {
  return (
    <div className="card p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Package className="text-blue-600" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900">{category.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{category.description}</p>
        </div>
      </div>

      <div className="flex space-x-2 mt-6">
        <button
          onClick={() => onEdit(category)}
          className="btn-secondary flex-1 flex items-center justify-center"
        >
          <Edit size={18} className="mr-2" />
          Modifier
        </button>
        <button
          onClick={() => onDelete(category.id)}
          className="btn-danger flex-1 flex items-center justify-center"
        >
          <Trash2 size={18} className="mr-2" />
          Supprimer
        </button>
      </div>
    </div>
  );
}