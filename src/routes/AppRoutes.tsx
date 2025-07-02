import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default AppRoutes