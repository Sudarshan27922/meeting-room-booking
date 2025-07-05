import { Stack } from '@mui/material';
import NavLink from '../../atoms/navLink/NavLink';

const NavigationMenu = () => (
  <Stack direction="row" spacing={2}>
    <NavLink label="Dashboard" to="/dashboard" />
  </Stack>
);

export default NavigationMenu;
