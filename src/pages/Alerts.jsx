import React from 'react';
import { AlertTriangle, Bell, Clock, TrendingUp } from 'lucide-react';

export default function Alerts() {
  const alerts = [
    { id: 1, type: 'stock', message: 'Stock critique: Stylo (2 unités)', time: '2h ago', priority: 'high' },
    { id: 2, type: 'sale', message: 'Vente exceptionnelle: 50 stylos vendus', time: '5h ago', priority: 'medium' },
    { id: 3, type: 'system', message: 'Sauvegarde automatique complétée', time: '1 jour', priority: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Alertes</h1>
                <p className="text-gray-600 mt-2">Gestion des notifications système</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">3 alertes actives</span>
              <div className="relative">
                <Bell className="text-gray-500" size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-red-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="text-red-600" size={20} />
              </div>
              <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Urgent
              </span>
            </div>
            <p className="text-sm text-gray-600">Alertes critiques</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-yellow-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Bell className="text-yellow-600" size={20} />
              </div>
              <span className="text-sm text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                Moyen
              </span>
            </div>
            <p className="text-sm text-gray-600">Alertes moyennes</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="text-green-600" size={20} />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Faible
              </span>
            </div>
            <p className="text-sm text-gray-600">Alertes faibles</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          </div>
        </div>

        {/* Alertes list */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="font-bold text-gray-800 text-lg">Alertes récentes</h2>
            <p className="text-gray-600 text-sm mt-1">Toutes les notifications système</p>
          </div>

          <div className="divide-y">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      alert.priority === 'high' ? 'bg-red-100' :
                      alert.priority === 'medium' ? 'bg-yellow-100' :
                      'bg-green-100'
                    }`}>
                      <AlertTriangle className={
                        alert.priority === 'high' ? 'text-red-600' :
                        alert.priority === 'medium' ? 'text-yellow-600' :
                        'text-green-600'
                      } size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{alert.message}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-500">{alert.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                          alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {alert.priority === 'high' ? 'Urgent' :
                           alert.priority === 'medium' ? 'Moyen' : 'Faible'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-2">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t">
            <button className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Voir toutes les alertes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}