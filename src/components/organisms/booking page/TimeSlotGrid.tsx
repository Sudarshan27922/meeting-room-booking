import { Box, Stack, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import type { Booking } from '../../../services/roomService';
import TimeSlotBox from '../../atoms/bookingPage/TimeSlotBox';
import MeetingDetailModal from '../../molecules/booking page/MeetingDetailsModal';

interface TimeSlotGridProps {
  roomName: string;
  bookings: Booking[];
  selectedDate: Dayjs;
  onAddBooking: (event: React.MouseEvent<HTMLElement>, startTime: string) => void;
}

const hours = Array.from({ length: 9 }, (_, i) => 9 + i); // 9 AM to 6 PM

const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({ bookings, selectedDate, onAddBooking, roomName }) => {
  const formattedDate = selectedDate.format('YYYY-MM-DD');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookedClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  const getBookingAtTime = (hour: number) => {
    const timeStr = hour.toString().padStart(2, '0') + ':00';
    return bookings.find(
      (b) => b.date === formattedDate && b.startTime === timeStr
    );
  };

  return (
    <Box sx={{ backgroundColor: '#fff', borderRadius: 2, p: 2, boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Time Slots
      </Typography>

      {/* Time Labels Row */}
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        {hours.map((hour) => (
          <Box key={hour} sx={{ width: 91, textAlign: 'center' }}>
            <Typography variant="caption">
              {dayjs().hour(hour).minute(0).format('h A')}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Time Slots Row */}
      <Stack direction="row" spacing={1}>
        {hours.map((hour) => {
          const booking = getBookingAtTime(hour);
          return (
            <TimeSlotBox
              key={hour}
              isBooked={!!booking}
              bookingTitle={booking?.title
              }
              onClick={(e) =>
                booking
                  ? handleBookedClick(booking)
                  : onAddBooking(e, `${hour.toString().padStart(2, '0')}:00`)
              }
            />
          );
        })}
      </Stack>

      <MeetingDetailModal
        roomName={roomName}
        open={isModalOpen}
        onClose={handleModalClose}
        booking={selectedBooking}
      />
    </Box>
  );
};

export default TimeSlotGrid;
