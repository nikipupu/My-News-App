import React from 'react';

import { Header } from '../../components/Header';
import { PostsDetail } from '../../components/PostsDetail';

import { Box } from '@mui/material';

const DetailPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <PostsDetail />
    </Box>
  );
};

export default DetailPage;
