import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Container, Typography, Box } from '@mui/material';
import clsx from 'clsx';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <Container className={clsx(styles.container)}>
      <Typography variant="h4" component="h1" className={clsx(styles.title)}>
        Login
      </Typography>
      {isRefreshing ? <LoadingSpinner /> : <LoginForm />}
    </Container>
  );
};

export default LoginPage;