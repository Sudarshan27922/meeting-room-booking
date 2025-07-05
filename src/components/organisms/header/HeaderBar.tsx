import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/login page logo.png';
import Box from '../../atoms/box';
import Image from '../../atoms/image';
import Typography from '../../atoms/typography';
import NavigationMenu from '../../molecules/header/NavigationMenu';
import ProfileAvatarWithMenu from '../../molecules/header/ProfileAvatarWithMenu';

const HeaderBar: React.FC = () => {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/home');
    };

    return (
        <AppBar position="sticky" color="default" elevation={1}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Box
                    onClick={handleLogoClick}
                    sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 0,
                        cursor: 'pointer'
                    }}
                >
                    <Image
                        src={Logo}
                        alt="Mitrai Logo"
                        width={40}
                        height={35}
                        borderRadius={0.5}
                        boxShadow={0}
                        sx={{ objectFit: 'contain', marginRight: 3 }}
                    />
                    <Typography variant="h4" fontWeight="bold" color='primary'>
                        Mitra Connect
                    </Typography>
                </Box>

                <NavigationMenu />
                <ProfileAvatarWithMenu />

            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
