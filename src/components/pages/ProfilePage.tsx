import React from 'react';
import { Typography, Box } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import UserProfileTemplate from '../templates/UserProfileTemplate';

const UserProfilePage: React.FC = () => {
  const { user } = useAuth();

  console.log(user)

  if (!user) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">No user logged in.</Typography>
      </Box>
    );
  }

  return <UserProfileTemplate user={user} />;
};

export default UserProfilePage;
