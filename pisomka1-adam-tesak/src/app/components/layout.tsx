// src/app/components/Layout.tsx
import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Tieto sú deti (obsah stránky) */}
        {children}
      </main>

      <footer style={{ marginTop: '20px', padding: '10px', textAlign: 'center' }}>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
