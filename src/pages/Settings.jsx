import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, Bell, Lock, Globe, Palette } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    darkMode: false,
    language: 'fr',
    timezone: 'Europe/Paris'
  });

  const handleSave = () => {
    alert('Paramètres sauvegardés avec succès !');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <SettingsIcon className="text-purple-600" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
                <p className="text-gray-600 mt-2">Configuration du système</p>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="btn-primary flex items-center"
            >
              <Save size={20} className="mr-2" />
              Sauvegarder
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Section Notifications */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bell className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                <p className="text-gray-600 text-sm">Gérez vos préférences de notifications</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Notifications système</p>
                  <p className="text-sm text-gray-600">Recevoir des alertes système</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Alertes par email</p>
                  <p className="text-sm text-gray-600">Recevoir des emails d'alerte</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailAlerts}
                    onChange={(e) => setSettings({...settings, emailAlerts: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Section Apparence */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Palette className="text-purple-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Apparence</h2>
                <p className="text-gray-600 text-sm">Personnalisez l'interface</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Mode sombre</p>
                  <p className="text-sm text-gray-600">Activer le thème sombre</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.darkMode}
                    onChange={(e) => setSettings({...settings, darkMode: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Section Langue et Région */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Globe className="text-green-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Langue et Région</h2>
                <p className="text-gray-600 text-sm">Configuration régionale</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Langue
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({...settings, language: e.target.value})}
                  className="input-field"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuseau horaire
                </label>
                <select
                  value={settings.timezone}
                  onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                  className="input-field"
                >
                  <option value="Europe/Paris">Europe/Paris</option>
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">America/New_York</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section Sécurité */}
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Lock className="text-red-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Sécurité</h2>
                <p className="text-gray-600 text-sm">Paramètres de sécurité</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900 mb-2">Changer le mot de passe</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="password"
                    placeholder="Mot de passe actuel"
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    className="input-field"
                  />
                </div>
                <button className="mt-4 btn-secondary">
                  Mettre à jour le mot de passe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}