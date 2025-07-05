import React from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginSection from '../organisms/loginPage/LoginSection';
import AuthLayout from '../templates/AuthLayout';

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
