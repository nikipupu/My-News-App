import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewsList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.news.posts);
  const navigate = useNavigate();

  if (posts.length === 0) {
    return <Typography sx={{ color: 'white' }} variant="h6">Загрузка новостей...</Typography>;
  }

  const baseURL = 'https://api.news.academy.dunice.net';

  const handleCardClick = (id: number) => {
    navigate(`/news/${id}`);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {posts.map((post) => {
        const imageUrl = post.coverPath.startsWith('http')
          ? post.coverPath
          : `${baseURL}${post.coverPath}`;

        return (
          <Card
            key={post.id}
            sx={{
              width: '70%',
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
