import React, { useState, useEffect } from 'react';
import { 
  Package, ShoppingCart, DollarSign, TrendingUp, 
  AlertTriangle, BarChart3, PieChart 
} from 'lucide-react';
import { productService } from '../services/productService';
import { salesService } from '../services/salesService';
import SalesChart from '../components/charts/SalesChart';
import StockChart from '../components/charts/StockChart';

export default function Home() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    criticalStock: 0,
    totalSales: 0,
    totalRevenue: 0
  });
  const [criticalProducts, setCriticalProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [products, critical, salesStats] = await Promise.all([
        productService.getAllProducts(),
        productService.getCriticalStock(),
        salesService.getSalesStats()
      ]);

      setStats({
        totalProducts: products.length,
        criticalStock: critical.length,
        totalSales: salesStats.totalSales,
        totalRevenue: salesStats.totalRevenue
      });

      setCriticalProducts(critical);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const kpis = [
    {
      label: 'Total Produits',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-100 text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Stock Critique',
      value: stats.criticalStock,
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-600',
      bg: 'bg-red-50'
    },
    {
      label: 'Ventes Total',
      value: stats.totalSales,
      icon: ShoppingCart,
      color: 'bg-green-100 text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Revenu Total',
      value: `${stats.totalRevenue} DT`,
      icon: DollarSign,
      color: 'bg-purple-100 text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Vue d'ensemble de votre gestion de stock</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className={`${kpi.bg} rounded-2xl p-6 border ${kpi.color.includes('red') ? 'border-red-200' : 'border-gray-100'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${kpi.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{kpi.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{kpi.value}</p>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-blue-600" size={20} />
              <h2 className="font-bold text-gray-800 text-lg">Ventes - 7 derniers jours</h2>
            </div>
            <SalesChart />
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="text-green-600" size={20} />
              <h2 className="font-bold text-gray-800 text-lg">Répartition du stock</h2>
            </div>
            <StockChart />
          </div>
        </div>

        {/* Alertes stock critique */}
        {criticalProducts.length > 0 && (
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-red-600" size={20} />
                <h2 className="font-bold text-gray-800 text-lg">Produits en stock critique</h2>
              </div>
              <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">
                {criticalProducts.length} produits
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="table-header">Produit</th>
                    <th className="table-header">Stock actuel</th>
                    <th className="table-header">Stock minimum</th>
                    <th className="table-header">Prix</th>
                    <th className="table-header">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {criticalProducts.map((product) => (
                    <tr key={product.id} className="border-t hover:bg-red-50">
                      <td className="table-cell font-medium">{product.name}</td>
                      <td className="table-cell">
                        <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">
                          {product.stock} unités
                        </span>
                      </td>
                      <td className="table-cell">{product.minStock} unités</td>
                      <td className="table-cell font-medium">{product.price} DT</td>
                      <td className="table-cell">
                        <button className="btn-primary text-sm">
                          Réapprovisionner
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}