import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.style'

import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={ styles.appbar }>
      <Toolbar>
        <Link to="/" style={ styles.link }>
          <Typography variant="h6" component="div" 
            sx={ styles.logo }>
            News App
          </Typography>
        </Link>  
        </Toolbar>
    </AppBar>
  );
};

export default Header;
