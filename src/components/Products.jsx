import { useState } from "react";
import { Pencil, Trash2, Truck } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Stylo", stock: 2, price: 2, status: "critical" },
    { id: 2, name: "Cahier", stock: 25, price: 5, status: "ok" },
    { id: 3, name: "Livre", stock: 1, price: 20, status: "critical" },
  ]);

  const requestRestock = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "pending" } : p
      )
    );
  };

  const badgeStyle = (status) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const statusLabel = (status) => {
    if (status === "critical") return "Critique";
    if (status === "pending") return "En attente";
    return "OK";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Gestion des Produits
      </h1>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4">Produit</th>
              <th>Stock</th>
              <th>Statut</th>
              <th>Prix</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">{p.name}</td>

                <td>{p.stock}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeStyle(
                      p.status
                    )}`}
                  >
                    {statusLabel(p.status)}
                  </span>
                </td>

                <td>{p.price} DT</td>

                <td className="p-4 text-right space-x-2">
                  {p.status === "critical" && (
                    <button
                      onClick={() => requestRestock(p.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                      <Truck size={14} />
                      Réappro
                    </button>
                  )}

                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                    <Pencil size={16} />
                  </button>

                  <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
a