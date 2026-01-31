import React, { useState } from 'react';
import { Users as UsersIcon, Plus, Search, Mail, Phone, Edit, Trash2, Shield, User } from 'lucide-react';

export default function Users() {
  const [users] = useState([
    { id: 1, name: 'Admin User', email: 'admin@stock.com', phone: '+216 12 345 678', role: 'admin', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Regular User', email: 'user@stock.com', phone: '+216 98 765 432', role: 'user', status: 'active', joinDate: '2024-01-20' },
    { id: 3, name: 'Manager Test', email: 'manager@stock.com', phone: '+216 55 123 456', role: 'manager', status: 'inactive', joinDate: '2024-01-25' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UsersIcon className="text-blue-600" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Utilisateurs</h1>
                <p className="text-gray-600 mt-2">Gestion des utilisateurs du système</p>
              </div>
            </div>
            <button className="btn-primary flex items-center">
              <Plus size={20} className="mr-2" />
              Nouvel utilisateur
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UsersIcon className="text-blue-600" size={20} />
              </div>
            </div>
            <p className="text-sm text-gray-600">Total utilisateurs</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <User className="text-green-600" size={20} />
              </div>
            </div>
            <p className="text-sm text-gray-600">Utilisateurs actifs</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Shield className="text-purple-600" size={20} />
              </div>
            </div>
            <p className="text-sm text-gray-600">Administrateurs</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <User className="text-red-600" size={20} />
              </div>
            </div>
            <p className="text-sm text-gray-600">Inactifs</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                className="input-field pl-10"
              />
            </div>
            <select className="input-field md:w-48">
              <option value="">Tous les rôles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
            </select>
            <select className="input-field md:w-48">
              <option value="">Tous les statuts</option>
              <option value="active">Actif</option>
              <option value="inactive">Inactif</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="table-header">Utilisateur</th>
                  <th className="table-header">Contact</th>
                  <th className="table-header">Rôle</th>
                  <th className="table-header">Statut</th>
                  <th className="table-header">Date d'inscription</th>
                  <th className="table-header">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
                          alt={user.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail size={14} className="mr-2" />
                          {user.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone size={14} className="mr-2" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        user.role === 'admin'
                          ? 'bg-blue-100 text-blue-800'
                          : user.role === 'manager'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {user.role === 'admin' ? 'Administrateur' :
                         user.role === 'manager' ? 'Manager' : 'Utilisateur'}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status === 'active' ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{user.joinDate}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No results */}
          {users.length === 0 && (
            <div className="text-center py-12">
              <UsersIcon className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900">Aucun utilisateur trouvé</h3>
              <p className="text-gray-500 mt-2">Créez votre premier utilisateur</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}