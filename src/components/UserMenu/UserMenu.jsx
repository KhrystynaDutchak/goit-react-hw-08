import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Box, Button, Typography } from '@mui/material';
import clsx from 'clsx';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box className={clsx(styles.userMenu)}>
      <Typography variant="body1" className={clsx(styles.welcome)}>
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(logout())}
        className={clsx(styles.logoutButton)}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;