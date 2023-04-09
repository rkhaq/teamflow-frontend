// pages/login-page.tsx

import React from 'react';
import { Container } from '@mui/material';
import LoginForm from '../components/LoginForm';
import GoogleLoginButton from 'components/GoogleLoginButton/GoogleLoginButton';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const API_END_POINT = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(`${API_END_POINT}/api/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      // Save the authentication token or user information to a state management solution or localStorage
      // For example: localStorage.setItem('token', data.token);

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
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {}}
            className=" hover:text-blue-700 focus:outline-none"
          >
            Register Here
          </button>
        </div>
        <div className="mt-4">
          <GoogleLoginButton />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
