import React, { useState } from 'react';
import { Link, TextField, Button, Grid } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import { MiniLinkText, FormHeaderText, ScreenGrid } from '../components/grid';
import FormCol from '../components/form/FormCol';
import {
  emailRegex,
  InputErrorMessage,
  nameRegex,
  passwordRegex,
} from '../util/inputvalidation';
import { register } from './api';
import AlertDialog from '../components/AlertDialog';

function RegisterPage() {
  const navigate = useNavigate();

  // Default values for state
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const defaultShowErrors = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    alert: false,
  };
  const defaultErrorMessages = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    alert: '',
  };
  type ValueType = keyof typeof values;

  // State values and hooks
  const [values, setValueState] = useState(defaultValues);
  const [showError, setShowErrorState] = useState(defaultShowErrors);
  const [errorMessage, setErrorMessageState] = useState(defaultErrorMessages);
  const [alertTitle, setAlertTitle] = useState('Error');
  const [isRegistered, setRegistered] = useState(false);

  // Helper functions for changing only one field in a state object
  const setValue = (field: string, value: string) => {
    setValueState((prevState) => ({
      ...prevState,
      ...{ [field]: value },
    }));
  };
  const setShowError = (field: string, show: boolean) => {
    setShowErrorState((prevState) => ({
      ...prevState,
      ...{ [field]: show },
    }));
  };
  const setErrorMessage = (field: string, msg: string) => {
    setErrorMessageState((prevState) => ({
      ...prevState,
      ...{ [field]: msg },
    }));
  };

  const handleAlertClose = () => {
    if (isRegistered) {
      navigate('/login');
    }
    setShowError('alert', false);
  };

  const clearErrorMessages = () => {
    setShowErrorState(defaultShowErrors);
    setErrorMessageState(defaultErrorMessages);
  };

  const validateInputs = () => {
    clearErrorMessages();
    let isValid = true;

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const valueTypeString in values) {
      const valueType = valueTypeString as ValueType;
      if (!values[valueType]) {
        setErrorMessage(valueTypeString, InputErrorMessage.MISSING_INPUT);
        setShowError(valueTypeString, true);
        isValid = false;
      }
    }

    if (!values.firstName.match(nameRegex)) {
      setErrorMessage('firstName', InputErrorMessage.INVALID_NAME);
      setShowError('firstName', true);
      isValid = false;
    }
    if (!values.lastName.match(nameRegex)) {
      setErrorMessage('lastName', InputErrorMessage.INVALID_NAME);
      setShowError('lastName', true);
      isValid = false;
    }
    if (!values.email.match(emailRegex)) {
      setErrorMessage('email', InputErrorMessage.INVALID_EMAIL);
      setShowError('email', true);
      isValid = false;
    }
    if (!values.password.match(passwordRegex)) {
      setErrorMessage('password', InputErrorMessage.INVALID_PASSWORD);
      setShowError('password', true);
      isValid = false;
    }
    if (!(values.confirmPassword === values.password)) {
      setErrorMessage('confirmPassword', InputErrorMessage.PASSWORD_MISMATCH);
      setShowError('confirmPassword', true);
      isValid = false;
    }

    return isValid;
  };

  async function handleSubmit() {
    if (validateInputs()) {
      register(values.firstName, values.lastName, values.email, values.password)
        .then(() => {
          setShowError('alert', true);
          setAlertTitle('');
          setRegistered(true);
          setErrorMessage('alert', 'Check email to verify account');
        })
        .catch((e) => {
          setShowError('alert', true);
          setErrorMessage('alert', e.message);
        });
    }
  }

  return (
    <ScreenGrid>
      <FormCol>
        <Grid item>
          <TextField
            error={showError.firstName}
            helperText={errorMessage.firstName}
            size="small"
            type="text"
            required
            label="First Name"
            value={values.firstName}
            onChange={(e) => setValue('firstName', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            error={showError.lastName}
            helperText={errorMessage.lastName}
            size="small"
            type="text"
            required
            label="Last Name"
            value={values.lastName}
            onChange={(e) => setValue('lastName', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            error={showError.email}
            helperText={errorMessage.email}
            size="small"
            type="text"
            required
            label="Email"
            value={values.email}
            onChange={(e) => setValue('email', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            error={showError.password}
            helperText={errorMessage.password}
            size="small"
            type="password"
            required
            label="Password"
            value={values.password}
            onChange={(e) => setValue('password', e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            error={showError.confirmPassword}
            helperText={errorMessage.confirmPassword}
            size="small"
            type="password"
            required
            label=" Confirm Password"
            value={values.confirmPassword}
            onChange={(e) => setValue('confirmPassword', e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </Grid>
        <Grid item>
          <MiniLinkText>
            Back to{' '}
            <Link component={RouterLink} to="/login">
              Login
            </Link>
          </MiniLinkText>
        </Grid>
      </FormCol>
      {/* The alert that pops up */}
      <Grid item>
        <AlertDialog
          showAlert={showError.alert}
          title={alertTitle}
          message={errorMessage.alert}
          onClose={handleAlertClose}
        />
      </Grid>
    </ScreenGrid>
  );
}

export default RegisterPage;
