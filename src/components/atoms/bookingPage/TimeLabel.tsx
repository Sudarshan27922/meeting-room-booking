import React from 'react';
import { Typography, Box } from '@mui/material';

interface TimeLabelProps {
  time: string;
}

const TimeLabel: React.FC<TimeLabelProps> = ({ time }) => (
  <Box sx={{ width: 60, textAlign: 'right', pr: 1 }}>
    <Typography variant="body2" color="textSecondary">{time}</Typography>
  </Box>
);

export default TimeLabel;
