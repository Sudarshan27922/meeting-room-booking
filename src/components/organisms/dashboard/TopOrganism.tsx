import React, { useState } from 'react';
import { Box, Paper, Modal, Alert } from '@mui/material';
import CommonTypography from '../../atoms/typography';
import CommonButton from '../../atoms/button';
import QuickBookingForm from '../../organisms/quickBooking/QuickBookingForm';
import type { MeetingRoom } from '../../../services/roomService';

interface DashboardWelcomeProps {
    username: string;
    rooms: MeetingRoom[];
}

const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ username, rooms }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showSuccess, setShowSuccess] = useState(false);


    const handleQuickBookingClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const availableRooms = rooms.filter((room) => room.isAvailable);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4} px={2}>
            <CommonTypography variant="h4" fontWeight={700} gutterBottom>
                Welcome Back, {username} 👋
            </CommonTypography>

            <CommonTypography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Quickly manage or reserve your meeting rooms
            </CommonTypography>

            <CommonButton onClick={handleQuickBookingClick} sx={{ height: 40, maxWidth: 200, mb: 2 }} variant="contained" color="primary">
                Quick Booking
            </CommonButton>

            {showSuccess && (
                <Alert
                    severity="success"
                    sx={{ mt: 2 }}
                    onClose={() => setShowSuccess(false)}
                >
                    Meeting room booked successfully!
                </Alert>
            )}

            <Modal
                open={open}
                onClose={handleClickAway}
                aria-labelledby="quick-booking-modal"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    elevation={3}
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                        p: 3,
                        borderRadius: 2,
                        minWidth: 250,
                        maxWidth: '90vw',
                    }}
                >
                    <QuickBookingForm
                        rooms={availableRooms}
                        onSuccess={() => setAnchorEl(null)}
                        setShowSuccess={setShowSuccess}
                    />
                </Paper>
            </Modal>

        </Box>
    );
};

export default DashboardWelcome;
