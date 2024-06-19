import React from 'react';
import { Grid } from '@mui/material';
import UserCard from './UserCard';

const UserTable = ({ users, updateUser, deleteUser }) => {
  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <UserCard user={user} updateUser={updateUser} deleteUser={deleteUser} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserTable;
