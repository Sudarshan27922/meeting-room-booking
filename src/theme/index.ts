import { createTheme } from '@mui/material/styles';
import palette from './palette';
import shadows from './shadows';

const theme = createTheme({
  palette,
  shadows,
  shape: {
    borderRadius: 15,
  },
});

export default theme;