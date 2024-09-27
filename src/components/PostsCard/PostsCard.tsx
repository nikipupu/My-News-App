import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Post } from '../../types';
import styles from './card.style';

import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box 
} from '@mui/material';

interface PostsCardProps {
  post: Post;
}

const PostsCard: React.FC<PostsCardProps> = ({ post }) => {
  const location = useLocation();
  const imageUrl = `${import.meta.env.VITE_API_URL}${post.coverPath}`;

  const isDetailPage = location.pathname.includes(`/news/${post.id}`);

  const cardContent = (
    <>
      <CardMedia
        component="img"
        alt={post.title}
        height={300}
        image={imageUrl}
      />
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="white">
          {post.text.substring(0, 100)}...
        </Typography>
        <Typography variant="subtitle2" color="white">
          Автор: {post.author.firstName} {post.author.lastName}
        </Typography>
        <Typography variant="subtitle2" color="white">
          Рейтинг: {post.rating}
        </Typography>
      </CardContent>
    </>
  );

  return (
    <Box display="flex" justifyContent="center">
      <Card sx={isDetailPage ? styles.cardDetail : styles.card}>
        {isDetailPage ? (
          cardContent
        ) : (
          <Link to={`/news/${post.id}`} style={styles.link}>
            {cardContent}
          </Link>
        )}
      </Card>
    </Box>
  );
};

export default PostsCard;
