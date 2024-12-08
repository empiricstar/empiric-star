import { PrintingMethod } from '../types';
import { Printer, Flame, Palette, Shirt } from 'lucide-react';

export const printingMethods: PrintingMethod[] = [
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    description: 'Cost-effective solution for bulk orders with vibrant, long-lasting results.',
    idealFor: ['Corporate uniforms', 'Event merchandise', 'Sports teams', 'Bulk orders'],
    icon: Printer
  },
  {
    id: 'dtf',
    name: 'Direct-to-Film (DTF)',
    description: 'Perfect for intricate, multi-colored designs with superior wash durability.',
    idealFor: ['Custom designs', 'Small batches', 'Dark garments', 'Startups'],
    icon: Palette
  },
  {
    id: 'heat-transfer',
    name: 'Heat Transfer & Sublimation',
    description: 'Quick turnaround for vibrant designs on both light and dark garments.',
    idealFor: ['Rush orders', 'Small quantities', 'Full-color designs', 'Polyester garments'],
    icon: Flame
  },
  {
    id: 'embroidery',
    name: 'Embroidery',
    description: 'Premium finish for corporate and high-end apparel with lasting durability.',
    idealFor: ['Corporate wear', 'Polo shirts', 'Caps', 'Premium products'],
    icon: Shirt
  }
];