import React from 'react';
import { Box, Stack } from '@mui/material';
import CommonTypography from '../../atoms/typography';
import RoundedChip from '../../atoms/dashboard/chip';
import type { MeetingRoom } from '../../../services/roomService';

interface RoomDetailCardProps {
    room: MeetingRoom
}


const RoomDetailCard: React.FC<RoomDetailCardProps> = ({ room }) => {
    return (
        <Box
            sx={{
                minWidth: 260,
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: 2.5,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
                boxShadow: 3,
            }}
        >

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <CommonTypography variant="subtitle1" fontWeight={700}>
                    {room.name}
                </CommonTypography>
                <RoundedChip
                    label={room.isAvailable ? 'Available' : 'Occupied'}
                    color={room.isAvailable ? 'success' : 'error'}
                />
            </Box>

            <CommonTypography variant="body2" color="text.secondary">
                Location: {room.location}
            </CommonTypography>

            <CommonTypography variant="body2" color="text.secondary">
                Capacity: {room.capacity} {room.capacity > 1 ? 'persons' : 'person'}
            </CommonTypography>

            <Stack direction="row" spacing={1} flexWrap="wrap">
                {room.amenities.map((item) => (
                    <RoundedChip key={item} label={item} color="info" />
                ))}
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                <RoundedChip label={room.isAC ? 'AC' : 'Non-AC'} color={room.isAC ? 'primary' : 'default'} />
            </Stack>
        </Box>
    );
};

export default RoomDetailCard;
