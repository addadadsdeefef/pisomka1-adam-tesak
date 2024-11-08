// src/app/layout.tsx
import React from 'react';
import Layout from './components/layout';  // Upravené na malé 'l'

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="sk">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
