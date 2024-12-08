import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useContent } from '../../context/ContentContext';
import { LogOut, Save, Undo } from 'lucide-react';
import { WebsiteContent } from '../../types/content';
import { Button } from '../ui/Button';

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
              <Button
                onClick={handleSave}
                variant="primary"
                icon={Save}
              >
                Save Changes
              </Button>
              <Button
                onClick={handleReset}
                variant="secondary"
                icon={Undo}
              >
                Reset
              </Button>
              <Button
                onClick={logout}
                variant="primary"
                icon={LogOut}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-6">
          <Button
            onClick={() => setActiveTab('general')}
            variant={activeTab === 'general' ? 'primary' : 'secondary'}
          >
            General
          </Button>
          <Button
            onClick={() => setActiveTab('theme')}
            variant={activeTab === 'theme' ? 'primary' : 'secondary'}
          >
            Theme
          </Button>
          <Button
            onClick={() => setActiveTab('products')}
            variant={activeTab === 'products' ? 'primary' : 'secondary'}
          >
            Products
          </Button>
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