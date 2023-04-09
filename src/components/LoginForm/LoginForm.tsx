// src/components/LoginForm/LoginForm.tsx

import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmit: (data: FormData) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        {...register('email', { required: 'Email is required' })}
        fullWidth
        label="Email"
        type="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        margin="normal"
      />
      <TextField
        {...register('password', { required: 'Password is required' })}
        fullWidth
        label="Password"
        type="password"
        error={!!errors.password}
        helperText={errors.password?.message}
        margin="normal"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
