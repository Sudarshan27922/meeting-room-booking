import { Box, type BoxProps } from '@mui/material';
import React from 'react';

const CommonBox: React.FC<BoxProps> = ({ sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        ...sx,
      }}
      {...props}
    />
  );
};

export default CommonBox;
