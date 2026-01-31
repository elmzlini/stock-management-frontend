// src/pages/DashboardEnhanced.jsx
import React, { useState, useEffect } from 'react';
import {
  Package,
  ShoppingCart,
  CreditCard,
  AlertTriangle,
  TrendingUp,
  Users,
  DollarSign,
  RefreshCw,
  Plus,
  Filter,
  Download
} from "lucide-react";

import SalesChart from "../components/charts/SalesChart";
import StockChart from "../components/charts/StockChart";

export default function DashboardEnhanced() {
  const [timeRange, setTimeRange] = useState('7j');
  const [isLoading, setIsLoading] = useState(false);
  const [salesData, setSalesData] = useState(null);

  const kpis = [
    {
      label: "Total Produits",
      value: "3",
      icon: Package,
      color: "bg-blue-100 text-blue-600",
      bg: "bg-blue-50",
      change: "+0",
      trend: "neutral"
    },
    {
      label: "Ventes aujourd'hui",
      value: "15",
      icon: ShoppingCart,
      color: "bg-green-100 text-green-600",
      bg: "bg-green-50",
      change: "+2",
      trend: "up"
    },
    {
      label: "Paniers en attente",
      value: "5",
      icon: CreditCard,
      color: "bg-purple-100 text-purple-600",
      bg: "bg-purple-50",
      change: "-1",
      trend: "down"
    },
    {
      label: "Stock critique",
      value: "2",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      bg: "bg-red-50",
      alert: true,
      change: "+1",
      trend: "up"
    },
  ];

  const criticalProducts = [
    { 
      id: 1, 
      name: "Stylo Premium", 
      stock: 2, 
      price: "2 DT",
      category: "Fournitures",
      minStock: 10
    },
    { 
      id: 2, 
      name: "Livre React", 
      stock: 1, 
      price: "20 DT",
      category: "Livres",
      minStock: 5
    },
  ];

  const recentSales = [
    { id: 1, product: "Cahier A4", amount: "8 DT", time: "10:30", status: "completed" },
    { id: 2, product: "Stylo", amount: "2 DT", time: "11:15", status: "completed" },
    { id: 3, product: "Livre", amount: "20 DT", time: "12:45", status: "pending" },
    { id: 4, product: "Clé USB", amount: "15 DT", time: "14:20", status: "completed" },
  ];

  const timeRanges = [
    { id: '7j', label: '7 jours' },
    { id: '30j', label: '30 jours' },
    { id: '90j', label: '90 jours' },
    { id: '1a', label: '1 an' }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    // Simuler un chargement
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleReplenish = (productId) => {
    alert(`Réapprovisionnement du produit ${productId} demandé`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Vue globale de votre activité en temps réel
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              {timeRanges.map((range) => (
                <button
                  key={range.id}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    timeRange === range.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setTimeRange(range.id)}
                >
                  {range.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              <RefreshCw size={20} className={isLoading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* ===== KPI GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className={`${kpi.bg} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border ${
                  kpi.alert ? "border-red-200" : "border-gray-100"
                } hover:-translate-y-1`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 md:p-3 rounded-lg ${kpi.color}`}>
                    <Icon size={20} />
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {kpi.change && (
                      <span className={`text-xs font-semibold ${
                        kpi.trend === 'up' ? 'text-green-600' : 
                        kpi.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {kpi.trend === 'up' ? '↗' : kpi.trend === 'down' ? '↘' : '→'} {kpi.change}
                      </span>
                    )}
                    {kpi.alert && (
                      <span className="text-xs font-bold text-red-600 bg-red-200 px-2 py-1 rounded-full">
                        URGENT
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 font-medium">
                  {kpi.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                  {kpi.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* ===== CHARTS SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Chart Card */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div>
                <h2 className="font-bold text-gray-800 text-lg">
                  Ventes – 7 derniers jours
                </h2>
                <p className="text-sm text-gray-500">Total: 4,600 DT</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 p-2">
                <Download size={18} />
              </button>
            </div>
            <div className="h-[300px]">
              <SalesChart />
            </div>
          </div>

          {/* Stock Chart Card */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div>
                <h2 className="font-bold text-gray-800 text-lg">
                  Répartition du stock
                </h2>
                <p className="text-sm text-gray-500">3 catégories de stock</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 p-2">
                <Filter size={18} />
              </button>
            </div>
            <div className="h-[300px]">
              <StockChart />
            </div>
          </div>
        </div>

        {/* ===== ALERT & RECENT ACTIVITY ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stock Alert */}
          {criticalProducts.length > 0 && (
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl md:rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-xl">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-red-900 text-lg">
                      Alerte stock critique
                    </h3>
                    <span className="text-xs font-bold text-red-600 bg-red-200 px-3 py-1 rounded-full">
                      {criticalProducts.length} PRODUITS
                    </span>
                  </div>
                  <p className="text-sm text-red-700 mt-2">
                    {criticalProducts.length} produit(s) nécessitent un réapprovisionnement immédiat pour éviter les ruptures.
                  </p>
                  <button className="mt-4 px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                    <Plus size={16} />
                    Commander en urgence
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Recent Sales */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <ShoppingCart size={18} />
                Ventes récentes
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Voir tout →
              </button>
            </div>
            
            <div className="space-y-3">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      sale.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                    }`}>
                      <ShoppingCart size={16} className={
                        sale.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                      } />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{sale.product}</p>
                      <p className="text-xs text-gray-500">{sale.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{sale.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      sale.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {sale.status === 'completed' ? 'Terminé' : 'En attente'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CRITICAL PRODUCTS TABLE ===== */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                <AlertTriangle className="text-red-600" size={20} />
                Produits en stock critique
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                <Plus size={16} />
                Ajouter un produit
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Produits nécessitant une attention immédiate
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">Produit</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">Catégorie</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">Stock actuel</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">Stock minimum</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">Prix</th>
                  <th className="p-4 text-right text-sm font-semibold text-gray-600">Action</th>
                </tr>
              </thead>

              <tbody>
                {criticalProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t border-gray-100 hover:bg-red-50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 text-xs font-bold ${
                          product.stock <= 2 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        } rounded-full`}>
                          {product.stock} unités
                        </span>
                        {product.stock <= 2 && (
                          <AlertTriangle size={14} className="text-red-500" />
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-700">{product.minStock} unités</span>
                    </td>
                    <td className="p-4 font-medium">{product.price}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleReplenish(product.id)}
                          className="px-4 py-2 text-sm font-semibold bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          Réapprovisionner
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                          <Plus size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {criticalProducts.length === 0 && (
            <div className="p-8 text-center">
              <Package size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Aucun stock critique</h3>
              <p className="text-gray-500 mt-1">Tous vos produits sont suffisamment approvisionnés.</p>
            </div>
          )}
        </div>

        {/* ===== FOOTER SUMMARY ===== */}
        <div className="text-center text-sm text-gray-500 py-6">
          <p>Données mises à jour à {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
          <p className="mt-1">Dashboard • Version 1.0</p>
        </div>
      </div>
    </div>
  );
}