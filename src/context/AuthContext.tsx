import { createContext, useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthUser {
    name: string;
    role: 'admin' | 'user';
    token: string;
    email?: string;
}

interface AuthContextType {
    user: AuthUser | null;
    login: (email: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<AuthUser | null>(() => {
        const storedUser = localStorage.getItem('authUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (email: string) => {
        // Simulate a backend response
        // setTimeout is used to simulate network delay
        setTimeout(() => {
            const mockResponse: AuthUser = {
                token: 'mock-token-123',
                name: email === 'admin@mitrai.com' ? 'Admin User' : 'Regular User',
                role: email === 'admin@mitrai.com' ? 'admin' : 'user',
                email: email,
            };

            setUser(mockResponse);
            localStorage.setItem('authUser', JSON.stringify(mockResponse));
            navigate('/home');
        }, 1000);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authUser');
        navigate('/login');
    };

    const value = useMemo(() => ({
        user,
        login,
        logout,
        isAuthenticated: !!user,
    }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
