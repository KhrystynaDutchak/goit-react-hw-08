import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import clsx from 'clsx';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <Box className={clsx(styles.authNav)}>
      <NavLink to="/register" className={({ isActive }) => (isActive ? clsx(styles.link, styles.active) : clsx(styles.link))}>
        Register
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? clsx(styles.link, styles.active) : clsx(styles.link))}>
        Login
      </NavLink>
    </Box>
  );
};

export default AuthNav;