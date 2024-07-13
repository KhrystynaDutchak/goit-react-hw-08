import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { TextField, Button, Box } from '@mui/material';
import clsx from 'clsx';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Number must contain only digits')
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must not exceed 50 characters')
    .required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box className={clsx(styles.formBox)}>
            <Field
              as={TextField}
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.name && !!errors.name}
              helperText={<ErrorMessage name="name" />}
            />
            <Field
              as={TextField}
              label="Number"
              name="number"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.number && !!errors.number}
              helperText={<ErrorMessage name="number" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={clsx(styles.submitButton)}
            >
              Add Contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;