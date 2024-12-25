import React from 'react';
import { TextField, Button } from '@mui/material';

const RegisterModal = ({ closeModal }) => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <TextField label="Full Name" fullWidth required style={{ marginBottom: '1rem' }} />
        <TextField label="Email" type="email" fullWidth required style={{ marginBottom: '1rem' }} />
        <TextField label="Password" type="password" fullWidth required style={{ marginBottom: '1rem' }} />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterModal;
