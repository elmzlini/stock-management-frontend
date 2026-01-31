// Données simulées pour les ventes
let sales = [
  {
    id: 1,
    productId: 1,
    productName: 'Stylo Bic',
    quantity: 5,
    price: '1.50',
    total: '7.50',
    date: '2024-01-20',
    customerName: 'Client 1'
  },
  {
    id: 2,
    productId: 2,
    productName: 'Cahier A4',
    quantity: 3,
    price: '3.80',
    total: '11.40',
    date: '2024-01-21',
    customerName: 'Client 2'
  }
];

let nextId = 3;

export const salesService = {
  // Récupérer toutes les ventes
  getAllSales: async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([...sales]), 300);
    });
  },

  // Créer une nouvelle vente
  createSale: async (saleData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newSale = {
          ...saleData,
          id: nextId++,
          date: new Date().toISOString().split('T')[0]
        };
        sales.push(newSale);
        resolve(newSale);
      }, 300);
    });
  },

  // Récupérer les statistiques de vente
  getSalesStats: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const totalSales = sales.length;
        const totalRevenue = sales.reduce((sum, sale) => sum + parseFloat(sale.total), 0);
        const today = new Date().toISOString().split('T')[0];
        const todaySales = sales.filter(sale => sale.date === today).length;
        
        resolve({
          totalSales,
          totalRevenue: totalRevenue.toFixed(2),
          todaySales,
          averageSale: totalSales > 0 ? (totalRevenue / totalSales).toFixed(2) : '0.00'
        });
      }, 300);
    });
  }
};