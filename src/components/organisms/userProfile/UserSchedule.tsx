import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import ScheduleCard from '../../molecules/dashboard/ScheduleCard';

interface ScheduleEvent {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  room: string;
}

interface UserScheduleOrganismProps {
  events: ScheduleEvent[];
}

const UserSchedule: React.FC<UserScheduleOrganismProps> = ({ events }) => {
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
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <ScheduleCard
              title={event.title}
              startTime={event.startTime}
              endTime={event.endTime}
              room={event.room}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default UserSchedule;
