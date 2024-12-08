import React from 'react';
import { printingMethods } from '../../data/printingMethods';

export function PrintingMethods() {
  return (
    <div id="printing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Printing Methods
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the perfect printing method for your needs
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {printingMethods.map((method) => (
            <div key={method.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <method.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">{method.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-gray-500">{method.description}</p>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Ideal for:</h4>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  {method.idealFor.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center">
                      <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}