import { Divider, Paper } from '@mui/material';
import React from 'react';
import CommonTypography from '../../atoms/typography';

interface ScheduleCardProps {
    title: string;
    startTime: string;
    endTime: string;
    room: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ title, startTime, endTime, room }) => (
    <Paper
        elevation={2}
        sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: '#f5f5f5',
            borderLeft: '5px solid #1976d2',
            '&:hover': {
                boxShadow: 4,
            },
        }}
    >
        <CommonTypography variant="subtitle1" fontWeight={600}>{title}</CommonTypography>

        <CommonTypography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{startTime} – {endTime}</CommonTypography>

        <Divider sx={{ my: 1 }} />

        <CommonTypography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>Room: {room}</CommonTypography>

    </Paper>
);

export default ScheduleCard;
