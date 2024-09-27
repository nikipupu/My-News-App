  import React from 'react';

  import { PostsList } from '../../components/PostsList';

  import { Box } from '@mui/material';

  const MainPage: React.FC = () => {
    return (
      <Box>
        <PostsList />
      </Box>
    );
  };

  export default MainPage;
