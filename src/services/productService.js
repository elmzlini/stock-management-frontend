// Données simulées pour les produits
let products = [
  {
    id: 1,
    name: 'Stylo Bic',
    description: 'Stylo à bille bleu',
    price: '1.50',
    stock: 150,
    categoryId: 1,
    minStock: 20,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'Cahier A4',
    description: 'Cahier 96 pages',
    price: '3.80',
    stock: 80,
    categoryId: 1,
    minStock: 30,
    createdAt: '2024-01-16'
  },
  {
    id: 3,
    name: 'Livre React',
    description: 'Guide complet React',
    price: '45.00',
    stock: 15,
    categoryId: 2,
    minStock: 10,
    createdAt: '2024-01-17'
  }
];

let nextId = 4;

export const productService = {
  // Récupérer tous les produits
  getAllProducts: async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([...products]), 300);
    });
  },

  // Récupérer un produit par ID
  getProductById: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find(p => p.id === id);
        if (product) {
          resolve({ ...product });
        } else {
          reject(new Error('Produit non trouvé'));
        }
      }, 300);
    });
  },

  // Créer un nouveau produit
  createProduct: async (productData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newProduct = {
          ...productData,
          id: nextId++,
          createdAt: new Date().toISOString().split('T')[0]
        };
        products.push(newProduct);
        resolve(newProduct);
      }, 300);
    });
  },

  // Mettre à jour un produit
  updateProduct: async (id, productData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
          products[index] = { ...products[index], ...productData };
          resolve(products[index]);
        } else {
          reject(new Error('Produit non trouvé'));
        }
      }, 300);
    });
  },

  // Supprimer un produit
  deleteProduct: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
          products.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error('Produit non trouvé'));
        }
      }, 300);
    });
  },

  // Rechercher des produits
  searchProducts: async (query) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filtered);
      }, 300);
    });
  },

  // Récupérer les produits en stock critique
  getCriticalStock: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const critical = products.filter(product => product.stock <= product.minStock);
        resolve(critical);
      }, 300);
    });
  }
};