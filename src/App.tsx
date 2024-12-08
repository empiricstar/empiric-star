import React from 'react';
import { Layout } from './components/layout';
import { Hero } from './components/sections/Hero';
import { ProductGrid } from './components/sections/ProductGrid';
import { PrintingMethods } from './components/sections/PrintingMethods';
import { TargetSegments } from './components/sections/TargetSegments';
import { Features } from './components/sections/Features';
import { Contact } from './components/sections/Contact';
import { ChatBot } from './components/ChatBot';
import { AdminRoute } from './components/admin';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';

function App() {
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return (
      <AuthProvider>
        <ContentProvider>
          <AdminRoute />
        </ContentProvider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <ContentProvider>
        <Layout>
          <Hero />
          <TargetSegments />
          <ProductGrid />
          <PrintingMethods />
          <Features />
          <Contact />
          <ChatBot />
        </Layout>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;