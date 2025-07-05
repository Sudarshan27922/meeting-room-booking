import React from 'react';
import { TextField, type TextFieldProps } from '@mui/material';

const CommonTextField: React.FC<TextFieldProps> = ({
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
