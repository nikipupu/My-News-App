import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: '#212121',  marginBottom: '40px'}}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" 
            sx={{ color: '#0ef', 
            fontSize: '40px', 
            fontWeight: '600', 
            cursor: 'pointer',
                '&:hover': {
                  color: '#00b3bf',
                  transition: '.3s'
                }, }}>
            News App
          </Typography>
        </Link>  
        </Toolbar>
    </AppBar>
  );
};

export default Header;
