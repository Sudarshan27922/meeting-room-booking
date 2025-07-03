import React from 'react';
import Button from '../atoms/button';
import { ExpandMore } from '@mui/icons-material';

const ScrollDownButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant="text"
    sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: 'white' }}
  >
    <ExpandMore fontSize="large" />
  </Button>
);

export default ScrollDownButton;
