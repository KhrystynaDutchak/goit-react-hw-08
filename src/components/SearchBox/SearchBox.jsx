import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box } from '@mui/material';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import clsx from 'clsx';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box className={clsx(styles.inputWrap)}>
      <TextField
        label="Find Contact by name"
        type="text"
        value={filter}
        onChange={handleSearch}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default SearchBox;