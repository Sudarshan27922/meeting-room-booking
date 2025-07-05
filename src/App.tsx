import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { RoomProvider } from './context/RoomContext';
import Routes from "./routes";
import theme from './theme';

const App: React.FC = () => (

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <RoomProvider>
          <Routes />
        </RoomProvider>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider >

);

export default App;
