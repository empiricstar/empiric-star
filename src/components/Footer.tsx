import React from 'react';
import { AdminLink } from './AdminLink';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-gray-400">
            © {currentYear} Empiric Star Fashion Attires. All rights reserved.
          </p>
          <p className="text-center text-gray-200 text-sm">
            Managed by: OPULENCE STAR SDN BHD 867082-K
          </p>
          <AdminLink />
        </div>
      </div>
    </footer>
  );
}