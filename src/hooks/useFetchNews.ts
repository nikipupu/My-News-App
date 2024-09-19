import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNews } from '../store/newSlice';

const useFetchNews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.news.academy.dunice.net/posts');
        
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const data = await response.json();

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
};

export default useFetchNews;
