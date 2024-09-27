import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';
import { fetchPostsThunk } from '../../redux/thunks';
import api from '../../api';

import { 
  Card, 
  CardContent, 
  Typography, 
  CardMedia, 
  Box } from '@mui/material';


const NewsList: React.FC = () => {
  const { posts, loading, error } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  if (loading) {
    return <Typography sx={{ color: 'white' }} variant="h6">Загрузка новостей...</Typography>;
  }

  if (error) {
    return <Typography sx={{ color: 'red' }} variant="h6">Ошибка: {error}</Typography>;
  }

  const handleCardClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {posts.map((post) => {
        const imageUrl = post.coverPath.startsWith('http')
          ? post.coverPath
          : `${api.defaults.baseURL}${post.coverPath}`;

        return (
          <Card
            key={post.id}
            sx={{
              width: '45%',
              marginBottom: 3,
              backgroundColor: '#000',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              borderRadius: '10px'
            }}
            onClick={() => handleCardClick(post.id)}
          >
            <CardMedia
              component="img"
              height="300"
              image={imageUrl}
              alt={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="white">
                {post.text}
              </Typography>
              <Typography variant="subtitle2" color="white">
                Автор: {post.author.firstName} {post.author.lastName}
              </Typography>
              <Typography variant="subtitle2" color="white">
                Рейтинг: {post.rating}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default NewsList;
