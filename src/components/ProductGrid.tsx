import React, { useState } from 'react';
import { products } from '../data/products';
import { Pagination } from './Pagination';

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = [
    { id: null, name: 'All' },
    { id: 'round-neck', name: 'Round Neck' },
    { id: 'raglan', name: '3/4 Raglan' },
    { id: 'long-sleeve', name: 'Long Sleeve' },
    { id: 'polo', name: 'Polo' },
    { id: 'microfiber', name: 'Microfiber' },
    { id: 'children', name: "Children's" },
    { id: 'babies', name: "Babies" },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div id="products" className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white neon-text sm:text-4xl text-center mb-8">
          Our Product Range
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id ?? 'all'}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative hover-lift">
              <div className="w-full aspect-w-4 aspect-h-3 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-primary-light">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{product.description}</p>
                <span className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-primary-light rounded-full">
                  {categories.find(cat => cat.id === product.category)?.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}