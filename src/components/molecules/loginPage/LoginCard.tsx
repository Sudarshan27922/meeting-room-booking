import React from 'react';
import Logo from '../../../assets/images/login page logo.png';
import Box from '../../atoms/box';
import Button from '../../atoms/button';
import Image from '../../atoms/image';
import Paper from '../../atoms/paper';
import Typography from '../../atoms/typography';

interface LoginCardProps {
    onLogin: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ onLogin }) => {
    return (
        <Paper>
            <Box>
                <Image
                    src={Logo}
                    alt="Mitrai Logo"
                    width={120}
                    borderRadius={1}
                    boxShadow={0}
                    sx={{ mb: 2 }}
                />
                <Typography variant="h4" fontWeight="bold">
                    Welcome to Mitra Connect
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Please log in using your Mitrai email.
                </Typography>
                <Button color="primary" onClick={onLogin}>
                    Login with your Mitrai Mail
                </Button>
            </Box>
        </Paper>
    );
};

export default LoginCard;
