import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import UserInfoCard from '../molecules/userProfile/UserInfoCard';
import UserSchedule from '../organisms/userProfile/UserSchedule';
import type { AuthUser } from '../../context/AuthContext';

interface UserProfileTemplateProps {
  user: AuthUser;
}

const todayEvents = [
  {
    id: '1',
    startTime: '09:00 AM',
    endTime: '09:30 AM',
    title: 'Team Standup',
    room: 'Conference Room A',
  },
  {
    id: '2',
    startTime: '10:30 AM',
    endTime: '11:00 AM',
    title: 'Project Meeting',
    room: 'Meeting Room B',
  },
  {
    id: '3',
    startTime: '01:00 PM',
    endTime: '02:00 PM',
    title: 'Lunch with Client',
    room: 'Cafeteria',
  },
  {
    id: '4',
    startTime: '03:00 PM',
    endTime: '04:00 PM',
    title: 'Design Review',
    room: 'Board Room C',
  },
  {
    id: '5',
    startTime: '04:30 PM',
    endTime: '05:00 PM',
    title: 'Wrap Up',
    room: 'Focus Room F',
  },
];

const UserProfileTemplate: React.FC<UserProfileTemplateProps> = ({ user }) => (
  <Box
    sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 4 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6, // vertical spacing between rows
    }}
  >
    <Container maxWidth="md" disableGutters>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <UserInfoCard user={user} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={10} md={8}>
          <UserSchedule events={todayEvents} />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default UserProfileTemplate;
