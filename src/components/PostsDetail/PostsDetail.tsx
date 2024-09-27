import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostByIdThunk } from '../../redux/thunks';
import { AppDispatch, RootState } from '../../redux/store';
import { PostsCard } from '../PostsCard';
import styles from './detail.style'

import { Box, CircularProgress, Typography } from '@mui/material';

const PostsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { post, isLoading, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostByIdThunk(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  if (!post) return null;

  return (
    <Box sx={styles.detailContainer}>
      <Box sx={styles.cardDetail}>
        <PostsCard post={post} />
      </Box>
    </Box>
  );
};

export default PostsDetail;
