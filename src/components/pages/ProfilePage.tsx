import { Box, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import UserProfileTemplate from '../templates/UserProfileTemplate';

const UserProfilePage: React.FC = () => {
  const { user } = useAuth();


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
