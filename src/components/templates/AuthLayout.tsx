import { CssBaseline } from '@mui/material';
import React from 'react';
import BgImage from '../../assets/images/login page bg.png';
import Box from '../atoms/box';

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
