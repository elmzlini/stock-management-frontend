import { ShoppingCart, Clock } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">

      <h1 className="text-4xl font-bold">Mon espace</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <ShoppingCart className="text-green-600 mb-3" />
          <p className="text-gray-500">Mon panier</p>
          <p className="text-3xl font-bold">3 articles</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <Clock className="text-blue-600 mb-3" />
          <p className="text-gray-500">Dernière commande</p>
          <p className="text-lg font-semibold">
            Il y a 2 jours
          </p>
        </div>

      </div>
    </div>
  );
}
