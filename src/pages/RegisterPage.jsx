import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Container, Typography, Box } from '@mui/material';
import clsx from 'clsx';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <Container className={clsx(styles.container)}>
      <Typography variant="h4" component="h1" className={clsx(styles.title)}>
        Register
      </Typography>
      {isRefreshing ? <LoadingSpinner /> : <RegistrationForm />}
    </Container>
  );
};

export default RegisterPage;