import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { RootState } from '../../store';
import { setNews } from '../../redux/slices/newsSlice';

import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import api from '../../api';

const NewsList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.news.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.news.academy.dunice.net/posts');
        const data = response.data;

        if (data && Array.isArray(data.posts)) {
          dispatch(setNews(data.posts));
        } else {
          console.error('Некорректная структура данных:', data);
          dispatch(setNews([]));
        }
      } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
        dispatch(setNews([]));
      }
    };

    fetchNews();
  }, [dispatch]);

  if (posts.length === 0) {
    return <Typography sx={{ color: 'white' }} variant="h6">Загрузка новостей...</Typography>;
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
