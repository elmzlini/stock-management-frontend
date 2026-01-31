import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import { salesService } from '../services/salesService';

export default function Sales() {
  const [sales, setSales] = useState([]);
  const [stats, setStats] = useState({
    totalSales: 0,
    totalRevenue: '0.00',
    todaySales: 0,
    averageSale: '0.00'
  });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadSalesData();
  }, []);

  const loadSalesData = async () => {
    try {
      const [salesData, statsData] = await Promise.all([
        salesService.getAllSales(),
        salesService.getSalesStats()
      ]);
      
      setSales(salesData);
      setStats(statsData);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSales = sales.filter(sale =>
    sale.productName.toLowerCase().includes(search.toLowerCase()) ||
    sale.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const salesStats = [
    {
      label: 'Ventes totales',
      value: stats.totalSales,
      icon: ShoppingCart,
      color: 'bg-blue-100 text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Revenu total',
      value: `${stats.totalRevenue} DT`,
      icon: DollarSign,
      color: 'bg-green-100 text-green-600',
      bg: 'bg-green-50'
    },
    {
      label: 'Ventes aujourd\'hui',
      value: stats.todaySales,
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      label: 'Moyenne par vente',
      value: `${stats.averageSale} DT`,
      icon: DollarSign,
      color: 'bg-orange-100 text-orange-600',
      bg: 'bg-orange-50'
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
          <h1 className="text-3xl font-bold text-gray-900">Ventes</h1>
          <p className="text-gray-600 mt-2">
            Suivi de vos ventes et revenus
          </p>
        </div>

        {/* Sales Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salesStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`${stat.bg} rounded-2xl p-6 border ${stat.color.includes('blue') ? 'border-blue-200' : stat.color.includes('green') ? 'border-green-200' : 'border-gray-100'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une vente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex space-x-3">
            <button className="btn-secondary flex items-center">
              <Filter size={20} className="mr-2" />
              Filtres
            </button>
            <button className="btn-secondary flex items-center">
              <Download size={20} className="mr-2" />
              Exporter
            </button>
          </div>
        </div>

        {/* Sales Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="table-header">Date</th>
                  <th className="table-header">Produit</th>
                  <th className="table-header">Client</th>
                  <th className="table-header">Quantité</th>
                  <th className="table-header">Prix unitaire</th>
                  <th className="table-header">Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredSales.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-gray-500">
                      Aucune vente trouvée
                    </td>
                  </tr>
                ) : (
                  filteredSales.map((sale) => (
                    <tr key={sale.id} className="border-t hover:bg-gray-50">
                      <td className="table-cell">{sale.date}</td>
                      <td className="table-cell font-medium">{sale.productName}</td>
                      <td className="table-cell">{sale.customerName}</td>
                      <td className="table-cell">{sale.quantity}</td>
                      <td className="table-cell">{sale.price} DT</td>
                      <td className="table-cell font-bold text-blue-600">{sale.total} DT</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}