import {
  Package,
  ShoppingCart,
  AlertTriangle,
  Users,
} from "lucide-react";

import SalesChart from "../components/charts/SalesChart";
import StockChart from "../components/charts/StockChart";

export default function AdminDashboard() {
  const kpis = [
    { label: "Produits", value: 120, icon: Package },
    { label: "Ventes", value: 320, icon: ShoppingCart },
    { label: "Utilisateurs", value: 45, icon: Users },
    { label: "Stock critique", value: 3, icon: AlertTriangle, alert: true },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">

      <h1 className="text-4xl font-bold">Admin Dashboard</h1>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-2xl shadow border ${
              kpi.alert ? "border-red-400" : ""
            }`}
          >
            <kpi.icon className="text-blue-600 mb-3" />
            <p className="text-gray-500 text-sm">{kpi.label}</p>
            <p className="text-3xl font-bold">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Ventes</h2>
          <SalesChart />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-bold mb-4">Stock</h2>
          <StockChart />
        </div>
      </div>
    </div>
  );
}
