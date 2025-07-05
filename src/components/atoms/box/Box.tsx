import React from 'react';
import { Box, type BoxProps } from '@mui/material';

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
