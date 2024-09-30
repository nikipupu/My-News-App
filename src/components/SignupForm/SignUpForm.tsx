import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signUpThunk } from '../../redux/thunks';
import { AppDispatch } from '../../redux/store';
import styles from './signup.style';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const resultAction = await dispatch(signUpThunk({ email, password }));

      if (signUpThunk.fulfilled.match(resultAction)) {
        navigate('/');
      } else {
        setError('Такой пользователь уже существует');
      }
    } catch (err) {
      setError('Произошла ошибка при регистрации.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Регистрация</h2>
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
        <button type="submit" style={styles.button}>Регистрация</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
