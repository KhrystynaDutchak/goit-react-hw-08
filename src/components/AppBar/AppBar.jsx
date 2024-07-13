import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AppBar as MUIAppBar, Toolbar, Box } from '@mui/material';
import clsx from 'clsx';
import styles from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MUIAppBar position="static" className={clsx(styles.appBarN)}>
      <Toolbar className={clsx(styles.toolbar)}>
        <Navigation />
        <Box className={clsx(styles.authContainer)}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;