import React from 'react';
import { TextField } from '@mui/material';
import type { CommonTextFieldProps } from './TextField.types';

const CommonTextField: React.FC<CommonTextFieldProps> = ({
  variant = 'outlined',
  size = 'medium',
  fullWidth = true,
  sx,
  ...props
}) => {
  return (
    <TextField
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default CommonTextField;
