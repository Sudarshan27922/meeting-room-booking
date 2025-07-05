import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';

const BlankLayout = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
    >
        <Box component="main" sx={{ flexGrow: 1 }}>
            <Outlet />
        </Box>
    </Box>
);

export default BlankLayout