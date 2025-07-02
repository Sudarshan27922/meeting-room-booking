import React from 'react';
import { CssBaseline } from '@mui/material';
import Box from '../atoms/box';
import BgImage from '../../assets/images/login page bg.png';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                }}
            >
                {children}
            </Box>
        </>
    );
};

export default AuthLayout;
