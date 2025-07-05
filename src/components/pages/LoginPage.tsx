import React from 'react';
import AuthLayout from '../templates/AuthLayout';
import LoginSection from '../organisms/loginPage/LoginSection';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        //mock email — 'admin@mitrai.com' to simulate admin
        login('user@mitrai.com');
    };

    return (
        <AuthLayout>
            <LoginSection onLogin={handleLogin} />
        </AuthLayout>
    );
};

export default LoginPage;
