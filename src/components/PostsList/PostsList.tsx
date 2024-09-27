import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../redux/store';
import { fetchPostsThunk } from '../../redux/thunks';
import { Post } from '../../types';
import PostsCard from '../PostsCard/PostsCard';
import styles from './list.style';

import { Box, CircularProgress } from '@mui/material';

const PostsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, isLoading } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  return (
    <Box sx={styles.listContainer}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        posts.map((post: Post) => (
          <Box key={post.id} sx={styles.card}>
            <PostsCard post={post} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default PostsList;
