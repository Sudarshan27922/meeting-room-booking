import { Box, Typography } from '@mui/material';
import React from 'react';

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
        borderRadius: 2.5,
        bgcolor: isBooked ? 'error.light' : 'success.light',
        color: isBooked ? 'error.contrastText' : 'success.contrastText',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textAlign: 'center',
        p: 2,
        boxShadow: 3,
        border: isBooked ? '3px solid #d32f2f' : '1px solid #388e3c',
        userSelect: 'none',

        '&:hover': {
          boxShadow: isBooked
            ? '0 4px 8px rgba(211, 47, 47, 0.6)'
            : '0 8px 16px rgba(56, 142, 60, 0.6)',
          transform: isBooked ? 'none' : 'scale(1.05)',
        },

        '&:active': {
          transform: isBooked ? 'none' : 'scale(0.98)',
          boxShadow: isBooked
            ? '0 2px 4px rgba(211, 47, 47, 0.4)'
            : '0 4px 8px rgba(56, 142, 60, 0.4)',
        },
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(e as any);
        }
      }}
      aria-pressed={isBooked}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          lineHeight: 1.3,
          wordBreak: 'break-word',
          letterSpacing: 0.5,
          textTransform: 'capitalize',
          transform: 'rotate(-90deg)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {bookingTitle || 'Available'}
      </Typography>
    </Box>
  );
};

export default TimeSlotBox;
