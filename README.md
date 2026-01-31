# Gestion de Stock - Application React

Application de gestion de stock avec authentification et rôles (Admin/User).

## 🚀 Fonctionnalités

- ✅ Dashboard avec statistiques
- ✅ Gestion des produits (CRUD)
- ✅ Gestion des catégories
- ✅ Panier d'achat
- ✅ Suivi des ventes
- ✅ Authentification avec rôles
- ✅ Interface responsive
- ✅ Graphiques interactifs

## 🛠 Technologies

Frontend: React (Vite), JavaScript, CSS

Routing: React Router

State Management: Context API

Testing: Cypress (planned / mock data)

Tools: Node.js, npm, VS Code

## 📦 Installation & Run

```bash
# Clonez le projet
git clone [https://github.com/elmzlini/stock-management-frontend]

# Allez dans le dossier
cd gestion-stock

# Installez les dépendances
npm install

# Lancez le serveur de développement
npm run dev

🧪 QA / Testing Notes

Testable UI with stable selectors (data-cy)

Simulated stock scenarios for E2E tests

Planned Cypress tests with Page Object Model (POM)

Designed for manual and automated QA

🧪  QA / Testing Strategy

Cypress E2E tests

Page Object Model (POM)

Custom Cypress commands

Fixtures & mocks

Test reports & screenshots (planned)

🤝 Contribution
Les contributions sont les bienvenues ! Voici comment contribuer :

Fork le projet

Clonez votre fork

Créez une branche (git checkout -b feature/AmazingFeature)

Commitez vos changements (git commit -m 'Add some AmazingFeature')

Poussez la branche (git push origin feature/AmazingFeature)

Ouvrez une Pull Request

Guidelines
Suivez la structure de code existante

Ajoutez des tests pour les nouvelles fonctionnalités

Mettez à jour la documentation

Utilisez des messages de commits clairs

🐛 Dépannage
Problèmes courants
Erreur : Port déjà utilisé

bash
# Modifiez le port dans vite.config.js
server: {
  port: 3001
}
Erreur : Dépendances manquantes

bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
Erreur : Build échoue

bash
# Vérifiez les versions de Node.js
node --version # Doit être >= 16

# Essayez avec force
npm install --force
📞 Support
Issues : Ouvrir une issue

Email : almezlinihatem@gmail.com

Discussions : Forum GitHub

📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

🙏 Remerciements
React - Bibliothèque UI

Vite - Outil de build

Tailwind CSS - Framework CSS

Lucide Icons - Icônes

Recharts - Graphiques

👤 Author

Hatem Elmezlini
QA Engineer | Test Automation | React Frontend
🔗 Portfolio project demonstrating frontend and QA skills
