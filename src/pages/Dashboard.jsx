import {
  Package,
  ShoppingCart,
  CreditCard,
  AlertTriangle,
} from "lucide-react";

import SalesChart from "../components/charts/SalesChart";
import StockChart from "../components/charts/StockChart";

export default function Dashboard() {
  const kpis = [
    {
      label: "Produits",
      value: 3,
      icon: Package,
      color: "bg-blue-100 text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Ventes aujourd’hui",
      value: 15,
      icon: ShoppingCart,
      color: "bg-green-100 text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Paniers en attente",
      value: 5,
      icon: CreditCard,
      color: "bg-purple-100 text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Stock critique",
      value: 2,
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      bg: "bg-red-50",
      alert: true,
    },
  ];

  const criticalProducts = [
    { id: 1, name: "Stylo", stock: 2, price: "2 DT" },
    { id: 2, name: "Livre", stock: 1, price: "20 DT" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ===== HEADER ===== */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Vue globale de votre activité
          </p>
        </div>

        {/* ===== KPI ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className={`${kpi.bg} rounded-2xl p-6 shadow-sm hover:shadow-md transition border ${
                  kpi.alert ? "border-red-300" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className={`p-3 rounded-xl ${kpi.color}`}>
                    <Icon size={22} />
                  </div>

                  {kpi.alert && (
                    <span className="text-xs font-bold text-red-600 bg-red-200 px-2 py-1 rounded-full">
                      URGENT
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 font-medium">
                  {kpi.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {kpi.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* ===== GRAPHIQUES ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border">
            <h2 className="font-bold text-gray-800 mb-4">
              Ventes – 7 derniers jours
            </h2>
            <SalesChart />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border">
            <h2 className="font-bold text-gray-800 mb-4">
              Répartition du stock
            </h2>
            <StockChart />
          </div>
        </div>

        {/* ===== ALERTE STOCK ===== */}
        {criticalProducts.length > 0 && (
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg flex gap-3">
            <AlertTriangle className="text-red-600" />
            <div>
              <h3 className="font-bold text-red-900">
                Alerte stock critique
              </h3>
              <p className="text-sm text-red-700">
                {criticalProducts.length} produit(s) nécessitent un
                réapprovisionnement immédiat.
              </p>
            </div>
          </div>
        )}

        {/* ===== TABLE PRODUITS CRITIQUES ===== */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <AlertTriangle className="text-red-600" size={18} />
              Produits en stock critique
            </h2>
          </div>

          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4 text-left">Produit</th>
                <th className="text-left">Stock</th>
                <th className="text-left">Prix</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {criticalProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-red-50 transition"
                >
                  <td className="p-4 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td>
                    <span className="px-3 py-1 text-xs font-bold bg-red-100 text-red-700 rounded-full">
                      {product.stock}
                    </span>
                  </td>
                  <td className="font-medium">{product.price}</td>
                  <td className="p-4 text-right">
                    <button className="px-4 py-2 text-xs font-semibold bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                      Réapprovisionner
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
