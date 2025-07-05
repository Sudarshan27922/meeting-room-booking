import { Box } from "@mui/material"
import { Outlet } from 'react-router-dom';
import Header from "../components/organisms/header/HeaderBar";


const MainLayout = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
    >

        <Header />

        <Box component="main" sx={{ flexGrow: 1 }}>
            <Outlet />
        </Box>

        {/* <Footer /> */}
    </Box>
);

export default MainLayout