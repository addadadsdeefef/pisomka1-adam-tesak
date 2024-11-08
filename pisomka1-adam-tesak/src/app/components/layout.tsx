// src/app/components/Layout.tsx
import React from 'react';
import Link from 'next/link';

const Layout: React.FC = () => {
  return (
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
  );
};

export default Layout;
