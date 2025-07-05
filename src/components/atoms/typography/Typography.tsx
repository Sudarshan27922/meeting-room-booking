import { Typography, type TypographyProps } from '@mui/material';
import React from 'react';

const CommonTypography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  fontWeight = 500,
  color = 'text.primary',
  sx,
  ...props
}) => {
  return (
    <Typography
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      sx={{ lineHeight: 1.5, ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default CommonTypography;
