// src/app/layout.tsx
import React from 'react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="sk">
      <body>
        {children} {/* Nebude už obalovať Layout. Len predáme deti (content stránky). */}
      </body>
    </html>
  );
};

export default RootLayout;

