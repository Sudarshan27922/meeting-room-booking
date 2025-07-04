import { TextField, type TextFieldProps } from '@mui/material';
import React from 'react';

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
