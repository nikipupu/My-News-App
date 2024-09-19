import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container>
            <Routes>
              <Route path="/" element={<NewsList />} />
              <Route path="/news/:id" element={<NewsDetail />} />
            </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
