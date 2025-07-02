import React from 'react';
import { Paper } from '@mui/material';
import type { CommonPaperProps } from './Paper.types';

const CommonPaper: React.FC<CommonPaperProps> = ({
  children,
  elevation = 4,
  sx,
  ...props
}) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        p: 5,
        borderRadius: 4,
        textAlign: 'center',
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default CommonPaper;
