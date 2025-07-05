import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
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

const UserSchedules: React.FC<UserScheduleOrganismProps> = ({ events }) => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        bgcolor: 'background.paper',
        boxShadow: 3,
        p: 3,
        maxHeight: 470,
        overflowY: 'auto',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Today's Schedule
      </Typography>

      <Stack spacing={2}>
        {events.map((event) => (
          <ScheduleCard
            key={event.id}
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
            room={event.room}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default UserSchedules;
