import { CalendarToday } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from "dayjs";

interface CalendarMoleculeProps {
  selectedDate: Dayjs;
  onDateChange: (date: Dayjs) => void;
}

const CalendarMolecule: React.FC<CalendarMoleculeProps> = ({ selectedDate, onDateChange }) => {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        height: 'fit-content',
        position: 'sticky',
        top: 0,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
        <CalendarToday color="primary" />
        Select Date for Booking
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => {
            if (newDate) {

              const dayjsDate = (typeof (newDate as any).isValid === 'function') ? newDate as Dayjs : undefined;
              if (dayjsDate) {
                onDateChange(dayjsDate);
                console.log('Selected date:', dayjsDate.format('YYYY-MM-DD'));
              }
            }
          }}
          sx={{
            '& .MuiPickersDay-root': {
              borderRadius: 2,
            },
            '& .Mui-selected': {
              backgroundColor: 'primary.main',
            },
          }}
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default CalendarMolecule;