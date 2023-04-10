// pages/login-page.tsx

import React from 'react';
import { Button, Container } from '@mui/material';
import LoginForm from '../components/LoginForm';
import GoogleLoginButton from 'components/GoogleLoginButton/GoogleLoginButton';
import { useRouter } from 'next/router';
import { FormData } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'store/slices/authSlice';
import { AppDispatch } from 'store/index';

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    try {
      // Save the token to the states
      await dispatch(login(formData)).unwrap();
      // Redirect the user to the Home page
      router.push('/home');
    } catch (error) {
      console.error('Error:', error);
      // Display an error message to the user, if necessary
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container maxWidth="xs">
        <LoginForm onSubmit={handleLogin} />
        <div className="mt-4">
          <GoogleLoginButton />
        </div>
        <div className="flex justify-center mt-20">
          <Button
            onClick={() => {}}
            className="border-gray-300 py-1 px-4 rounded text-m hover:text-blue-700"
            fullWidth
            color="primary"
            variant="outlined"
          >
            Register Here
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
