import React, { useState } from 'react';
import {
    Box,
    Stack,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Alert,
    Divider,
} from '@mui/material';
import CommonInput from '../../atoms/quickBooking/commonInput';
import CommonSelect from '../../atoms/quickBooking/commonSelect';
import CommonButton from '../../atoms/button';
import CommonTypography from '../../atoms/typography';
import GuestSelector from '../../molecules/quickBooking/GuestSelector';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface QuickBookingFormProps {
    rooms: {
        name: string;
        capacity: number;
        amenities: string[];
    }[];
    onSuccess: () => void;
    setShowSuccess: (show: boolean) => void;
}

const QuickBookingForm: React.FC<QuickBookingFormProps> = ({ rooms, onSuccess, setShowSuccess }) => {
    const [roomName, setRoomName] = useState('');
    const selectedRoom = rooms.find((room) => room.name === roomName);
    const [guestCount, setGuestCount] = useState(0);
    const [amenities, setAmenities] = useState<string[]>([]);
    const [booked, setBooked] = useState(false);
    const [date, setDate] = useState<Date | null>(new Date());
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [isRecurring, setIsRecurring] = useState(false);


    const handleAmenityToggle = (amenity: string) => {
        setAmenities((prev) =>
            prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
        );
    };

    const handleSubmit = () => {
        setBooked(true);
        onSuccess();
        setShowSuccess(true);
    };

    return (
        <Box
            sx={{
                maxWidth: 320,
                width: '100%',
            }}>
            <Stack spacing={1.5}>
                <CommonInput label="Meeting Title" size="small" />
                <CommonSelect
                    label="Select Room"
                    value={roomName}
                    onChange={(e) => {
                        setRoomName(e.target.value);
                        setGuestCount(0);
                        setAmenities([]);
                    }}
                    options={rooms.map((room) => room.name)}
                    size="small"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Select Date"
                        value={date}
                        onChange={setDate}
                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                    />
                    <Stack direction="row" spacing={1}>
                        <TimePicker
                            label="Start Time"
                            value={startTime}
                            onChange={setStartTime}
                            slotProps={{ textField: { size: 'small', fullWidth: true } }}
                        />
                        <TimePicker
                            label="End Time"
                            value={endTime}
                            onChange={setEndTime}
                            slotProps={{ textField: { size: 'small', fullWidth: true } }}
                        />
                    </Stack>
                </LocalizationProvider>


                {selectedRoom && (
                    <>
                        <CommonTypography variant="subtitle2">
                            Guests (Max: {selectedRoom.capacity})
                        </CommonTypography>
                        <GuestSelector
                            value={guestCount}
                            max={selectedRoom.capacity}
                            onChange={setGuestCount}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    size="small"
                                    checked={isRecurring}
                                    onChange={(e) => setIsRecurring(e.target.checked)}
                                />
                            }
                            label="Make this a recurring booking"
                        />

                        <Divider sx={{ my: 1 }} />

                        <CommonTypography variant="subtitle2">Amenities</CommonTypography>
                        <FormGroup row>
                            {selectedRoom.amenities.map((amenity) => (
                                <FormControlLabel
                                    key={amenity}
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={amenities.includes(amenity)}
                                            onChange={() => handleAmenityToggle(amenity)}
                                        />
                                    }
                                    label={amenity}
                                />
                            ))}
                        </FormGroup>
                    </>
                )}

                <CommonButton fullWidth variant="contained" onClick={handleSubmit} sx={{ mt: 1, height: 40 }}>
                    Book
                </CommonButton>

                {booked && (
                    <Alert sx={{ mt: 1 }} severity="success">
                        Meeting room booked successfully!
                    </Alert>
                )}
            </Stack>
        </Box>
    );
};

export default QuickBookingForm;
