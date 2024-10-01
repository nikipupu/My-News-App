import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchPostByIdThunk } from '../../redux/thunks';
import PostsDetail from '../../components/PostsDetail/PostsDetail';

import { Box, CircularProgress, Typography } from '@mui/material';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { post, isLoading, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostByIdThunk(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      <PostsDetail post={post} />
    </Box>
  );
};

export default DetailPage;
