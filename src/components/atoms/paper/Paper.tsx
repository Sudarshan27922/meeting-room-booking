import { Paper, type PaperProps } from '@mui/material';
import React from 'react';

const CommonPaper: React.FC<PaperProps> = ({
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
