import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../redux/store';
import { fetchPostsThunk } from '../../redux/thunks';
import PostsList from '../../components/PostsList/PostsList';

import { Box } from '@mui/material';

const MainPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, isLoading } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  return (
    <Box>
      <PostsList posts={posts} isLoading={isLoading} />
    </Box>
  );
};

export default MainPage;
