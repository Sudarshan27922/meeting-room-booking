import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Alert, Grid, Popper, Paper, ClickAwayListener } from '@mui/material';
import RoomHeader from '../organisms/booking page/RoomHeader';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import CalendarMolecule from '../organisms/booking page/CalendarOrganism';
import TimeSlotGrid from '../organisms/booking page/TimeSlotGrid';
import QuickBookingForm from '../organisms/quickBooking/QuickBookingForm';
import { Modal } from '@mui/material';


const BookingPage: React.FC = () => {
    const location = useLocation();
    const room = location.state?.room;

    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [popupTime, setPopupTime] = useState<string | null>(null);

    const handleSlotClick = (event: React.MouseEvent<HTMLElement>, startTime: string) => {
        setAnchorEl(event.currentTarget);
        setPopupTime(startTime);
    };

    const handleClosePopup = () => {
        setAnchorEl(null);
        setPopupTime(null);
    };

    if (!room) {
        return (
            <Box sx={{ p: 3 }}>
                <Alert severity="error">No room data available</Alert>
            </Box>
        );
    }
    return (
        <Box sx={{ p: 3, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <RoomHeader room={room} />


            <Modal
                open={!!anchorEl}
                onClose={handleClosePopup}
                aria-labelledby="quick-booking-modal"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Paper
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        maxWidth: 400,
                        width: '90%',
                        boxShadow: 5,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <QuickBookingForm
                        rooms={[room]}
                        onSuccess={handleClosePopup}
                        setShowSuccess={() => { }}
                    />
                </Paper>
            </Modal>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <CalendarMolecule
                        selectedDate={selectedDate}
                        onDateChange={setSelectedDate}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TimeSlotGrid
                        bookings={room.bookings}
                        selectedDate={selectedDate}
                        onAddBooking={handleSlotClick}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookingPage;


