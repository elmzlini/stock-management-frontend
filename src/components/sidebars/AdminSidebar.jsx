import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Package,
  Folder,
  ShoppingCart,
  BarChart3,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Shield,
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminSidebar() {
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
      icon: Home,
      role: ['admin', 'user']
    },
    {
      title: 'Produits',
      path: '/products',
      icon: Package,
      role: ['admin', 'user']
    },
    {
      title: 'Catégories',
      path: '/categories',
      icon: Folder,
      role: ['admin']
    },
    {
      title: 'Ventes',
      path: '/sales',
      icon: BarChart3,
      role: ['admin', 'user']
    },
    {
      title: 'Panier',
      path: '/cart',
      icon: ShoppingCart,
      role: ['admin', 'user']
    },
    {
      title: 'Utilisateurs',
      path: '/users',
      icon: Users,
      role: ['admin']
    },
    {
      title: 'Alertes',
      path: '/alerts',
      icon: AlertTriangle,
      role: ['admin']
    },
    {
      title: 'Paramètres',
      path: '/settings',
      icon: Settings,
      role: ['admin']
    }
  ];

  return (
    <div className={`h-screen bg-gray-900 text-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} sticky top-0`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold">StockManager</h2>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto">
              <Shield size={24} />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 hover:bg-gray-800 rounded-lg"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>

      {/* User Info */}
      {!collapsed && user && (
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-gray-400">Administrateur</p>
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
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              {!collapsed && <span className="ml-3">{item.title}</span>}
              {!collapsed && item.role.includes('admin') && (
                <span className="ml-auto text-xs bg-blue-500 px-2 py-1 rounded">
                  Admin
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} w-full px-3 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors`}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Déconnexion</span>}
        </button>
      </div>
    </div>
  );
}