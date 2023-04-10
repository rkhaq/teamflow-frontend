import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegisterFormProps = {
  onSubmit: (data: FormData) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
      <Typography variant="h4" align="center" gutterBottom>
        Register
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
        {...register('firstname', { required: 'First Name is required' })}
        fullWidth
        label="First Name"
        type="text"
        error={!!errors.firstname}
        helperText={errors.firstname?.message}
        margin="normal"
      />
      <TextField
        {...register('lastname')}
        fullWidth
        label="Last Name"
        type="text"
        error={!!errors.lastname}
        helperText={errors.lastname?.message}
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
      <TextField
        {...register('confirmPassword', {
          required: 'Confirm Password is required',
        })}
        fullWidth
        label="Confirm Password"
        type="password"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        margin="normal"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
