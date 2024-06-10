
import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Box component="footer" mt={5} p={3} bgcolor="primary.main" color="white">
      <Typography variant="body1" align="center">
        &copy; 2024 Köşe Bucak Kültür
      </Typography>
    </Box>
  );
};

export default Footer;
