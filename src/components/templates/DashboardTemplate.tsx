import { Grid } from '@mui/material';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRooms } from '../../hooks/useRooms';
import { getBookingsByUserId } from '../../utils/getBookingsByUserId';
import AdminStats from '../organisms/dashboard/AdminStats';
import RoomDetailsSection from '../organisms/dashboard/RoomDetailsSection';
import RoomStatsSection from '../organisms/dashboard/RoomStatsSection';
import SearchOrganism from '../organisms/dashboard/SearchOrganism';
import TopOrganism from '../organisms/dashboard/TopOrganism';
import UserSchedules from '../organisms/dashboard/UserSchedules';


const DashboardTemplate: React.FC = () => {

  const { rooms, stats } = useRooms();
  const { user } = useAuth();
  const userBookings = user?.userId ? getBookingsByUserId(rooms, user.userId) : [];

  if (!user) return null;

  return (
    <div>
      <TopOrganism username={user.name} rooms={rooms} />
      <SearchOrganism />

      <Grid container spacing={3} sx={{ margin: '20px 0', padding: '0 20px' }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <RoomStatsSection
            total={stats.total}
            available={stats.available}
            occupied={stats.occupied}
            occupiedSoon={1}
            freeSoon={2}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <RoomDetailsSection rooms={rooms} />
        </Grid>
        {userBookings.length > 0 && (
          <Grid size={{xs: 12, md:4}}>
            <UserSchedules events={userBookings} />
          </Grid>
        )}
      </Grid>
      
        <Grid sx={{ margin: '20px 0', padding: '0 20px' }}>
          <AdminStats rooms={rooms} />
        </Grid>
    </div>
  );
};

export default DashboardTemplate;
