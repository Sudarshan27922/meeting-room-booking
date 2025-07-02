import type { Shadows } from '@mui/material/styles';

const shadows = [
  'none',
  '0px 2px 4px rgba(0,0,0,0.1)',
  ...Array(23).fill('0px 4px 10px rgba(0,0,0,0.05)')
] as Shadows;

export default shadows;