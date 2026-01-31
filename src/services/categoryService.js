// Données simulées pour les catégories
let categories = [
  { id: 1, name: 'Fournitures', description: 'Fournitures de bureau' },
  { id: 2, name: 'Livres', description: 'Livres et manuels' },
  { id: 3, name: 'Électronique', description: 'Appareils électroniques' }
];

let nextId = 4;

export const categoryService = {
  // Récupérer toutes les catégories
  getAllCategories: async () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([...categories]), 300);
    });
  },

  // Créer une nouvelle catégorie
  createCategory: async (categoryData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newCategory = {
          ...categoryData,
          id: nextId++
        };
        categories.push(newCategory);
        resolve(newCategory);
      }, 300);
    });
  },

  // Mettre à jour une catégorie
  updateCategory: async (id, categoryData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = categories.findIndex(c => c.id === id);
        if (index !== -1) {
          categories[index] = { ...categories[index], ...categoryData };
          resolve(categories[index]);
        } else {
          reject(new Error('Catégorie non trouvée'));
        }
      }, 300);
    });
  },

  // Supprimer une catégorie
  deleteCategory: async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = categories.findIndex(c => c.id === id);
        if (index !== -1) {
          categories.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error('Catégorie non trouvée'));
        }
      }, 300);
    });
  }
};