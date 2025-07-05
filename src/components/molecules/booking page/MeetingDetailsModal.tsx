import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import RepeatIcon from '@mui/icons-material/Repeat';
import TitleIcon from '@mui/icons-material/Title';
import {
    Box,
    Divider,
    IconButton,
    Modal,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';

interface MeetingDetailModalProps {
    open: boolean;
    roomName: string;
    onClose: () => void;
    booking: {
        title: string;
        date: string;
        startTime: string;
        endTime: string;
        isRecurring: boolean;
        guests: number;
    } | null;
}

const DetailRow: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({
    icon,
    label,
    value,
}) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            bgcolor: 'grey.100',
            borderRadius: 1.5,
            p: 1.5,
            boxShadow: 1,
        }}
    >
        <Box sx={{ color: 'primary.main' }}>{icon}</Box>
        <Typography variant="body1" sx={{ fontWeight: '600', minWidth: 90 }}>
            {label}:
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {value}
        </Typography>
    </Box>
);

const MeetingDetailModal: React.FC<MeetingDetailModalProps> = ({
    open,
    onClose,
    booking,
    roomName,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="booking-details-title"
            aria-describedby="booking-details-description"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    width: 320,
                    maxWidth: '90vw',
                    bgcolor: 'background.paper',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    position: 'relative',
                }}
            >
                <IconButton
                    size="small"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        color: 'text.secondary',
                        '&:hover': {
                            color: 'error.main',
                        },
                    }}
                    aria-label="close"
                >
                    <CloseIcon />
                </IconButton>

                <Typography
                    id="booking-details-title"
                    variant="h6"
                    fontWeight={700}
                    color="primary.main"
                    gutterBottom
                    textAlign="center"
                    letterSpacing={1}
                >
                    Booking Details
                </Typography>

                {booking ? (
                    <Stack spacing={2} mt={1}>
                        <Box
                            sx={{
                                bgcolor: 'primary.light',
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 1,
                                color: 'primary.contrastText',
                                textAlign: 'center',
                                fontWeight: 600,
                                fontSize: '1rem',
                            }}
                        >
                            Room: {roomName}
                        </Box>

                        <Divider />

                        <Stack spacing={1}>
                            <DetailRow icon={<TitleIcon />} label="Title" value={booking.title} />
                            <DetailRow icon={<EventIcon />} label="Date" value={booking.date} />
                            <DetailRow
                                icon={<AccessTimeIcon />}
                                label="Time"
                                value={`${booking.startTime} - ${booking.endTime}`}
                            />
                            <DetailRow icon={<PeopleIcon />} label="Guests" value={booking.guests} />
                            <DetailRow
                                icon={<RepeatIcon />}
                                label="Recurring"
                                value={booking.isRecurring ? 'Yes' : 'No'}
                            />
                        </Stack>
                    </Stack>
                ) : (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="center"
                        mt={3}
                    >
                        No booking selected.
                    </Typography>
                )}
            </Paper>
        </Modal>
    );
};

export default MeetingDetailModal;
