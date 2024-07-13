import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <Box component="nav" className={clsx(styles.nav)}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? clsx(styles.link, styles.active) : clsx(styles.link))}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? clsx(styles.link, styles.active) : clsx(styles.link))}
      >
        Contacts
      </NavLink>
    </Box>
  );
};

export default Navigation;