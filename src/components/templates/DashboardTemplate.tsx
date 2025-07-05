import React from 'react';
import type { MeetingRoom } from '../../services/roomService';
import TopOrganism from '../organisms/dashboard/TopOrganism';
import RoomStatsSection from '../organisms/dashboard/RoomStatsSection';
import SearchOrganism from '../organisms/dashboard/SearchOrganism';
import RoomDetailsSection from '../organisms/dashboard/RoomDetailsSection';
import { Grid } from '@mui/material';
import UserSchedules from '../organisms/dashboard/UserSchedules';
import type { AuthUser } from '../../context/AuthContext';
import AdminStats from '../organisms/dashboard/AdminStats';

interface DashboardTemplateProps {
  rooms: MeetingRoom[];
  user: AuthUser;
  stats: {
    total: number;
    available: number;
    occupied: number;
  };
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

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ rooms, user, stats }) => {
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
        <Grid size={{ xs: 6, md: 8.2 }}>
          <RoomDetailsSection rooms={rooms} />
        </Grid>
        <Grid size={{ xs: 6, md: 3.8 }}>
          <UserSchedules events={todayEvents} />
        </Grid>
      </Grid>


    </div>
  );
};

export default DashboardTemplate;
