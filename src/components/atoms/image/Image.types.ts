import type { BoxProps } from '@mui/material';

export interface CommonImageProps extends Omit<BoxProps, 'component'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  boxShadow?: number;
}
