import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddUserForm = ({ addUser }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '', avatar: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...user, id: Date.now() });
    setUser({ first_name: '', last_name: '', email: '', avatar: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="first_name"
            label="First Name"
            value={user.first_name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="last_name"
            label="Last Name"
            value={user.last_name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            type="email"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="avatar"
            label="Avatar URL"
            value={user.avatar}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddUserForm;
