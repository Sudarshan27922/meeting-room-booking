import { Stack } from '@mui/material';
import NavLink from '../atoms/navLink/NavLink';

const NavigationMenu = () => (
  <Stack direction="row" spacing={2}>
    <NavLink label="Quick Booking" to="/booking" />
    <NavLink label="Dashboard" to="/dashboard" />
    <NavLink label="Button" to="/floor-plan" />
  </Stack>
);

export default NavigationMenu;
