import { LocationOn } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import type { RoomBooking } from "../../atoms/quickBooking/TimeSlotAtom";

export interface Room {
    id: string;
    name: string;
    capacity: number;
    location: string;
    bookings?: RoomBooking[];
}

const RoomHeader: React.FC<{ room: Room }> = ({ room }) => {
    return (
        <Card sx={{ mb: 3, borderRadius: 3, background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)' }}>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOn sx={{ color: 'white', fontSize: 32 }} />
                    <Box>
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
                            {room.name}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                            <Chip
                                label={`Capacity: ${room.capacity}`}
                                sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                            />
                            <Chip
                                label={room.location}
                                sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default RoomHeader;