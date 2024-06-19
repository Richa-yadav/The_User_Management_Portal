import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Paper } from '@mui/material';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch user data
    axios.get('https://reqres.in/api/users?page=1&per_page=6')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        User Management Portal
      </Typography>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <AddUserForm addUser={addUser} />
        <UserTable users={filteredUsers} updateUser={updateUser} deleteUser={deleteUser} />
      </Paper>
    </Container>
  );
};

export default App;
