import { Alert, Grid, Modal, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { Booking, MeetingRoom } from '../../services/roomService';
import CalendarMolecule from '../organisms/booking page/CalendarOrganism';
import RoomHeader from '../organisms/booking page/RoomHeader';
import TimeSlotGrid from '../organisms/booking page/TimeSlotGrid';
import QuickBookingForm from '../organisms/quickBooking/QuickBookingForm';


const BookingPage: React.FC = () => {
    const location = useLocation();
    const room = location.state?.room as MeetingRoom;

    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [bookings, setBookings] = useState<Booking[]>(room?.bookings || []);


    const handleSlotClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleBookingSuccess = (newBookingData: {
        title: string;
        room: string;
        date: string;
        startTime: string;
        endTime: string;
        isRecurring: boolean;
        guests: number;
    }) => {
        const enrichedBooking: Booking = {
            ...newBookingData,
            userId: 'currentUserId',
            name: 'Current User',
        };

        setBookings((prev) => [...prev, enrichedBooking]);
        handleClosePopup();
    };


    const handleClosePopup = () => {
        setAnchorEl(null);
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
                        p: 3,
                        borderRadius: 2,
                        maxWidth: 400,
                        boxShadow: 5,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <QuickBookingForm
                        rooms={[room]}
                        onSuccess={handleBookingSuccess}
                        setShowSuccess={() => { }}
                    />
                </Paper>
            </Modal>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 3.5 }}>
                    <CalendarMolecule
                        selectedDate={selectedDate}
                        onDateChange={setSelectedDate}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8.5 }}>
                    <TimeSlotGrid
                        roomName={room.name}
                        bookings={bookings}
                        selectedDate={selectedDate}
                        onAddBooking={handleSlotClick}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookingPage;


