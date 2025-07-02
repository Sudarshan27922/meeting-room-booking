import React from 'react';
import Box from '../atoms/box';
import LoginCard from '../molecules/LoginCard';

interface LoginSectionProps {
  onLogin: () => void;
}

const LoginSection: React.FC<LoginSectionProps> = ({ onLogin }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <LoginCard onLogin={onLogin} />
    </Box>
  );
};

export default LoginSection;
