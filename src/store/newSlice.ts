import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarPath: string;
}

interface Tag {
  id: number;
  value: string;
}

interface Post {
  id: number;
  title: string;
  text: string;
  coverPath: string;
  author: Author;
  tags: Tag[];
  rating: number;
  commentsCount: number;
  createdAt: string;
}

interface NewsState {
  posts: Post[];
  total: number;
}

const initialState: NewsState = {
  posts: [],
  total: 0,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
