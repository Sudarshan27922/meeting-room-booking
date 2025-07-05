import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import type { AuthUser } from '../../context/AuthContext';
import { useRooms } from '../../hooks/useRooms';
import { getBookingsByUserId } from '../../utils/getBookingsByUserId';
import UserInfoCard from '../molecules/userProfile/UserInfoCard';
import UserSchedule from '../organisms/userProfile/UserSchedule';

interface UserProfileTemplateProps {
  user: AuthUser;
}

const UserProfileTemplate: React.FC<UserProfileTemplateProps> = ({ user }) => {

  const { rooms } = useRooms();
  const userBookings = user?.userId ? getBookingsByUserId(rooms, user.userId) : []

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Grid container justifyContent="center">
          <Grid size={{xs:12, sm:8, md:6}}>
            <UserInfoCard user={user} />
          </Grid>
        </Grid>
        {userBookings.length > 0 && (
          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <Grid size={{xs:12, sm:8, md:12}}>
              <UserSchedule events={userBookings} />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default UserProfileTemplate;
