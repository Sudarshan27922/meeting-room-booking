import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { NavLinkProps } from './NavLink.types';

const NavLink: React.FC<NavLinkProps> = ({ label, to }) => {
  const navigate = useNavigate();
  return (
    <Button color="inherit" onClick={() => navigate(to)} sx={{ textTransform: 'none', fontSize: '1rem' }}>
      {label}
    </Button>
  );
};

export default NavLink;
