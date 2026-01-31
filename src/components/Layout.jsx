import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from './sidebars/AdminSidebar';
import UserSidebar from './sidebars/UserSidebar';
import Navbar from './Navbar';

export default function Layout() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar conditionnelle */}
        {user?.role === 'admin' ? <AdminSidebar /> : <UserSidebar />}
        
        {/* Contenu principal */}
        <div className="flex-1">
          <Navbar />
          <main className="p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}