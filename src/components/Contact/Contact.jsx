import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import clsx from 'clsx';
import styles from './Contact.module.css';

const Contact = ({ contact: { name, id, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Box className={clsx(styles.contactItem)}>
      <Box className={clsx(styles.contactInfo)}>
        <Typography variant="body1" className={clsx(styles.infoItem)}>
          <FaUser /> {name}
        </Typography>
        <Typography variant="body1" className={clsx(styles.infoItem)}>
          <FaPhoneAlt /> {number}
        </Typography>
      </Box>
      <IconButton onClick={handleDelete} color="secondary">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Contact;