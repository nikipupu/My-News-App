import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import styles from './header.style';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.logIn.user);
  console.log('Объект user:', user);

  return (
    <AppBar position="static" sx={styles.appbar}>
      <Toolbar sx={styles.toolbar}>
        <Link to="/" style={styles.link}>
          <Typography variant="h6" component="div" sx={styles.logo}>
            News App
          </Typography>
        </Link>

        {user ? (
          <Box sx={styles.userInfo}>
            <Typography variant="body1" sx={styles.userName}>
              {user.firstName || 'Имя не указано'}
            </Typography>
            <div style={styles.avatar} />
          </Box>
        ) : (
          <Box sx={styles.authButtons}>
            <Button component={Link} to="/signup" color="inherit">Регистрация</Button>
            <Button component={Link} to="/login" color="inherit">Вход</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
