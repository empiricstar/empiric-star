import React from 'react';
import { MapPin, MessageCircle, Clock, Mail } from 'lucide-react';

export function Contact() {
  const waNumber = "60178765683";
  const email = "empiricstar@gmail.com";
  const wazeLocation = "https://waze.com/ul?ll=3.2088,101.6357&navigate=yes";

  return (
    <div id="contact" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch for wholesale inquiries or custom printing projects
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center hover-lift">
            <MessageCircle className="h-8 w-8 text-green-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">WhatsApp</h3>
            <a 
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-base text-gray-500 hover:text-green-600 transition-colors"
            >
              +60 17-876 5683
            </a>
          </div>
          <div className="flex flex-col items-center hover-lift">
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <a 
              href={`mailto:${email}`}
              className="mt-2 text-base text-gray-500 hover:text-primary transition-colors"
            >
              {email}
            </a>
          </div>
          <div className="flex flex-col items-center hover-lift">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
            <a
              href={wazeLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-base text-gray-500 hover:text-indigo-600 transition-colors text-center group"
            >
              <span className="block">G20 Ground Floor,</span>
              <span className="block">Kompleks Desa Kepong</span>
              <span className="block">52100 Kuala Lumpur, Malaysia</span>
              <span className="block mt-1 text-sm text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Open in Waze
              </span>
            </a>
          </div>
          <div className="flex flex-col items-center hover-lift">
            <Clock className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Business Hours</h3>
            <p className="mt-2 text-base text-gray-500">Mon - Sat: 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}