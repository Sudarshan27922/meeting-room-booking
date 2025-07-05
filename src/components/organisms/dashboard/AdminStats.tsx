import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { MeetingRoom } from '../../../services/roomService';
import { getTodayUtilization } from '../../../utils/getTodayUtilization';

interface AdminStatsProps {
  rooms: MeetingRoom[];
}

const AdminStats: React.FC<AdminStatsProps> = ({ rooms }) => {
  const data = getTodayUtilization(rooms);

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00bcd4', '#a1887f'];

  return (
    <Box
      sx={{
        borderRadius: 4,
        bgcolor: 'background.paper',
        boxShadow: 3,
        p: 3,
        height: '100%',
        minHeight: '300px',
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Room Utilization Today (%)
      </Typography>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} layout="vertical" margin={{ left: 10 }}>
          <XAxis type="number" domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
          <YAxis type="category" dataKey="name" width={120} />
          <Tooltip formatter={(val: number) => `${val}%`} />
          <Legend />
          <Bar dataKey="utilization" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default AdminStats;
