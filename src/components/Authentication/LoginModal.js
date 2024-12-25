import React from 'react';
import { TextField, Button } from '@mui/material';

const LoginModal = ({ closeModal }) => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <TextField label="Email" type="email" fullWidth required style={{ marginBottom: '1rem' }} />
        <TextField label="Password" type="password" fullWidth required style={{ marginBottom: '1rem' }} />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginModal;
