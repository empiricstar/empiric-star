import React from 'react';
import { Truck, Users, Palette, Clock, Award, Recycle } from 'lucide-react';

const features = [
  {
    name: 'Premium Quality',
    description: '100% cotton and microfiber materials ensuring comfort and durability for all our products.',
    icon: Award,
  },
  {
    name: 'Custom Printing',
    description: 'Professional printing services including screen printing, DTF, heat transfer, and embroidery.',
    icon: Palette,
  },
  {
    name: 'Wide Range',
    description: 'From basic tees to hoodies and baby rompers, we cater to all age groups and needs.',
    icon: Users,
  },
  {
    name: 'Fast Turnaround',
    description: 'Quick production times with efficient delivery across Klang Valley.',
    icon: Clock,
  },
  {
    name: 'Wholesale Options',
    description: 'Competitive bulk pricing for businesses with dedicated support.',
    icon: Truck,
  },
  {
    name: 'Eco-Conscious',
    description: 'Commitment to sustainable practices and eco-friendly printing options.',
    icon: Recycle,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Empiric Star
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your trusted partner for quality apparel and professional printing services
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative hover-lift">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}