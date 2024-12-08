import React from 'react';
import { segments } from '../../data/segments';

export function TargetSegments() {
  return (
    <div id="segments" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Solutions for Every Need
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Tailored printing solutions for different industries and requirements
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {segments.map((segment) => (
            <div key={segment.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{segment.title}</h3>
                <p className="mt-2 text-gray-500">{segment.description}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                  {segment.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-gray-600 flex items-center">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                      {benefit}
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