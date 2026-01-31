import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Package,
  ShoppingCart,
  BarChart3,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function UserSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/',
      icon: Home
    },
    {
      title: 'Produits',
      path: '/products',
      icon: Package
    },
    {
      title: 'Ventes',
      path: '/sales',
      icon: BarChart3
    },
    {
      title: 'Mon Panier',
      path: '/cart',
      icon: ShoppingCart
    },
    {
      title: 'Mon Profil',
      path: '/profile',
      icon: User
    }
  ];

  return (
    <div className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} sticky top-0`}>
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <ShoppingBag className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">StockManager</h2>
                <p className="text-xs text-gray-500">Espace Utilisateur</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto">
              <ShoppingBag className="text-green-600" size={24} />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* User Info */}
      {!collapsed && user && (
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-green-500"
            />
            <div>
              <p className="font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">Utilisateur</p>
            </div>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} px-3 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-green-50 text-green-700 border-l-4 border-green-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              {!collapsed && <span className="ml-3">{item.title}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-4 border-t">
        <button
          onClick={handleLogout}
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} w-full px-3 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors`}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Déconnexion</span>}
        </button>
      </div>
    </div>
  );
}