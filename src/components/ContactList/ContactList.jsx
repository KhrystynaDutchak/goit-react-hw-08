import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
import { List, ListItem } from '@mui/material';
import clsx from 'clsx';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <List className={clsx(styles.contactList)}>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;