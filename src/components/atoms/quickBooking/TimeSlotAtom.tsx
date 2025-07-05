import { Box, Typography } from "@mui/material";

export interface TimeSlot {
    hour: number;
    time12: string;
    time24: string;
    isBooked: boolean;
    booking?: RoomBooking;
}

export interface RoomBooking {
    id: string;
    startTime: string;
    endTime: string;
    title: string;
    bookedBy: string;
    date: string;
    roomId: string;
}

// Atom: Time Slot Component
const TimeSlotAtom: React.FC<{
    timeSlot: TimeSlot;
    onSlotClick: (hour: number) => void;
    onBookingClick?: (booking: RoomBooking) => void;
    onDragStart?: (booking: RoomBooking) => void;
    onDragOver?: (e: React.DragEvent) => void;
    onDrop?: (hour: number) => void;
}> = ({ timeSlot, onSlotClick, onBookingClick, onDragStart, onDragOver, onDrop }) => {
    const handleDragStart = (e: React.DragEvent) => {
        if (timeSlot.booking && onDragStart) {
            onDragStart(timeSlot.booking);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (onDragOver) onDragOver(e);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (onDrop) onDrop(timeSlot.hour);
    };

    return (
        <Box
            sx={{
                height: '60px',
                border: '1px solid #e0e0e0',
                borderRadius: 1,
                mb: 0.5,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                cursor: timeSlot.isBooked ? 'pointer' : 'pointer',
                backgroundColor: timeSlot.isBooked ? '#e3f2fd' : 'white',
                transition: 'all 0.2s ease',
                '&:hover': {
                    backgroundColor: timeSlot.isBooked ? '#bbdefb' : '#f5f5f5',
                    transform: 'scale(1.01)',
                },
            }}
            onClick={() => {
                if (timeSlot.isBooked && timeSlot.booking && onBookingClick) {
                    onBookingClick(timeSlot.booking);
                } else {
                    onSlotClick(timeSlot.hour);
                }
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {/* Time Label */}
            <Box
                sx={{
                    width: '80px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: 'text.secondary',
                    fontWeight: 500,
                    borderRight: '1px solid #e0e0e0',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {timeSlot.time12}
            </Box>

            {/* Content Area */}
            <Box sx={{ flex: 1, p: 1 }}>
                {timeSlot.isBooked && timeSlot.booking ? (
                    <Box
                        draggable
                        onDragStart={handleDragStart}
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            borderRadius: 1,
                            p: 1,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            cursor: 'grab',
                            '&:active': {
                                cursor: 'grabbing',
                            },
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '11px' }}>
                            {timeSlot.booking.title}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '10px', opacity: 0.9 }}>
                            {timeSlot.booking.bookedBy}
                        </Typography>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'text.secondary',
                            fontSize: '12px',
                        }}
                    >
                        Available
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default TimeSlotAtom;