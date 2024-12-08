export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'round-neck' | 'long-sleeve' | 'raglan' | 'polo' | 'microfiber' | 'children' | 'babies';
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface PrintingMethod {
  id: string;
  name: string;
  description: string;
  idealFor: string[];
  icon: React.ComponentType;
}

export interface TargetSegment {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}