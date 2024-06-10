
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="Logo" style={{ marginRight: '10px' }} />
        <Typography variant="h6">
          Köşe Bucak Kültür
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
