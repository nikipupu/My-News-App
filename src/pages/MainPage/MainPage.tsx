import React from 'react';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';

import { Box } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <NewsList />
    </Box>
  );
};

export default MainPage;
