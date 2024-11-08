// src/app/page.tsx
"use client";  // Táto riadok označuje, že tento komponent je klientsky

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

const HomePage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <div>
      {/* AppBar - Horné menu */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Písomka
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/" passHref>
                <Button color="inherit">Domov</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/login" passHref>
                <Button color="inherit">Prihlásenie</Button>
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hlavný obsah */}
      <main style={{ padding: '20px' }}>
        <h1>Vitajte na domovskej stránke</h1>
        <p>Otvorte v memnu stránku prihlásnie pre prihlásnie.</p>
      </main>
    </div>
  );
};

export default HomePage;
