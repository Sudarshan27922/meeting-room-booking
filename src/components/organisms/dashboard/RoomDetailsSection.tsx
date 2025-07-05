import React from 'react';
import { Box, Typography, Grid, ButtonBase, CircularProgress } from '@mui/material';
import RoomDetailCard from '../../molecules/dashboard/RoomDetailCard';
import type { MeetingRoom } from '../../../services/roomService';
import { useNavigate } from 'react-router-dom';

interface RoomDetailsSectionProps {
    rooms: MeetingRoom[]
}

const RoomDetailsSection: React.FC<RoomDetailsSectionProps> = ({ rooms }) => {
    const navigate = useNavigate();

    const handleCardClick = (room: MeetingRoom) => {
        if (room.isAvailable) {
            navigate('/booking', { state: { room } });
        }
    };

    if (!rooms.length) {
        return (
            <Box
                sx={{
                    borderRadius: 4,
                    p: 3,
                    boxShadow: 4,
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 400,
                    bgcolor: 'background.paper',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                borderRadius: 4,
                p: { xs: 2, sm: 3 },
                boxShadow: 4,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
            }}
        >
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, textAlign: 'left' }}>
                Room Details
            </Typography>

            <Grid container spacing={3}>
                {rooms.map((room) => (
                    <Grid item xs={12} sm={6} md={4} key={room.id}>
                        {room.isAvailable ? (
                            <ButtonBase
                                onClick={() => handleCardClick(room)}
                                sx={{ width: '100%', textAlign: 'left' }}
                            >
                                <RoomDetailCard room={room} />
                            </ButtonBase>
                        ) : (
                            <Box sx={{ opacity: 0.5, pointerEvents: 'none' }}>
                                <RoomDetailCard room={room} />
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RoomDetailsSection;
