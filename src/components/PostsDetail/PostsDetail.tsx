import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import { Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import api from '../../api';


const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const posts = useSelector((state: RootState) => state.news.posts);
  const post = posts.find(post => post.id === Number(id));

  if (!post) {
    return <Typography variant="h6">Загрузка новости...</Typography>;
  }

  const imageUrl = post.coverPath.startsWith('http')
    ? post.coverPath
    : `${api.defaults.baseURL}${post.coverPath}`;

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
      <Card sx={{ width: '70%', marginBottom: 3, backgroundColor: 'black', color: 'white', borderRadius: '15px'}}>
        <CardMedia
          component="img"
          height="530"
          image={imageUrl}
          alt={post.title}
          sx={{objectFit: 'contain'}}
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
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary"
                sx={{ 
                  width: '240px', 
                  background: '#212121',
                  transition: '.2s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      background: '#3b3b3b'
                    },
                }}
              >
                Назад ко всем новостям
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsDetail;
