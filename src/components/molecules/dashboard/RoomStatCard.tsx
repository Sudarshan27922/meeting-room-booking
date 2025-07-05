import { Paper } from '@mui/material';
import React from 'react';
import CommonTypography from '../../atoms/typography';

interface RoomStatCardProps {
    title: string;
    count: number;
    color?: string;
}

const RoomStatCard: React.FC<RoomStatCardProps> = ({ title, count, color }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                flex: 1,
                borderRadius: 3,
                padding: 2,
                width: 150,
                backgroundColor: color,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CommonTypography variant="body1" color="#ffffff" sx={{ textAlign: 'center', fontWeight: 700 }}>
                {title}
            </CommonTypography>

            <CommonTypography variant="h5" fontWeight={700} sx={{ textAlign: 'center', mt: 1 }}>
                {count}
            </CommonTypography>
        </Paper>
    );
};

export default RoomStatCard;
