import React from 'react';
import { Box } from '@mui/material';
import type { CommonImageProps } from './Image.types';

const CommonImage: React.FC<CommonImageProps> = ({
  src,
  alt,
  width = 100,
  height = 'auto',
  borderRadius = 2,
  boxShadow = 3,
  sx,
  ...props
}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width,
        height,
        borderRadius,
        boxShadow,
        display: 'block',
        mx: 'auto',
        ...sx,
      }}
      {...props}
    />
  );
};

export default CommonImage;
