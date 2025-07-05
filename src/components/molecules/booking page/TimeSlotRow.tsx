import { Box } from '@mui/material';
import React from 'react';
import TimeLabel from '../../atoms/bookingPage/TimeLabel';
import TimeSlotBox from '../../atoms/bookingPage/TimeSlotBox';

interface TimeSlotRowProps {
  time: string;
  isBooked: boolean;
  bookingTitle?: string;
  onSlotClick: () => void;
}

const TimeSlotRow: React.FC<TimeSlotRowProps> = ({ time, isBooked, bookingTitle, onSlotClick }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <TimeLabel time={time} />
    <TimeSlotBox
      isBooked={isBooked}
      bookingTitle={bookingTitle}
      onClick={onSlotClick}
    />
  </Box>
);

export default TimeSlotRow;
