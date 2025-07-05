import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';
import React from 'react';

const CommonInput: React.FC<TextFieldProps> = (props) => (
  <TextField
    fullWidth
    variant="outlined"
    size="small"
    sx={{ borderRadius: 2, mb: 2 }}
    {...props}
  />
);

export default CommonInput;
