import React from 'react';
import { Typography } from '@mui/material';
import type { CommonTypographyProps } from './Typography.types';

const CommonTypography: React.FC<CommonTypographyProps> = ({
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
