import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import type { BookingWithRoom } from '../../../utils/getBookingsByUserId';
import ScheduleCard from '../../molecules/dashboard/ScheduleCard';

interface UserSchedulesProps {
  events: BookingWithRoom[];
}

const UserSchedule: React.FC<UserSchedulesProps> = ({ events }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 4,
        borderRadius: 4,
        maxHeight: 480,
        width: '100%',
        overflowY: 'auto',
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Today's Schedule
      </Typography>

      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid size={{xs:12, sm:6, md:4}} key={event.title + event.startTime}>
            <ScheduleCard
              title={event.title}
              startTime={event.startTime}
              endTime={event.endTime}
              room={event.roomName}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UserSchedule;
