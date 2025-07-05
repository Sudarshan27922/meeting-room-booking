import { Navigate, Route, Routes } from 'react-router-dom';
import BookingPage from '../components/pages/BookingPage';
import DashboardPage from '../components/pages/DashboardPage';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import ProfilePage from '../components/pages/ProfilePage';
import BlankLayout from '../layout/BlankLayout';
import MainLayout from '../layout/MainLayout';
import PrivateRoute from './PrivateRoutes';

const AppRoutes = () => (
  <Routes>

    {/* Public route */}
    <Route element={<BlankLayout />}>
      <Route path="/" element={<LoginPage />} />
    </Route>

    {/* Protected routes */}
    <Route element={<PrivateRoute />}>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add more protected routes here */}
      </Route>
    </Route>

    {/* Admin-only Route */}
    {/* <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route> */}

    {/* Catch-all: redirect unknown routes to login or home */}
    <Route path="*" element={<Navigate to="/" replace />} />

  </Routes>
);

export default AppRoutes