import { Chip } from '@mui/material';
import React from 'react';
import type { RoundedChipProps } from './Chip.types';

const RoundedChip: React.FC<RoundedChipProps> = ({ label, color = 'default', sx }) => (
  <Chip
    label={label}
    color={color}
    sx={{
      borderRadius: '16px',
      textTransform: 'capitalize',
      fontSize: '12px',
      ...sx,
    }}
    size="small"
  />
);

export default RoundedChip;
