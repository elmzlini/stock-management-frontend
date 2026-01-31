import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

// Importez TOUTES les pages nécessaires
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';
import Categories from './pages/Categories';
import CategoryForm from './pages/CategoryForm';
import Cart from './pages/Cart';
import Sales from './pages/Sales';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Route publique */}
            <Route path="/login" element={<Login />} />
            
            {/* Routes protégées avec Layout */}
            <Route element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
              {/* Accessible à tous les utilisateurs connectés */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/new" element={<ProductForm />} />
              <Route path="/products/edit/:id" element={<ProductForm />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* Accessible seulement aux admins */}
              <Route path="/categories" element={
                <ProtectedRoute requiredRole="admin">
                  <Categories />
                </ProtectedRoute>
              } />
              <Route path="/categories/new" element={
                <ProtectedRoute requiredRole="admin">
                  <CategoryForm />
                </ProtectedRoute>
              } />
              <Route path="/categories/edit/:id" element={
                <ProtectedRoute requiredRole="admin">
                  <CategoryForm />
                </ProtectedRoute>
              } />
              <Route path="/users" element={
                <ProtectedRoute requiredRole="admin">
                  <Users />
                </ProtectedRoute>
              } />
              <Route path="/alerts" element={
                <ProtectedRoute requiredRole="admin">
                  <Alerts />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute requiredRole="admin">
                  <Settings />
                </ProtectedRoute>
              } />
            </Route>
            
            {/* Routes spéciales */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;