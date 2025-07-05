import React from 'react';
import { Box } from '@mui/material';
import RoomStatCard from '../../molecules/dashboard/RoomStatCard';

interface RoomStatsSectionProps {
    total: number;
    available: number;
    occupied: number;
    occupiedSoon: number;
    freeSoon: number;
}

const RoomStatsSection: React.FC<RoomStatsSectionProps> = ({
    total,
    available,
    occupied,
    occupiedSoon,
    freeSoon,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                borderRadius: 3,
                overflowX: 'auto',
                boxShadow: 3,
                bgcolor: 'background.paper',
            }}
        >
            <RoomStatCard title="Total Rooms" count={total} color="rgba(90, 153, 216, 0.9)" />
            <RoomStatCard title="Available Now" count={available} color="rgba(73, 231, 81, 0.9)" />
            <RoomStatCard title="Occupied Now" count={occupied} color="rgba(252, 71, 68, 0.9)" />
            <RoomStatCard title="Occupied Soon" count={occupiedSoon} color="rgba(248, 156, 43, 0.9)" />
            <RoomStatCard title="Free Soon" count={freeSoon} color="rgba(67, 154, 230, 0.9)" />

        </Box>
    );
};

export default RoomStatsSection;
