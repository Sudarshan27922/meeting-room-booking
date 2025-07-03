import React from 'react';
import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/images/Home bg.png'; // adjust path accordingly

const HomePage1: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Orange overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 87, 34, 0.8)', // orange
          clipPath: 'polygon(0 0, 35.5% 0, 62% 100%, 0 100%)',
          zIndex: 1,
        }}
      />

      {/* Text on top */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          zIndex: 2,
          color: '#fff',
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to Our Company
        </Typography>
        <Typography variant="h6" mt={2}>
          Innovation | Integrity | Impact
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage1;
