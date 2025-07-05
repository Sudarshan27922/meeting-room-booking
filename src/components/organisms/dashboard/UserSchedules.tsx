import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import type { BookingWithRoom } from '../../../utils/getBookingsByUserId';
import ScheduleCard from '../../molecules/dashboard/ScheduleCard';


interface UserSchedulesProps {
  events: BookingWithRoom[];
}

const UserSchedules: React.FC<UserSchedulesProps> = ({ events }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 4,
        borderRadius: 4,
        maxHeight: 465,
        overflowY: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 4,
        // Hide scrollbar for WebKit browsers (Chrome, Safari)
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        // Hide scrollbar for Firefox
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE and Edge
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Today's Schedule
      </Typography>

      <Stack spacing={3}>
        {events.map((event) => (
          <ScheduleCard
            key={event.title + event.startTime}
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
            room={event.roomName}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default UserSchedules;
