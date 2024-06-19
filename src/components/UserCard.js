import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, TextField, Grid } from '@mui/material';

const UserCard = ({ user, updateUser, deleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleUpdate = () => {
    updateUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <Card>
      {isEditing ? (
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="first_name"
                label="First Name"
                value={updatedUser.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="last_name"
                label="Last Name"
                value={updatedUser.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={updatedUser.email}
                onChange={handleChange}
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="avatar"
                label="Avatar URL"
                value={updatedUser.avatar}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleUpdate} variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      ) : (
        <>
          <CardMedia
            component="img"
            height="140"
            image={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
            <Button onClick={() => setIsEditing(true)} variant="contained" color="primary" style={{ marginTop: '8px' }}>
              Edit
            </Button>
            <Button onClick={() => deleteUser(user.id)} variant="contained" color="secondary" style={{ marginLeft: '8px', marginTop: '8px' }}>
              Delete
            </Button>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default UserCard;
