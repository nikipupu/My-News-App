import React from 'react';

import Header from '../../components/Header';
import NewsDetail from '../../components/NewsDetail';

import { Box } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <NewsDetail />
    </Box>
  );
};

export default MainPage;
