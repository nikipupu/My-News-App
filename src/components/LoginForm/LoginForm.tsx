import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginThunk } from '../../redux/thunks';
import { AppDispatch } from '../../redux/store';
import styles from './login.style';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const resultAction = await dispatch(loginThunk({ email, password }));

      if (loginThunk.fulfilled.match(resultAction)) {
        navigate('/');
      } else {
        setError('Неправильный логин или пароль');
      }
    } catch (err) {
      setError('Произошла ошибка при входе.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Вход</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Войти</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
