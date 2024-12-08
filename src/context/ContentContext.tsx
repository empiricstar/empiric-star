import React, { createContext, useContext, useState } from 'react';
import { WebsiteContent, ContentState } from '../types/content';
import { products } from '../data/products';
import { printingMethods } from '../data/printingMethods';
import { segments } from '../data/segments';

const initialContent: WebsiteContent = {
  hero: {
    title: 'Wear Your Story,',
    subtitle: 'One Print at a Time',
    description: 'Welcome to Empiric Star Fashion Attires - your premier provider of high-quality, comfortable, and stylish basic and custom print t-shirts. From 100% cotton to microfiber, round neck to raglan, we deliver excellence in every stitch.',
  },
  products,
  printingMethods,
  segments,
  theme: {
    colors: {
      primary: '#FF8C00',
      secondary: '#4B0082',
      accent: '#FFD700',
      background: '#FFFFFF',
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
  },
};

const ContentContext = createContext<ContentState | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<WebsiteContent>(initialContent);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}