import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { TextField, Button, Box } from '@mui/material';
import clsx from 'clsx';
import styles from './RegistrationForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={clsx(styles.form)}>
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
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.email && !!errors.email}
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={touched.password && !!errors.password}
              helperText={<ErrorMessage name="password" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={clsx(styles.submitButton)}
            >
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;