import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg">
      {/* Banner Image Container */}
      <div className="w-full h-[120px] sm:h-[200px] relative overflow-hidden">
        <img 
          src="/images/ES new signboard for viewing.gif" 
          alt="Empiric Star Fashion Attires"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Mobile Menu */}
        <div 
          className={`${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden fixed top-0 right-0 bottom-0 w-64 bg-black z-40 transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <div className="flex flex-col space-y-4 pt-16 px-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-primary-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#products" 
              className="text-gray-300 hover:text-primary-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="https://shopee.com.my/Custom-design-print-personalize-garment-i.148845454.3043813708"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Custom Print
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-primary-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="https://shopee.com.my/empiricstar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Now
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-primary-light hover-lift">
              Home
            </a>
            <a href="#products" className="text-gray-300 hover:text-primary-light hover-lift">
              Products
            </a>
            <a 
              href="https://shopee.com.my/Custom-design-print-personalize-garment-i.148845454.3043813708"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-primary-light hover-lift"
            >
              Custom Print
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary-light hover-lift">
              Contact
            </a>
          </div>
          <a 
            href="https://shopee.com.my/empiricstar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Order Now
          </a>
        </div>
      </nav>
    </header>
  );
}