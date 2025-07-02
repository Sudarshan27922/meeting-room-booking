import React from 'react';
import { Box } from '@mui/material';
import type { CommonBoxProps } from './Box.types';

const CommonBox: React.FC<CommonBoxProps> = ({ sx, ...props }) => {
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
