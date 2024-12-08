import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl tracking-tight font-extrabold text-white neon-text sm:text-5xl md:text-6xl">
                <span className="block">Wear Your Story,</span>
                <span className="block text-accent">One Print at a Time</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Welcome to Empiric Star Fashion Attires - your premier provider of high-quality, comfortable, and stylish basic and custom print t-shirts. From 100% cotton to microfiber, round neck to raglan, we deliver excellence in every stitch.
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center gap-4">
                <a 
                  href="https://shopee.com.my/empiricstar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order Now
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Products
                </a>
                <a 
                  href="https://wa.me/60178765683" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-dark bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}