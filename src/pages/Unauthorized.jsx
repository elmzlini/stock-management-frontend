import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Home, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Unauthorized() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <Shield className="text-red-600" size={40} />
          </div>
          <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Accès Refusé</h1>
          <p className="text-gray-600">
            Vous n'avez pas les permissions nécessaires pour accéder à cette page.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
            <div className="text-left">
              <p className="font-medium text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-500">Rôle: {user?.role === 'admin' ? 'Administrateur' : 'Utilisateur'}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Contactez votre administrateur si vous pensez avoir besoin d'accéder à cette page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Retour au Dashboard
          </Link>
          <Link
            to="/products"
            className="btn-secondary flex items-center justify-center"
          >
            <Home size={20} className="mr-2" />
            Voir les produits
          </Link>
        </div>
      </div>
    </div>
  );
}