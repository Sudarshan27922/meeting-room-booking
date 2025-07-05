import { Alert, Box, Button, Grid, IconButton, Modal, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import type { Room } from "../../organisms/booking page/RoomHeader";
import {
    Close as CloseIcon,
} from '@mui/icons-material';

export interface BookingFormData {
    title: string;
    bookedBy: string;
    startTime: string;
    endTime: string;
    notes: string;
}


const BookingFormModal: React.FC<{
    open: boolean;
    onClose: () => void;
    onSubmit: (formData: BookingFormData) => void;
    selectedHour: number | null;
    selectedDate: Dayjs;
    room: Room;
}> = ({ open, onClose, onSubmit, selectedHour, selectedDate, room }) => {
    const [formData, setFormData] = useState<BookingFormData>({
        title: '',
        bookedBy: '',
        startTime: '',
        endTime: '',
        notes: '',
    });

    const [errors, setErrors] = useState<Partial<BookingFormData>>({});

    useEffect(() => {
        if (selectedHour !== null) {
            const startTime = `${selectedHour.toString().padStart(2, '0')}:00`;
            const endTime = `${(selectedHour + 1).toString().padStart(2, '0')}:00`;
            setFormData(prev => ({
                ...prev,
                startTime,
                endTime,
            }));
        }
    }, [selectedHour]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors: Partial<BookingFormData> = {};
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.bookedBy) newErrors.bookedBy = 'Booked by is required';
        if (!formData.startTime) newErrors.startTime = 'Start time is required';
        if (!formData.endTime) newErrors.endTime = 'End time is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData);
        setFormData({
            title: '',
            bookedBy: '',
            startTime: '',
            endTime: '',
            notes: '',
        });
        setErrors({});
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Paper
                sx={{
                    borderRadius: 4,
                    p: 4,
                    maxWidth: 500,
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'auto',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Book {room.name}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Alert severity="info" sx={{ mb: 3 }}>
                    Booking for {selectedDate.format('MMMM D, YYYY')} at {selectedHour}:00
                </Alert>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Event Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                error={!!errors.title}
                                helperText={errors.title}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Booked By"
                                value={formData.bookedBy}
                                onChange={(e) => setFormData({ ...formData, bookedBy: e.target.value })}
                                error={!!errors.bookedBy}
                                helperText={errors.bookedBy}
                                required
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Start Time"
                                type="time"
                                value={formData.startTime}
                                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                                error={!!errors.startTime}
                                helperText={errors.startTime}
                                InputLabelProps={{ shrink: true }}
                                required
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="End Time"
                                type="time"
                                value={formData.endTime}
                                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                                error={!!errors.endTime}
                                helperText={errors.endTime}
                                InputLabelProps={{ shrink: true }}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Notes (Optional)"
                                multiline
                                rows={3}
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                                <Button variant="outlined" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="contained">
                                    Book Room
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Modal>
    );
};

export default BookingFormModal;