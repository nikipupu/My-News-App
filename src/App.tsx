import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/news/:id" element={<DetailPage />} />
            </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
