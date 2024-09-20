import React from 'react';

import { Header } from '../../components/Header';
import { PostsList } from '../../components/PostsList';

import { Box } from '@mui/material';

const MainPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <PostsList />
    </Box>
  );
};

export default MainPage;
