import React from 'react';
import { Box, Typography } from '@mui/material';

interface TimeSlotBoxProps {
  isBooked: boolean;
  bookingTitle?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const TimeSlotBox: React.FC<TimeSlotBoxProps> = ({ isBooked, bookingTitle, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 91,
        height: 313,
        borderRadius: 2,
        bgcolor: isBooked ? 'error.light' : 'success.light',
        color: isBooked ? 'error.contrastText' : 'success.contrastText',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        p: 1.5,
        boxShadow: 2,
        '&:hover': {
          boxShadow: isBooked ? 2 : 5,
          transform: isBooked ? 'none' : 'scale(1.03)',
        },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          lineHeight: 1.2,
          wordBreak: 'break-word',
        }}
      >
        {bookingTitle || 'Available'}
      </Typography>
    </Box>
  );
};

export default TimeSlotBox;
