import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('gestion_stock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'admin@stock.com' && password === 'admin123') {
          const userData = {
            id: 1,
            email,
            name: 'Administrateur',
            role: 'admin',
            avatar: 'https://ui-avatars.com/api/?name=Admin&background=3b82f6&color=fff'
          };
          setUser(userData);
          localStorage.setItem('gestion_stock_user', JSON.stringify(userData));
          resolve(userData);
        } else if (email === 'user@stock.com' && password === 'user123') {
          const userData = {
            id: 2,
            email,
            name: 'Utilisateur Standard',
            role: 'user',
            avatar: 'https://ui-avatars.com/api/?name=User&background=10b981&color=fff'
          };
          setUser(userData);
          localStorage.setItem('gestion_stock_user', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Identifiants incorrects'));
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gestion_stock_user');
    return Promise.resolve();
  };

  const hasPermission = (requiredRole) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return user.role === requiredRole;
  };

  const value = {
    user,
    login,
    logout,
    hasPermission,
    isAuthenticated: !!user,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};