import React from 'react';

import { Post } from '../../types';
import PostsCard from '../PostsCard/PostsCard';
import styles from './list.style';

import { Box, CircularProgress } from '@mui/material';

interface PostsListProps {
  posts: Post[];
  isLoading: boolean;
}

const PostsList: React.FC<PostsListProps> = ({ posts, isLoading }) => {
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
