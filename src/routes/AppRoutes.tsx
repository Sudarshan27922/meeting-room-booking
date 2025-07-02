import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import LoginPage from '../components/pages/LoginPage';
import PrivateRoute from './PrivateRoutes';
import HomePage from '../components/pages/HomePage';
import AdminRoute from './AdminRoutes';
import BlankLayout from '../layout/BlankLayout';

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