import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import { LogOut, Save, Undo } from 'lucide-react';
import { WebsiteContent } from '../types/content';

export function AdminDashboard() {
  const { auth, logout } = useAuth();
  const { content, setContent } = useContent();
  const [editedContent, setEditedContent] = useState<WebsiteContent>(content);
  const [activeTab, setActiveTab] = useState('general');

  const handleSave = () => {
    setContent(editedContent);
    alert('Changes saved successfully!');
  };

  const handleReset = () => {
    setEditedContent(content);
    alert('Changes reset to last saved state');
  };

  const updateHero = (field: keyof typeof editedContent.hero, value: string) => {
    setEditedContent({
      ...editedContent,
      hero: {
        ...editedContent.hero,
        [field]: value,
      },
    });
  };

  const updateTheme = (
    category: keyof typeof editedContent.theme,
    field: string,
    value: string
  ) => {
    setEditedContent({
      ...editedContent,
      theme: {
        ...editedContent.theme,
        [category]: {
          ...editedContent.theme[category],
          [field]: value,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Content Editor
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300"
              >
                <Undo className="h-4 w-4 mr-2" />
                Reset
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'general'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('theme')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'theme'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            Theme
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-md ${
              activeTab === 'products'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            Products
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Hero Section</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editedContent.hero.title}
                    onChange={(e) => updateHero('title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={editedContent.hero.subtitle}
                    onChange={(e) => updateHero('subtitle', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={editedContent.hero.description}
                    onChange={(e) => updateHero('description', e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Theme Colors</h2>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(editedContent.theme.colors).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {key}
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        type="color"
                        value={value}
                        onChange={(e) =>
                          updateTheme('colors', key, e.target.value)
                        }
                        className="h-8 w-8 rounded-md border border-gray-300"
                      />
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          updateTheme('colors', key, e.target.value)
                        }
                        className="ml-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-medium text-gray-900 mt-8">Fonts</h2>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(editedContent.theme.fonts).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {key}
                    </label>
                    <select
                      value={value}
                      onChange={(e) =>
                        updateTheme('fonts', key, e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    >
                      <option value="Inter">Inter</option>
                      <option value="Roboto">Roboto</option>
                      <option value="Open Sans">Open Sans</option>
                      <option value="Montserrat">Montserrat</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Products</h2>
              {/* Product editor will be implemented here */}
              <p className="text-gray-500">
                Product editing functionality coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}