import React from 'react';

import { Post } from '../../types';
import styles from './detail.style';
import PostsCard from '../PostsCard/PostsCard';

import { Box, Typography } from '@mui/material';

interface PostsDetailProps {
  post: Post | null;
}

const PostsDetail: React.FC<PostsDetailProps> = ({ post }) => {
  if (!post) return <Typography color="error">Пост не найден</Typography>;

  return (
    <Box sx={styles.detailContainer}>
      <Box sx={styles.cardDetail}>
        <PostsCard post={post} />
      </Box>
    </Box>
  );
};

export default PostsDetail;
