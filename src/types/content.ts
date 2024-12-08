import { Product, PrintingMethod, TargetSegment, Feature } from './index';

export interface WebsiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  products: Product[];
  printingMethods: PrintingMethod[];
  segments: TargetSegment[];
  features: Feature[];
  theme: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
  };
}

export interface ContentState {
  content: WebsiteContent;
  setContent: (content: WebsiteContent) => void;
}