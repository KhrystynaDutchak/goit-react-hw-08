import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import clsx from 'clsx';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <Box className={clsx(styles.loadingSpinner)}>
      <CircularProgress className={styles.spinner} />
    </Box>
  );
};

export default LoadingSpinner;