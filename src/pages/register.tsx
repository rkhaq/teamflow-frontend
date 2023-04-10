import React from 'react';
import { Container } from '@mui/material';
import RegisterForm from 'components/RegisterForm';
import { FormData } from 'components/RegisterForm/RegisterForm';

const RegisterPage: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    // Handle form submission and create user
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container maxWidth="xs">
        <RegisterForm onSubmit={handleFormSubmit} />
      </Container>
    </div>
  );
};

export default RegisterPage;
