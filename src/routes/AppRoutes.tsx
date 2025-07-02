import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import LoginPage from '../components/pages/LoginPage';
import PrivateRoute from './PrivateRoutes';
import HomePage from '../components/pages/HomePage';
import AdminRoute from './AdminRoutes';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>

      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

        </Route>
      </Route>

      {/* Admin-only Route */}
      {/* <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route> */}

      {/* Catch-all: redirect unknown routes to login or home */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Route>
  </Routes>
);

export default AppRoutes