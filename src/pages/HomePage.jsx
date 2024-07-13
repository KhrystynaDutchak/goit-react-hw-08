import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h1>Welcome to the Phonebook App!</h1>
      <p>Please log in or register to manage your contacts.</p>
    </div>
  );
};

export default HomePage;