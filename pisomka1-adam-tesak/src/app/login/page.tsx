// src/app/login/page.tsx
"use client"; // Tento riadok pridávame na začiatok súboru

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

const LoginPage: React.FC = () => {
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

  const handleLogin = () => {
    // Prihlásenie cez Google
    signIn('google');
  };

  return (
    <div>
      {/* AppBar - Horné menu */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Moja Webová Stránka
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
        <h1>Prihlásenie</h1>
        <p>Pre prihlásenie použite vaše prihlasovacie údaje.</p>
        <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Prihlásiť sa cez Google
        </button>
      </main>
    </div>
  );
};

export default LoginPage;
