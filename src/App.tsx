import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { DetailPage } from './pages/DetailPage';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';

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
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
