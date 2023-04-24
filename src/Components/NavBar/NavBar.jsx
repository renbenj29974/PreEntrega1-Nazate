import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CartWidget from '../CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Box } from '@mui/material';
//import Button from '@mui/material/Button';
//import MenuIcon from '@mui/icons-material/Menu';
//import { Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';


function NavBar() {

  return (
    <AppBar style={{ background: '#E6E2E1' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src="defhelp.png" alt=""  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <ItemListContainer />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>    
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;